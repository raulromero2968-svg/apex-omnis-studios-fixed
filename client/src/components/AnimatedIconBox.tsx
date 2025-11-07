import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconBoxProps {
  Icon: LucideIcon;
  color?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-14 h-14",
  lg: "w-16 h-16",
};

const iconSizes = {
  sm: "w-6 h-6",
  md: "w-7 h-7",
  lg: "w-8 h-8",
};

// Holographic gradient colors using Apex brand palette
const colorClasses = {
  cyan: "bg-gradient-to-br from-[#00D9FF] to-cyan-600",
  purple: "bg-gradient-to-br from-[#7B2CBF] to-purple-700",
};

const glowColors = {
  cyan: "0 10px 30px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)",
  purple: "0 10px 30px rgba(123, 44, 191, 0.6), 0 0 60px rgba(123, 44, 191, 0.3)",
};

export function AnimatedIconBox({ 
  Icon, 
  color = "cyan",
  size = "md"
}: AnimatedIconBoxProps) {
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan;
  
  const glowColor = glowColors[color as keyof typeof glowColors] || glowColors.cyan;
  
  return (
    <motion.div 
      className={`${sizeClasses[size]} rounded-2xl ${colorClass} flex items-center justify-center shadow-lg relative overflow-hidden`}
      whileHover={{ 
        scale: 1.1,
        boxShadow: glowColor
      }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(0, 217, 255, 0.2)",
          "0 0 30px rgba(123, 44, 191, 0.3)",
          "0 0 20px rgba(0, 217, 255, 0.2)",
        ]
      }}
      transition={{ 
        scale: { type: "spring", stiffness: 300, damping: 15 },
        boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {/* Holographic shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      />
      <Icon className={`${iconSizes[size]} text-white relative z-10`} strokeWidth={2.5} />
    </motion.div>
  );
}
