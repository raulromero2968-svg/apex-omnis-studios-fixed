import { motion } from "framer-motion";
import { Search, Lightbulb, Code, Rocket, TrendingUp } from "lucide-react";

export function HowWeWorkSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn your workflow, pain points, and goals",
      icon: Search
    },
    {
      number: "02",
      title: "Strategy",
      description: "Design automation that fits your unique needs",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "Build",
      description: "Develop with AI-powered tools and best practices",
      icon: Code
    },
    {
      number: "04",
      title: "Launch",
      description: "Deploy and train you on your new system",
      icon: Rocket
    },
    {
      number: "05",
      title: "Optimize",
      description: "Refine based on real-world usage and feedback",
      icon: TrendingUp
    }
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
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process that delivers intelligent automation tailored to your community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur hover:bg-card/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="text-3xl font-bold bg-gradient-to-br from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold">{step.title}</h3>
                
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-400/50 to-purple-600/50 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
