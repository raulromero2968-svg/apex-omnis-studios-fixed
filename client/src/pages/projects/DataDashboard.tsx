import { ProjectPage } from "@/components/ProjectPage";

export default function DataDashboard() {
  return (
    <ProjectPage
      title="TCG Portfolio Dashboard"
      subtitle="Personal collection analytics for tracking card values, market trends, and portfolio performance"
      heroImage="/tcg-portfolio-hero-mockup-v1.png"
      problem="TCG collectors invest thousands of dollars in cards but lack tools to track their portfolio's true value. Market prices fluctuate constantly across multiple games (Magic: The Gathering, Pokémon, Yu-Gi-Oh!, Flesh and Blood), and without real-time data, collectors can't make informed decisions about when to buy, sell, or hold. Spreadsheets are tedious, error-prone, and quickly become outdated. Manual price checking across TCGPlayer, eBay, and CardMarket takes hours every week. Collectors need a unified dashboard that shows their collection's performance at a glance and identifies which cards are gaining or losing value before market opportunities disappear."
      solution="We built a personal TCG portfolio dashboard that transforms your collection data into actionable market insights with real-time valuations across multiple games and marketplaces. The platform integrates with TCGPlayer, eBay, CardMarket, and other market data sources to provide up-to-the-minute card valuations. Track your portfolio's total value, see which cards are trending up or down, and get alerts when cards hit your target prices. Visualize your collection by set, rarity, condition, and game type. Identify undervalued cards in your collection before the market catches up. Make smarter collecting decisions with data-driven insights instead of gut feelings."
      scaleMetrics={[
        { label: "Cards Tracked", value: "500+" },
        { label: "Market Data Points Daily", value: "10,000+" },
        { label: "Price Updates Per Hour", value: "Real-time" },
      ]}
      beforeAfter={{
        before: "Manually checking card prices across 5+ websites, updating spreadsheets every week, missing price spikes because you didn't check in time, guessing which cards to sell based on outdated data, spending 3+ hours weekly on portfolio management.",
        after: "Real-time portfolio value updated automatically, instant alerts when cards hit target prices, visual trend analysis showing which cards are hot, identify undervalued cards before the market moves, spend 10 minutes weekly reviewing insights instead of 3+ hours searching.",
      }}
      techStack={[
        "React + TypeScript",
        "TCGPlayer API",
        "eBay API",
        "CardMarket Integration",
        "Real-time Data Pipelines",
        "Portfolio Analytics Engine",
      ]}
      systemComplexity={[
        {
          title: "Multi-Marketplace Data Aggregation",
          description: "Real-time integration with TCGPlayer, eBay, CardMarket, and 5+ other marketplaces. Processes 10,000+ price data points daily across Magic: The Gathering, Pokémon, Yu-Gi-Oh!, and Flesh and Blood. Handles API rate limits, data normalization across different formats, and automatic fallback when sources are unavailable.",
        },
        {
          title: "Intelligent Price Tracking & Alerts",
          description: "Monitors price movements for 500+ cards in your collection with hourly updates. Detects price spikes (20%+ increase in 24 hours), identifies trending cards before they peak, and sends real-time alerts via email and push notifications. Includes historical price charts showing 30-day, 90-day, and 1-year trends.",
        },
        {
          title: "Portfolio Analytics & Insights",
          description: "Calculates total portfolio value, ROI by card and set, best/worst performers, and collection diversity metrics. Identifies undervalued cards (market price below trend), suggests sell opportunities (cards at peak value), and tracks collection growth over time. Generates monthly performance reports.",
        },
        {
          title: "Condition-Based Valuation System",
          description: "Adjusts card values based on condition (Near Mint, Lightly Played, Moderately Played, Heavily Played) using market-specific grading standards. Tracks condition degradation over time and suggests protective storage for high-value cards. Supports graded cards (PSA, BGS, CGC) with premium pricing.",
        },
      ]}
      outcomes={[
        "Track 500+ cards across 10,000+ daily market data points",
        "Real-time portfolio valuation updated hourly",
        "Identify undervalued cards before market price spikes",
        "Automated price alerts for buy/sell opportunities",
        "Save 3+ hours weekly on manual price checking",
      ]}
      gallery={[
        {
          src: "/tcg-portfolio-gallery-1-v1.png",
          alt: "Technical Architecture",
          caption: "Multi-marketplace data aggregation system processing 10,000+ daily price points with real-time analytics engine",
        },
        {
          src: "/tcg-portfolio-gallery-2-v1.png",
          alt: "Portfolio Analytics Dashboard",
          caption: "Real-time portfolio dashboard showing card values, market trends, and performance metrics across multiple TCG games",
        },
      ]}
      ethicsNote="This tool is designed for personal portfolio management by collectors who want to understand their collection's value. It is not intended for bulk inventory tracking by resellers, market manipulation, or scalping operations. We believe in transparent pricing and fair access to market data for all collectors."
    />
  );
}
