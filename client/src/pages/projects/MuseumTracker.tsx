import { ProjectPage } from "@/components/ProjectPage";

export default function MuseumTracker() {
  return (
    <ProjectPage
      title="Event Tracker Pro"
      subtitle="Personal event tracking system for TCG conventions, local tournaments, and card shop events"
      heroImage="/event-tracker-hero-v1.png"
      problem="TCG collectors struggle to keep track of upcoming conventions, local card shop events, and tournament schedules across multiple cities and venues. Missing events means missing opportunities to find rare cards, meet other collectors, and grow your collection. Manual tracking across websites, social media, and Discord servers is overwhelming and error-prone."
      solution="We built a personal event tracking system that consolidates TCG event data from multiple sources into a unified Notion workspace. The system features automated event discovery, filtered dashboards by location and game type, calendar visualization, and real-time notifications for events matching your interests. Perfect for collectors who want to stay informed without the hassle."
      techStack={[
        "Zapier",
        "Notion API",
        "Web Scraping",
        "Automated Workflows",
        "Calendar Integration",
        "Dashboard Design",
      ]}
      outcomes={[
        "Track 80+ TCG events across conventions and local shops",
        "Automated event discovery from websites and social media",
        "Real-time calendar with filterable views by game type and location",
        "Notifications for events matching your collection interests",
        "Never miss a convention, tournament, or card shop event again",
      ]}
      gallery={[
        {
          src: "/event-tracker-gallery-1-v1.png",
          alt: "Automation Architecture",
          caption: "Zapier workflow architecture connecting event sources to Notion database",
        },
        {
          src: "/event-tracker-gallery-2-v1.png",
          alt: "Event Dashboard",
          caption: "TCG event tracking dashboard with filtered views by game type, location, and date",
        },
      ]}
      ethicsNote="This tool is designed for personal use by collectors to stay informed about community events. It is not intended for bulk data scraping, commercial resale of event information, or any activity that harms event organizers or the TCG community."
    />
  );
}
