import { ConstellationBackground } from "@/components/ConstellationBackground";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Getting Started",
      faqs: [
        {
          question: "How is this different from hiring a freelancer or agency?",
          answer: "We leverage 6 leading AI tools (Manus, Claude, ChatGPT, Gemini, Devin, Copilot) to deliver in days what takes freelancers weeks. You get enterprise-grade automation at a fraction of the cost, with built-in best practices and continuous optimization."
        },
        {
          question: "What's the typical timeline from first contact to launch?",
          answer: "Most projects launch in 2-4 weeks. Discovery takes 1-3 days, strategy and design 3-5 days, development 1-2 weeks, and launch/training 2-3 days. Complex integrations may take longer, but we move fast without sacrificing quality."
        },
        {
          question: "Do I need technical knowledge to work with you?",
          answer: "Not at all! We handle all the technical complexity. You just need to know your workflow and pain points. We'll guide you through everything else, from strategy to training on your new system."
        }
      ]
    },
    {
      category: "Customization & Features",
      faqs: [
        {
          question: "Can I customize the UI themes and branding?",
          answer: "Absolutely! Every tool includes 5+ theme options (Dark Mode, Light Mode, Cyberpunk, Pink, Professional) and full brand customization. You control colors, logos, layouts—everything adapts to your identity."
        },
        {
          question: "Do these tools work with my existing systems?",
          answer: "Yes. We integrate with 10+ platforms including Zapier, Google Workspace, Stripe, Airtable, and more. If you use Canvas, Moodle, Blackboard, or Aeries for education, we connect seamlessly. For gaming businesses, we support TCGplayer, eBay, and major marketplaces."
        },
        {
          question: "Can you add features that aren't shown in the portfolio?",
          answer: "Definitely! The portfolio shows examples, not limits. We build custom features based on your needs—whether that's specific integrations, unique workflows, or entirely new capabilities."
        }
      ]
    },
    {
      category: "Cost & Value",
      faqs: [
        {
          question: "What if I want to build this myself?",
          answer: "You absolutely can! But consider: our systems involve 47-step Zapier workflows, multi-marketplace API integrations, AI content pipelines with human review checkpoints, and geospatial analysis algorithms. Most solo builders spend 6-12 months and $10K+ in tools/training. We deliver in 2-4 weeks for a fraction of that cost."
        },
        {
          question: "How much does a typical project cost?",
          answer: "Project scope varies widely, so we provide custom quotes after discovery. As a rough guide: simple automation (event tracking, basic dashboards) starts around $2-5K. Complex systems (multi-platform integrations, AI pipelines) range $5-15K. Enterprise solutions are custom-priced."
        },
        {
          question: "Do you offer payment plans or subscriptions?",
          answer: "Yes! We offer flexible payment options including milestone-based payments (50% upfront, 50% at launch) and monthly subscriptions for ongoing support and optimization. We'll find a structure that works for your budget."
        }
      ]
    },
    {
      category: "Ethics & Community",
      faqs: [
        {
          question: "How do you prevent these tools from being used unethically?",
          answer: "We build anti-abuse safeguards directly into every system. Event trackers are personal-use only (no bulk scraping). Portfolio tools are for collectors, not inventory flippers. Content automation includes spam prevention and authenticity checks. We serve communities, not exploiters."
        },
        {
          question: "What happens if someone tries to misuse the tools you build?",
          answer: "We include usage limits, rate limiting, and monitoring in our systems. If we discover misuse, we work with clients to correct it. If they refuse, we terminate support. We'd rather lose a client than enable harm to communities we serve."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      faqs: [
        {
          question: "What kind of support do you provide after launch?",
          answer: "All projects include 30 days of post-launch support (bug fixes, training, minor adjustments). After that, you can choose ongoing support plans ($200-500/month) or pay-as-you-go for updates and new features."
        },
        {
          question: "What if I need changes or updates later?",
          answer: "We're here for the long term! You can request updates anytime. Small tweaks (UI changes, content updates) are quick and affordable. Larger features (new integrations, major workflows) are scoped and quoted separately."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ConstellationBackground />
      
      <div className="relative z-10">
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about working with Apex Omnis Studios
              </p>
            </motion.div>

            <div className="space-y-12">
              {faqCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-cyan-400">
                    {category.category}
                  </h2>
                  
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${catIndex}-${faqIndex}`}
                        className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                We're here to help! Reach out and we'll get back to you within 24 hours.
              </p>
              <a
                href="/#contact"
                className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
