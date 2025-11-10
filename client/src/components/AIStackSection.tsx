import { motion } from "framer-motion";
import { Cpu, BookOpen, MessageSquare, Sparkles, Code2, Briefcase } from "lucide-react";

export function AIStackSection() {
  const aiTools = [
    { name: "Manus", role: "Web development & automation", icon: Cpu },
    { name: "Claude", role: "Deep research & analysis", icon: BookOpen },
    { name: "ChatGPT", role: "Content generation & ideation", icon: MessageSquare },
    { name: "Gemini", role: "Multimodal AI & vision", icon: Sparkles },
    { name: "Devin", role: "Software engineering", icon: Code2 },
    { name: "Copilot", role: "Productivity & coding", icon: Briefcase }
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Powered by Leading AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage the best AI tools to deliver speed and quality that solo developers can't match
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-16 h-16 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <tool.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="font-semibold text-foreground">{tool.name}</div>
              <div className="text-xs text-muted-foreground">{tool.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
