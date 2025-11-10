import { ConstellationBackground } from "@/components/ConstellationBackground";
import { motion } from "framer-motion";
import { Shield, Heart, Users, TrendingUp } from "lucide-react";

export default function Ethics() {
  const principles = [
    {
      icon: Shield,
      title: "Anti-Scalper Technology",
      description: "Our tools are designed for personal use by collectors and enthusiasts, not bulk operations. Event trackers limit tracking scope, portfolio tools focus on personal collections, and content systems include spam prevention. We actively prevent exploitation of communities we serve."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Every system we build strengthens communities rather than extracting value from them. We prioritize authentic engagement over manipulation, education over exploitation, and long-term relationships over short-term profits."
    },
    {
      icon: Users,
      title: "Accessibility & Fairness",
      description: "Powerful automation shouldn't be exclusive to those with deep pockets or technical expertise. We make enterprise-grade tools accessible to teachers, gamers, and creatives who want to work smarter without losing their humanity."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "We help you build systems that scale sustainably—not through aggressive tactics, but through genuine value creation. Our tools save time so you can focus on what matters: serving your community better."
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
                Our Commitment to the Community
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We build intelligent automation for collectors, educators, and creatives—not exploiters. Here's how we protect the communities we serve.
              </p>
            </motion.div>

            {/* Core Principles */}
            <div className="grid gap-8 md:grid-cols-2 mb-16">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Detailed Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-invert max-w-none"
            >
              <div className="p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur space-y-6 text-muted-foreground">
                <h2 className="text-2xl font-bold text-foreground">Why This Matters</h2>
                
                <p>
                  The TCG community has been hurt by scalpers using bots to buy out limited releases. Teachers are overwhelmed by administrative work that pulls them away from students. Creatives struggle to organize their ideas and turn them into reality.
                </p>

                <p>
                  We see automation as a tool for empowerment, not exploitation. Our systems are designed to:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Help collectors track events they genuinely want to attend—not scrape every listing for resale</li>
                  <li>Give teachers time back so they can focus on students—not replace human connection with AI</li>
                  <li>Organize creative workflows so ideas become reality—not spam social media with low-quality content</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8">Our Promise</h2>

                <p>
                  We will never build tools that harm the communities we serve. If a feature could be abused for scalping, manipulation, or exploitation, we either don't build it or we add safeguards that prevent misuse.
                </p>

                <p>
                  This means some potential clients will walk away. That's okay. We'd rather serve 100 genuine community members than enable one bad actor.
                </p>

                <p className="font-semibold text-foreground">
                  If you're here to build something that helps people, we're here to help you. If you're here to exploit communities, this isn't the place for you.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8">Technical Safeguards</h2>

                <p>
                  We implement specific technical measures to prevent misuse of our automation tools:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Rate Limiting:</strong> Event trackers are limited to reasonable tracking volumes that serve personal use, not bulk scraping operations</li>
                  <li><strong>Human Review Checkpoints:</strong> Content automation systems require human approval before publishing, preventing spam and maintaining quality</li>
                  <li><strong>Usage Monitoring:</strong> We actively monitor for patterns that indicate scalping or exploitation and reserve the right to terminate service</li>
                  <li><strong>API Restrictions:</strong> Our integrations respect platform terms of service and implement delays that prevent aggressive automation</li>
                  <li><strong>Collection Size Limits:</strong> Portfolio tools focus on personal collections (hundreds of items) not commercial inventory (thousands)</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8">Community Case Studies</h2>

                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-cyan-500">
                    <h3 className="font-bold text-foreground mb-2">TCG Collectors: Anti-Scalper Positioning</h3>
                    <p>
                      When designing our Event Tracker Pro, we deliberately limited the scope to prevent scalpers from using it to monitor every tournament and prerelease for resale opportunities. The tool tracks events you genuinely plan to attend, not every listing in a 500-mile radius. This protects local game stores and ensures cards go to players, not flippers.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-purple-500">
                    <h3 className="font-bold text-foreground mb-2">Teachers: Preserving Human Connection</h3>
                    <p>
                      Our Classroom Automation Hub saves teachers time on administrative tasks—grading, attendance, email templates—but it never replaces the human element of teaching. We don't offer AI-generated lesson delivery or automated student feedback. The time saved goes back to what matters: face-to-face interaction with students.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-pink-500">
                    <h3 className="font-bold text-foreground mb-2">Creatives: Quality Over Quantity</h3>
                    <p>
                      Our Project Idea Organizer helps creatives turn scattered thoughts into actionable plans, but we don't build tools for mass content generation or social media spam. Every piece of content should have intention and value. We help you organize better, not spam faster.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mt-8">Transparency & Accountability</h2>

                <p>
                  We believe in transparent business practices:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Open Pricing:</strong> No hidden fees, no bait-and-switch tactics. You know exactly what you're paying for.</li>
                  <li><strong>Clear Terms:</strong> Our acceptable use policy explicitly prohibits scalping, spam, and community exploitation.</li>
                  <li><strong>Right to Refuse Service:</strong> We reserve the right to terminate service for users who violate our community principles.</li>
                  <li><strong>No Dark Patterns:</strong> Our tools are designed to help you work smarter, not trick you into subscriptions or upsells.</li>
                  <li><strong>Data Privacy:</strong> Your collection data, lesson plans, and creative projects are yours. We don't sell your data or use it for training AI models.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8">Join the Movement</h2>

                <p>
                  We're building a community of ethical automation users who believe technology should serve people, not exploit them. If you share these values:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You're a collector who wants to enjoy your hobby without competing against bots</li>
                  <li>You're a teacher who wants more time for students, not more administrative burden</li>
                  <li>You're a creative who wants to build something meaningful, not spam the internet</li>
                </ul>

                <p className="font-semibold text-foreground mt-4">
                  Then you're in the right place. Let's build something better together.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
