"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

export async function saveBlogPostAction(newPost: any) {
    try {
        const filePath = path.join(process.cwd(), "src/data/blog-posts.ts");
        const fileContent = await fs.readFile(filePath, "utf-8");

        // Simple but effective: find the end of the array and inject
        // This assumes the array ends with '];'
        const lastIndex = fileContent.lastIndexOf("];");
        
        if (lastIndex === -1) throw new Error("Could not find end of posts array");

        const postString = `    {
        title: "${newPost.title}",
        slug: "${newPost.slug}",
        excerpt: "${newPost.excerpt}",
        date: "${new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}",
        author: "Aqib Mustafa",
        category: "${newPost.category}",
        image: "/assets/placeholder.png", // Default placeholder
        content: \`${newPost.content}\`
    },\n`;

        const newContent = fileContent.slice(0, lastIndex) + postString + fileContent.slice(lastIndex);

        await fs.writeFile(filePath, newContent, "utf-8");
        
        revalidatePath("/blog");
        revalidatePath("/admin/blog");

        return { success: true };
    } catch (error: any) {
        console.error("Save Error:", error);
        return { success: false, error: error.message };
    }
}
