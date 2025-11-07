import { ProjectPage } from "@/components/ProjectPage";

export default function AIPipeline() {
  return (
    <ProjectPage
      title="AI Content Pipeline"
      subtitle="Intelligent automation system for content creation and curation"
      heroImage="/ai-pipeline-hero-v3.png"
      problem="Content creators need to maintain consistent publishing schedules across multiple platforms while ensuring quality and brand consistency. Manual content creation, approval workflows, and multi-channel distribution consume significant time and resources."
      solution="We built an intelligent content generation and distribution system using GPT-4 for automated content creation, with approval workflows and multi-channel publishing. The system includes a content calendar, human-in-the-loop review, and automated distribution to websites, LinkedIn, Twitter, and custom channels."
      techStack={[
        "GPT-4 API",
        "Make.com",
        "Notion",
        "Multi-channel Publishing",
        "Approval Workflows",
        "Content Calendar",
      ]}
      outcomes={[
        "Reduced content production time by 70%",
        "Maintained consistent brand voice across platforms",
        "Automated research and fact-checking workflows",
        "Enabled scaling from 5 to 50+ pieces per week",
        "Preserved human creativity while eliminating busywork",
      ]}
      gallery={[
        {
          src: "/ai-pipeline-gallery-1-v3.png",
          alt: "AI Content Workflow Stages",
          caption: "Multi-stage content workflow from research to publishing with AI-powered automation",
        },
        {
          src: "/ai-pipeline-gallery-2-v2.png",
          alt: "Content Publishing Dashboard",
          caption: "Content calendar and scheduling interface with multi-channel distribution controls",
        },
      ]}
    />
  );
}
