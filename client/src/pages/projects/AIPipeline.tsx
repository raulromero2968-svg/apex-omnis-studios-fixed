import { ProjectPage } from "@/components/ProjectPage";

export default function AIPipeline() {
  return (
    <ProjectPage
      title="AI Content Pipeline"
      subtitle="Intelligent automation system for TCG community content creation and educational publishing"
      heroImage="/ai-pipeline-hero-flat.png"
      problem="TCG content creators and educators struggle to maintain consistent publishing schedules across Twitter, LinkedIn, Instagram, and YouTube while balancing market analysis, educational content, and community engagement. Creating high-quality content about card values, tournament coverage, collection tips, and market trends requires hours of research and writing. Manual posting across multiple platforms is time-consuming and inconsistent."
      solution="We built an intelligent content generation and distribution system specifically for TCG creators using GPT-4 for automated research, content drafting, and multi-channel publishing. The system includes a content calendar optimized for TCG topics (market updates, educational guides, community spotlights), human-in-the-loop review to ensure accuracy, and automated distribution to Twitter, LinkedIn, Instagram, and Facebook. Perfect for creators who want to grow their audience while maintaining authentic community engagement."
      techStack={[
        "GPT-4 API",
        "Make.com",
        "Notion",
        "Multi-channel Publishing",
        "Approval Workflows",
        "Content Calendar",
      ]}
      outcomes={[
        "Reduced TCG content production time by 70%",
        "Maintained authentic voice and community trust",
        "Automated market research and trend analysis",
        "Scaled from 5 to 50+ educational posts per week",
        "Preserved human creativity and fact-checking",
      ]}
      gallery={[
        {
          src: "/ai-pipeline-gallery-1-flat.png",
          alt: "AI Content Workflow Stages",
          caption: "Multi-stage TCG content workflow from market research to community publishing with AI-powered automation",
        },
        {
          src: "/ai-pipeline-gallery-2-v2.png",
          alt: "System Architecture with Multi-Channel Publishing",
          caption: "AI content automation architecture with LinkedIn, Twitter, Instagram, and Facebook integration for TCG community engagement",
        },
      ]}
      ethicsNote="This tool is designed for authentic community building and educational content creation. It is not intended for spam, bot networks, fake engagement, or manipulative marketing practices. All AI-generated content must be reviewed by humans before publishing to ensure accuracy and maintain community trust. We believe in transparent, honest communication with the TCG community."
    />
  );
}
