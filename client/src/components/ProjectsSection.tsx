import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";

interface Project {
  title: string;
  description: string;
  category: string;
  audienceTag: string;
  screenshot: string;
  projectUrl: string;
  techStack: string[];
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<{
    gaming: Project[];
    education: Project[];
    creative: Project[];
  }>({
    gaming: [],
    education: [],
    creative: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Organize projects by audience
    const gamingProjects: Project[] = [
      {
        title: "Event Tracker Pro",
        description: "Personal event tracking system for gaming conventions, tournaments, and local events with automated discovery across 20+ sources.",
        category: "Automation",
        audienceTag: "Gaming Tools",
        screenshot: "/event-tracker-hero-mockup-v1.png",
        projectUrl: "/projects/museum-tracker",
        techStack: ["Zapier (47 steps)", "Notion", "Web Scraping"]
      },
      {
        title: "TCG Portfolio Dashboard",
        description: "Personal collection analytics for tracking card values, market trends, and portfolio performance with real-time market data integration.",
        category: "Data Analysis",
        audienceTag: "Gaming Tools",
        screenshot: "/tcg-portfolio-hero-mockup-v1.png",
        projectUrl: "/projects/data-dashboard",
        techStack: ["React", "TCGPlayer API", "Data Viz"]
      }
    ];

    const educationProjects: Project[] = [
      {
        title: "Classroom Automation Hub",
        description: "Intelligent automation system for grading, attendance, and parent communication. Saves 10-15 hours per week with AI-powered grading and automated workflows.",
        category: "AI/ML",
        audienceTag: "Education Tools",
        screenshot: "/classroom-automation-hero-mockup-v1.png",
        projectUrl: "/projects/classroom-automation",
        techStack: ["GPT-4", "Canvas LMS", "Aeries"]
      },
      {
        title: "AI Lesson Plan Generator",
        description: "Standards-aligned curriculum planning with AI-powered differentiation. Generate complete lesson plans in 10-15 minutes instead of 5-8 hours.",
        category: "AI/ML",
        audienceTag: "Education Tools",
        screenshot: "/lesson-plan-generator-hero-mockup-v1.png",
        projectUrl: "/projects/lesson-plan-generator",
        techStack: ["GPT-4", "50 State Standards", "Notion"]
      }
    ];

    const creativeProjects: Project[] = [
      {
        title: "Project Idea Organizer",
        description: "AI assistant that captures scattered ideas from 15+ sources and transforms them into actionable project plans with clear next steps.",
        category: "AI/ML",
        audienceTag: "Creative Tools",
        screenshot: "/project-idea-organizer-hero-mockup-v1.png",
        projectUrl: "/projects/project-idea-organizer",
        techStack: ["GPT-4", "Whisper AI", "Notion"]
      },
      {
        title: "Quick Launch Website Builder",
        description: "Turn business concepts into live, professional websites in 24 hours. AI-powered copywriting, custom design, and one-click deployment.",
        category: "Web Development",
        audienceTag: "Creative Tools",
        screenshot: "/quick-launch-website-hero-mockup-v1.png",
        projectUrl: "/projects/quick-launch-website",
        techStack: ["GPT-4", "React", "Vercel"]
      }
    ];

    setProjects({
      gaming: gamingProjects,
      education: educationProjects,
      creative: creativeProjects,
    });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </section>
    );
  }

  const renderProjectGrid = (projectList: Project[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectList.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 overflow-hidden h-full flex flex-col">
            {/* Project Screenshot */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <motion.img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  (e.target as HTMLImageElement).src = "/apex-wolf-logo.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardHeader className="flex-grow">
              <div className="flex items-center justify-between mb-2 gap-2">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {project.audienceTag}
                </span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {project.category}
                </span>
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-sm">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Case Study Button */}
              <Link href={project.projectUrl}>
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  className="w-full border-cyan-500/50 hover:bg-cyan-500/10"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-3 w-3" />
                </AnimatedButton>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real automation systems for gamers, teachers, and creatives
        </p>
      </div>

      {/* Gaming Tools */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400">Gaming Tools</h3>
        {renderProjectGrid(projects.gaming)}
      </div>

      {/* Education Tools */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-purple-400">Education Tools</h3>
        {renderProjectGrid(projects.education)}
      </div>

      {/* Creative Tools */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-pink-400">Creative Tools</h3>
        {renderProjectGrid(projects.creative)}
      </div>
    </section>
  );
}
