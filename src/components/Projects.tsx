
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Web Enabled Online Learning Platform",
      description: "Built a comprehensive platform for course access, progress tracking, and quizzes. Designed responsive UI and developed secure backend with user registration, course management, and authentication features.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL"],
      features: [
        "Course access and progress tracking",
        "Interactive quizzes and assessments", 
        "User registration and authentication",
        "Responsive design for all devices",
        "Secure data handling with MySQL"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Journal Application",
      description: "Developed a Spring Boot-based journal application with full CRUD operations. Integrated Spring Data JPA with MongoDB and implemented secure authentication using Spring Security.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      technologies: ["Java", "Spring Boot", "JPA", "MongoDB", "REST API", "Spring Security"],
      features: [
        "CRUD operations for journal entries",
        "Spring Data JPA integration",
        "MongoDB as data store",
        "RESTful API architecture",
        "Secure authentication system"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
