import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import { type Project } from "@shared/schema";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

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

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-card rounded-md animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects?.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.imageUrl}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
          )}
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
