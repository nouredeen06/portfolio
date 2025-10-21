import { Badge } from "@/components/ui/badge";
import {
  AppWindow,
  Blocks,
  Braces,
  Code2,
  Database, GitBranch, Github,
  LayoutPanelLeft, Network, Package,
  Palette,
  ScrollText,
  Server,
  Smartphone, SquareTerminal,
  Zap
} from "lucide-react";
import { LucideIcon } from "lucide-react";

const techColors: Record<string, { bg: string; icon: LucideIcon }> = {
  JavaScript: { bg: "bg-chart-3/20 text-chart-3", icon: Zap },
  TypeScript: { bg: "bg-chart-5/20 text-chart-5", icon: Code2 },
  React: { bg: "bg-chart-2/20 text-chart-2", icon: Code2 },
  "Node.js": { bg: "bg-chart-4/20 text-chart-4", icon: Server },
  Python: { bg: "bg-chart-5/20 text-chart-5", icon: Code2 },
  MongoDB: { bg: "bg-chart-4/20 text-chart-4", icon: Database },
  PostgreSQL: { bg: "bg-chart-2/20 text-chart-2", icon: Database },
  "Tailwind CSS": { bg: "bg-chart-2/20 text-chart-2", icon: Palette },
  "Next.js": { bg: "bg-foreground/20 text-foreground", icon: Code2 },
  Express: { bg: "bg-chart-4/20 text-chart-4", icon: Server },
  "React Native": { bg: "bg-chart-2/20 text-chart-2", icon: Smartphone },
  Vue: { bg: "bg-chart-4/20 text-chart-4", icon: Code2 },
  "C#": { bg: "bg-chart-5/20 text-chart-5", icon: Code2 },
  ".NET": { bg: "bg-chart-5/20 text-chart-5", icon: AppWindow },
  AvaloniaUI: { bg: "bg-chart-2/20 text-chart-2", icon: LayoutPanelLeft },
  XAML: { bg: "bg-chart-2/20 text-chart-2", icon: Braces },

  // Database
  "MS SQL Server": { bg: "bg-chart-4/20 text-chart-4", icon: Database },
  "T-SQL": { bg: "bg-chart-4/20 text-chart-4", icon: ScrollText },

  // Software Principles
  OOP: { bg: "bg-chart-3/20 text-chart-3", icon: Blocks },
  "MVVM Pattern": { bg: "bg-chart-3/20 text-chart-3", icon: Network },

  // Development Tools
  "JetBrains Rider": { bg: "bg-foreground/20 text-foreground", icon: SquareTerminal },
  Git: { bg: "bg-foreground/20 text-foreground", icon: GitBranch },
  GitHub: { bg: "bg-foreground/20 text-foreground", icon: Github },
  NuGet: { bg: "bg-foreground/20 text-foreground", icon: Package },

  default: { bg: "bg-muted/50 text-muted-foreground", icon: Code2 },
};

interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  const config = techColors[name] || techColors.default;
  const Icon = config.icon;

  return (
    <Badge 
      variant="secondary" 
      className={`${config.bg} font-mono text-xs gap-1.5 px-2.5 py-0.5`}
      data-testid={`badge-tech-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Icon className="w-3 h-3" />
      {name}
    </Badge>
  );
}
