"use server";

import { revalidatePath } from "next/cache";

export async function saveBlogPostAction(newPost: any) {
    try {
        const { db } = await import("@/lib/firebase");
        const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");

        const postData = {
            ...newPost,
            author: "Aqib Mustafa",
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
            image: "/assets/placeholder.png",
            createdAt: serverTimestamp(),
            published: true
        };

        await addDoc(collection(db, "blogs"), postData);
        
        revalidatePath("/blog");
        revalidatePath("/admin/blog");

        return { success: true };
    } catch (error: any) {
        console.error("Firestore Save Error:", error);
        return { success: false, error: error.message };
    }
}
