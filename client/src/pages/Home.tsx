import { AnimatedButton } from "@/components/AnimatedButton";
import { ProjectsSection } from "@/components/ProjectsSection";
import InteractiveWolfLogo from "@/components/InteractiveWolfLogo";
import StickyNav from "@/components/StickyNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_TITLE, PROJECTS } from "../../../shared/const";
import { ArrowRight, BookOpen, Briefcase, Cpu, ExternalLink, Lightbulb, PieChart, TrendingUp, Sparkles, Target } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Constellation background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(14, 184, 166, 0.6)';
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(14, 184, 166, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Sticky Navigation */}
      <StickyNav />
      
      {/* Animated constellation background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{ zIndex: 0 }}
      />

      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Header with Wolf Logo */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/apex-wolf-logo.png" alt="Apex Omnis Studios" className="w-16 h-16 md:w-20 md:h-20" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Apex Omnis Studios
                </h2>
                <p className="text-sm text-muted-foreground">Collectors, Educators, and Entrepreneurs</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400 font-medium">Intelligence, Impact, Imagination</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Keep Your Business
                </span>
                <br />
                <span className="text-foreground">In Your Control</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                AI is transforming business—but you don't have to lose control. We build custom systems, data tools, and intelligent platforms that <span className="text-foreground font-medium">amplify your expertise</span> without replacing it. Stay competitive, stay efficient, and stay in control.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <AnimatedButton 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/50 group"
                  asChild
                >
                  <a href="mailto:contact@apexomnis.io?subject=Strategy Call Request">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </AnimatedButton>
                <AnimatedButton 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-500/50 hover:bg-purple-500/10"
                >
                  Explore Our Work
                  <ExternalLink className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </div>
            </div>

            <div className="relative">
              {/* Floating decorative diamonds */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rotate-45 opacity-20 blur-sm animate-float" />
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rotate-45 opacity-20 blur-sm animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-8 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rotate-45 opacity-20 blur-sm animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              
              {/* Interactive Wolf Logo with Constellation Navigation */}
              <InteractiveWolfLogo />
              
              {/* Diamond elements */}
              <div className="absolute top-10 right-10 w-12 h-12 rotate-45 bg-gradient-to-br from-cyan-400 to-purple-600 opacity-30 animate-pulse" />
              <div className="absolute bottom-10 left-10 w-8 h-8 rotate-45 bg-gradient-to-br from-purple-400 to-pink-600 opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                About Apex Omnis Studios
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Apex Omnis Studios was born at the crossroads of passion, curiosity, and purpose. I started as a business teacher in a California high school, where I helped students explore careers, technology, and creativity. Before that, I worked in public service—supporting families through health and food assistance programs.
              </p>
              
              <p>
                But my real fascination has always been with systems: how games work, how people learn, how data flows, and how technology can serve communities. Inspired by students and driven by hobbies like trading cards and game design, I dove deep into AI, data, and automation.
              </p>
              
              <p className="text-foreground font-medium">
                Apex Omnis Studios is the result—a mission-driven studio focused on helping collectors and entrepreneurs build intelligent systems, creative tools, and platforms that turn passion into profit.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <div id="projects">
          <ProjectsSection />
        </div>

        {/* What We Build */}
        <section id="services" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From idea to launch, we create the tools and platforms that help you monetize your expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-cyan-500/50">
              <CardHeader>
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="/service-collector-platforms.png" 
                    alt="Collector Platforms" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardTitle className="text-xl">Collector Platforms</CardTitle>
                <CardDescription>
                  Build marketplaces, databases, and tools for your niche—whether it's Pokémon cards, vintage toys, or rare collectibles.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/50">
              <CardHeader>
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="/service-data-intelligence.png" 
                    alt="Data Intelligence" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardTitle className="text-xl">Data Intelligence</CardTitle>
                <CardDescription>
                  Track market trends, analyze pricing data, and make smarter buying/selling decisions with custom dashboards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-blue-500/50">
              <CardHeader>
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="/service-strategy-consulting.png" 
                    alt="Strategy & Consulting" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardTitle className="text-xl">Strategy & Consulting</CardTitle>
                <CardDescription>
                  Need guidance turning your collection knowledge into a business? We help you design systems, automate workflows, and scale.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section id="clients" className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Who We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From classrooms to startups, we build intelligent systems for diverse missions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg">Schools & Educators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dashboards, curriculum tools, and educational platforms that empower students and teachers.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Briefcase className="w-6 h-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg">Startups & Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI automation, data intelligence, and custom platforms that help you scale efficiently.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-6 h-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg">Collectors & Creators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Turn your passion into profit with marketplaces, price trackers, and community platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Target className="w-6 h-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg">Nonprofits & Orgs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Civic tech, data insights, and tools that amplify your social impact and community reach.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg">Entrepreneurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    From idea to launch, we help you build the systems and platforms that bring your vision to life.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Lightbulb className="w-6 h-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg">Niche Communities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Custom solutions for specialized markets, hobbies, and communities that need tailored tech.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Apex Ecosystem */}
        <section id="ecosystem" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              The Apex Ecosystem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-cyan-400">{PROJECTS.commons.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {PROJECTS.commons.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Apex Commons is where we give back. Focused on civic tech, educational access, and creative empowerment, this branch supports schools, educators, and community orgs with free tools, curriculum resources, and workshops.
                </p>
                <AnimatedButton variant="outline" size="sm" className="w-full" asChild>
                  <a href={PROJECTS.commons.url} target="_blank" rel="noopener noreferrer">
                    Visit Site
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </AnimatedButton>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">{PROJECTS.society.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {PROJECTS.society.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Inspired by trading cards, strategy games, and real-world data, Apex Intelligence Society is a unique platform that blends research, curation, and gamified intelligence.
                </p>
                <AnimatedButton variant="outline" size="sm" className="w-full" asChild>
                  <a href={PROJECTS.society.url} target="_blank" rel="noopener noreferrer">
                    Follow on X
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </AnimatedButton>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-400">{PROJECTS.intelligence.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {PROJECTS.intelligence.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  ApexIntelligence.io is our publishing layer—the digital library of Apex Omnis Studios. It's where we share original research, insights, tools, and thoughts on AI, data, society, and creativity.
                </p>
                <AnimatedButton variant="outline" size="sm" className="w-full" asChild>
                  <a href={PROJECTS.intelligence.url} target="_blank" rel="noopener noreferrer">
                    Read More
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </AnimatedButton>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
            <div className="relative space-y-6 py-12">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Let's Build Something Together
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you're a collector, entrepreneur, or creative, we're here to help you design systems that turn your passion into a sustainable business.
              </p>
              <div className="flex justify-center">
                <AnimatedButton 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/50 group"
                  asChild
                >
                  <a href="mailto:contact@apexomnis.io?subject=Strategy Call Request">
                    Schedule a Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-border/50">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/apex-wolf-logo.png" alt="Apex Omnis" className="w-12 h-12" />
                <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Apex Omnis Studios
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Creative tech built for collectors, entrepreneurs, and innovators.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Projects</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Apex Commons</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Apex Intelligence Society</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">ApexIntelligence.io</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:contact@apexomnis.io" className="hover:text-cyan-400 transition-colors">contact@apexomnis.io</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Follow on X</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2025 Apex Omnis Studios. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
