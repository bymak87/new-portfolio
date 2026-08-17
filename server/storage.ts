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
  id: "0",
  title: "Tanium Website",
  category: "Website Operations & Redesign",
  description:
    "Led website operations, optimization, analytics, and global web initiatives for a cybersecurity company.",
  fullDescription:
    "Managed day-to-day website operations and cross-functional web initiatives for Tanium. Streamlined intake and production processes, created automations to route requests and notify stakeholders, and managed projects across the internal development team and external vendors. Built GA4 dashboards and used insights from GA4 and Microsoft Clarity to recommend improvements to pages and customer journeys. Supported development QA, created Jira tickets, enabled A/B testing through VWO, and trained teams on the CMS. Also partnered across the organization on SEO improvements, the partner directory, and international website expansion for German, French, Japanese, Spanish, Korean, and Brazilian audiences.",
  imageUrlP:"/Tanium_1.png",
  imageUrl: "/Tanium_preview.png",
  imageUrl1: "/tanium-jp.png",
  imageUrl2: "/Tanium_2.png",
  technologies: [
    "WordPress",
    "JavaScript",
    "HTML",
    "CSS",
    "SEO",
    "Qualified",
    "Google Analytics",
    "Microsoft Clarity",
    "Claude",
  ],
  year: "2025-2026",
  client: "Tanium",
  featured: true,
},
{
  id: "1",
  title: "Devo Website",
  category: "Website Strategy & Redesign",
  description:
    "Led an enterprise website redesign that improved engagement, usability, and organic performance.",
  fullDescription:
    "Led the strategy and cross-functional delivery of Devo's website redesign, connecting business goals with user needs, content strategy, design, and development. Restructured the site experience and reduced the number of pages following the homepage from approximately 100 to 20, creating clearer journeys for visitors. Following the redesign, average engagement time increased from 43 to 58 seconds, views per user increased from 3.01 to 4.43, and bounce rate decreased from 53.82% to 22.01%. Also implemented GA4, supported SEO and conversion initiatives, and helped develop an interactive lead-generation tool with the solutions consulting team.",
  imageUrlP:"/devo-home.png",
  imageUrl: "/devo-soc-quiz.png",
  imageUrl1: "/devo-home.png",
  imageUrl2: "/devo-home-light.png",
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Responsive Design",
    "GA4",
    "SEO",
  ],
  year: "2022-2025",
  client: "Devo",
  featured: true,
},
{
  id: "2",
  title: "Armor Website",
  category: "Website Strategy & Operations",
  description:
    "Managed and optimized a cybersecurity website to support engagement, organic traffic, and lead generation.",
  fullDescription:
    "Managed Armor's corporate website as a digital product, partnering with an external development consultant and internal marketing teams to prioritize production requests and deliver new features. Used website data and user behavior to identify opportunities to improve traffic, engagement, and conversions. Collaborated on SEO and content strategy, designed new pages and WordPress components, and supported the implementation of Drift to strengthen visitor engagement and inbound lead generation.",
  imageUrlP:"/ArmorHome.png",
  imageUrl: "/ArmorWireframes.png",
  imageUrl1: "/ArmorHome.png",
  imageUrl2: "",
  technologies: [
    "WordPress",
    "JavaScript",
    "HTML",
    "CSS",
    "SEO",
    "Drift",
  ],
  year: "2018-2022",
  client: "Armor",
  featured: true,
},
{
  id: "3",
  title: "Polygraph Ad Platform",
  category: "Design & Development",
  description:
    "Built an internal application for creating accurate, location-based Facebook advertising campaigns.",
  fullDescription:
    "Designed and developed an internal advertising platform that used information from a centralized data library to generate location-specific Facebook ads. The application simplified campaign creation, reduced repetitive production work, and helped advertising teams create more consistent and accurate campaigns. Built the front-end experience and integrated the platform with Facebook's advertising tools.",
  imageUrlP:"/polygraph-platform.png",
  imageUrl: "/polygraph-targeting-screen.png",
  imageUrl1: "/polygraph-platform.png",
  imageUrl2: "",
  technologies: ["JavaScript", "HTML", "CSS", "Facebook API"],
  year: "2017",
  client: "Advertising Agency",
  featured: false,
},
{
  id: "4",
  title: "Sandbox Editor",
  category: "Design & Development",
  description:
    "Redesigned a web application and built a more intuitive drag-and-drop editing experience.",
  fullDescription:
    "Helped redesign the Sandbox Editor using Material Design principles and implemented the new experience with Angular and supporting front-end libraries. Built drag-and-drop functionality and interactive interface components to simplify user workflows. Served in both design and development capacities, collaborating with the product manager to define the experience and plan future feature releases.",
 imageUrlP:"/sandbox-editor.png",
  imageUrl: "/sandbox-editor.png",
  imageUrl1: "/sandbox-1.png",
  imageUrl2: "",
  technologies: [
    "Angular",
    "Materialize",
    "JavaScript",
    "Animate.css",
    "HTML",
    "SCSS",
    "Sketch",
  ],
  year: "2015-2017",
  client: "Sandbox",
  featured: false,
},
{
  id: "5",
  title: "Sandbox Website",
  category: "Website Design & Development",
  description:
    "Designed and developed responsive homepage experiences and custom visual assets.",
  fullDescription:
    "Maintained and enhanced the Sandbox company website, developing responsive homepage sections and producing custom visual assets. Partnered with design and marketing stakeholders to translate campaign and business requirements into polished digital experiences. Implemented front-end updates, optimized page performance, maintained cross-browser compatibility, and used Git to manage and deploy code changes.",
  imageUrlP:"/sandboxwebsite.png",
  imageUrl: "/sandboxwebsite.png",
  imageUrl1: "/sandbox-pricing-page.png",
  imageUrl2: "",
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Photoshop",
    "Illustrator",
    "Git",
  ],
  year: "2015-2017",
  client: "Sandbox",
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
