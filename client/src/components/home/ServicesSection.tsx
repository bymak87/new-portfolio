import { Monitor, Code, Palette, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    id: "1",
    title: "Web Development",
    description: "Building responsive, performant websites with modern technologies.",
    icon: "code",
  },
  {
    id: "2",
    title: "Web Design",
    description: "Creating beautiful, user-focused designs that drive engagement.",
    icon: "monitor",
  },
  {
    id: "3",
    title: "UI/UX Design",
    description: "Designing intuitive interfaces with a focus on user experience.",
    icon: "layout",
  },
  {
    id: "4",
    title: "Digital Strategy",
    description: "Optimizing web presence through SEO, analytics, and content strategy.",
    icon: "palette",
  },
];

const iconMap = {
  code: Code,
  monitor: Monitor,
  palette: Palette,
  layout: Layout,
};

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card 
                  key={service.id}
                  className="p-5 flex items-start gap-4 hover-elevate cursor-pointer border-border/50"
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground" data-testid={`text-service-title-${service.id}`}>{service.title}</h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-service-description-${service.id}`}>{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-services-title">
                How can I help?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-services-description-1">
                I use process design to create digital products that help businesses grow. 
                From building websites and web apps to optimizing user experiences, I find 
                solutions and solve problems.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-services-description-2">
                I'm passionate about learning and keeping up with design trends, 
                bringing the latest best practices to every project I work on.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <div className="text-center">
                <p className="font-serif text-4xl sm:text-5xl font-bold text-accent" data-testid="stat-projects-completed">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl sm:text-5xl font-bold text-accent" data-testid="stat-happy-clients">UW</p>
                <p className="text-sm text-muted-foreground mt-1">Class of 2009</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
