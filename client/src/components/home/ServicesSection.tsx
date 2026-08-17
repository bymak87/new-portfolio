import { Monitor, Code, PanelTop, Layout, TrendingUp, Search, FileChartLine, ClipboardCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    id: "1",
    title: "Web Strategy",
    description:
      "Creating website strategies, user journeys, and roadmaps aligned with business, audience, and marketing goals.",
    icon: "panelTop",
  },
  {
    id: "2",
    title: "Growth & Optimization",
    description:
      "Improving engagement and conversion through CRO, experimentation, personalization, and continuous optimization.",
    icon: "trendingUp",
  },
  {
    id: "3",
    title: "Search Visibility",
    description:
      "Strengthening visibility across traditional and AI-powered search through SEO, AEO, GEO, and content strategy.",
    icon: "search",
  },
  {
    id: "4",
    title: "Analytics & Insights",
    description:
      "Turning behavioral and performance data into actionable recommendations using GA4, dashboards, and user-behavior tools.",
    icon: "fileChartLine",
  },
  {
    id: "5",
    title: "Web Operations & Delivery",
    description:
      "Leading cross-functional website initiatives, development teams, vendors, workflows, QA, and global web programs.",
    icon: "clipboardCheck",
  },
  {
    id: "6",
    title: "UX Design & Development",
    description:
      "Designing and building intuitive, responsive digital experiences—from wireframes and prototypes to front-end implementation.",
    icon: "layout",
  },
];

const iconMap = {
  code: Code,
  trendingUp: TrendingUp,
  search: Search,
  monitor: Monitor,
  panelTop: PanelTop,
  fileChartLine: FileChartLine,
  clipboardCheck: ClipboardCheck,
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
                I help businesses turn their websites into more effective growth engines. By connecting web strategy, customer journeys, search visibility, analytics, and experimentation, I create experiences that are easier to navigate, easier to find, and more likely to convert.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-services-description-2">
                I also bring the operational structure needed to move ideas forward by aligning stakeholders, improving workflows, and guiding design and development from opportunity through launch and continuous optimization.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              {/* <div className="text-center">
                <p className="font-serif text-4xl sm:text-5xl font-bold text-accent" data-testid="stat-projects-completed">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Years experience</p>
              </div> */}
              <div className="text-center">
                <p className="font-serif text-4xl sm:text-5xl font-bold text-accent" data-testid="stat-happy-clients">8.3%</p>
                <p className="text-sm text-muted-foreground mt-1">Website conversion rate</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl sm:text-5xl font-bold text-accent" data-testid="stat-happy-clients">51.3%</p>
                <p className="text-sm text-muted-foreground mt-1">Organic traffic contribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
