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

export async function syncLocalPostsToFirestore() {
    try {
        const { db } = await import("@/lib/firebase");
        const { collection, addDoc, serverTimestamp, getDocs, query, where } = await import("firebase/firestore");
        const { posts } = await import("@/data/blog-posts");

        let count = 0;
        for (const post of posts) {
            // Check if already exists to prevent duplicates
            const q = query(collection(db, "blogs"), where("slug", "==", post.slug));
            const snapshot = await getDocs(q);
            
            if (snapshot.empty) {
                await addDoc(collection(db, "blogs"), {
                    ...post,
                    createdAt: serverTimestamp(),
                    published: true
                });
                count++;
            }
        }

        revalidatePath("/blog");
        return { success: true, count };
    } catch (error: any) {
        console.error("Sync Error:", error);
        return { success: false, error: error.message };
    }
}
