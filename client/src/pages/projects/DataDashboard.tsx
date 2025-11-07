import { ProjectPage } from "@/components/ProjectPage";

export default function DataDashboard() {
  return (
    <ProjectPage
      title="Data Analysis Dashboard"
      subtitle="Real-time analytics platform for collection management and market intelligence"
      heroImage="/collectibles-hero-v2.png"
      problem="Collectors and small business owners struggle to make data-driven decisions without expensive enterprise tools. They need insights into inventory trends, market values, and performance metrics—but most solutions are either too complex or too expensive."
      solution="We built a custom analytics dashboard that transforms raw data into actionable insights. The platform integrates with existing databases, provides real-time visualizations, and generates automated reports. Users can track collection values, identify trends, and make informed decisions without technical expertise."
      techStack={[
        "React",
        "TypeScript",
        "Data Visualization",
        "Real-time Analytics",
        "API Integration",
        "Automated Reporting",
      ]}
      outcomes={[
        "Reduced data analysis time from hours to minutes",
        "Enabled real-time market trend monitoring",
        "Automated weekly performance reports",
        "Improved decision-making accuracy by 40%",
        "Scalable architecture supporting 10,000+ items",
      ]}
      gallery={[
        {
          src: "/collectibles-gallery-1-v2.png",
          alt: "Technical Architecture",
          caption: "Data analytics platform architecture with frontend, backend, and database layers",
        },
        {
          src: "/collectibles-gallery-2-v2.png",
          alt: "Business Intelligence Dashboard",
          caption: "Real-time BI dashboard with revenue, cost, visitors, and growth metrics",
        },
      ]}
    />
  );
}
