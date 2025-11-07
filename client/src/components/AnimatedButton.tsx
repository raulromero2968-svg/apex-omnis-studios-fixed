import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { forwardRef, ComponentPropsWithoutRef } from "react";

export const AnimatedButton = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<typeof Button>>(
  ({ children, className, variant, ...props }, ref) => {
    const isOutline = variant === "outline";
    
    return (
      <motion.div
        className="relative inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Holographic glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-md opacity-0 blur-xl"
          style={{
            background: isOutline 
              ? "linear-gradient(45deg, rgba(6, 182, 212, 0.6), rgba(168, 85, 247, 0.6))"
              : "linear-gradient(45deg, rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.8))",
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <Button 
          ref={ref} 
          className={`relative ${className}`} 
          variant={variant}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
