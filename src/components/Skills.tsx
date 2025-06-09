
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Database Design", level: 80 },
  ];

  const tools = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Figma", "Git", "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">What I Bring</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    5+ years of full-stack development experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Strong problem-solving and analytical skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Experience with agile development methodologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Passion for learning and staying updated with latest technologies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
