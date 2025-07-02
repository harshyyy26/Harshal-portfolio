import { Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Online Quiz Application",
      description: "A full-stack quiz platform built with Spring Boot and React, supporting multi-user authentication, quiz management, scoring, leaderboards, and secure password reset via email. Users can attempt quizzes and track their performance, while admins can manage quizzes, questions, and users.",
      technologies: ["React", "Vite", "Tailwind CSS", "Spring Boot", "MongoDB Atlas", "JWT", "Gmail SMTP"],
      features: [
        "User and admin signup/login with role-based access",
        "JWT authentication and secure logout with token blacklisting",
        "Quiz and question management (CRUD) by admins",
        "Quiz attempt tracking with score calculation",
        "User quiz history and leaderboard per quiz",
        "Password reset via secure email token (Gmail SMTP)",
        "Responsive UI with shadcn/ui and Tailwind CSS"
      ],
      githubUrl: "https://github.com/harshyyy26/QuizApp.git" // Replace with actual repo if different
    }
    ,
    {
      title: "Journal Application",
      description: "Developed a Spring Boot-based journal application with full CRUD operations. Integrated Spring Data JPA with MongoDB and implemented secure authentication using Spring Security.",
      technologies: ["Java", "Spring Boot", "JPA", "MongoDB", "REST API", "Spring Security"],
      features: [
        "CRUD operations for journal entries",
        "Spring Data JPA integration",
        "MongoDB as data store",
        "RESTful API architecture",
        "Secure authentication system"
      ],
      githubUrl: "https://github.com/harshyyy26/journalApp"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between h-full p-6 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="p-0 flex flex-col flex-grow justify-between h-full">
                  <div className="flex-grow">
                    <p className="text-muted-foreground mb-4 leading-relaxed min-h-[100px]">
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

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/harshyyy26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                View All Projects on GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
