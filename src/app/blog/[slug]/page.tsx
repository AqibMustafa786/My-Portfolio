import type { Metadata } from "next";
import { posts } from "@/data/blog-posts";
import BlogPostClient from "./BlogPostClient";

interface Props {
    params: Promise<{
        slug: string;
    }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find(p => p.slug === slug);

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

export default function BlogPostPage({ params }: Props) {
    return <BlogPostClient params={params} />;
}
