import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Download, Handshake, ListOrdered, Users } from "lucide-react";

const values = [
  {
    id: "user-centered",
    icon: Users,
    title: "User-centered impact",
    description: "I create experiences that make things easier for users while delivering measurable results for the business.",
  },
  {
    id: "structure",
    icon: ListOrdered,
    title: "Clarity and structure",
    description: "I enjoy untangling complex problems and turning them into clear strategies, practical processes, and achievable next steps.",
  },
  {
    id: "collaboration",
    icon: Handshake,
    title: "Thoughtful collaboration",
    description: "I bring people and perspectives together, helping teams align, work more effectively, and build stronger solutions.",
  },
];

const stats = [
  { id: "years", value: "10+", label: "Years in Tech" },
  { id: "uw", value: "UW", label: "Class of 2009" },
  { id: "marathon", value: "2", label: "Marathon Finished" },
  { id: "halfmarathons", value: "5", label: "Half-Marathons" },
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
              <img src="/amy-smith-about.jpg" alt="" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-medium" data-testid="text-about-subtitle">About me</p>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-about-title">
                  Digital Problem Solver
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-about-paragraph-1">
                  My career has been shaped by curiosity, adaptability, and a desire to understand how things work. After graduating from the University of Washington, I moved to South Korea and spent nearly four years teaching English. Living abroad strengthened my ability to communicate across cultures, navigate unfamiliar situations, and approach challenges from different perspectives.
                </p>
                <p data-testid="text-about-paragraph-2">
                  That same curiosity eventually led me to programming. I moved to Austin to attend MakerSquare, where I learned to turn ideas into functional digital experiences. Since then, my career has expanded from hands-on design and development into website strategy, operations, analytics, and optimization. I enjoy bringing these disciplines together to create websites that are useful for people and effective for businesses.
                </p>
                <p data-testid="text-about-paragraph-3">
                  Outside of work, I’m usually running, traveling, trying new food, or rewatching a favorite comedy. The Office, Parks and Recreation, and Frasier are always in rotation. Running gives me another way to explore, while travel continues to feed my curiosity about people, places, and cultures. And food will always be my love language.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-about-contact">
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="/Amelia-Smith-Resume-2026.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" data-testid="button-about-download-cv">
                    <Download className="mr-2 h-4 w-4" />
                    View resume
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
              <p className="text-primary font-medium mb-2" data-testid="text-values-subtitle">Values</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-values-title">
                What motivates me
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
              Ready to build a better web experience?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto" data-testid="text-about-cta-description">
              Let’s turn your ideas and business goals into thoughtful digital experiences that improve customer journeys, increase engagement, and drive measurable growth.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-about-cta">
                Let's talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
