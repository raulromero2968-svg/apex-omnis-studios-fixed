import { ProjectPage } from "@/components/ProjectPage";

export default function ProGradeTracker() {
  return (
    <ProjectPage
      title="ProGrade Tracker"
      subtitle="Sports Card Grading Pipeline Management & ROI Optimization"
      heroImage="/prograde-tracker-hero.png"
      problem="Sports card collectors and dealers were losing money on poor grading decisions, manually tracking submissions across multiple grading companies (PSA, BGS, CGC, SGC), and struggling to predict which cards would be worth the grading investment. With grading costs ranging from $15-$500+ per card and the difference between a PSA 9 and PSA 10 often worth thousands of dollars, collectors needed a data-driven system to maximize their grading ROI. Manual spreadsheet tracking led to missed submissions, incorrect declared values, and bad grading decisions that cost collectors 30% of potential profits."
      solution="We built ProGrade Tracker to automate the entire grading pipeline from submission to return. The system integrates market price data from eBay, PWCC, and 130 Point to calculate expected ROI for each card. AI-powered condition assessment analyzes card images to predict centering, corner sharpness, edge quality, and surface condition before submission. The platform tracks submissions across PSA, BGS, CGC, and SGC with real-time status updates, calculates insurance and shipping costs, and provides pop report integration to understand grade rarity. Collectors can organize bulk submissions, optimize which grading company to use for each card, and make data-driven decisions about which cards are worth grading."
      scaleMetrics={[
        { label: "Submissions Tracked Monthly", value: "500+" },
        { label: "Market Price Data Points", value: "50,000+" },
        { label: "Grading Companies Integrated", value: "4" },
      ]}
      beforeAfter={{
        before: "Manually tracking 15+ submissions across PSA, BGS, CGC, and SGC in spreadsheets. Guessing which cards to grade based on gut feel. Missing submission deadlines and incorrect declared values. Losing 30% of potential profits on bad grading decisions. Spending 10+ hours per month on pipeline management.",
        after: "Automated submission tracking across all major grading companies with real-time status updates. Data-driven grading decisions based on market analysis and AI condition assessment. 30% higher ROI on grading submissions. 10 hours saved monthly on pipeline management. 85% grade prediction accuracy before submission.",
      }}
      techStack={[
        "PSA/BGS/CGC/SGC API Integration",
        "Market Price Data (eBay, PWCC)",
        "Pop Report Scraping",
        "AI Image Analysis (Condition Assessment)",
        "ROI Calculator Engine",
        "Bulk Submission Organizer",
        "Insurance Calculator",
        "Submission Status Tracking",
      ]}
      systemComplexity={[
        {
          title: "Multi-Company Grading Pipeline",
          description: "Unified submission tracking across PSA, BGS, CGC, and SGC with status updates, turnaround time estimates, and bulk submission organization. Automatically calculates declared values and insurance costs based on market data. Handles 500+ submissions monthly with real-time status synchronization.",
        },
        {
          title: "Market Price Integration & ROI Calculator",
          description: "Real-time price data from eBay, PWCC, and 130 Point marketplaces integrated with pop report data to calculate expected ROI. Tracks PSA 9 vs PSA 10 premiums, grade distribution analysis, and historical price trends. Factors in grading cost, shipping, insurance, and turnaround time to provide accurate ROI predictions.",
        },
        {
          title: "AI Condition Assessment Engine",
          description: "Computer vision model analyzes uploaded card images to predict centering, corner sharpness, edge quality, and surface condition. Estimates likely grade before submission with 85% accuracy within 0.5 points. Helps collectors avoid wasting money on cards that won't grade well.",
        },
        {
          title: "Pop Report Analysis & Grade Rarity",
          description: "Integrates PSA and BGS population reports to calculate grade rarity and understand how scarcity affects value. Tracks how many PSA 10s exist for specific cards and monitors pop report changes over time. Helps collectors identify undervalued cards where a high grade would significantly increase value.",
        },
      ]}
      outcomes={[
        "Increased grading ROI by 30% through data-driven decisions",
        "Reduced submission errors by 90% with automated tracking",
        "Saved 10 hours per month on pipeline management",
        "Achieved 85% grade prediction accuracy with AI assessment",
        "Tracked 500+ submissions monthly across 4 grading companies",
        "Integrated 50,000+ market price data points for ROI calculations",
      ]}
      testimonial={{
        quote: "ProGrade Tracker completely changed how I approach grading. I used to guess which cards to send in and lost money on cards that came back as 9s when I needed 10s. Now I use the AI condition assessment and ROI calculator to make smart decisions. My grading ROI went up 30% in the first three months.",
        author: "Mike R.",
        role: "Sports Card Dealer, 200+ submissions/year",
      }}
      gallery={[
        {
          src: "/prograde-submission-dashboard.png",
          alt: "Submission Pipeline Dashboard",
          caption: "Unified submission tracking across PSA, BGS, CGC, and SGC with real-time status updates and turnaround time estimates",
        },
        {
          src: "/prograde-roi-calculator.png",
          alt: "ROI Calculator",
          caption: "Data-driven ROI calculator showing grading cost vs expected value increase with market premium analysis and pop report integration",
        },
        {
          src: "/prograde-condition-assessment.png",
          alt: "AI Condition Assessment",
          caption: "AI-powered grade prediction analyzing card centering, corners, edges, and surface with 85% accuracy before submission",
        },
        {
          src: "/prograde-market-analysis.png",
          alt: "Market Analysis Dashboard",
          caption: "Real-time market analysis showing PSA 9 vs 10 premiums, grade distribution, and historical price trends from eBay, PWCC, and 130 Point",
        },
      ]}
      ethicsNote="ProGrade Tracker is designed to help collectors make informed grading decisions, not to manipulate markets or encourage speculative bubbles. The tool emphasizes long-term value and smart investment decisions over short-term flipping. We believe in preserving the integrity of the sports card hobby while helping collectors maximize their returns through data-driven decision-making."
    />
  );
}
