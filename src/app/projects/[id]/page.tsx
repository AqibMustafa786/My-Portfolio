import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetailsClient } from "@/components/project-details-client";

// Generate static params for all project IDs to enable static export if needed, 
// or just to let Next.js know which paths exist.
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailsClient project={project} />;
}
