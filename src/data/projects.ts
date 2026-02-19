
export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    gallery?: { src: string; type: "mobile" | "desktop" }[];
    techStack: string[];
    liveLink?: string;
    githubLink?: string;
    features: string[];
    price?: string;
    duration?: string;
    industries?: string[];
    category: "Web Development" | "Mobile App";
}

export const projects: Project[] = [
    // ... (other projects remain the same, I will only include the updated one for brevity if possible, but replace_file_content needs context. I'll just update the interface and the specific project entry)
    {
        id: "fittrack-pro",
        title: "FitTrack_Pro Mobile App",
        shortDescription: "A fitness tracking ecosystem with a mobile app and admin panel.",
        fullDescription: "FitTrack_Pro combines a mobile application for users to track their workouts and nutrition with an admin panel for trainers to monitor progress. It uses Flutter for the mobile app, providing a smooth, native experience, and a web dashboard for administrative tasks.",
        images: ["/assets/fittrack1.jpeg"], // Main thumbnail updated to mobile
        gallery: [
            { src: "/assets/fittrack1.jpeg", type: "mobile" },
            { src: "/assets/fittrack8.png", type: "desktop" }, // Admin dashboard main
            { src: "/assets/fittrack-2.jpeg", type: "mobile" },
            { src: "/assets/fittrack3.jpeg", type: "mobile" },
            { src: "/assets/fittrack4.jpeg", type: "mobile" },
            { src: "/assets/fittrack5.jpeg", type: "mobile" },
            { src: "/assets/fittrack6.jpeg", type: "mobile" },
            { src: "/assets/fittrack7.jpeg", type: "mobile" },
            { src: "/assets/fittrack9.png", type: "desktop" }
        ],
        techStack: ["Flutter", "Dart", "Firebase", "React (Admin)"],
        category: "Mobile App",
        features: [
            "Workout Tracking & Logging",
            "Nutrition & Calorie Tracking",
            "Progress Monitoring & Analytics",
            "Trainer Admin Panel (Web)",
            "User Authentication & Profiles"
        ]
    },
    {
        id: "hospital-management-system",
        title: "Hospital Management System",
        shortDescription: "A no-code intelligent system for efficient hospital operations and patient record management.",
        fullDescription: "I designed and developed a Hospital Management System using AppSheet integrated with Google Sheets for efficient hospital operations and patient record management. The goal was to build a no-code intelligent system that allows hospital staff to easily manage Doctors, Patients, Appointments, and Departments in real time without needing complex software. The system is built with automated workflows, dynamic formatting rules, and data-driven dashboards to ensure smooth hospital management.",
        images: ["/assets/hospital8.jpeg"],
        gallery: [
            // Mobile Screens
            { src: "/assets/hospital8.jpeg", type: "mobile" },
            { src: "/assets/hospital9.jpeg", type: "mobile" },
            { src: "/assets/hospital10.jpeg", type: "mobile" },
            { src: "/assets/hospital11.jpeg", type: "mobile" },
            { src: "/assets/hospital12.jpeg", type: "mobile" },
            { src: "/assets/hospital13.jpeg", type: "mobile" },
            // Desktop Screens
            { src: "/assets/hospital1.png", type: "desktop" },
            { src: "/assets/hospital2.png", type: "desktop" },
            { src: "/assets/hospital3.png", type: "desktop" },
            { src: "/assets/hospital4.png", type: "desktop" },
            { src: "/assets/hospital5.png", type: "desktop" },
            { src: "/assets/hospital6.png", type: "desktop" },
            { src: "/assets/hospital7.png", type: "desktop" }
        ],
        techStack: ["AppSheet", "Google Sheets", "Google Apps Script"],
        category: "Mobile App",
        price: "$800-$1000",
        duration: "7-30 days",
        industries: ["Medical", "Health Education", "Data Management", "Automation", "Healthcare IT"],
        features: [
            "Doctors Management - Add and manage doctor profiles with name, department, experience, timing, and consultation fee. Availability automatically highlighted using AppSheet format rules (Green = Available, Red = Not Available). Doctor-wise linked patients shown using Related Patients view.",
            "Patients Management - Full patient data including name, age, gender, contact, and assigned doctor. Automatic color rules: Female → Pink, Male → Black. Priority highlighting for elderly patients (Age > 60). Blood group tagging and rare blood groups highlighted in yellow/red. Timestamp auto-captured on new entries.",
            "Appointments Tracking - Linked patients and doctors for scheduling appointments. Timestamp-based tracking to identify recent appointments.",
            "Departments View - Displays all hospital departments with linked doctors."
        ]
    },
    {
        id: "invoice-craft",
        title: "InvoiceCraft SaaS Web App",
        shortDescription: "A modern SaaS platform for freelancers to create professional invoices.",
        fullDescription: "InvoiceCraft is a comprehensive SaaS platform designed for freelancers and small businesses to streamline their invoicing process. Users can create, customize, and download professional invoices, estimates, and quotes integration. It supports multi-currency, tax calculations, and saving client details for recurring invoices.",
        images: ["/assets/inv1.png"],
        gallery: [
            { src: "/assets/inv1.png", type: "desktop" },
            { src: "/assets/inv2.png", type: "desktop" },
            { src: "/assets/inv4.png", type: "desktop" },
            { src: "/assets/inv5.png", type: "desktop" },
            { src: "/assets/inv6.png", type: "desktop" },
            { src: "/assets/inv7.png", type: "desktop" },
            { src: "/assets/inv8.png", type: "desktop" },
            { src: "/assets/inv9.png", type: "desktop" },
            { src: "/assets/inv10.png", type: "desktop" },
            { src: "/assets/inv11.png", type: "desktop" },
            { src: "/assets/inv12.png", type: "desktop" },
            { src: "/assets/inv14.png", type: "desktop" },
            { src: "/assets/inv15.png", type: "desktop" },
            { src: "/assets/inv16.png", type: "desktop" },
            { src: "/assets/inv17.png", type: "desktop" },
            { src: "/assets/inv18.png", type: "desktop" }
        ],
        techStack: ["Next.js", "React", "Tailwind CSS", "Firebase", "Stripe"],
        category: "Web Development",
        liveLink: "https://invoicecraft.com", // Example link
        features: [
            "Customizable Invoice Templates",
            "PDF Generation & Download",
            "Client Management Dashboard",
            "Multi-currency Support",
            "Secure Cloud Storage"
        ]
    },


    {
        id: "furnish-flow",
        title: "FurnishFlow E-Commerce System (Admin + Storefront)",
        shortDescription: "A self-initiated CRM + E-Commerce system demonstrating full-stack expertise.",
        fullDescription: "This project was self‑initiated to demonstrate my ability to build a complete CRM + eCommerce system from scratch. The goal was to showcase my expertise in Admin Panel Development (product, customer, and order management), Storefront Design (product showcase, cart, checkout), Backend Integration (Firebase Firestore for real‑time sync), and UI/UX Polish (dark theme, responsive layout). \n\nUnlike client projects, this demo highlights my problem‑solving approach, modular coding style, and ability to deliver production‑ready systems. It serves as a portfolio sample for potential clients who want similar CRM or eCommerce solutions.",
        images: ["/assets/ff1.png"],
        gallery: [
            { src: "/assets/ff1.png", type: "desktop" },
            { src: "/assets/ff2.png", type: "desktop" },
            { src: "/assets/ff3.png", type: "desktop" },
            { src: "/assets/ff4.png", type: "desktop" },
            { src: "/assets/ff5.png", type: "desktop" },
            { src: "/assets/ff6.png", type: "desktop" },
            { src: "/assets/ff7.png", type: "desktop" },
            { src: "/assets/ff8.png", type: "desktop" }
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
        category: "Web Development",
        price: "$1000-$2500",
        duration: "7-30 days",
        industries: ["Electronics Stores", "Furniture Retail", "Home Decor", "Wholesale", "E-commerce", "Lifestyle"],
        features: [
            "Admin Panel: Product, Customer, & Order Management",
            "Storefront: Product Showcase, Cart, & Checkout Flow",
            "Real-time Data Sync with Firebase Firestore",
            "Export Features for Business Data",
            "Dark Theme & Responsive UI/UX"
        ]
    },
    {
        id: "gfp-tracker",
        title: "GFP Tracker – Athlete Practice & Performance Management",
        shortDescription: "A custom AppSheet solution for athletes/coaches to log, monitor, and analyze training sessions.",
        fullDescription: "GFP Tracker is a custom-built AppSheet solution designed for athletes and coaches to seamlessly log, monitor, and analyze training sessions. Delivered as both a mobile app and a web dashboard, it provides a unified platform for tracking golf practice, fitness routines, and other performance activities.\n\nThis app transforms raw practice logs into actionable performance insights. Coaches gain visibility into athlete progress, while athletes stay motivated and accountable. With its clean UI, responsive design, and powerful analytics, GFP Tracker bridges the gap between daily practice tracking and long-term performance planning.",
        images: ["/assets/gfp3.png"],
        gallery: [
            // Mobile Screens
            { src: "/assets/gfp2.png", type: "mobile" },
            { src: "/assets/gfp7.jpeg", type: "mobile" },
            { src: "/assets/gfp8.jpeg", type: "mobile" },
            { src: "/assets/gfp9.jpeg", type: "mobile" },
            // Desktop Screens
            { src: "/assets/gfp3.png", type: "desktop" },
            { src: "/assets/gfp1.png", type: "desktop" },
            { src: "/assets/gfp6.png", type: "desktop" }
        ],
        techStack: ["AppSheet", "Google Sheets", "Data Visualization"],
        category: "Mobile App",
        price: "$800-$1500",
        duration: "14-30 days",
        industries: ["Sports Coaching", "Fitness Tracking", "Athlete Management", "Golf Performance"],
        features: [
            "Practice Logging (Drills, Fitness, Stats)",
            "Analytics: Radar & Bar Charts for Performance",
            "Athlete-Coach Chat & Planner",
            "Stacked Weekly Charts for Activity Volume",
            "Profile Management & Activity Galleries"
        ]
    },
    {
        id: "edu-genius",
        title: "Edu Genius - Kids Learning Platform",
        shortDescription: "An interactive, gamified web application designed to make learning fun for kids.",
        fullDescription: "Edu Genius is a comprehensive educational platform built with TypeScript, specifically tailored for children. It combines vibrant visuals with interactive learning modules to keep young minds engaged. The platform features a variety of subjects, quizzes, and progress tracking tools, all wrapped in a safe and intuitive user interface.\n\nKey aspects include:\n\n• **Gamified Learning:** Rewards and achievements to motivate students.\n• **Interactive Content:** Drag-and-drop activities, audio-visual lessons, and fun quizzes.\n• **Parental Dashboard:** Insights into child’s progress and areas for improvement.\n• **Safe Environment:** Ad-free and secure space for kids to explore and learn.",
        images: ["/assets/edu1.png"],
        gallery: [
            { src: "/assets/edu1.png", type: "desktop" },
            { src: "/assets/edu2.png", type: "desktop" },
            { src: "/assets/edu3.png", type: "desktop" },
            { src: "/assets/edu4.png", type: "desktop" },
            { src: "/assets/edu5.png", type: "desktop" },
            { src: "/assets/edu6.png", type: "desktop" },
            { src: "/assets/edu7.png", type: "desktop" },
            { src: "/assets/edu8.png", type: "desktop" },
            { src: "/assets/edu9.png", type: "desktop" },
            { src: "/assets/edu10.png", type: "desktop" },
            { src: "/assets/edu11.png", type: "desktop" },
            { src: "/assets/edu12.png", type: "desktop" },
            { src: "/assets/edu13.png", type: "desktop" },
            { src: "/assets/edu14.png", type: "desktop" },
            { src: "/assets/edu15.png", type: "desktop" }
        ],
        techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
        category: "Web Development",
        price: "$800-$2000",
        duration: "14-45 days",
        industries: ["EdTech", "E-learning", "Kids Education", "Gamification"],
        features: [
            "Interactive Quizzes & Puzzles",
            "Student Progress Tracking",
            "Gamified Reward System",
            "Multimedia Lessons (Audio/Video)",
            "Parent/Teacher Dashboard"
        ]
    }
];
