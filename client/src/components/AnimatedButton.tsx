import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { forwardRef, ComponentPropsWithoutRef } from "react";

export const AnimatedButton = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<typeof Button>>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button ref={ref} className={className} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
