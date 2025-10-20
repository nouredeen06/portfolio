import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import TechBadge from "./TechBadge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  onViewDetails: () => void;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <Card 
      className="overflow-hidden group hover-elevate active-elevate-2 cursor-pointer transition-all"
      onClick={onViewDetails}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-project-preview-${title.toLowerCase().replace(/\s+/g, '-')}`}
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2" data-testid={`text-project-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
        <Button
          variant="ghost"
          className="w-full justify-between group/btn"
          data-testid={`button-view-details-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
}
