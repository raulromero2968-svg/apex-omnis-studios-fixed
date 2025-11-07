import { ProjectPage } from "@/components/ProjectPage";

export default function MuseumTracker() {
  return (
    <ProjectPage
      title="Museum Tracker System"
      subtitle="Automated event tracking system for NYC museums with unified Notion workspace"
      heroImage="/museum-tracker-hero-v2.png"
      problem="NYC museums needed a centralized way to track events across multiple venues. Manual data entry was time-consuming, prone to errors, and made it difficult to identify trends or coordinate programming across institutions."
      solution="We built an automated event tracking system that consolidates event data from multiple sources into a unified Notion workspace. The system features filtered dashboards, automated reporting, and real-time event statistics with calendar visualization."
      techStack={[
        "Zapier",
        "Notion API",
        "API Integration",
        "Automated Workflows",
        "Data Consolidation",
        "Dashboard Design",
      ]}
      outcomes={[
        "Consolidated 82+ events from multiple museums",
        "Automated event data collection and updates",
        "Real-time event statistics and trend visualization",
        "Filterable dashboards by venue and date",
        "Reduced manual data entry by 90%",
      ]}
      gallery={[
        {
          src: "/museum-tracker-gallery-1-v2.png",
          alt: "Automation Architecture",
          caption: "Zapier workflow architecture connecting museum websites to Notion database",
        },
        {
          src: "/museum-tracker-gallery-2-v2.png",
          alt: "Event Dashboard",
          caption: "Museum event tracking dashboard with filtered views and automation status",
        },
      ]}
    />
  );
}
