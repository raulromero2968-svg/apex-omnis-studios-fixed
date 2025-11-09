import { ProjectPage } from "@/components/ProjectPage";

export default function AIPipeline() {
  return (
    <ProjectPage
      title="AI Content Pipeline"
      subtitle="Intelligent automation system for gaming community content creation and educational publishing"
      heroImage="/ai-pipeline-hero-flat.png"
      problem="Gaming content creators and community educators struggle to maintain consistent publishing schedules across Twitter, LinkedIn, Instagram, and YouTube while balancing market analysis, educational content, tournament coverage, and community engagement. Whether you're covering TCG markets, esports tournaments, or gaming industry news, creating high-quality content requires 10-15 hours of research and writing per week. Manual posting across multiple platforms is time-consuming, inconsistent, and leads to burnout. Creators need a system that amplifies their expertise without sacrificing authenticity or quality."
      solution="We built an intelligent content generation and distribution system for gaming creators using GPT-4 for automated research, content drafting, and multi-channel publishing. The system includes a content calendar optimized for gaming topics (market updates, tournament recaps, educational guides, community spotlights), human-in-the-loop review to ensure accuracy and maintain your voice, and automated distribution to Twitter, LinkedIn, Instagram, and Facebook. AI handles research and drafting, humans handle creativity and fact-checking. Perfect for creators who want to grow their audience while maintaining authentic community engagement and avoiding creator burnout."
      scaleMetrics={[
        { label: "Content Pieces Per Week", value: "50+" },
        { label: "Time Saved Weekly", value: "10-15 hours" },
        { label: "Publishing Channels", value: "4+" },
      ]}
      beforeAfter={{
        before: "Spending 10-15 hours weekly researching topics, writing posts, manually posting to each platform, inconsistent publishing schedule, missing trending topics because research takes too long, burning out from content creation grind.",
        after: "AI researches and drafts content based on trending topics, human review ensures accuracy and voice consistency, automated multi-channel publishing maintains schedule, scale from 5 to 50+ posts weekly, reclaim 10-15 hours for strategy and community engagement.",
      }}
      techStack={[
        "GPT-4 API",
        "Make.com (Automation)",
        "Notion (Content Calendar)",
        "Multi-channel Publishing",
        "Human Review Workflows",
        "Trend Monitoring",
      ]}
      systemComplexity={[
        {
          title: "AI-Powered Research & Drafting Engine",
          description: "GPT-4 monitors 20+ gaming news sources, TCG market data feeds, tournament results, and community discussions to identify trending topics. Automatically generates content drafts including market analysis, educational guides, tournament recaps, and community spotlights. Maintains consistent brand voice and tone across all content types.",
        },
        {
          title: "Human-in-the-Loop Review System",
          description: "All AI-generated content routes through Notion approval workflow where creators review, edit, and fact-check before publishing. Tracks approval status, revision history, and publishing schedule. Ensures accuracy, maintains authentic voice, and prevents AI hallucinations from reaching your audience.",
        },
        {
          title: "Multi-Channel Publishing Automation",
          description: "Automated distribution to Twitter, LinkedIn, Instagram, and Facebook with platform-specific formatting. Optimizes post timing based on audience engagement data, handles image resizing and hashtag generation, and tracks performance metrics across all channels. Supports thread creation for Twitter and carousel posts for Instagram.",
        },
        {
          title: "Content Calendar & Strategy Planning",
          description: "Notion-based editorial calendar showing 30-day content pipeline with topic clusters, publishing cadence, and performance analytics. AI suggests content gaps and trending topics to cover. Balances content pillars (market intelligence 30%, education 30%, community 25%, events 15%) to maintain audience engagement.",
        },
      ]}
      outcomes={[
        "Scale from 5 to 50+ content pieces per week",
        "Save 10-15 hours weekly on research and drafting",
        "Maintain authentic voice with human review workflows",
        "Automated publishing to 4+ social media platforms",
        "Grow audience without creator burnout",
      ]}
      testimonial={{
        quote: "I was spending 15 hours a week just researching and writing posts about TCG markets. This system handles the research and drafting, I review and approve, and it publishes everywhere automatically. I've 10x'd my content output while actually spending less time on it. My audience has grown 300% in 3 months.",
        author: "Jordan K.",
        role: "TCG Market Analyst & Content Creator",
      }}
      gallery={[
        {
          src: "/ai-pipeline-gallery-1-flat.png",
          alt: "AI Content Workflow Stages",
          caption: "Multi-stage content workflow from AI research and drafting to human review and automated multi-channel publishing",
        },
        {
          src: "/ai-pipeline-gallery-2-v2.png",
          alt: "System Architecture with Multi-Channel Publishing",
          caption: "AI content automation architecture with LinkedIn, Twitter, Instagram, and Facebook integration for gaming community engagement",
        },
      ]}
      ethicsNote="This tool is designed for authentic community building and educational content creation. It is not intended for spam, bot networks, fake engagement, or manipulative marketing practices. All AI-generated content must be reviewed by humans before publishing to ensure accuracy and maintain community trust. We believe in transparent, honest communication with gaming communities."
    />
  );
}
