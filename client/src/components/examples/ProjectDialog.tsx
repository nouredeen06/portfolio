import { useState } from 'react';
import ProjectDialog from '../ProjectDialog';
import { Button } from '@/components/ui/button';

export default function ProjectDialogExample() {
  const [open, setOpen] = useState(false);

  const mockProject = {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution",
    longDescription: "Built a comprehensive e-commerce platform featuring real-time inventory management, secure payment processing with Stripe integration, and an intuitive admin dashboard. The application handles thousands of products with advanced filtering and search capabilities.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Express"],
    imageUrl: "/assets/generated_images/E-commerce_project_preview_640acce2.png",
    videoUrl: null,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/repo",
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Project Dialog</Button>
      <ProjectDialog 
        project={mockProject}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
