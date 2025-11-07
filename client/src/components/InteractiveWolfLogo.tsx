import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ConstellationNode {
  id: string;
  x: number;
  y: number;
  section: string;
  title: string;
  description: string;
  icon: string;
}

const nodes: ConstellationNode[] = [
  { id: "about", x: 20, y: 15, section: "#about", title: "About", description: "Learn about Apex Omnis Studios", icon: "ℹ️" },
  { id: "projects", x: 50, y: 10, section: "#projects", title: "Projects", description: "View our recent work", icon: "🚀" },
  { id: "services", x: 80, y: 20, section: "#services", title: "Services", description: "What we build for you", icon: "🛠️" },
  { id: "clients", x: 70, y: 50, section: "#clients", title: "Clients", description: "Who we serve", icon: "👥" },
  { id: "ecosystem", x: 40, y: 70, section: "#ecosystem", title: "Ecosystem", description: "The Apex network", icon: "🌐" },
  { id: "contact", x: 15, y: 55, section: "#contact", title: "Contact", description: "Let's build together", icon: "💬" },
];

export default function InteractiveWolfLogo() {
  const [hoveredNode, setHoveredNode] = useState<ConstellationNode | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleNodeClick = (node: ConstellationNode) => {
    const element = document.querySelector(node.section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Wolf Logo Image */}
      <div className="relative">
        <img 
          src="/apex-wolf-logo.png" 
          alt="Apex Omnis Wolf" 
          className="relative w-full drop-shadow-2xl animate-float"
        />
        
        {/* Constellation Nodes Overlay */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Connection Lines */}
          {nodes.map((node, i) => {
            const nextNode = nodes[(i + 1) % nodes.length];
            return (
              <motion.line
                key={`line-${node.id}`}
                x1={node.x}
                y1={node.y}
                x2={nextNode.x}
                y2={nextNode.y}
                stroke="url(#gradient)"
                strokeWidth="0.3"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            );
          })}
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Interactive Nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.15, type: "spring" }}
            onMouseEnter={() => !isTouchDevice && setHoveredNode(node)}
            onMouseLeave={() => !isTouchDevice && setHoveredNode(null)}
            onClick={() => handleNodeClick(node)}
            whileHover={{ scale: isTouchDevice ? 1 : 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              {/* Node Circle */}
              <motion.div
                className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 shadow-lg shadow-cyan-500/50"
                animate={{
                  boxShadow: hoveredNode?.id === node.id 
                    ? "0 0 20px rgba(6, 182, 212, 0.8)" 
                    : "0 0 10px rgba(6, 182, 212, 0.5)",
                }}
              />
              
              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hover Preview Card (Desktop Only) */}
      {!isTouchDevice && hoveredNode && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 z-50 w-64"
        >
          <Card className="bg-card/95 backdrop-blur border-cyan-500/30 shadow-xl shadow-cyan-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span>{hoveredNode.icon}</span>
                {hoveredNode.title}
              </CardTitle>
              <CardDescription>{hoveredNode.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-xs text-muted-foreground">Click to navigate →</p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
