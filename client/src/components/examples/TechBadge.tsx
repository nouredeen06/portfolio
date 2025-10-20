import TechBadge from '../TechBadge';

export default function TechBadgeExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <TechBadge name="React" />
      <TechBadge name="TypeScript" />
      <TechBadge name="Node.js" />
      <TechBadge name="Tailwind CSS" />
      <TechBadge name="PostgreSQL" />
    </div>
  );
}
