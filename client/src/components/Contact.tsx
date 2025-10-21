import { Button } from "@/components/ui/button";
import {Coffee, Github, Linkedin, Mail, Twitter} from "lucide-react";

export default function Contact() {
  const socials = [
    { icon: Github, label: "GitHub", url: "https://github.com/nouredeen06", handle: "@nouredeen06" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/nouredeen-ghazal/", handle: "Nouredeen Ghazal" },
    { icon: Mail, label: "Email", url: "mailto:nouredeen.ghazal42@gmail.com", handle: "nouredeen.ghazal42@gmail.com" },
    { icon: Coffee, label: "Ko-fi", url: "https://ko-fi.com/nouredeen", handle: "Nouredeen" },
  ];

  return (
    <section id="contact" className="py-24 px-6 border-t" data-testid="section-contact">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-contact-title">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-contact-description">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {socials.map((social) => (
            <Button
              key={social.label}
              variant="outline"
              className="justify-start gap-3 h-auto py-4"
              asChild
              data-testid={`link-social-${social.label.toLowerCase()}`}
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="w-5 h-5" />
                <div className="text-left flex-1">
                  <div className="font-semibold text-sm">{social.label}</div>
                  <div className="text-xs text-muted-foreground">{social.handle}</div>
                </div>
              </a>
            </Button>
          ))}
        </div>

        <div className="pt-12 text-sm text-muted-foreground">
          <p data-testid="text-footer">
            © 2025 Nouredeen Ghazal. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
