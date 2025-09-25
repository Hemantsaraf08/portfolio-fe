"use client";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Mail, ChevronDown, Download } from "lucide-react";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import LinkedInIcon from "@/ui/linkedin-icon";
import Image from "next/image";
import FloatingDockDesktop from "@/ui/floating-dock";

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
          <div className="mb-8 w-fit mx-auto">
            <Image
              src="/images/profile.png"
              alt="Hemant Saraf Profile"
              width={144}
              height={144}
              className="size-36 rounded-full object-cover transition-all duration-300 hover:scale-108"
            ></Image>
          </div>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="mb-4">
                <a className="flex items-center gap-3" href="#contact">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
                  </span>
                  <span className="font-mono text-sm">
                    Available for new opportunities!
                  </span>
                </a>
              </Badge>
              {/* <div className="transform-none w-fit mx-auto mb-4"></div> */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Hi, I&apos;m <span className="text-primary">Hemant Saraf</span>
              </h1>
              {/* <h2 className="text-2xl sm:text-3xl text-muted-foreground">
                Full-Stack Developer
              </h2> */}

              <h2 className="text-2xl sm:text-3xl text-muted-foreground">
                Code. Debug. Deploy. Repeat.
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
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer"
              >
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://drive.google.com/file/d/1kyHNCI8OTIRYVgiN3Y7HMHIXCnVxBdxe/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV <Download className=" h-4 w-4" />
                </a>
              </Button>
            </div>
            <FloatingDockDesktop
              items={[
                {
                  icon: <Github className="h-6 w-6" />,
                  title: "GitHub",
                  href: "https://github.com/Hemantsaraf08",
                },
                {
                  icon: <LinkedInIcon className="h-6 w-6" />,
                  title: "LinkedIn",
                  href: "https://www.linkedin.com/in/hsaraf/",
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email",
                  href: "mailto:hemantsaraf08@gmail.com",
                },
              ]}
              className="mb-4 mt-8"
            />

            {/* Scroll indicator */}
            <div className="w-fit mx-auto transform -translate-x-1/2 animate-bounce">
              <Button variant="ghost" size="sm" onClick={scrollToAbout}>
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
{
  /* Social Links */
}
{
  /*
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
        </div>*/
}
