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
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d14] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_22px_55px_rgba(0,0,0,0.35)]">
            {/* Header section */}
            <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-5 md:py-5">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl font-headline">
                    {project.title}
                </h3>
                {isLive && (
                    <div className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60 transition-opacity duration-300 group-hover:text-white">
                        <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </div>
                )}
            </div>

            {/* Image section */}
            <div className="flex-1 px-3 pb-3 md:px-4 md:pb-4">
                <div className="relative h-[230px] w-full overflow-hidden rounded-[1rem] bg-[#15151a] md:h-[260px]">
                    <Image
                        src={displayImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                    {isLive && (
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-md transition-all duration-300 hover:border-rose-400/80 hover:bg-rose-500 hover:text-white shadow-lg shadow-black/20"
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
            <div className="group block h-full outline-none rounded-[1.5rem] focus:ring-2 focus:ring-rose-500/50">
                <CardContent />
            </div>
        );
    }

    return (
        <Link href={`/projects/${project.id}`} className="group block h-full outline-none rounded-[1.5rem] focus:ring-2 focus:ring-rose-500/50">
            <CardContent />
        </Link>
    );
}
