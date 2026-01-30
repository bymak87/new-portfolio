import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <CTASection />
    </Layout>
  );
}
