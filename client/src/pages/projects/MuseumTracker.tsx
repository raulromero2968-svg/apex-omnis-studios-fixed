import { ProjectPage } from "@/components/ProjectPage";

export default function MuseumTracker() {
  return (
    <ProjectPage
      title="Museum Tracker System"
      subtitle="Automated event tracking system for NYC museums with unified Notion workspace"
      heroImage="/museum-tracker-interface.png"
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
          src: "/museum-tracker-interface.png",
          alt: "Event Dashboard",
          caption: "Unified Notion workspace with event stats and calendar",
        },
        {
          src: "/museum-tracker-interface.png",
          alt: "Automation Workflow",
          caption: "Zapier workflow for automated event data collection",
        },
      ]}
    />
  );
}
