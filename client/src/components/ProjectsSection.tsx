import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";

interface Project {
  title: string;
  description: string;
  category: string;
  screenshot: string;
  projectUrl: string;
  techStack: string[];
}

interface ProjectCategory {
  name: string;
  description: string;
  projects: Project[];
}

export function ProjectsSection() {
  const [categories, setCategories] = useState<ProjectCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Organized by audience: Gamers, Teachers, Creatives
    const projectCategories: ProjectCategory[] = [
      {
        name: "Gaming Tools",
        description: "Automation systems for gaming communities, collectors, and tournament organizers",
        projects: [
          {
            title: "Event Tracker Pro",
            description: "Personal event tracking system for gaming conventions, tournaments, and local events with automated discovery across 20+ sources.",
            category: "Automation",
            screenshot: "/event-tracker-hero-v1.png",
            projectUrl: "/projects/museum-tracker",
            techStack: ["Zapier (47 steps)", "Notion", "Web Scraping"]
          },
          {
            title: "TCG Portfolio Dashboard",
            description: "Personal collection analytics for tracking card values, market trends, and portfolio performance with real-time market data integration.",
            category: "Data Analysis",
            screenshot: "/tcg-portfolio-hero-v1.png",
            projectUrl: "/projects/data-dashboard",
            techStack: ["React", "TCGPlayer API", "Data Viz"]
          },
          {
            title: "ProGrade Tracker",
            description: "Sports card grading pipeline management and ROI optimization. Track PSA, BGS, CGC, and SGC submissions with AI condition assessment and market analysis.",
            category: "Investment Tools",
            screenshot: "/prograde-tracker-hero.png",
            projectUrl: "/prograde-tracker",
            techStack: ["AI Image Analysis", "Market Data APIs", "ROI Calculator"]
          }
        ]
      },
      {
        name: "Education Tools",
        description: "Intelligent automation for teachers to reclaim time and improve student outcomes",
        projects: [
          {
            title: "Classroom Automation Hub",
            description: "Intelligent automation system for grading, attendance, and parent communication. Saves 10-15 hours per week with AI-powered grading and automated workflows.",
            category: "AI/ML",
            screenshot: "/classroom-automation-hero-v1.png",
            projectUrl: "/projects/classroom-automation",
            techStack: ["GPT-4", "Canvas LMS", "Aeries"]
          },
          {
            title: "AI Lesson Plan Generator",
            description: "Standards-aligned curriculum planning with AI-powered differentiation. Generate complete lesson plans in 10-15 minutes instead of 5-8 hours.",
            category: "AI/ML",
            screenshot: "/lesson-plan-generator-hero-v1.png",
            projectUrl: "/projects/lesson-plan-generator",
            techStack: ["GPT-4", "50 State Standards", "Notion"]
          }
        ]
      },
      {
        name: "Creative Tools",
        description: "Systems that transform scattered ideas into structured execution for creators and entrepreneurs",
        projects: [
          {
            title: "Project Idea Organizer",
            description: "AI assistant that captures scattered ideas from 15+ sources and transforms them into actionable project plans with clear next steps.",
            category: "AI/ML",
            screenshot: "/project-idea-organizer-hero-v1.png",
            projectUrl: "/projects/project-idea-organizer",
            techStack: ["GPT-4", "Whisper AI", "Notion"]
          },
          {
            title: "Quick Launch Website Builder",
            description: "Turn business concepts into live, professional websites in 24 hours. AI-powered copywriting, custom design, and one-click deployment.",
            category: "Web Development",
            screenshot: "/quick-launch-website-hero-v1.png",
            projectUrl: "/projects/quick-launch-website",
            techStack: ["GPT-4", "React", "Vercel"]
          }
        ]
      }
    ];

    setCategories(projectCategories);
    setLoading(false);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real automation systems for gamers, teachers, and creatives
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(index)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeCategory === index
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Category Description */}
      <motion.p
        key={activeCategory}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto"
      >
        {categories[activeCategory].description}
      </motion.p>

      {/* Horizontal Carousel */}
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-cyan-400" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-cyan-400" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-12 snap-x snap-mandatory hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categories[activeCategory].projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex-shrink-0 w-[380px] snap-center"
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
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Case Study Button */}
                  <Link href={project.projectUrl}>
                    <AnimatedButton
                      variant="outline"
                      size="sm"
                      className="w-full border-cyan-500/50 hover:bg-cyan-500/10"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </AnimatedButton>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
