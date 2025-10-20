import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import ecommerceImg from '@assets/generated_images/E-commerce_project_preview_640acce2.png';
import taskManagerImg from '@assets/generated_images/Task_manager_project_preview_801f2da7.png';
import chatAppImg from '@assets/generated_images/Chat_app_project_preview_5895d2dc.png';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      longDescription: "Built a comprehensive e-commerce platform featuring real-time inventory management, secure payment processing with Stripe integration, and an intuitive admin dashboard. The application handles thousands of products with advanced filtering, search capabilities, and responsive design for optimal mobile shopping experience.",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Express"],
      image: ecommerceImg,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce",
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.",
      longDescription: "Developed a powerful task management application inspired by modern productivity tools. Features include drag-and-drop kanban boards, real-time collaboration using WebSockets, customizable workflows, time tracking, and detailed analytics. Built with performance and scalability in mind to handle large teams and projects.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      image: taskManagerImg,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/tasks",
    },
    {
      title: "Real-Time Chat Application",
      description: "Instant messaging platform with group chats, file sharing, and end-to-end encryption.",
      longDescription: "Created a modern real-time chat application with support for one-on-one and group conversations. Implemented WebSocket connections for instant message delivery, file upload and sharing, message reactions, typing indicators, and read receipts. The application features a sleek UI with dark mode support and notification system.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      image: chatAppImg,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/chat",
    },
  ];

  return (
    <>
      <section id="projects" className="py-24 px-6 bg-muted/30" data-testid="section-projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-projects-description">
              A collection of my recent work showcasing full-stack development, modern UI design, and scalable architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectDialog
        project={selectedProject}
        open={selectedProject !== null}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </>
  );
}
