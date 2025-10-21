import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'});
    };
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="min-h-screen">
            <Navigation/>
            <Hero onViewProjects={scrollToProjects}
                  onViewContacts={scrollToContact}
            />

            <Projects/>
            <About/>
            <Contact/>
        </div>
    );
}
