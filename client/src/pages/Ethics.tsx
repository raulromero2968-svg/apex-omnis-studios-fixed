import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Ethics() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
            Our Ethics & Community Commitment
          </h1>
          <p className="text-xl text-muted-foreground">
            Building tools for passion, not exploitation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          
          {/* Core Values */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Who We Build For</h2>
            <p className="text-muted-foreground mb-4">
              We build tools for <span className="text-foreground font-medium">gamers, collectors, educators, and community builders who love their craft</span>—not for scalpers, manipulators, or exploiters.
            </p>
            <p className="text-muted-foreground">
              Our mission is to help you enjoy, analyze, and grow your passion with data-driven insights and automation that respects the community.
            </p>
          </div>

          {/* What We Stand Against */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">What We Stand Against</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Market Manipulation:</span> We will never build tools designed to artificially inflate prices, create false scarcity, or manipulate markets for personal gain.
              </p>
              <p>
                <span className="text-foreground font-medium">Scalping & Hoarding:</span> Our systems are designed for personal use and community building—not for bulk buying, inventory flipping, or predatory reselling practices.
              </p>
              <p>
                <span className="text-foreground font-medium">Community Harm:</span> We refuse to create tools that exploit, deceive, or harm gaming communities, collectors, or hobbyists.
              </p>
            </div>
          </div>

          {/* Who We Serve */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Gamers & Collectors</h3>
                <p className="text-sm text-muted-foreground">
                  TCG collectors, tournament organizers, gaming cafe owners, and esports enthusiasts who want to track their passion, not exploit it.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Educators</h3>
                <p className="text-sm text-muted-foreground">
                  Teachers who want to reclaim time, improve student outcomes, and focus on what matters—teaching, not administrative busywork.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Creatives</h3>
                <p className="text-sm text-muted-foreground">
                  Entrepreneurs, designers, and makers who need systems to organize ideas, launch projects, and turn concepts into reality.
                </p>
              </div>
            </div>
          </div>

          {/* Our Promise */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Promise</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                ✓ We will always prioritize <span className="text-foreground font-medium">community health</span> over short-term profit.
              </p>
              <p>
                ✓ We will refuse projects that harm hobbyists, manipulate markets, or exploit communities.
              </p>
              <p>
                ✓ We will build tools that empower <span className="text-foreground font-medium">ethical success</span>—never predatory advantage.
              </p>
              <p className="text-cyan-400 font-medium text-xl mt-4">
                Fair access for all. Passion over profit.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">
              Have questions about our ethics or want to discuss a project?
            </p>
            <Link href="/#contact">
              <span className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-medium">
                Get in Touch →
              </span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
