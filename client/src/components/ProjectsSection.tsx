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
  screenshot: string;
  projectUrl: string;
  techStack: string[];
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, use static data from the Notion database
    // In production, this would fetch from an API endpoint
    const staticProjects: Project[] = [
      {
        title: "Data Analysis Dashboard",
        description: "Real-time business intelligence dashboard with automated data collection, transformation, and visualization for executive decision-making.",
        category: "Data Analysis",
        screenshot: "/project-dashboard.png",
        projectUrl: "/projects/data-dashboard",
        techStack: ["Python", "Airtable", "Notion API"]
      },
      {
        title: "Museum Tracker System",
        description: "Automated event tracking system for NYC museums that consolidates event data from multiple sources into a unified Notion workspace with filtered dashboards and automated reporting.",
        category: "Automation",
        screenshot: "/museum-tracker-hero-v2.png",
        projectUrl: "/projects/museum-tracker",
        techStack: ["Zapier", "Notion", "API Integration"]
      },
      {
        title: "AI Content Pipeline",
        description: "Intelligent content generation and distribution system using GPT-4 for automated content creation, with approval workflows and multi-channel publishing.",
        category: "AI/ML",
        screenshot: "/ai-pipeline-hero-flat.png",
        projectUrl: "/projects/ai-pipeline",
        techStack: ["GPT-4", "Make", "Notion"]
      }
    ];

    setProjects(staticProjects);
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

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Recent Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real solutions for real businesses
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
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
                <div className="flex items-center justify-between mb-2">
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
    </section>
  );
}
