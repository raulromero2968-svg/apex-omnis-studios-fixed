import { ProjectPage } from "@/components/ProjectPage";

export default function AIPipeline() {
  return (
    <ProjectPage
      title="AI Content Pipeline"
      subtitle="Intelligent automation system for content creation and curation"
      heroImage="/project-ai-pipeline.png"
      problem="Content creators and educators spend countless hours on repetitive tasks: researching topics, organizing information, formatting materials, and maintaining consistency across platforms. This manual work takes time away from creative strategy and meaningful engagement with audiences."
      solution="We engineered an AI-powered content pipeline that automates research, curation, and formatting while maintaining human oversight. The system processes raw information, generates structured content drafts, and adapts output for different platforms—all while preserving the creator's voice and strategic control."
      techStack={[
        "AI Integration",
        "Natural Language Processing",
        "Workflow Automation",
        "Content Management",
        "API Orchestration",
        "Quality Control Systems",
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
          src: "/project-ai-pipeline.png",
          alt: "Pipeline Dashboard",
          caption: "Content workflow automation interface",
        },
        {
          src: "/project-ai-pipeline.png",
          alt: "Quality Control",
          caption: "Human-in-the-loop review and approval system",
        },
      ]}
    />
  );
}
