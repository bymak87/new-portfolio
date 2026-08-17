import { Link } from "wouter";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold" data-testid="text-footer-logo">Amy Smith</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed" data-testid="text-footer-tagline">
              Digital problem solver. I build and design websites, web apps, and digital experiences that help businesses grow.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                data-testid="link-social-github"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abakameyer/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg" data-testid="text-footer-quicklinks-title">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/">
                <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer" data-testid="link-footer-home">
                  Home
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer" data-testid="link-footer-portfolio">
                  Portfolio
                </span>
              </Link>
              <Link href="/about">
                <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer" data-testid="link-footer-about">
                  About
                </span>
              </Link>
              <Link href="/resume">
                <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer" data-testid="link-footer-resume">
                  Resume
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer" data-testid="link-footer-contact">
                  Contact
                </span>
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg" data-testid="text-footer-services-title">What I Do</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-web">Web Strategy</span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-design">Growth & Optimization</span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-design">Search & Visibility</span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-analytics">Analytics and Insights</span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-operations">Web Operations & Delivery</span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-uiux">UI/UX Design & Development</span>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg" data-testid="text-footer-contact-title">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm" data-testid="info-footer-website">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">bymadesigns.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm" data-testid="info-footer-location">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">Allen, TX</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/abakameyer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                data-testid="info-footer-linkedin"
              >
                <Linkedin className="w-4 h-4 text-accent" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm" data-testid="text-footer-copyright">
            {currentYear} BYMA Designs. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm" data-testid="text-footer-credits">
            Designed with care by Amelia Smith
          </p>
        </div>
      </div>
    </footer>
  );
}
