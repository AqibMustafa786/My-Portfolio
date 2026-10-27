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
        loop: true,
        speed: 8,
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
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-6 touch-pan-y cursor-grab active:cursor-grabbing py-2">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="min-w-0 flex-[0_0_90%] sm:flex-[0_0_75%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
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
