import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I customize the look and feel of my tools?",
    answer: "Absolutely! All our tools come with customizable themes including Dark Mode, Light Mode, Cyberpunk, Pink, and Professional styles. You can switch themes instantly to match your brand or personal preference. We believe your tools should reflect your identity, not force you into a generic design."
  },
  {
    question: "How do you protect my ideas from being copied?",
    answer: "We build systems with such depth and complexity that copying becomes overwhelming. Each project includes 47+ step workflows, multi-marketplace integrations, AI review pipelines, and custom automation that would cost significantly more to replicate than subscribing to our service. Plus, we document the scale and architecture openly—when people see what's really involved, they realize DIY isn't economical."
  },
  {
    question: "Do you only work with TCG collectors?",
    answer: "No! While we started with TCG tools, we serve three core audiences: Gamers (TCG collectors, tournament organizers, gaming businesses), Teachers (classroom automation, lesson planning), and Creatives (entrepreneurs, content creators, idea organizers). If you're in competitive gaming, education, or creative work, we can help."
  },
  {
    question: "What AI tools do you actually use?",
    answer: "We leverage a multi-AI stack including Manus (web development), Claude (research & analysis), Maple (data processing), Google Gemini (multimodal AI), Devin AI (software engineering), and Microsoft Copilot (productivity). By combining multiple AI systems, we create solutions more powerful than any single tool could provide."
  },
  {
    question: "How is this different from hiring a freelance developer?",
    answer: "We're not just developers—we're automation specialists with deep community understanding. As a former business teacher turned tech expert, I know what gamers, educators, and creatives actually need (not what developers think they need). Plus, our multi-AI stack means faster delivery, better quality, and ongoing optimization that freelancers can't match."
  },
  {
    question: "What if I need help with something adjacent to your main tools?",
    answer: "We're flexible! For example, if you run a gaming tournament rental business (like LAN Hero) or need tools for esports events, we can adapt our systems. Our 'Gaming Tools' category covers TCG, esports, gaming cafes, and rental businesses—anything in competitive gaming communities."
  },
  {
    question: "Do you have an anti-scalper policy?",
    answer: "Yes, and it's central to everything we do. We build for collectors, not exploiters. Our tools are designed for personal use, community building, and ethical business—never for bulk scalping, market manipulation, or harming communities. Read our full ethics statement to understand our commitment."
  },
  {
    question: "Can you help me turn my scattered ideas into a real business?",
    answer: "That's exactly what our Project Idea Organizer and Quick Launch Website Builder are for! We help creatives (like your friends in finance, IT, and engineering) organize messy ideas into actionable plans, then build the actual systems to execute. Think of us as your 'idea to launch' partner."
  },
  {
    question: "How long does it take to build a custom tool?",
    answer: "It depends on complexity, but our Quick Launch Website Builder can turn concepts into live websites in 24 hours. More complex automation systems (like event tracking or portfolio dashboards) typically take 2-4 weeks from discovery to launch. We prioritize speed without sacrificing quality."
  },
  {
    question: "What happens after you build my tool?",
    answer: "We don't disappear! Our process includes training, support, and continuous optimization. We monitor performance, gather feedback, and make improvements over time. Your success is our success—we're building partnerships, not just delivering projects."
  },
  {
    question: "Do I need technical knowledge to use your tools?",
    answer: "Not at all. We design for real people, not developers. If you can use a smartphone, you can use our tools. Everything is intuitive, well-documented, and backed by support. We handle the complex technical stuff so you can focus on your passion."
  },
  {
    question: "Can you integrate with tools I'm already using?",
    answer: "Yes! We specialize in integrations. Whether it's LMS platforms (Canvas, Moodle, Blackboard), grading systems (Aeries), marketplace APIs (TCGPlayer, eBay), or workflow tools (Zapier, Make), we connect everything into one seamless system. Tell us what you use, and we'll make it work together."
  }
];

export function FAQSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        className="text-center space-y-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real questions from real conversations with gamers, teachers, and creatives
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur hover:bg-card/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground">
          Have a question not answered here?{" "}
          <a href="#contact" className="text-cyan-400 hover:text-cyan-300 underline">
            Get in touch
          </a>
          {" "}and let's talk.
        </p>
      </motion.div>
    </section>
  );
}
