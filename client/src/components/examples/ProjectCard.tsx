import ProjectCard from '../ProjectCard';
import heroImage from '@assets/generated_images/E-commerce_project_preview_640acce2.png';

export default function ProjectCardExample() {
  return (
    <div className="max-w-md">
      <ProjectCard
        title="E-Commerce Platform"
        description="A full-stack e-commerce solution with real-time inventory management and secure payment processing."
        technologies={["React", "Node.js", "PostgreSQL", "Tailwind CSS"]}
        image={heroImage}
        onViewDetails={() => console.log('View details clicked')}
      />
    </div>
  );
}
