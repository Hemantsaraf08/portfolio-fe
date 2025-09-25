import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code2, Palette, Zap, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful interfaces with attention to user experience and accessibility"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, SEO, and excellent Core Web Vitals"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with designers, backend developers, and stakeholders"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl sm:text-4xl mb-6">Passionate About Creating Digital Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 5 years of experience in frontend development, I specialize in building modern web applications 
            that are both beautiful and functional. I love turning complex problems into simple, elegant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Story */}
          <div className="space-y-6">
            <h3>My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I started my journey in web development during college, where I discovered my passion for creating 
                interactive user interfaces. What began as curiosity about how websites work evolved into a 
                career dedicated to crafting exceptional digital experiences.
              </p>
              <p>
                Over the years, I&aposve had the privilege of working with startups and established companies, 
                helping them bring their ideas to life through code. I&apos;m constantly learning new technologies 
                and best practices to stay at the forefront of frontend development.
              </p>
              <p>
                When I&apos;m not coding, you can find me contributing to open-source projects, writing technical 
                blogs, or exploring the latest design trends. I believe in continuous learning and sharing 
                knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4>{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">5+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl mb-2">50+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div>
            <div className="text-3xl mb-2">15+</div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div>
            <div className="text-3xl mb-2">100%</div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}