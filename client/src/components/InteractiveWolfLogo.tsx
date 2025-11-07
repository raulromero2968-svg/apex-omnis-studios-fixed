import { motion } from "framer-motion";

export default function InteractiveWolfLogo() {
  return (
    <motion.div
      className="relative w-48 h-48 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src="/apex-wolf-logo.png"
        alt="Apex Omnis Studios Wolf Logo"
        className="w-full h-full object-contain"
        animate={{
          filter: [
            "drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))",
            "drop-shadow(0 0 30px rgba(123, 44, 191, 0.5))",
            "drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
