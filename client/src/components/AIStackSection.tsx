import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, Database, Eye, Code, Sparkles } from "lucide-react";

const aiTools = [
  {
    name: "Manus",
    description: "Web development & automation",
    icon: Code,
    color: "cyan",
    gradient: "from-cyan-400 to-cyan-600"
  },
  {
    name: "Claude",
    description: "Deep research & analysis",
    icon: Brain,
    color: "purple",
    gradient: "from-purple-400 to-purple-600"
  },
  {
    name: "Maple",
    description: "Data processing & visualization",
    icon: Database,
    color: "green",
    gradient: "from-green-400 to-green-600"
  },
  {
    name: "Google Gemini",
    description: "Multimodal AI & vision",
    icon: Eye,
    color: "blue",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    name: "Devin AI",
    description: "Software engineering",
    icon: Bot,
    color: "orange",
    gradient: "from-orange-400 to-orange-600"
  },
  {
    name: "Microsoft Copilot",
    description: "Productivity & coding",
    icon: Sparkles,
    color: "indigo",
    gradient: "from-indigo-400 to-indigo-600"
  }
];

export function AIStackSection() {
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
          Powered by Leading AI
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We leverage the best AI tools available to deliver exceptional automation solutions
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {aiTools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-cyan-500/50 h-full">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          By combining multiple AI systems, we create solutions that are more powerful, flexible, and reliable than any single tool could provide. Each AI brings unique strengths to your project.
        </p>
      </motion.div>
    </section>
  );
}
