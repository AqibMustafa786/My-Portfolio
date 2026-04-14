import type { Metadata } from "next";
import { posts as staticPosts } from "@/data/blog-posts";
import BlogPostClient from "./BlogPostClient";

interface Props {
    params: Promise<{
        slug: string;
    }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = staticPosts.find(p => p.slug === slug);

    if (!post) {
        return { title: "Post Not Found | Aqib Portfolio Blog" };
    }

    const siteUrl = "https://aqibmustafa.com";

    return {
        title: `${post.title} | Aqib Portfolio Blog`,
        description: post.excerpt,
        keywords: `${post.category}, Aqib Mustafa, Software Engineering, ${post.title}`,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            url: `${siteUrl}/blog/${post.slug}`,
            images: [
                {
                    url: post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`],
        },
    };
}

export async function generateStaticParams() {
    // You can fetch from Firebase here if needed, 
    // but for now let's use the static data + empty array for fallback
    return staticPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: Props) {
    return <BlogPostClient params={params} />;
}
