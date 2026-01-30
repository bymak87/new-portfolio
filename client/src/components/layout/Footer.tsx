import { Link } from "wouter";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold" data-testid="text-footer-logo">Portfolio</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed" data-testid="text-footer-tagline">
              I design beautifully simple things, and I love what I do. Let's create something amazing together.
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
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-4 h-4" />
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
            <h4 className="font-semibold text-lg" data-testid="text-footer-services-title">Services</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-web">Web Design</span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-mobile">Mobile App Design</span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-brand">Brand Identity</span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-service-uiux">UI/UX Design</span>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg" data-testid="text-footer-contact-title">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm" data-testid="info-footer-email">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">hello@portfolio.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm" data-testid="info-footer-phone">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm" data-testid="info-footer-location">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm" data-testid="text-footer-copyright">
            {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm" data-testid="text-footer-credits">
            Designed with care
          </p>
        </div>
      </div>
    </footer>
  );
}
