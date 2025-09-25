import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5 & CSS3", level: 98 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Next.js", level: 88 }
      ]
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", level: 93 },
        { name: "Webpack", level: 80 },
        { name: "Vite", level: 85 },
        { name: "Figma", level: 87 },
        { name: "VS Code", level: 95 },
        { name: "Chrome DevTools", level: 90 }
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "Redux Toolkit", level: 85 },
        { name: "React Query", level: 88 },
        { name: "Framer Motion", level: 80 },
        { name: "React Hook Form", level: 90 },
        { name: "Zod", level: 82 },
        { name: "Storybook", level: 75 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
    "Next.js", "Redux", "React Query", "Framer Motion", "Webpack", "Vite",
    "Git", "Figma", "Storybook", "Jest", "Cypress", "Node.js"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Skills & Technologies</Badge>
          <h2 className="text-3xl sm:text-4xl mb-6">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            scalable and performant web applications.
          </p>
        </div>

        {/* Technology Tags */}
        <div className="mb-16">
          <h3 className="text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="h-fit">
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="mb-4">Always Learning</h3>
            <p className="text-muted-foreground">
              The tech landscape evolves rapidly, and I&apos;m committed to continuous learning. 
              Currently exploring Web3 technologies, advanced React patterns, and performance optimization techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}