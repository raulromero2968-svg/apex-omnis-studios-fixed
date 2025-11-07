import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, Info, Briefcase, Users, Network, Mail } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  section: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: <Home className="w-4 h-4" />, section: "#" },
  { id: "about", label: "About", icon: <Info className="w-4 h-4" />, section: "#about" },
  { id: "projects", label: "Projects", icon: <Briefcase className="w-4 h-4" />, section: "#projects" },
  { id: "services", label: "Services", icon: <Briefcase className="w-4 h-4" />, section: "#services" },
  { id: "clients", label: "Clients", icon: <Users className="w-4 h-4" />, section: "#clients" },
  { id: "ecosystem", label: "Ecosystem", icon: <Network className="w-4 h-4" />, section: "#ecosystem" },
  { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" />, section: "#contact" },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero section
      setIsVisible(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.section.replace('#', '')).filter(s => s);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section: string) => {
    if (section === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-cyan-500/5"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/apex-wolf-logo.png" alt="Apex Omnis" className="w-10 h-10" />
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent hidden md:block">
              Apex Omnis Studios
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id || (activeSection === '' && item.id === 'home');
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleClick(item.section)}
                  className={`relative px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="text-sm font-medium hidden lg:inline">{item.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg border border-cyan-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
