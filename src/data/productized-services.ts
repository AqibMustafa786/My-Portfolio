import { LayoutDashboard, Users, Globe, FileText, Smartphone, Palette } from "lucide-react";

export interface Service {
    id: string;
    title: string;
    description: string;
    price: string;
    features: string[];
    icon: any;
}

export const productizedServices: Service[] = [
    {
        id: "admin-dashboards",
        title: "Admin Dashboards",
        description: "Power your business with data-driven admin panels. Manage users, track analytics, and oversee operations from a single, intuitive interface.",
        price: "Starting at $800",
        features: ["User Management", "Real-time Analytics", "Role-based Access", "Data Export/Import"],
        icon: LayoutDashboard,
    },
    {
        id: "crm-solutions",
        title: "CRM Solutions",
        description: "Custom Customer Relationship Management systems tailored to your workflow. Track leads, manage clients, and automate follow-ups.",
        price: "Starting at $800",
        features: ["Lead Tracking", "Client Database", "Automated Workflows", "Email Integration"],
        icon: Users,
    },
    {
        id: "cms-development",
        title: "CMS Development",
        description: "Flexible Content Management Systems that give you full control over your content. Update your website effortlessly without writing code.",
        price: "Starting at $600",
        features: ["Easy Content Editing", "Media Management", "SEO Tools", "Multi-user Support"],
        icon: FileText,
    },
    {
        id: "web-apps",
        title: "Websites & Web Apps",
        description: "High-performance, responsive websites and web applications built with modern technologies like Next.js and React.",
        price: "Starting at $500",
        features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure Architecture"],
        icon: Globe,
    },
    {
        id: "mobile-apps",
        title: "Mobile Applications",
        description: "Cross-platform mobile apps for iOS and Android. Native-like performance with smooth animations and intuitive user feedback.",
        price: "Starting at $1000",
        features: ["iOS & Android", "Offline Support", "Push Notifications", "App Store Deployment"],
        icon: Smartphone,
    },
    {
        id: "ui-ux",
        title: "UI/UX Design",
        description: "User-centric design that converts. We create wireframes, prototypes, and high-fidelity mockups that are both beautiful and functional.",
        price: "Starting at $300",
        features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
        icon: Palette,
    },
];
