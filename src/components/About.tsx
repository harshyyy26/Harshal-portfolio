
import { Code, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that scales"
    },
    {
      icon: Palette,
      title: "Design-Focused",
      description: "Creating visually appealing and user-friendly interfaces"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and exceptional user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. I specialize in 
                modern web technologies and have a keen eye for design.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe great software is built by great teams, and I love 
                collaborating with others to bring ideas to life.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
