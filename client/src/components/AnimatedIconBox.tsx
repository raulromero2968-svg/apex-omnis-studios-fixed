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

// iOS-style solid colors for rounded square icons
const colorClasses = {
  cyan: "bg-gradient-to-br from-cyan-500 to-cyan-600",
  blue: "bg-gradient-to-br from-blue-500 to-blue-600",
  purple: "bg-gradient-to-br from-purple-500 to-purple-600",
  magenta: "bg-gradient-to-br from-pink-500 to-pink-600",
  teal: "bg-gradient-to-br from-teal-500 to-teal-600",
};

export function AnimatedIconBox({ 
  Icon, 
  color = "cyan",
  size = "md"
}: AnimatedIconBoxProps) {
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan;
  
  return (
    <motion.div 
      className={`${sizeClasses[size]} rounded-2xl ${colorClass} flex items-center justify-center shadow-lg`}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Icon className={`${iconSizes[size]} text-white`} strokeWidth={2.5} />
    </motion.div>
  );
}
