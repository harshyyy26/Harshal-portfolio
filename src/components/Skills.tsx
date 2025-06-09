
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skills = [
    { name: "Java & Spring Boot", level: 90 },
    { name: "JavaScript & Node.js", level: 85 },
    { name: "HTML/CSS", level: 88 },
    { name: "Python", level: 80 },
    { name: "C++", level: 85 },
    { name: "SQL", level: 82 },
  ];

  const frameworks = [
    "Spring Boot", "Spring MVC", "Express.js", "Node.js"
  ];

  const tools = [
    "Git", "GitHub", "Postman", "Maven", "AWS EC2", "AWS S3", 
    "AWS Lambda", "CloudFormation", "VPC", "IAM"
  ];

  const databases = [
    "MySQL", "MongoDB"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Programming Languages</h3>
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
              <h3 className="text-2xl font-semibold mb-8">Profile Links</h3>
              <div className="space-y-4 mb-8">
                <a 
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-muted rounded-lg hover:bg-primary/10 transition-colors duration-200"
                >
                  <span className="font-medium text-primary">LinkedIn Profile →</span>
                </a>
                <a 
                  href="https://leetcode.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-muted rounded-lg hover:bg-primary/10 transition-colors duration-200"
                >
                  <span className="font-medium text-primary">LeetCode Profile →</span>
                </a>
                <a 
                  href="https://geeksforgeeks.org/user/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-muted rounded-lg hover:bg-primary/10 transition-colors duration-200"
                >
                  <span className="font-medium text-primary">GeeksforGeeks Profile →</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 transition-colors duration-200"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Tools & Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {databases.map((db, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 transition-colors duration-200"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
