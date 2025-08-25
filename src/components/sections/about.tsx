"use client";

import { BrainCircuit, CodeXml, Database, Keyboard, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";

const skills = [
  { name: "Web Development", technologies: "HTML, CSS, JS, PHP, Laravel", icon: CodeXml },
  { name: "Mobile Development", technologies: "Flutter, Dart", icon: Smartphone },
  { name: "AI & ML", technologies: "Python, OpenCV, CNN, NLP", icon: BrainCircuit },
  { name: "Tools & Databases", technologies: "Firebase, Git, MySQL, APIs", icon: Database },
  { name: "Data Entry", technologies: "Automation Scripts", icon: Keyboard },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">About Me</h2>
          <p className="max-w-3xl mx-auto text-center text-muted-foreground text-lg mb-12">
            I’m a passionate Software Engineer and Computer Science graduate specializing in Web Apps, Mobile Apps, WordPress Development, and AI Projects. I enjoy building modern, user-friendly solutions that merge creativity with technology. With professional experience in international projects, internships, and freelancing, I deliver efficient digital solutions that drive real impact.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 100}>
              <Card className="h-full text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 text-accent p-4 rounded-full w-fit mb-4">
                    <skill.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.technologies}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
