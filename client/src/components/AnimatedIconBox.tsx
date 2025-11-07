import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconBoxProps {
  Icon: LucideIcon;
  gradient?: string;
  size?: "sm" | "md" | "lg";
  rotateDirection?: "left" | "right";
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

const iconSizes = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export function AnimatedIconBox({ 
  Icon, 
  gradient = "from-cyan-500 to-blue-600",
  size = "md",
  rotateDirection = "right"
}: AnimatedIconBoxProps) {
  const rotateValue = rotateDirection === "right" ? 5 : -5;
  
  return (
    <motion.div 
      className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-lg`}
      whileHover={{ 
        scale: 1.1, 
        rotate: rotateValue,
        boxShadow: "0 0 25px rgba(6, 182, 212, 0.6)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Icon className={`${iconSizes[size]} text-white`} />
    </motion.div>
  );
}
