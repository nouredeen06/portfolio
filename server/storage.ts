import { type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;

  constructor() {
    this.projects = new Map();
    this.seedProjects();
  }

  private seedProjects() {
    const sampleProjects: InsertProject[] = [
      {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
        longDescription: "Built a comprehensive e-commerce platform featuring real-time inventory management, secure payment processing with Stripe integration, and an intuitive admin dashboard. The application handles thousands of products with advanced filtering, search capabilities, and responsive design for optimal mobile shopping experience.",
        technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Express"],
        imageUrl: "/assets/generated_images/E-commerce_project_preview_640acce2.png",
        videoUrl: null,
        liveUrl: null,
        githubUrl: null,
      },
      {
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.",
        longDescription: "Developed a powerful task management application inspired by modern productivity tools. Features include drag-and-drop kanban boards, real-time collaboration using WebSockets, customizable workflows, time tracking, and detailed analytics. Built with performance and scalability in mind to handle large teams and projects.",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
        imageUrl: "/assets/generated_images/Task_manager_project_preview_801f2da7.png",
        videoUrl: null,
        liveUrl: null,
        githubUrl: null,
      },
      {
        title: "Real-Time Chat Application",
        description: "Instant messaging platform with group chats, file sharing, and end-to-end encryption.",
        longDescription: "Created a modern real-time chat application with support for one-on-one and group conversations. Implemented WebSocket connections for instant message delivery, file upload and sharing, message reactions, typing indicators, and read receipts. The application features a sleek UI with dark mode support and notification system.",
        technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
        imageUrl: "/assets/generated_images/Chat_app_project_preview_5895d2dc.png",
        videoUrl: null,
        liveUrl: null,
        githubUrl: null,
      },
    ];

    sampleProjects.forEach(project => {
      const id = randomUUID();
      this.projects.set(id, { 
        ...project, 
        id, 
        videoUrl: project.videoUrl ?? null,
        liveUrl: project.liveUrl ?? null,
        githubUrl: project.githubUrl ?? null,
      });
    });
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { 
      ...insertProject, 
      id,
      videoUrl: insertProject.videoUrl ?? null,
      liveUrl: insertProject.liveUrl ?? null,
      githubUrl: insertProject.githubUrl ?? null,
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
