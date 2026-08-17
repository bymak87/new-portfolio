import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

export function FeaturedProjects() {
  const { data: allProjects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="text-primary font-medium" data-testid="text-featured-subtitle">Portfolio highlights</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-featured-title">
              Where strategy meets execution
            </h2>
            <p className="text-muted-foreground" data-testid="text-featured-description">Selected projects spanning website strategy, operations, optimization, analytics, UX design, and front-end development.</p>
          </div>
          <Link href="/portfolio">
            <Button variant="outline" data-testid="link-explore-more">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border-border/50">
                <Skeleton className="aspect-[4/3]" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <Card 
                  className="group overflow-hidden hover-elevate cursor-pointer border-border/50"
                  data-testid={`card-featured-project-${project.id}`}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden">
                    <img src={project.imageUrlP} alt="" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full text-foreground" data-testid={`badge-featured-category-${project.id}`}>
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors" data-testid={`text-featured-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-featured-project-description-${project.id}`}>
                      {project.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
