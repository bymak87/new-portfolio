import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    id: "1",
    company: "Tanium",
    role: "Website Marketing Manager",
    period: "2025–2026",
    location: "Addison, TX",
    highlights: [
      "Led global website operations and coordinated projects across internal developers, external vendors, marketing teams, and business stakeholders.",
      "Streamlined web intake and production processes through automated routing, stakeholder notifications, Jira workflows, and clearer documentation.",
      "Built GA4 dashboards and used GA4 and Microsoft Clarity insights to identify opportunities across pages and customer journeys.",
      "Supported SEO and AI-search readiness, development QA, CMS enablement, and experimentation through VWO.",
      "Helped expand Tanium’s international web presence across Germany, France, Japan, South Korea, Brazil, and Spain.",
    ],
  },
  {
    id: "2",
    company: "Devo",
    role: "Website Marketing Manager",
    period: "2022–2025",
    location: "Remote",
    highlights: [
      "Led the strategy and cross-functional delivery of an enterprise website redesign aligned with business goals, audience needs, and demand-generation priorities.",
      "Increased website conversion from 5.2% to 8.3% and helped the website influence approximately 50% of company pipeline.",
      "Increased organic traffic contribution from 28.1% to 51.3% through technical, content, and on-page SEO improvements.",
      "Improved engagement time by 23%, views per user by 47.43%, and reduced bounce rate by 59.11%.",
      "Implemented GA4 and launched an A/B testing program to continuously improve website engagement and conversion.",
    ],
  },
  {
    id: "3",
    company: "Armor",
    role: "Website Marketing Manager and Developer",
    period: "2018–2022",
    location: "Dallas, TX / Remote",
    highlights: [
      "Managed the corporate website as a digital product and led a user-focused website redesign.",
      "Directed an external development team and coordinated website priorities across marketing, content, design, and business stakeholders.",
      "Optimized website experiences to improve organic visibility, visitor engagement, and inbound lead generation.",
      "Implemented conversational marketing experiences that increased inbound leads by 10% quarter over quarter.",
      "Designed and developed WordPress pages, components, and campaign experiences.",
    ],
  },
  {
    id: "4",
    company: "Polygraph Media",
    role: "Website Manager and Front-end Developer",
    period: "2017–2018",
    location: "Austin, TX",
    highlights: [
      "Designed and developed an internal Facebook advertising platform for creating accurate, location-based campaigns.",
      "Connected campaign creation workflows with a centralized data library to improve consistency and reduce repetitive work.",
      "Managed and maintained client-facing web properties and internal digital tools.",
    ],
  },
  {
    id: "5",
    company: "Sandbox Commerce",
    role: "Front-end Developer and Designer",
    period: "2015–2017",
    location: "Austin, TX",
    highlights: [
      "Redesigned and developed web application experiences using Angular, JavaScript, HTML, and SCSS.",
      "Built drag-and-drop functionality and interactive components to make product workflows more intuitive.",
      "Designed and developed responsive homepage experiences and created supporting visual assets.",
      "Collaborated with product and marketing stakeholders to define requirements and plan feature releases.",
    ],
  },
];

const education = [
  {
    id: "1",
    institution: "University of Washington",
    degree: "Bachelor of Arts in Psychology",
    location: "Seattle, WA",
  },
  {
    id: "2",
    institution: "MakerSquare",
    degree: "Software engineering immersive",
    location: "Austin, TX",
  },
];

const certifications = [
  {
    id: "1",
    name: "SEO certification",
    organization: "HubSpot Academy",
  },
  {
    id: "2",
    name: "Digital marketing certification",
    organization: "HubSpot Academy",
  },
  {
    id: "3",
    name: "Cloud Practitioner Essentials",
    organization: "Amazon Web Services",
  },
];
const skillGroups = [
  {
    id: "1",
    title: "Web strategy and growth",
    skills: [
      "Website strategy",
      "Conversion optimization",
      "A/B testing",
      "User journeys",
      "Personalization",
      "Demand generation",
    ],
  },
  {
    id: "2",
    title: "Search and analytics",
    skills: [
      "SEO",
      "AEO and GEO",
      "GA4",
      "Google Search Console",
      "Google Tag Manager",
      "Microsoft Clarity",
      "Reporting and dashboards",
    ],
  },
  {
    id: "3",
    title: "Operations and delivery",
    skills: [
      "Web operations",
      "Project management",
      "Jira",
      "Development QA",
      "Vendor management",
      "CMS enablement",
      "Internationalization",
    ],
  },
  {
    id: "4",
    title: "Design and development",
    skills: [
      "UX/UI design",
      "Wireframing",
      "Prototyping",
      "WordPress",
      "JavaScript",
      "HTML and CSS",
      "React",
      "Adobe Creative Suite",
    ],
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
                Experience that drives web growth
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                A career spanning website strategy, operations, optimization, analytics,
                design, and front-end development.
              </p>
            </div>
            <a href="/Amelia-Smith-Resume-2026.pdf" target="_blank" rel="noopener noreferrer">
              <Button data-testid="button-download-resume">
                <Download className="mr-2 h-4 w-4" />
                View full resume
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
                        <ul
                            className="space-y-2 text-sm text-muted-foreground"
                            data-testid={`list-exp-highlights-${exp.id}`}
                          >
                            {exp.highlights.map((highlight) => (
                              <li key={highlight} className="flex gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
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

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>

                  <h2
                    className="font-serif text-2xl font-bold text-foreground"
                    data-testid="text-certifications-title"
                  >
                    Certifications
                  </h2>
                </div>

                <div className="space-y-4">
                  {certifications.map((certification) => (
                    <Card
                      key={certification.id}
                      className="p-6 border-border/50 relative overflow-hidden"
                      data-testid={`card-certification-${certification.id}`}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30" />

                      <div className="space-y-2">
                        <h3
                          className="font-semibold text-lg text-foreground"
                          data-testid={`text-certification-name-${certification.id}`}
                        >
                          {certification.name}
                        </h3>

                        <p
                          className="text-primary font-medium"
                          data-testid={`text-certification-organization-${certification.id}`}
                        >
                          {certification.organization}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card
                className="p-6 border-border/50 sticky top-24"
                data-testid="card-skills"
              >
                <h3 className="font-semibold text-lg text-foreground mb-6">
                  Areas of expertise
                </h3>

                <div className="space-y-7">
                  {skillGroups.map((group) => (
                    <div key={group.id}>
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        {group.title}
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-xs bg-secondary rounded-full text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
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
