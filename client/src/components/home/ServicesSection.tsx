import { Monitor, Smartphone, Palette, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    id: "1",
    title: "Website Design",
    description: "Creating beautiful, functional websites that engage users and drive results.",
    projectCount: 76,
    icon: "monitor",
  },
  {
    id: "2",
    title: "Mobile App Design",
    description: "Crafting intuitive mobile experiences that users love to interact with.",
    projectCount: 63,
    icon: "smartphone",
  },
  {
    id: "3",
    title: "Brand Identity",
    description: "Building memorable brand identities that tell your unique story.",
    projectCount: 47,
    icon: "palette",
  },
  {
    id: "4",
    title: "UI/UX Design",
    description: "Designing interfaces that are both beautiful and easy to use.",
    projectCount: 89,
    icon: "layout",
  },
];

const iconMap = {
  monitor: Monitor,
  smartphone: Smartphone,
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
                    <p className="text-sm text-muted-foreground" data-testid={`text-service-count-${service.id}`}>{service.projectCount} Projects</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-services-title">
                What do I help?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-services-description-1">
                I will help you with finding a solution and solving your problems. 
                I use process design to create digital products that also help their business.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-services-description-2">
                Besides that, I also help their business grow by creating effective digital strategies 
                that align with their goals and target audience.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <div className="text-center">
                <p className="font-serif text-4xl sm:text-5xl font-bold text-accent" data-testid="stat-projects-completed">285+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl sm:text-5xl font-bold text-accent" data-testid="stat-happy-clients">190+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
