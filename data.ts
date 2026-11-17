import { Globe, Brain, Code2, Smartphone, PenTool, Cloud } from "lucide-react";

export const site = {
  name: "Lumivex Digital Solutions Ltd",
  short: "Lumivex",
  tagline: "Innovation at the Peak of Light.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lumivex-website.vercel.app",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our work" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

export const services = [
  { title: "Web Development", icon: Globe, desc: "Fast, secure websites and web apps built to turn visitors into customers.", benefit: "A site that is easy to manage and ready to grow with you.", features: ["Business websites", "E-commerce platforms", "SaaS applications", "Custom web applications"] },
  { title: "AI and Machine Learning", icon: Brain, desc: "Practical AI that removes repetitive work and helps teams decide faster.", benefit: "Save time by automating work that does not need a person.", features: ["AI application development", "AI chatbot integration", "Intelligent automation", "Machine learning solutions", "AI-powered business tools"] },
  { title: "Software Development", icon: Code2, desc: "Custom software shaped around how your business actually runs.", benefit: "One system instead of scattered spreadsheets and tools.", features: ["Custom business software", "Management systems", "Workflow automation", "Database-driven applications"] },
  { title: "Mobile App Development", icon: Smartphone, desc: "Mobile experiences your users can install and use anywhere.", benefit: "Reach customers on the device they use most.", features: ["Mobile applications", "Progressive Web Apps", "Cross-platform solutions"] },
  { title: "UI/UX Design", icon: PenTool, desc: "Interfaces that are clear to use and consistent with your brand.", benefit: "Fewer support questions and more completed actions.", features: ["Website interface design", "Application design", "User experience optimization", "Product prototyping"] },
  { title: "Cloud and Backend", icon: Cloud, desc: "Reliable foundations: data, logins, APIs and deployment.", benefit: "A backend that stays secure and scales when traffic does.", features: ["API development", "Database architecture", "Authentication systems", "Cloud deployment", "Third-party integrations"] },
];

export type Status = "Live" | "In Development" | "Prototype" | "Concept";
export type Item = { name: string; category: string; desc: string; tech: string[]; status: Status; url?: string };

// Statuses and tech lists are placeholders: confirm before launch.
export const projects: Item[] = [
  { name: "CRE Learning Hub", category: "Education", desc: "An educational technology platform for structured online learning.", tech: ["Next.js", "TypeScript", "Supabase"], status: "In Development" },
  { name: "LearnGap AI", category: "AI", desc: "An intelligent education platform that helps learners find and close knowledge gaps.", tech: ["Python", "LLM APIs", "Next.js"], status: "Prototype" },
  { name: "FixDesk", category: "Business Software", desc: "Business management software for tracking jobs, requests and customers.", tech: ["React", "Node.js", "PostgreSQL"], status: "Concept" },
  { name: "DCF UNN Website", category: "Web", desc: "A fellowship information and registration platform.", tech: ["Next.js", "Tailwind CSS", "Supabase"], status: "In Development" },
];

// Add new products here and they appear on /products automatically.
export const products: (Item & { features: string[] })[] = [
  { ...projects[1], name: "LearnGap AI", features: ["Finds gaps in a learner's knowledge", "Suggests what to study next", "Progress tracking"] },
  { ...projects[2], name: "FixDesk", features: ["Request and job tracking", "Customer records", "Simple team workflow"] },
];

export const steps = [
  { title: "Discovery and consultation", text: "We learn your goals, users and constraints." },
  { title: "Research and planning", text: "We define scope, features and a realistic roadmap." },
  { title: "UI/UX design", text: "We design and prototype the experience before building it." },
  { title: "Development", text: "We build in clear stages and show progress as we go." },
  { title: "Testing and quality assurance", text: "We test on real devices and fix issues before launch." },
  { title: "Deployment", text: "We launch securely and confirm everything works live." },
  { title: "Maintenance and support", text: "We keep your product updated, secure and improving." },
];

export const faqs = [
  { q: "What kinds of projects do you take on?", a: "Websites, web and mobile apps, custom business software, AI tools and automation, and the backend systems behind them." },
  { q: "How long does a project take?", a: "It depends on scope. After the discovery call we give you a written estimate and timeline." },
  { q: "How much does it cost?", a: "Pricing depends on what you need. Send us your project details and we will reply with a quote." },
  { q: "Do you work with international clients?", a: "Yes. We are based in Nigeria and work with clients remotely." },
  { q: "Will you support the product after launch?", a: "Yes. Maintenance and support is a standard part of our process." },
];

export const values = ["Innovation", "Excellence", "Integrity", "Creativity", "Customer satisfaction", "Continuous improvement"];
