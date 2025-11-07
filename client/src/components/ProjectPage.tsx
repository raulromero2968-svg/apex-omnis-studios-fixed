import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { AnimatedButton } from "./AnimatedButton";

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
}: ProjectPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
  );
}
