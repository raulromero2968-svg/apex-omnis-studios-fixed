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
        {/* Outer holographic glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-lg opacity-0 blur-lg"
          style={{
            background: isOutline 
              ? "linear-gradient(135deg, #00f5ff 0%, #7b2cbf 50%, #ff006e 100%)"
              : "linear-gradient(135deg, #00b4d8 0%, #0077b6 50%, #7b2cbf 100%)",
          }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Inner shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-md opacity-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(0, 245, 255, 0.4) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          whileHover={{ 
            opacity: 1,
            backgroundPosition: ["0% 0%", "200% 0%"],
          }}
          transition={{ 
            opacity: { duration: 0.2 },
            backgroundPosition: { duration: 1.5, repeat: Infinity, ease: "linear" }
          }}
        />
        
        <Button 
          ref={ref} 
          className={`relative ${className} transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50`} 
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
