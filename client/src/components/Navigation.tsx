import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && true);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
      }`}
      data-testid="nav-header"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-bold font-mono hover-elevate active-elevate-2 px-3 py-2 rounded-md"
            data-testid="button-logo"
          >
            &lt;Dev/&gt;
          </button>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-contact"
            >
              Contact
            </button>
            
            <Button 
              size="icon" 
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
