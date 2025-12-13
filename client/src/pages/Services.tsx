import { ConstellationBackground } from "@/components/ConstellationBackground";
import { motion } from "framer-motion";
import { Shield, Users, Zap, CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ClientApplicationForm from "@/components/ClientApplicationForm";

export default function Services() {
  const offerings = [
    {
      icon: Zap,
      title: "Tool & Prototype Development",
      description: "Functional software built with ethics as a design constraint—not just a feature list.",
      features: [
        "AI-assisted tools that increase user agency, not dependency",
        "Interactive prototypes for testing ideas before full production",
        "Integration with existing systems and workflows",
        "Clear documentation on what the tool does and doesn't do",
        "Iterative development based on real use, not imagined use cases"
      ]
    },
    {
      icon: Users,
      title: "Narrative Design & Interactive Experiences",
      description: "Story-driven projects that respect the audience and serve integration, not fracturing.",
      features: [
        "Collaborative development with artists and storytellers",
        "Interactive media that invites participation, not manipulation",
        "Experiences designed for understanding, not engagement metrics",
        "Clear boundaries around mental health and psychological impact",
        "Work that can be intense or challenging, oriented toward integration"
      ]
    },
    {
      icon: Shield,
      title: "Ethical Review & Collaboration",
      description: "We help projects align with values that matter—self-determination, transparency, non-coercion.",
      features: [
        "Assessment of systems for hidden manipulation or dark patterns",
        "Design review for accessibility and fairness",
        "Explicit ethical conditions for institutional collaborations",
        "Clear documentation of what tools are for and NOT for",
        "Ongoing dialogue about impact and course correction"
      ]
    }
  ];

  const idealClient = [
    "You want technology that increases understanding and agency",
    "You're building for a real community you actually care about",
    "You're willing to hear 'no' if an approach would cause harm",
    "You understand that ethics are design constraints, not marketing",
    "You can work iteratively and accept that some things are experiments"
  ];

  const redFlags = [
    "Looking for tools that maximize engagement through manipulation",
    "Want to build systems designed to destabilize users for profit",
    "Resistant to explicit ethical boundaries or safeguards",
    "Seeking technology for surveillance, psychological warfare, or coercion",
    "Framing extraction as 'disruption' or 'innovation'"
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
                What We Build
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Apex Omnis is a creative-technical studio. We build tools, prototypes, and experiences with people who want technology to serve human life—not extract from it.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-semibold">
                We're an emerging studio. Some projects are experimental. We say so when they are.
              </p>
            </motion.div>

            {/* What We Offer */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
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
                  <h3 className="text-2xl font-bold">We Work With People Who...</h3>
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
                  <h3 className="text-2xl font-bold">We Don't Build For...</h3>
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

            {/* Studio Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto p-8 rounded-lg border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    An Emerging Studio
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Apex Omnis is in its early phase—exploring what ethical production looks like in practice. We work directly with collaborators, not at scale. Some projects are functional tools; others are experiments to test whether an idea actually works.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    This means <strong className="text-foreground">honest conversation</strong> about what's possible, what's experimental, and what the real constraints are. We don't market prototypes as finished platforms.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    If something we're building drifts toward harm, our obligation is to intervene—by redesigning, constraining, or shutting it down. That's not a slogan; it's a design requirement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-bold text-center mb-12">How Collaborations Work</h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 font-bold text-white">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Conversation</h4>
                      <p className="text-muted-foreground">
                        We start by understanding what you're trying to build and why. What's the actual problem? Who does it serve? What are the ethical considerations? This isn't a sales call—it's figuring out whether there's a real fit.
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
                      <h4 className="text-xl font-bold mb-2">Design & Boundaries</h4>
                      <p className="text-muted-foreground">
                        We map the project together—what we're building, what it's for, what it's explicitly NOT for. Ethical boundaries get documented upfront, not added later as marketing. This is where we decide if this is a prototype, experiment, or production-ready tool.
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
                      <h4 className="text-xl font-bold mb-2">Build & Test</h4>
                      <p className="text-muted-foreground">
                        Development is collaborative. You're involved in testing and feedback. We use AI-assisted tools where they help, but the goal is something that works in the real world—not impressive demos that fail in practice.
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
                      <h4 className="text-xl font-bold mb-2">Deploy & Course-Correct</h4>
                      <p className="text-muted-foreground">
                        When something goes into the world, we watch how it actually gets used. If it drifts toward harm—even unintentionally—we redesign, constrain, or shut it down. This isn't failure; it's the process working.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scope & Investment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">On Scope & Investment</h3>
                    <p className="text-muted-foreground mb-4">
                      Every project is different. A small prototype to test an idea has different requirements than a production-ready tool for an institution. We don't publish pricing because the honest answer is: it depends on what you're actually trying to do.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      What we can say: <strong className="text-foreground">we're not optimizing for volume.</strong> We work on fewer projects with more depth. If you need something cheap and fast, there are agencies for that. If you need something built with care, let's talk.
                    </p>
                    <p className="text-muted-foreground">
                      Conversations about scope happen early and honestly. If a project isn't a good fit—for either of us—we'll say so.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Start a Conversation</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                  If you're working on something that aligns with our approach, we'd like to hear about it.
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Tell us what you're trying to build and why it matters. We read everything.
                </p>
              </div>
              <ClientApplicationForm />
            </motion.div>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur">
                <h3 className="text-2xl font-bold mb-6 text-center">What Happens After You Reach Out</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-4 font-bold text-white">
                      1
                    </div>
                    <h4 className="font-bold mb-2">We Read & Consider</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      We look for alignment with how we work—not just project fit, but ethical fit. We take this seriously.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-500">
                      <Clock className="w-3 h-3" />
                      Usually within a few days
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-4 font-bold text-white">
                      2
                    </div>
                    <h4 className="font-bold mb-2">Conversation (If Aligned)</h4>
                    <p className="text-sm text-muted-foreground">
                      If there's potential alignment, we'll have a real conversation about what you're trying to do and whether we can help.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-4 font-bold text-white">
                      3
                    </div>
                    <h4 className="font-bold mb-2">Honest Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll tell you what we think—whether the project makes sense, what the real constraints are, and whether we're the right people for it.
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-foreground">Note:</strong> If we're not the right fit, we'll say so honestly. We may suggest alternative approaches or point you toward other resources.
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
