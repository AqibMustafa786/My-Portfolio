import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface MinimalProjectCardProps {
    project: Project;
}

export function MinimalProjectCard({ project }: MinimalProjectCardProps) {
    const isLive = !!project.liveLink;
    const displayImage = project.gallery?.[0]?.src || project.images?.[0] || '';

    const CardContent = () => (
        <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d14] transition-[border-color,box-shadow] duration-300 ease-out hover:border-white/[0.15] hover:shadow-lg hover:shadow-black/20 will-change-[transform]">
            {/* Header section */}
            <div className="flex items-center justify-between gap-3 px-5 py-5 md:px-6 md:py-6">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl font-headline leading-snug">
                    {project.title}
                </h3>
                {isLive && (
                    <div className="flex-shrink-0 rounded-full border border-white/10 bg-white/5 p-2 text-white/50 transition-colors duration-300 group-hover:text-white">
                        <ExternalLink className="h-4 w-4" />
                    </div>
                )}
            </div>

            {/* Image section */}
            <div className="flex-1 px-4 pb-4 md:px-5 md:pb-5">
                <div className="relative h-[220px] w-full overflow-hidden rounded-xl bg-[#15151a] md:h-[250px]">
                    <Image
                        src={displayImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 88vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {isLive && (
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-primary/80 hover:bg-primary hover:text-white shadow-lg shadow-black/20"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Live Demo
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    if (isLive) {
        return (
            <div className="group block h-full outline-none rounded-2xl focus:ring-2 focus:ring-primary/50">
                <CardContent />
            </div>
        );
    }

    return (
        <Link href={`/projects/${project.id}`} className="group block h-full outline-none rounded-2xl focus:ring-2 focus:ring-primary/50">
            <CardContent />
        </Link>
    );
}
