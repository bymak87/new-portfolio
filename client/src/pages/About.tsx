import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Download, Heart, Globe, Users } from "lucide-react";

const values = [
  {
    id: "curiosity",
    icon: Globe,
    title: "Curiosity",
    description: "An insatiable curiosity for new places, cultures, and ideas that nourishes the soul and fuels creativity.",
  },
  {
    id: "community",
    icon: Users,
    title: "Community",
    description: "Giving back is important to me. I make it a point to volunteer at least once a quarter.",
  },
  {
    id: "passion",
    icon: Heart,
    title: "Passion",
    description: "I'm passionate about learning and keeping up with design trends, always growing in my craft.",
  },
];

const stats = [
  { id: "years", value: "10+", label: "Years in Tech" },
  { id: "uw", value: "UW", label: "Class of 2009" },
  { id: "marathon", value: "1", label: "Marathon Finished" },
  { id: "halfmarathons", value: "2", label: "Half-Marathons" },
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
                    <span className="font-serif text-5xl font-bold text-primary">AS</span>
                  </div>
                  <p className="text-muted-foreground">Amelia Smith</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-medium" data-testid="text-about-subtitle">About Me</p>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-about-title">
                  Digital Problem Solver
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-about-paragraph-1">
                  I graduated from the University of Washington in 2009 and, fueled by a curiosity 
                  for new cultures, moved to Korea to teach English. I spent nearly four years there, 
                  immersing myself in the culture and learning valuable life lessons.
                </p>
                <p data-testid="text-about-paragraph-2">
                  In 2014, I decided to dive into the world of programming and moved to Austin, 
                  where I began my journey at MakerSquare. It was a decision that has shaped my 
                  career and continues to bring me fulfillment. I'm passionate about learning 
                  and keeping up with design trends.
                </p>
                <p data-testid="text-about-paragraph-3">
                  When it comes to unwinding, I'm a fan of workplace comedies - The Office, Parks and 
                  Recreation, and Abbott Elementary are a few of my all-time favorites. I discovered 
                  running during the COVID lockdown, and it's become a lasting passion. I've completed 
                  one marathon and two half-marathons. I also have an insatiable curiosity for new 
                  places, and I truly believe that traveling and experiencing different cultures 
                  nourishes the soul.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-about-contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://www.bymadesigns.com/AmeliaSmith2025.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" data-testid="button-about-download-cv">
                    <Download className="mr-2 h-4 w-4" />
                    View Resume
                  </Button>
                </a>
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
