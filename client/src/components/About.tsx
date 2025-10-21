import { Card } from "@/components/ui/card";
import {Code2, Database, Globe, Puzzle, Smartphone, Wrench} from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: "Desktop Development",
      description: "Building functional, cross-platform desktop applications with C# and the AvaloniaUI framework.",
      techs: ["C#", ".NET", "AvaloniaUI", "XAML"],
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Utilizing SQL Server to store and retrieve application data using fundamental database practices.",
      techs: ["MS SQL Server", "T-SQL"],
    },
    {
      icon: Puzzle,
      title: "Software Principles",
      description: "Applying core programming concepts to write organized and understandable code for desktop applications.",
      techs: ["Object-Oriented Programming (OOP)", "MVVM Pattern"],
    },
    {
      icon: Wrench,
      title: "Development Tools",
      description: "Using professional tools to build, manage, and version control software projects efficiently.",
      techs: ["JetBrains Rider", "Git", "GitHub", "NuGet"],
    },
  ];

  return (
    <section id="about" className="py-24 px-6" data-testid="section-about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-about-title">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-about-description">
            Software developer creating cross-platform desktop applications with C# and AvaloniaUI,
            with a focus on writing clean code for functional, data-driven user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="p-6 space-y-4 hover-elevate"
              data-testid={`card-skill-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg" data-testid={`text-skill-title-${index}`}>
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-skill-description-${index}`}>
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skill.techs.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded-sm bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
