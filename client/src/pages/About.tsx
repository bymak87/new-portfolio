import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Download, Award, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    id: "passion",
    icon: Heart,
    title: "Passion",
    description: "I love what I do and it shows in every project I deliver.",
  },
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new ideas and pushing creative boundaries.",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to bring their vision to life.",
  },
];

const stats = [
  { id: "years", value: "10+", label: "Years Experience" },
  { id: "projects", value: "285+", label: "Projects Completed" },
  { id: "clients", value: "190+", label: "Happy Clients" },
  { id: "awards", value: "15+", label: "Awards Won" },
];

export default function About() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-border/50 flex items-center justify-center" data-testid="img-about-photo">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-serif text-5xl font-bold text-primary">JD</span>
                  </div>
                  <p className="text-muted-foreground">Your Photo Here</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-accent/20 rounded-2xl p-4 hidden lg:block" data-testid="badge-certified">
                <Award className="w-8 h-8 text-accent" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-medium" data-testid="text-about-subtitle">About Me</p>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-about-title">
                  Hello, I'm a Creative Designer
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-about-paragraph-1">
                  I'm a passionate designer and developer with over 10 years of experience 
                  creating beautiful digital experiences. My journey started with a simple 
                  curiosity about how things look and work on the web, which has evolved into 
                  a full-fledged career dedicated to crafting meaningful user experiences.
                </p>
                <p data-testid="text-about-paragraph-2">
                  I specialize in web design, mobile app design, and brand identity. My approach 
                  combines aesthetic sensibility with strategic thinking to create solutions that 
                  not only look great but also drive real business results.
                </p>
                <p data-testid="text-about-paragraph-3">
                  When I'm not designing, you can find me exploring new design trends, 
                  contributing to open-source projects, or mentoring aspiring designers.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-about-contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-about-download-cv">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <Card key={stat.id} className="p-6 text-center border-border/50" data-testid={`card-stat-${stat.id}`}>
                <p className="font-serif text-4xl font-bold text-primary mb-2" data-testid={`stat-value-${stat.id}`}>{stat.value}</p>
                <p className="text-muted-foreground" data-testid={`stat-label-${stat.id}`}>{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-medium mb-2" data-testid="text-values-subtitle">My Values</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-values-title">
                What Drives Me
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value) => (
                <Card key={value.id} className="p-6 text-center border-border/50 hover-elevate" data-testid={`card-value-${value.id}`}>
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2" data-testid={`text-value-title-${value.id}`}>{value.title}</h3>
                  <p className="text-muted-foreground text-sm" data-testid={`text-value-description-${value.id}`}>{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center" data-testid="section-about-cta">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-about-cta-title">
              Ready to start a project together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto" data-testid="text-about-cta-description">
              I'm always excited to work on new projects and help bring your ideas to life.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-about-cta">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
