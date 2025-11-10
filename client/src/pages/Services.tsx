import { ConstellationBackground } from "@/components/ConstellationBackground";
import { motion } from "framer-motion";
import { Shield, Users, Zap, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const offerings = [
    {
      icon: Zap,
      title: "Custom Automation Builds",
      description: "Done-with-you automation systems tailored to your specific business needs and community.",
      features: [
        "Deep discovery process to understand your audience",
        "Custom workflow design and implementation",
        "Integration with your existing tools and platforms",
        "Training and documentation for your team",
        "Ongoing support and optimization"
      ]
    },
    {
      icon: Users,
      title: "Community-First Consulting",
      description: "Strategic guidance on building automation that serves your community without exploiting them.",
      features: [
        "Ethical automation strategy sessions",
        "Community impact assessment",
        "Anti-spam and anti-scalper safeguards",
        "Sustainable growth planning",
        "Long-term relationship building"
      ]
    },
    {
      icon: Shield,
      title: "Quality Assurance & Ethics Review",
      description: "We help you build systems that work AND align with your values.",
      features: [
        "Code review and optimization",
        "User experience testing",
        "Ethical use case validation",
        "Performance monitoring",
        "Community feedback integration"
      ]
    }
  ];

  const idealClient = [
    "You have a real business serving a specific community",
    "You care more about long-term reputation than quick profits",
    "You're willing to invest time understanding your audience",
    "You want to build something sustainable, not a cash grab",
    "You're open to being told 'no' if an idea would harm your community"
  ];

  const redFlags = [
    "Looking for 'passive income' with zero effort",
    "Want to sell generic AI services to anyone with money",
    "Unwilling to learn about your target audience",
    "Focused solely on scaling revenue, not serving people",
    "Resistant to ethical guidelines or community safeguards"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ConstellationBackground />
      
      <div className="relative z-10">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Custom Automation for Serious Builders
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We don't sell templates or "done-for-you" infrastructure. We build custom automation systems with entrepreneurs who care about their communities.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-semibold">
                Not a licensing model. Not a course. Not a get-rich-quick scheme.
              </p>
            </motion.div>

            {/* What We Offer */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12">What We Build Together</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                      <offering.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{offering.title}</h3>
                    <p className="text-muted-foreground mb-6">{offering.description}</p>
                    <ul className="space-y-2">
                      {offering.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Who This Is For */}
            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-8 rounded-lg border border-cyan-500/50 bg-card/30 backdrop-blur"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-cyan-500" />
                  <h3 className="text-2xl font-bold">You're a Great Fit If...</h3>
                </div>
                <ul className="space-y-3">
                  {idealClient.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-8 rounded-lg border border-red-500/50 bg-card/30 backdrop-blur"
              >
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-bold">This Isn't For You If...</h3>
                </div>
                <ul className="space-y-3">
                  {redFlags.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-bold text-center mb-12">How We Work Together</h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 font-bold text-white">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Application & Discovery</h4>
                      <p className="text-muted-foreground">
                        You apply through our contact form. We review your business, audience, and goals. If there's a fit, we schedule a deep-dive discovery call to understand your community and challenges.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 font-bold text-white">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Strategy & Design</h4>
                      <p className="text-muted-foreground">
                        We map out your automation system together. What problems are we solving? What safeguards do we need? What does success look like? This is collaborative—you know your community, we know automation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 font-bold text-white">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Build & Iterate</h4>
                      <p className="text-muted-foreground">
                        We build your custom system using our multi-AI stack (Manus, Claude, ChatGPT, Gemini, Devin, Copilot). You get regular updates, testing access, and input throughout. This isn't "done-for-you"—it's done-with-you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 font-bold text-white">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Launch & Support</h4>
                      <p className="text-muted-foreground">
                        We launch together, monitor performance, and optimize based on real community feedback. You get documentation, training, and ongoing support. We're invested in your long-term success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Why We Don't Publish Pricing</h3>
                    <p className="text-muted-foreground mb-4">
                      Every project is different. A simple event tracker for a local game store costs less than a multi-platform content automation system for an education company.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      But here's what you should know: <strong className="text-foreground">Our pricing filters out low-effort operators.</strong> If you're looking for a $500 template you can resell, this isn't it. If you're building a real business and want a partner who cares about your success, let's talk.
                    </p>
                    <p className="text-muted-foreground">
                      We charge based on complexity, scope, and the value we create for your community. Transparent, fair, and aligned with long-term relationships—not one-time transactions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center"
            >
              <div className="max-w-3xl mx-auto p-12 rounded-lg border border-border/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur">
                <h2 className="text-3xl font-bold mb-4">Ready to Build Something Real?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  If you're serious about serving your community with intelligent automation, let's talk.
                </p>
                <Link href="/#contact">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cyan-500/50">
                    Start the Conversation
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-6">
                  We review every application personally. Expect a response within 48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
