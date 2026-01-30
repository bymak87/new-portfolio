import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    id: "1",
    company: "TechCorp Design Studio",
    role: "Senior UI/UX Designer",
    period: "2021 - Present",
    description: "Leading design initiatives for enterprise clients, mentoring junior designers, and establishing design system standards.",
    location: "San Francisco, CA",
  },
  {
    id: "2",
    company: "Creative Agency Plus",
    role: "UI/UX Designer",
    period: "2018 - 2021",
    description: "Designed user interfaces for web and mobile applications, conducted user research, and collaborated with development teams.",
    location: "Los Angeles, CA",
  },
  {
    id: "3",
    company: "StartUp Innovations",
    role: "Junior Designer",
    period: "2015 - 2018",
    description: "Created visual designs for digital products, assisted in brand identity projects, and supported marketing campaigns.",
    location: "New York, NY",
  },
];

const education = [
  {
    id: "1",
    institution: "California Institute of Design",
    degree: "Master of Design",
    period: "2013 - 2015",
    description: "Specialized in Human-Computer Interaction and User Experience Design.",
  },
  {
    id: "2",
    institution: "State University",
    degree: "Bachelor of Fine Arts",
    period: "2009 - 2013",
    description: "Majored in Graphic Design with a minor in Computer Science.",
  },
];

const skills = [
  { id: "1", name: "UI/UX Design", level: 95, category: "Design" },
  { id: "2", name: "Figma", level: 90, category: "Tools" },
  { id: "3", name: "Adobe Creative Suite", level: 85, category: "Tools" },
  { id: "4", name: "HTML/CSS", level: 85, category: "Development" },
  { id: "5", name: "JavaScript/React", level: 75, category: "Development" },
  { id: "6", name: "User Research", level: 88, category: "Design" },
  { id: "7", name: "Prototyping", level: 92, category: "Design" },
  { id: "8", name: "Design Systems", level: 90, category: "Design" },
];

const certifications = [
  { id: "1", name: "Google UX Design Certificate" },
  { id: "2", name: "Adobe Certified Expert" },
  { id: "3", name: "Interaction Design Foundation" },
  { id: "4", name: "Certified Usability Analyst" },
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
            <Button data-testid="button-download-resume">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
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

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground" data-testid="text-certifications-title">Certifications</h4>
                  </div>
                  <ul className="space-y-2">
                    {certifications.map((cert) => (
                      <li 
                        key={cert.id}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        data-testid={`cert-item-${cert.id}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {cert.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
