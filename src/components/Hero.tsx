"use client";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Mail, ChevronDown } from "lucide-react";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import LinkedInIcon from "@/ui/linkedin-icon";
import { cn } from "@/utils";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="items-center">
          {/* Text Content */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div>
                <Status>
                  <span className="relative flex h-2 w-2">
                    <span
                      className={cn(
                        "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                        "bg-emerald-500"
                      )}
                    />
                    <span
                      className={cn(
                        "relative inline-flex h-2 w-2 rounded-full",
                        "bg-emerald-500"
                      )}
                    />
                  </span>
                  Available
                </Status>
              </div>

              <Badge variant="secondary" className="mb-4">
                Available for new opportunities
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Hi, I&apos;m <span className="text-primary">Hemant Saraf</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground">
                Frontend Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                I craft beautiful, responsive, and user-friendly web
                applications using modern technologies like React, TypeScript,
                and Tailwind CSS. Passionate about creating exceptional digital
                experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/Hemantsaraf08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/hsaraf/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:hemantsaraf08@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="sm" onClick={scrollToAbout}>
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export const Status = () => (
  <Badge className={"flex items-center gap-2"} variant="secondary" />
);
