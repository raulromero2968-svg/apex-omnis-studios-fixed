import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { forwardRef, ComponentPropsWithoutRef, Children, cloneElement, isValidElement } from "react";
import { ArrowRight } from "lucide-react";

export const AnimatedButton = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<typeof Button>>(
  ({ children, className, variant, ...props }, ref) => {
    const isOutline = variant === "outline";
    
    // Check if children already contains an arrow icon
    const hasArrow = typeof children === 'string' ? false : 
      Children.toArray(children).some(child => {
        if (!isValidElement(child)) return false;
        const props = child.props as any;
        return child.type === ArrowRight || props?.className?.includes('lucide-arrow-right');
      });
    
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
              ? "linear-gradient(135deg, #00D9FF 0%, #7B2CBF 50%, #7B2CBF 100%)"
              : "linear-gradient(135deg, #00D9FF 0%, #00D9FF 50%, #7B2CBF 100%)",
          }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Inner shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-md opacity-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.4) 50%, transparent 100%)",
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
          className={`relative ${className} transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 group`} 
          variant={variant}
          {...props}
        >
          {hasArrow ? (
            // If button already has an arrow, just render children as-is
            children
          ) : (
            // Otherwise, add animated arrow on hover
            <span className="flex items-center gap-2">
              {children}
              {/* Animated arrow that appears on hover */}
              <motion.span
                className="inline-flex"
                initial={{ x: -4, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
          )}
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
