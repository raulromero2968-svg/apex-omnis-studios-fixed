import { ProjectPage } from "@/components/ProjectPage";

export default function MuseumTracker() {
  return (
    <ProjectPage
      title="Museum Tracker"
      subtitle="Comprehensive collection management system for educators and cultural institutions"
      heroImage="/project-museum-tracker.png"
      problem="Museums, educators, and collectors face challenges organizing, cataloging, and sharing their collections. Traditional methods involve spreadsheets, physical records, and disconnected systems that make it difficult to track provenance, manage loans, and create educational materials."
      solution="We developed a specialized tracking system that centralizes collection management. The platform handles cataloging, provenance tracking, condition reports, and educational content creation. It includes geospatial mapping for exhibition planning and automated documentation for compliance and insurance purposes."
      techStack={[
        "React",
        "Database Design",
        "Geospatial Analysis",
        "Document Generation",
        "Search & Filtering",
        "Export Tools",
      ]}
      outcomes={[
        "Digitized 5,000+ collection items with full metadata",
        "Reduced cataloging time by 60%",
        "Enabled geographic visualization of collection origins",
        "Automated compliance documentation",
        "Improved accessibility for researchers and educators",
      ]}
      gallery={[
        {
          src: "/project-museum-tracker.png",
          alt: "Collection Overview",
          caption: "Searchable collection database with filtering",
        },
        {
          src: "/project-museum-tracker.png",
          alt: "Geographic Mapping",
          caption: "Geospatial visualization of collection provenance",
        },
      ]}
    />
  );
}
