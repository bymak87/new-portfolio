import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground" data-testid="badge-cta-collaborate">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Let's collaborate</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-cta-title">
            Let's make something{" "}
            <span className="text-primary">amazing</span> together.
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto" data-testid="text-cta-description">
            Ready to bring your ideas to life? I'm always excited to work on new projects 
            and help businesses grow through thoughtful design.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-contact">
                Start by saying hi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" data-testid="button-cta-portfolio">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
