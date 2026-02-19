import { Code, Smartphone, Database, Terminal, Globe, Layout } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export const services: Service[] = [
  {
    id: "flutter-dev",
    title: "Flutter Mobile App Development",
    description: "Building high-performance, cross-platform mobile applications for iOS and Android using Flutter. Clean code and beautiful UI guaranteed.",
    icon: Smartphone,
  },
  {
    id: "appsheet-dev",
    title: "AppSheet Development",
    description: "Expert in creating custom business apps with Google AppSheet. Automate workflows and manage data efficiently without complex coding.",
    icon: Database,
  },
  {
    id: "web-dev",
    title: "Full Stack Web Development",
    description: "Developing responsive, modern web applications using Next.js, React, and Node.js. SEO-optimized and performant.",
    icon: Globe,
  },
  {
    id: "saas-dev",
    title: "SaaS Product Development",
    description: "End-to-end SaaS development from concept to deployment. Scalable architecture and secure authentication systems.",
    icon: Code,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Designing intuitive and visually stunning user interfaces. Prototype and wireframing with modern design tools.",
    icon: Layout,
  },
  {
    id: "freelancing",
    title: "Freelancing & Consultation",
    description: "Providing expert advice and freelance services for various tech projects. Proven track record on platforms like Fiverr.",
    icon: Terminal,
  },
];
