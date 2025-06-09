
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
            Harshal Giri
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Computer Engineering Student & Full Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
            Passionate about creating innovative web solutions and building scalable applications. 
            Currently pursuing B.Tech in Computer Engineering with expertise in modern web technologies.
          </p>
          <p className="text-md text-muted-foreground mb-12">
            📍 Pune, Maharashtra | 📞 +91 7420810345 | 📧 harshlgiri321@gmail.com
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="group" onClick={scrollToAbout}>
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download CV
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
              title="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
              title="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:harshlgiri321@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
              title="Email"
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
