import {Button} from "@/components/ui/button";
import {ArrowDown, Coffee, Github, Linkedin, Mail} from "lucide-react";
import heroBg from '@assets/generated_images/Hero_background_code_pattern_red.png';

interface HeroProps {
    onViewProjects: () => void;
    onViewContacts: () => void;
}

export default function Hero({onViewProjects, onViewContacts}: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${heroBg})`}}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"/>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-hero-title">
                        Hi, I'm <span
                        className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Nouredeen</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-subtitle">
                        Full-Stack Developer crafting modern web applications with clean code and elegant design
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center items-center">
                    <TechStack/>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                        size="lg"
                        onClick={onViewProjects}
                        data-testid="button-view-projects"
                    >
                        View Projects
                        <ArrowDown className="w-4 h-4 ml-2"/>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="backdrop-blur-sm"
                        onClick={onViewContacts}
                        data-testid="button-contact"
                    >
                        Get In Touch
                    </Button>
                </div>

                <div className="flex gap-4 justify-center pt-8">
                    <Button size="icon" variant="ghost" asChild>
                        <a
                            href="https://github.com/nouredeen06"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5"/>
                        </a>
                    </Button>

                    {/* LinkedIn Button */}
                    <Button size="icon" variant="ghost" asChild>
                        <a
                            href="https://www.linkedin.com/in/nouredeen-ghazal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5"/>
                        </a>
                    </Button>

                    {/* Email Button */}
                    <Button size="icon" variant="ghost" asChild>
                        <a
                            href="mailto:nouredeen.ghazal42@gmail.com"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5"/>
                        </a>
                    </Button>

                    {/* Ko-fi Button */}
                    <Button size="icon" variant="ghost" asChild>
                        <a
                            href="https://ko-fi.com/nouredeen"
                            aria-label="Email"
                        >
                            <Coffee className="w-5 h-5"/>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function TechStack() {
    const techs = ["C#", "AvaloniaUI", "Microsoft SQL Server"];
    return (
        <>
            {techs.map((tech, i) => (
                <span key={tech} className="inline-flex items-center gap-2">
          <span className="text-sm font-mono text-muted-foreground">{tech}</span>
                    {i < techs.length - 1 && <span className="text-muted-foreground/50">•</span>}
        </span>
            ))}
        </>
    );
}
