import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Lightbulb, Hammer, Rocket, TrendingUp } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your needs, pain points, and goals. Whether you're a gamer, teacher, or creative, we listen first.",
    icon: Search,
    color: "cyan"
  },
  {
    number: "02",
    title: "Strategy",
    description: "We design a custom automation strategy tailored to your specific workflow, leveraging our multi-AI stack for optimal results.",
    icon: Lightbulb,
    color: "purple"
  },
  {
    number: "03",
    title: "Build",
    description: "Our team develops your solution with clean code, intuitive UI, and robust integrations. You'll see progress every step of the way.",
    icon: Hammer,
    color: "cyan"
  },
  {
    number: "04",
    title: "Launch",
    description: "We deploy your system, train you on its features, and ensure everything runs smoothly. Your success is our success.",
    icon: Rocket,
    color: "purple"
  },
  {
    number: "05",
    title: "Optimize",
    description: "We don't disappear after launch. Continuous improvement, support, and optimization keep your system performing at its best.",
    icon: TrendingUp,
    color: "cyan"
  }
];

export function HowWeWorkSection() {
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
          How We Work
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A proven process that turns your ideas into powerful automation systems
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-cyan-500/50">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color === 'cyan' ? 'from-cyan-400 to-cyan-600' : 'from-purple-400 to-purple-600'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-muted-foreground">{step.number}</span>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          Every project is unique, but our process ensures consistent quality, clear communication, and measurable results. We're not just building software—we're building partnerships.
        </p>
      </motion.div>
    </section>
  );
}
