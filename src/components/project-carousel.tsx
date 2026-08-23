"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MinimalProjectCard } from './minimal-project-card';
import { Project } from '@/data/projects';

interface ProjectCarouselProps {
    projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true,
        loop: true
    });
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);

        const autoplay = setInterval(() => {
            if (!emblaApi) return;
            emblaApi.scrollNext();
        }, 5000);

        return () => clearInterval(autoplay);
    }, [emblaApi, onInit, onSelect]);

    return (
        <div className="relative">
            <div className="overflow-hidden px-1" ref={emblaRef}>
                <div className="flex gap-4 md:gap-6 touch-pan-y cursor-grab active:cursor-grabbing">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc((100%/3)-0.9rem)] xl:flex-[0_0_calc((100%/3)-1rem)]"
                        >
                            <MinimalProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Minimalist Pagination Dots */}
            <div className="flex justify-center items-center gap-3 mt-12 md:mt-16">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`h-2 rounded-full transition-all duration-500 ease-out ${
                            index === selectedIndex 
                                ? 'bg-white w-8' 
                                : 'bg-white/20 hover:bg-white/50 w-2'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
