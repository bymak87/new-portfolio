import { type User, type InsertUser, type ContactMessage, type InsertContact, type Project, type Service, type Experience, type Skill } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "Web Design",
    description: "A modern e-commerce platform with seamless user experience",
    fullDescription: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization. The project involved extensive user research, wireframing, and prototyping to create a seamless shopping experience. We implemented a mobile-first approach and integrated advanced filtering and search capabilities to help users find products quickly.",
    imageUrl: "",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    year: "2024",
    client: "TechStore Inc.",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "2",
    title: "Finance Mobile App",
    category: "Mobile App Design",
    description: "Personal finance tracking app with intuitive interface",
    fullDescription: "A comprehensive finance tracking application designed to help users manage their personal finances effectively. Features include expense categorization, budget planning, investment tracking, and personalized insights. The app uses secure authentication and encryption to protect sensitive financial data.",
    imageUrl: "",
    technologies: ["React Native", "Firebase", "Plaid API"],
    year: "2024",
    client: "FinanceHub",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "3",
    title: "Brand Identity System",
    category: "Brand Identity",
    description: "Complete brand overhaul for a tech startup",
    fullDescription: "End-to-end brand identity development including logo design, color system, typography selection, and comprehensive brand guidelines. The project included creating a visual language that reflects the company's innovative spirit while maintaining professionalism and trust.",
    imageUrl: "",
    technologies: ["Figma", "Illustrator", "After Effects"],
    year: "2023",
    client: "StartupXYZ",
    featured: true,
  },
  {
    id: "4",
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard for healthcare professionals",
    fullDescription: "A comprehensive analytics dashboard designed for healthcare professionals to monitor patient data, track health trends, and make data-driven decisions. The interface prioritizes accessibility and ease of use while presenting complex medical data in an intuitive format.",
    imageUrl: "",
    technologies: ["Vue.js", "D3.js", "Python", "AWS"],
    year: "2024",
    client: "MedTech Solutions",
    featured: false,
  },
  {
    id: "5",
    title: "Restaurant Booking App",
    category: "Mobile App Design",
    description: "Seamless dining reservation experience",
    fullDescription: "A mobile application that streamlines the restaurant booking process with real-time availability checking, table selection, and integrated payment processing. Features include personalized recommendations based on dining history and preferences.",
    imageUrl: "",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    year: "2023",
    client: "DineEasy",
    featured: false,
  },
  {
    id: "6",
    title: "Corporate Website",
    category: "Web Design",
    description: "Modern corporate website for consulting firm",
    fullDescription: "A sleek, professional website that showcases the consulting firm's services, case studies, and thought leadership content. Built with performance and SEO in mind, the site features a custom CMS for easy content management.",
    imageUrl: "",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    year: "2024",
    client: "ConsultPro",
    featured: false,
  },
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProjects(): Promise<Project[]> {
    return projects;
  }

  async getProject(id: string): Promise<Project | undefined> {
    return projects.find(p => p.id === id);
  }

  async createContactMessage(insertMessage: InsertContact): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date().toISOString(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
