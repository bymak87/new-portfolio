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
    title: "Polygraph Ad Platform",
    category: "Web Application",
    description: "Facebook ad creation platform with location-based advertising capabilities",
    fullDescription: "A comprehensive Facebook ad creation platform that pulls from a data library to create accurate, location-based advertising campaigns. Built as an internal tool for the advertising company, the platform streamlines the ad creation process and enables teams to launch targeted campaigns efficiently. The platform features intuitive campaign management, audience targeting tools, and real-time performance analytics.",
    imageUrl: "",
    technologies: ["JavaScript", "HTML", "CSS", "Facebook API"],
    year: "2017",
    client: "Advertising Agency",
    featured: true,
  },
  {
    id: "2",
    title: "Sandbox Homepage",
    category: "Web Development",
    description: "Company homepage with custom assets and responsive design",
    fullDescription: "Updated and maintained the company homepage, creating custom homepage assets and ensuring a polished, professional web presence. The project involved working closely with the design and marketing teams to keep the site current and engaging. Responsibilities included implementing new sections, optimizing page load performance, and ensuring cross-browser compatibility.",
    imageUrl: "",
    technologies: ["JavaScript", "HTML", "CSS", "Photoshop", "Illustrator", "Git"],
    year: "2018",
    client: "Sandbox",
    featured: true,
  },
  {
    id: "3",
    title: "Sandbox Editor",
    category: "Web Application",
    description: "App redesign implementing Material Design with drag-and-drop functionality",
    fullDescription: "Implemented a complete app redesign in Material Design style, working with Angular libraries to build drag-and-drop functionality. Took on designer duties and collaborated with the product manager on future feature releases. The redesign focused on improving user experience, streamlining workflows, and creating a more intuitive interface for the editor tool.",
    imageUrl: "",
    technologies: ["Angular", "Materialize", "JavaScript", "Animate.css", "HTML", "SCSS", "Sketch"],
    year: "2018",
    client: "Sandbox",
    featured: true,
  },
  {
    id: "4",
    title: "DEVO Website",
    category: "Web Development",
    description: "Full website build with modern design and optimized performance",
    fullDescription: "Designed and developed a complete website focusing on clean aesthetics, fast performance, and an excellent user experience. The project involved creating a responsive layout, implementing interactive elements, and ensuring the site met modern web standards for accessibility and SEO.",
    imageUrl: "",
    technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    year: "2019",
    client: "DEVO",
    featured: false,
  },
  {
    id: "5",
    title: "Armor Website",
    category: "Web Development",
    description: "Corporate website for a cybersecurity company",
    fullDescription: "Managed the website as a product, working with an external consultant to oversee production requests and develop new features. Optimized pages to increase traffic and conversions, collaborated on content strategy for SEO, and designed pages and elements for the WordPress theme. The goal was to increase inbound leads, improve time on page, and decrease bounce rate through a user-focused redesign approach.",
    imageUrl: "",
    technologies: ["WordPress", "JavaScript", "HTML", "CSS", "SEO", "Drift"],
    year: "2020",
    client: "Armor",
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
