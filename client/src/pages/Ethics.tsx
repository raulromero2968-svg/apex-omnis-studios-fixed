import { ConstellationBackground } from "@/components/ConstellationBackground";
import { motion } from "framer-motion";
import { Shield, Heart, Users, AlertTriangle, Eye, Brain } from "lucide-react";

export default function Ethics() {
  const coreGuardrails = [
    {
      icon: Shield,
      title: "No Holy Machines",
      description: "No matter how sophisticated the products or systems we build become, we will not treat them as holy if they are being used to strip people of self-determination, land, or sanity. If we discover that something we built is drifting in that direction, our obligation is to intervene—by redesigning, constraining, or shutting it down—not to hide behind mystique or 'just business.'"
    },
    {
      icon: Users,
      title: "Design for Self-Determination",
      description: "Tools should increase a user's sense of understanding, agency, and capacity to make informed choices. We explicitly reject manipulation as a business model, dark patterns, and hidden behavior-shaping mechanisms. If a system works by reducing the user's ability to think clearly, it's not a feature—it's a failure."
    },
    {
      icon: Brain,
      title: "Mental Health Is In Scope",
      description: "No systems whose secret purpose is to destabilize users for engagement. No glorification of breakdown, self-harm, or paranoia as a feature. Experiences can be intense or challenging, but they should be oriented toward integration, not fracturing. We take responsibility for psychological impact, not just functionality."
    },
    {
      icon: Eye,
      title: "Clear Boundaries with Power",
      description: "If we collaborate with institutions—public or private—we do so with explicit ethical conditions and clear red lines about surveillance, psychological warfare, or exploitative uses. We name what our tools are for and what they are NOT for. We don't build for anyone and sort out the ethics later."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ConstellationBackground />

      <div className="relative z-10">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Ethical Guardrails
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These aren't marketing statements. They're design constraints we use to decide what to build, how to build it, and who to build it for.
              </p>
            </motion.div>

            {/* Core Guardrails */}
            <div className="grid gap-8 md:grid-cols-2 mb-16">
              {coreGuardrails.map((guardrail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    <guardrail.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{guardrail.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {guardrail.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* What This Means In Practice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-invert max-w-none"
            >
              <div className="p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur space-y-6 text-muted-foreground">
                <h2 className="text-2xl font-bold text-foreground">What This Means In Practice</h2>

                <p>
                  Apex Omnis is a studio, not a service provider that builds whatever someone pays for. We're selective about what we work on because technology has consequences—and those consequences fall on real people.
                </p>

                <p>
                  This means there are things we won't build:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Tools optimized for engagement through manipulation, distraction, or compulsion loops</li>
                  <li>Systems designed to make users feel paranoid, fractured, or dependent</li>
                  <li>Platforms that extract value from communities while giving nothing back</li>
                  <li>Technology for surveillance, psychological operations, or coercive control—regardless of who's asking</li>
                  <li>Products that hide what they actually do from the people using them</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8">On Collaboration with Institutions</h2>

                <p>
                  We're not reflexively anti-institutional. Schools, nonprofits, civic organizations, research institutions—these can be legitimate partners for building technology that serves people.
                </p>

                <p>
                  But institutional collaboration comes with explicit conditions:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Transparency about use:</strong> We document what tools are for and what they're NOT for</li>
                  <li><strong>Red lines on surveillance:</strong> No quiet pivots into tracking, profiling, or monitoring that wasn't part of the original agreement</li>
                  <li><strong>No psychological warfare:</strong> We don't build systems designed to manipulate, destabilize, or control populations</li>
                  <li><strong>Right to exit:</strong> If a collaboration drifts into territory we can't support, we can walk away—and we will</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8">On Mental Health & Psychological Impact</h2>

                <p>
                  Technology shapes how people think, feel, and relate to each other. We take that seriously.
                </p>

                <p>
                  "Mental health is in scope" means we actively consider psychological impact during design and development—not as a compliance checkbox, but as a core design constraint. This includes:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Rejecting engagement metrics that reward compulsive use or anxiety</li>
                  <li>Building experiences that invite participation rather than demand it</li>
                  <li>Creating tools that help people think more clearly, not less</li>
                  <li>Avoiding aesthetic or narrative choices that glorify breakdown or paranoia</li>
                  <li>Designing for integration—helping users make sense of their experience—not fracturing</li>
                </ul>

                <p>
                  Intense or challenging experiences aren't off the table. But there's a difference between something that's difficult and meaningful, and something that's destabilizing for profit.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8">Why Write This Down?</h2>

                <p>
                  Because technology companies routinely say one thing and do another. "Don't be evil" becomes a punchline. "Connecting people" becomes surveillance capitalism. "Democratizing information" becomes algorithmic radicalization.
                </p>

                <p>
                  We're not naive enough to think writing principles down prevents drift. But it does create a reference point—something we can be held to, something collaborators can point to when decisions get made.
                </p>

                <p className="text-foreground font-medium">
                  If we violate these principles, call us out. If something we build turns out to cause harm we didn't anticipate, we want to know. The point isn't to be perfect—it's to be accountable.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8">What We're Not</h2>

                <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/30">
                  <p className="text-muted-foreground mb-4">
                    To be clear about what Apex Omnis is NOT:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We are not a secret order, cult, or spiritual authority</li>
                    <li>We do not claim to offer destiny-shaping, mind-reading, or mystical capabilities</li>
                    <li>We are not selling AI magic or breakthrough technology that transcends normal constraints</li>
                    <li>We do not trivialize war, trauma, or oppression as engagement hooks or narrative devices</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We're a studio. We build things. We try to build them well and build them ethically. That's it.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
