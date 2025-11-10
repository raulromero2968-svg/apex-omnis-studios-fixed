import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How is this different from hiring a freelancer or agency?",
      answer: "We leverage 6 leading AI tools (Manus, Claude, ChatGPT, Gemini, Devin, Copilot) to deliver in days what takes freelancers weeks. You get enterprise-grade automation at a fraction of the cost, with built-in best practices and continuous optimization."
    },
    {
      question: "Can I customize the UI themes and branding?",
      answer: "Absolutely! Every tool includes 5+ theme options (Dark Mode, Light Mode, Cyberpunk, Pink, Professional) and full brand customization. You control colors, logos, layouts—everything adapts to your identity."
    },
    {
      question: "Do these tools work with my existing systems?",
      answer: "Yes. We integrate with 10+ platforms including Zapier, Google Workspace, Stripe, Airtable, and more. If you use Canvas, Moodle, Blackboard, or Aeries for education, we connect seamlessly. For gaming businesses, we support TCGplayer, eBay, and major marketplaces."
    },
    {
      question: "What if I want to build this myself?",
      answer: "You absolutely can! But consider: our systems involve 47-step Zapier workflows, multi-marketplace API integrations, AI content pipelines with human review checkpoints, and geospatial analysis algorithms. Most solo builders spend 6-12 months and $10K+ in tools/training. We deliver in 2-4 weeks for a fraction of that cost."
    },
    {
      question: "How do you prevent these tools from being used unethically?",
      answer: "We build anti-abuse safeguards directly into every system. Event trackers are personal-use only (no bulk scraping). Portfolio tools are for collectors, not inventory flippers. Content automation includes spam prevention and authenticity checks. We serve communities, not exploiters."
    }
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
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

          <div className="mt-8 text-center">
            <Link href="/faq">
              <a className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View all FAQs →
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
