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
        title: "PlaceHolder",
        description: "PlaceHolder Description",
        longDescription: "PlaceHolder Description",
        technologies: ["PlaceHolder"],
        imageUrl: "/assets/placeholder.png",
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
