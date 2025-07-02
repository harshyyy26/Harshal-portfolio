
import { GraduationCap, Award, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
// import meImage from 'D:\Data\projects\PortfolioWebsite\your-digital-story-67\public\me.JPG';
// import me from "@/public/me.JPG"; // Adjust the import path as necessary

export const About = () => {
  const education = [
    {
      icon: GraduationCap,
      institution: "MIT Academy of Engineering",
      degree: "Bachelor of Technology in Computer Engineering",
      grade: "CGPA: 8.59",
      status: "Current"
    },
    {
      icon: GraduationCap,
      institution: "Insight Jr. College",
      degree: "Class XII",
      grade: "91%",
      status: "Completed"
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
                I’m a B.Tech Computer Science student who enjoys building applications using C++, Java, and Spring Boot. I’ve worked on projects involving secure, database-driven apps and have a solid understanding of data structures, algorithms, SQL, and MongoDB. I recently completed a cloud computing certification through NPTEL, where I learned about cloud architecture and serverless technologies. I’m excited to find an internship where I can put these skills to work and keep learning.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <img
                  src="/me.JPG"
                  alt="Harshal Giri"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{item.institution}</h4>
                        <p className="text-muted-foreground mb-1">{item.degree}</p>
                        <p className="text-sm font-medium text-primary">{item.grade}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CCNA Card */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">CCNA: Introduction to Networks</h4>
                  <p className="text-muted-foreground mb-4">Foundational understanding of networking concepts</p>
                  <a
                    href="https://drive.google.com/file/d/1eF90VrchwpULu0_l2IV4_vz1zpL32KZY/view?usp=sharing"
                    className="text-primary hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate →
                  </a>
                </CardContent>
              </Card>

              {/* NPTEL Card */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">NPTEL: Cloud Computing</h4>
                  <p className="text-muted-foreground mb-4">Core concepts of cloud computing and applications</p>
                  <a
                    href="https://drive.google.com/file/d/1Qr7HgkbMBv0XfXwpkNO_ISiUFuUongKZ/view?usp=drive_link"
                    className="text-primary hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate →
                  </a>
                </CardContent>
              </Card>

              {/* Cisco C++ Card */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Cisco: Programming Essentials in C++</h4>
                  <p className="text-muted-foreground mb-4">Gained foundational skills in C++ and object-oriented programming</p>
                  <a
                    href="https://drive.google.com/file/d/1Lnd6__-sFpfYXZTc1GD0NYR0f7B1PesL/view?usp=sharing"
                    className="text-primary hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate →
                  </a>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
