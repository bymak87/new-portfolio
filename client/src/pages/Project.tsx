import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ExternalLink, Calendar, User, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();

  const { data: allProjects = [], isLoading: projectsLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: project, isLoading: projectLoading } = useQuery<Project>({
    queryKey: ["/api/projects", id],
  });

  const isLoading = projectLoading || projectsLoading;

  if (isLoading) {
    return (
      <Layout>
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-10 w-40 mb-8" />
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-8">
                <Skeleton className="aspect-video rounded-2xl" />
                <div className="space-y-4">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-10 w-3/4" />
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>
              <div className="space-y-6">
                <Card className="p-6 border-border/50">
                  <Skeleton className="h-6 w-32 mb-6" />
                  <div className="space-y-4">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4" data-testid="text-project-not-found">
              Project Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link href="/portfolio">
              <Button data-testid="button-back-to-portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const currentIndex = allProjects.findIndex(p => p.id === id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center border border-border/50" data-testid="img-project-hero">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <span className="font-serif text-4xl font-bold text-primary">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-muted-foreground">Project Preview Image</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-primary font-medium" data-testid="text-project-category">{project.category}</span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2" data-testid="text-project-title">
                    {project.title}
                  </h1>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-project-full-description">
                    {project.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 flex items-center justify-center" data-testid="img-gallery-1">
                    <span className="text-muted-foreground text-sm">Gallery Image 1</span>
                  </div>
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 flex items-center justify-center" data-testid="img-gallery-2">
                    <span className="text-muted-foreground text-sm">Gallery Image 2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 space-y-6 border-border/50" data-testid="card-project-details">
                <h3 className="font-semibold text-lg text-foreground">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3" data-testid="info-client">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Client</p>
                      <p className="font-medium text-foreground">{project.client || "Personal Project"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3" data-testid="info-year">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Year</p>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-secondary-foreground"
                        data-testid={`badge-detail-tech-${tech.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.liveUrl && (
                  <Button className="w-full" data-testid="button-view-live">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </Button>
                )}
              </Card>

              {allProjects.length > 1 && (
                <Card className="p-6 border-border/50" data-testid="card-more-projects">
                  <h3 className="font-semibold text-foreground mb-4">More Projects</h3>
                  <div className="space-y-3">
                    {prevProject && prevProject.id !== project.id && (
                      <Link href={`/project/${prevProject.id}`}>
                        <div 
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                          data-testid="link-prev-project"
                        >
                          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-muted-foreground">Previous</p>
                            <p className="font-medium text-foreground truncate">{prevProject.title}</p>
                          </div>
                        </div>
                      </Link>
                    )}
                    {nextProject && nextProject.id !== project.id && (
                      <Link href={`/project/${nextProject.id}`}>
                        <div 
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                          data-testid="link-next-project"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-muted-foreground">Next</p>
                            <p className="font-medium text-foreground truncate">{nextProject.title}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </Link>
                    )}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
