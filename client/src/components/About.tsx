import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive, interactive UIs with React, TypeScript, and modern CSS frameworks",
      techs: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Creating scalable server-side applications with Node.js and database management",
      techs: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      icon: Globe,
      title: "Full-Stack Projects",
      description: "End-to-end application development from concept to deployment",
      techs: ["REST APIs", "Authentication", "Deployment", "Git"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with React Native",
      techs: ["React Native", "Expo", "Mobile UI"],
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
            Passionate developer with expertise in modern web technologies and a focus on creating elegant, 
            efficient solutions to complex problems.
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
