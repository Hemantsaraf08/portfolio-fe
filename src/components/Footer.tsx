"use client";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Mail, Heart } from "lucide-react";
import LinkedInIcon from "@/ui/linkedin-icon";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Hemantsaraf08",
      label: "GitHub",
    },
    {
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/hsaraf/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:hemantsaraf08@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3>Hemant Saraf</h3>
            <p className="text-muted-foreground">
              Frontend Developer passionate about creating beautiful,
              functional, and user-friendly web applications.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="ghost" size="sm" asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4>Let&apos;s Connect</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>San Francisco, CA</p>
              <a
                href="mailto:hemantsaraf08@gmail.com"
                className="hover:text-foreground transition-colors block"
              >
                hemantsaraf08@gmail.com
              </a>
              <a
                href="tel:+15551234567"
                className="hover:text-foreground transition-colors block"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© {currentYear} Hemant Saraf. Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="text-sm text-muted-foreground">
            <span>Made for the modern web</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
