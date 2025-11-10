import { ProjectPage } from "@/components/ProjectPage";

export default function MuseumTracker() {
  return (
    <ProjectPage
      title="Event Tracker Pro"
      subtitle="Personal event tracking system for gaming conventions, tournaments, and local events"
      heroImage="/event-tracker-hero-v1.png"
      problem="Gaming enthusiasts and collectors struggle to keep track of upcoming conventions, local tournaments, card shop events, and esports competitions across multiple cities and venues. Whether you're into TCG, fighting games, esports, or collectibles, missing events means missing opportunities to compete, network, and grow your passion. Manual tracking across websites, social media, Discord servers, and Facebook groups is overwhelming and error-prone."
      solution="We built a personal event tracking system that consolidates gaming event data from multiple sources into a unified Notion workspace. The system features automated event discovery, filtered dashboards by location and game type, calendar visualization, and real-time notifications for events matching your interests. Perfect for gamers, collectors, and tournament organizers who want to stay informed without the hassle."
      scaleMetrics={[
        { label: "Events Tracked Monthly", value: "800+" },
        { label: "Cities Covered", value: "23" },
        { label: "Automation Steps", value: "47" },
      ]}
      beforeAfter={{
        before: "Manually checking 15+ websites daily, missing events due to scattered information, spending 2+ hours per week just to stay updated, constantly worried about missing important tournaments or conventions.",
        after: "All events automatically aggregated in one dashboard, filtered by your preferences, real-time notifications for new events, spend 5 minutes per week reviewing instead of 2+ hours searching.",
      }}
      techStack={[
        "Zapier (47-step workflow)",
        "Notion API",
        "Web Scraping",
        "Automated Workflows",
        "Calendar Integration",
        "Dashboard Design",
      ]}
      systemComplexity={[
        {
          title: "Multi-Source Event Discovery",
          description: "Automated scrapers monitor 20+ event sources including convention websites, Eventbrite, Facebook Events, Discord announcements, and local gaming store calendars. Each source requires custom parsing logic to extract event details.",
        },
        {
          title: "47-Step Zapier Workflow",
          description: "Complex automation pipeline that validates event data, removes duplicates, enriches with location data, categorizes by game type, and syncs to Notion database. Includes error handling and notification triggers.",
        },
        {
          title: "Intelligent Filtering & Notifications",
          description: "Custom Notion database views filter events by game type (TCG, fighting games, esports), location radius, date range, and event type (tournament, convention, meetup). Automated notifications sent via email and Discord.",
        },
        {
          title: "Calendar Integration & Sync",
          description: "Two-way sync with Google Calendar, Apple Calendar, and Outlook. Events automatically update when details change, and manual additions to calendar sync back to Notion.",
        },
      ]}
      outcomes={[
        "Track 800+ gaming events monthly across 23 cities",
        "Automated event discovery from 20+ sources",
        "Real-time calendar with filterable views by game type and location",
        "Notifications for events matching your collection interests",
        "Never miss a convention, tournament, or local gaming event again",
      ]}
      testimonial={{
        quote: "I used to spend hours every week checking different websites for TCG events. Now everything shows up automatically in my dashboard. I've attended 3x more tournaments this year because I actually know when they're happening.",
        author: "Alex M.",
        role: "TCG Collector & Tournament Player",
      }}
      gallery={[
        {
          src: "/event-tracker-gallery-1-v1.png",
          alt: "Automation Architecture",
          caption: "47-step Zapier workflow architecture connecting 20+ event sources to Notion database with intelligent filtering",
        },
        {
          src: "/event-tracker-gallery-2-v1.png",
          alt: "Event Dashboard",
          caption: "Gaming event tracking dashboard with filtered views by game type, location, and date - tracking 800+ events monthly",
        },
      ]}
      ethicsNote="This tool is designed for personal use by gamers and collectors to stay informed about community events. It is not intended for bulk data scraping, commercial resale of event information, or any activity that harms event organizers or the gaming community."
    />
  );
}
