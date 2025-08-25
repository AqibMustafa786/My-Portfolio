"use client";

import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Award, GraduationCap, Globe, Lightbulb } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 5, icon: Award, suffix: "+" },
  { label: "International Work Experience", value: 1, icon: Globe },
  { label: "Skilled in Web, Mobile & AI", value: 3, icon: Lightbulb },
  { label: "Computer Science Graduate", value: 1, icon: GraduationCap },
];

export function StatsSection() {
  return (
    <section id="stats" className="bg-secondary/50">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Achievements & Stats</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 150}>
              <div className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold font-headline text-accent-foreground/90">
                  <AnimatedCounter endValue={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
