import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { ConstellationBackground } from "./ConstellationBackground";
import { AnimatedButton } from "./AnimatedButton";
import { useEffect } from "react";

interface ProjectPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  problem: string;
  solution: string;
  techStack: string[];
  outcomes: string[];
  gallery: { src: string; alt: string; caption?: string }[];
  liveDemo?: string;
  ethicsNote?: string;
  scaleMetrics?: { label: string; value: string }[];
  beforeAfter?: { before: string; after: string };
  testimonial?: { quote: string; author: string; role: string };
  systemComplexity?: { title: string; description: string }[];
}

export function ProjectPage({
  title,
  subtitle,
  heroImage,
  problem,
  solution,
  techStack,
  outcomes,
  gallery,
  liveDemo,
  ethicsNote,
  scaleMetrics,
  beforeAfter,
  testimonial,
  systemComplexity,
}: ProjectPageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ConstellationBackground />
      <div className="relative z-10">
      {/* Back button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <span className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
          
          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden border border-cyan-500/20">
            <img 
              src={heroImage} 
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>

          {liveDemo && (
            <div className="flex justify-center pt-4">
              <AnimatedButton 
                variant="outline" 
                className="border-cyan-500/50 hover:bg-cyan-500/10"
                asChild
              >
                <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                  View Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </AnimatedButton>
            </div>
          )}
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {problem}
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400">The Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {solution}
          </p>
        </div>
      </section>

      {/* Scale Metrics */}
      {scaleMetrics && scaleMetrics.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400">Scale & Complexity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scaleMetrics.map((metric, index) => (
                <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Before/After Comparison */}
      {beforeAfter && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400">Before & After</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-3">Before</h3>
                <p className="text-muted-foreground leading-relaxed">{beforeAfter.before}</p>
              </div>
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-3">After</h3>
                <p className="text-muted-foreground leading-relaxed">{beforeAfter.after}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400">Technology</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* System Complexity */}
      {systemComplexity && systemComplexity.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400">System Architecture</h2>
            <p className="text-muted-foreground mb-6">This system integrates multiple tools and services to deliver seamless automation:</p>
            <div className="space-y-4">
              {systemComplexity.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400">Results</h2>
          <ul className="space-y-4">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-cyan-400 text-2xl">✓</span>
                <span className="text-lg text-muted-foreground">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
              <div className="text-6xl text-purple-400 mb-4">"</div>
              <p className="text-xl text-foreground italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-cyan-400 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gallery.map((image, index) => (
                <div key={index} className="space-y-3">
                  <div className="rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {image.caption && (
                    <p className="text-sm text-muted-foreground text-center">
                      {image.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ethics Note */}
      {ethicsNote && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Community Ethics</h3>
              <p className="text-muted-foreground leading-relaxed">
                {ethicsNote}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
          <h2 className="text-3xl font-bold">Ready to Build Something Similar?</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how we can create custom solutions for your business.
          </p>
          <AnimatedButton 
            size="lg"
            className="bg-[#00D9FF] hover:bg-[#00B8D9] text-black font-semibold shadow-lg shadow-cyan-500/50"
            asChild
          >
            <a href="mailto:contact@apexomnis.io?subject=Project Inquiry">
              Get in Touch
            </a>
          </AnimatedButton>
        </div>
      </section>
      </div>
    </div>
  );
}
