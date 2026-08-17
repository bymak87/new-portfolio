import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

const categories = ["All", "Strategy", "Operations", "Design & Development", "Redesign"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: allProjects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const filteredProjects =
  activeCategory === "All"
    ? allProjects
    : allProjects.filter((project) =>
        project.category
          .toLowerCase()
          .includes(activeCategory.toLowerCase())
      );

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2" data-testid="text-portfolio-subtitle">Portfolio</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="text-portfolio-title">
              Better Journeys. Stronger Results.
            </h1>
            <p className="text-muted-foreground text-lg" data-testid="text-portfolio-description">
              A selection of website initiatives that simplified customer journeys, improved performance, and helped marketing teams achieve their goals.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden border-border/50">
                  <Skeleton className="aspect-[4/3]" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <div className="flex gap-2">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/project/${project.id}`}>
                  <Card 
                    className="group overflow-hidden hover-elevate cursor-pointer border-border/50 h-full"
                    data-testid={`card-portfolio-project-${project.id}`}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden">
                    <img src={project.imageUrlP} alt="" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full text-foreground" data-testid={`badge-category-${project.id}`}>
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
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors" data-testid={`text-project-title-${project.id}`}>
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground" data-testid={`text-project-year-${project.id}`}>{project.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-project-description-${project.id}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-0.5 text-xs bg-secondary rounded text-secondary-foreground"
                            data-testid={`badge-tech-${project.id}-${tech.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 text-xs bg-secondary rounded text-secondary-foreground">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {!isLoading && filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground" data-testid="text-no-projects">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
