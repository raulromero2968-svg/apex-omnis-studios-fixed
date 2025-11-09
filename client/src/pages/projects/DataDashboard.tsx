import { ProjectPage } from "@/components/ProjectPage";

export default function DataDashboard() {
  return (
    <ProjectPage
      title="TCG Portfolio Dashboard"
      subtitle="Personal collection analytics for tracking card values, market trends, and portfolio performance"
      heroImage="/tcg-portfolio-hero-v1.png"
      problem="TCG collectors invest thousands of dollars in cards but lack tools to track their portfolio's true value. Market prices fluctuate constantly, and without real-time data, collectors can't make informed decisions about when to buy, sell, or hold. Spreadsheets are tedious and quickly become outdated. Collectors need a simple way to monitor their collection's performance and identify which cards are gaining or losing value."
      solution="We built a personal TCG portfolio dashboard that transforms your collection data into actionable market insights. The platform integrates with TCGPlayer, eBay, and other market data sources to provide real-time card valuations. Track your portfolio's total value, see which cards are trending up or down, and get alerts when cards hit your target prices. Visualize your collection by set, rarity, condition, and game type. Make smarter collecting decisions with data-driven insights."
      techStack={[
        "React",
        "TypeScript",
        "TCGPlayer API",
        "Data Visualization",
        "Real-time Market Data",
        "Portfolio Analytics",
      ]}
      outcomes={[
        "Track portfolio value across 500+ cards in real-time",
        "Monitor market trends and price fluctuations daily",
        "Identify top-performing cards and hidden gems",
        "Set price alerts for buy/sell opportunities",
        "Visualize collection growth and ROI over time",
      ]}
      gallery={[
        {
          src: "/tcg-portfolio-gallery-1-v1.png",
          alt: "Technical Architecture",
          caption: "TCG portfolio platform architecture with market data integration and analytics engine",
        },
        {
          src: "/tcg-portfolio-gallery-2-v1.png",
          alt: "Portfolio Analytics Dashboard",
          caption: "Real-time portfolio dashboard showing card values, market trends, and performance metrics",
        },
      ]}
      ethicsNote="This tool is designed for personal portfolio management by collectors who want to understand their collection's value. It is not intended for bulk inventory tracking by resellers, market manipulation, or scalping operations. We believe in transparent pricing and fair access to market data for all collectors."
    />
  );
}
