import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: "1",
    company: "Tanium",
    role: "Web Developer",
    period: "2020 - Present",
    description: "Manage website as a product with external consultants. Oversee production requests, develop new features, optimize pages to increase traffic and conversions. Collaborate on content strategy for SEO and design pages and elements for the website. Focus on increasing inbound leads and improving user engagement.",
    location: "Austin, TX",
  },
  {
    id: "2",
    company: "Sandbox",
    role: "Front-End Developer & Designer",
    period: "2017 - 2020",
    description: "Updated and maintained company homepage, created homepage assets. Implemented app redesign in Material Design style, worked with Angular libraries for drag-and-drop functionality. Took on designer duties and collaborated with product manager on future feature releases.",
    location: "Austin, TX",
  },
  {
    id: "3",
    company: "Advertising Agency",
    role: "Web Developer",
    period: "2015 - 2017",
    description: "Built the Polygraph Ad Platform, a Facebook ad creation tool that pulls from a data library to create accurate, location-based advertising campaigns. Maintained company web properties and internal tools.",
    location: "Austin, TX",
  },
  {
    id: "4",
    company: "English Teaching",
    role: "English Teacher",
    period: "2010 - 2014",
    description: "Taught English in Korea for nearly four years, immersing in the culture and learning valuable life lessons. Developed cross-cultural communication skills and adaptability.",
    location: "South Korea",
  },
];

const education = [
  {
    id: "1",
    institution: "MakerSquare",
    degree: "Software Engineering Immersive",
    period: "2014 - 2015",
    description: "Intensive coding bootcamp focused on full-stack JavaScript development, computer science fundamentals, and modern web technologies.",
  },
  {
    id: "2",
    institution: "University of Washington",
    degree: "Bachelor's Degree",
    period: "2005 - 2009",
    description: "Graduated from the University of Washington, building a strong academic foundation before exploring the world.",
  },
];

const skills = [
  { id: "1", name: "JavaScript", level: 95, category: "Development" },
  { id: "2", name: "HTML/CSS/SCSS", level: 95, category: "Development" },
  { id: "3", name: "Angular", level: 80, category: "Development" },
  { id: "4", name: "React", level: 85, category: "Development" },
  { id: "5", name: "WordPress", level: 80, category: "Development" },
  { id: "6", name: "UI/UX Design", level: 88, category: "Design" },
  { id: "7", name: "Sketch / Figma", level: 85, category: "Design" },
  { id: "8", name: "Photoshop / Illustrator", level: 82, category: "Design" },
  { id: "9", name: "SEO & Analytics", level: 78, category: "Strategy" },
  { id: "10", name: "Git", level: 90, category: "Development" },
];

export default function Resume() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-medium mb-2" data-testid="text-resume-subtitle">Resume</p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-resume-title">
                My Experience
              </h1>
            </div>
            <a href="https://www.bymadesigns.com/AmeliaSmith2025.pdf" target="_blank" rel="noopener noreferrer">
              <Button data-testid="button-download-resume">
                <Download className="mr-2 h-4 w-4" />
                View Full Resume
              </Button>
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground" data-testid="text-experience-title">Work Experience</h2>
                </div>

                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <Card 
                      key={exp.id} 
                      className="p-6 border-border/50 relative overflow-hidden"
                      data-testid={`card-experience-${exp.id}`}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30" />
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-lg text-foreground" data-testid={`text-exp-role-${exp.id}`}>{exp.role}</h3>
                            <p className="text-primary font-medium" data-testid={`text-exp-company-${exp.id}`}>{exp.company}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-foreground" data-testid={`text-exp-period-${exp.id}`}>{exp.period}</p>
                            <p className="text-xs text-muted-foreground" data-testid={`text-exp-location-${exp.id}`}>{exp.location}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm" data-testid={`text-exp-description-${exp.id}`}>{exp.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground" data-testid="text-education-title">Education</h2>
                </div>

                <div className="space-y-4">
                  {education.map((edu) => (
                    <Card 
                      key={edu.id} 
                      className="p-6 border-border/50 relative overflow-hidden"
                      data-testid={`card-education-${edu.id}`}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/50" />
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-lg text-foreground" data-testid={`text-edu-degree-${edu.id}`}>{edu.degree}</h3>
                            <p className="text-accent font-medium" data-testid={`text-edu-institution-${edu.id}`}>{edu.institution}</p>
                          </div>
                          <p className="text-sm font-medium text-foreground" data-testid={`text-edu-period-${edu.id}`}>{edu.period}</p>
                        </div>
                        <p className="text-muted-foreground text-sm" data-testid={`text-edu-description-${edu.id}`}>{edu.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="p-6 border-border/50 sticky top-24" data-testid="card-skills">
                <h3 className="font-semibold text-lg text-foreground mb-6" data-testid="text-skills-title">Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.id} className="space-y-2" data-testid={`skill-item-${skill.id}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground" data-testid={`text-skill-name-${skill.id}`}>{skill.name}</span>
                        <span className="text-xs text-muted-foreground" data-testid={`text-skill-level-${skill.id}`}>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                          data-testid={`progress-skill-${skill.id}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
