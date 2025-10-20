import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import TechBadge from "./TechBadge";
import { type Project } from "@shared/schema";

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" data-testid="dialog-project-details">
        <DialogHeader>
          <DialogTitle className="text-2xl" data-testid="text-dialog-title">{project.title}</DialogTitle>
          <DialogDescription data-testid="text-dialog-description">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                data-testid="video-dialog-preview"
              />
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                data-testid="img-dialog-preview"
              />
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-dialog-long-description">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {project.liveUrl && (
                <Button asChild data-testid="button-live-demo">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild data-testid="button-github-repo">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
