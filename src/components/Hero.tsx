
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            I create beautiful, functional web experiences that solve real problems 
            and delight users. Passionate about clean code and intuitive design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download CV
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};
