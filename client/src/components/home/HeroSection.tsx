import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg" data-testid="text-hero-greeting">Hey there,</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
                I'm a{" "}
                <span className="text-primary relative">
                  Digital
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 C 40 2, 80 12, 120 6 C 160 0, 180 10, 198 4"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>{" "}
                Problem Solver
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed" data-testid="text-hero-description">
                I design and build websites, web applications, and digital experiences that help businesses grow. By combining UX design, front-end development, and digital strategy, I turn ideas into engaging, high-performing experiences.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/portfolio">
                <Button size="lg" data-testid="button-view-work">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://www.bymadesigns.com/AmeliaSmith2025.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" data-testid="button-download-cv">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-3" data-testid="stat-experience">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-accent">10+</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Years</p>
                  <p className="font-semibold text-foreground">Experience</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-border" />

              <div className="flex items-center gap-3" data-testid="badge-developer">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Full Stack</p>
                  <p className="text-xs text-muted-foreground">Web Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto w-72 sm:w-80 md:w-96 lg:w-full max-w-md">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl" />
              
              <div className="absolute -top-8 -right-8 w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary/40">
                  <path
                    d="M20,50 Q35,20 50,50 T80,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-primary/10" data-testid="img-hero-photo">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-serif text-5xl font-bold text-primary">AS</span>
                    </div>
                    <p className="text-lg font-medium text-foreground">Amelia Smith</p>
                    <p className="text-sm text-muted-foreground mt-2">Digital Problem Solver</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-lg border border-border" data-testid="card-email-cta">
                <p className="text-sm text-muted-foreground">Get in touch</p>
                <p className="font-medium text-primary">bymadesigns.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
