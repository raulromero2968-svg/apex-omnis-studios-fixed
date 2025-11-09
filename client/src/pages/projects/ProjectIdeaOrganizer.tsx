import { ProjectPage } from "@/components/ProjectPage";

export default function ProjectIdeaOrganizer() {
  return (
    <ProjectPage
      title="Project Idea Organizer"
      subtitle="AI assistant that transforms scattered ideas into actionable project plans"
      heroImage="/project-idea-organizer-hero-v1.png"
      problem="Creatives, engineers, and entrepreneurs have brilliant ideas scattered across notebooks, voice memos, random text files, and late-night Discord messages. Financial analysts track investment ideas in spreadsheets. IT specialists have side project concepts buried in Slack threads. Engineers sketch product designs on napkins. But scattered ideas never become reality. Without a system to capture, organize, validate, and prioritize ideas, most die in the chaos. You need a second brain that turns creative chaos into structured action plans."
      solution="We built an AI-powered idea organizer that captures scattered thoughts from any source and transforms them into structured project plans with clear next steps. The system integrates with voice memos, text files, emails, and messaging apps to automatically extract ideas, categorize them by theme, validate feasibility, and generate action plans. AI analysis identifies patterns across your ideas, suggests connections you might have missed, and prioritizes projects based on your goals. Whether you're a financial analyst tracking investment theses, an IT specialist managing side projects, or an engineer developing product concepts, the system gives your ideas structure and momentum."
      scaleMetrics={[
        { label: "Ideas Organized", value: "500+" },
        { label: "Action Plans Generated", value: "120+" },
        { label: "Hours Saved Monthly", value: "15+" },
      ]}
      beforeAfter={{
        before: "Ideas scattered across 10+ apps and notebooks, forgetting brilliant concepts from last month, spending hours trying to remember where you wrote that idea, never following through because ideas lack structure, feeling overwhelmed by creative chaos.",
        after: "All ideas automatically captured and organized in one place, AI-generated action plans with clear next steps, pattern recognition showing connections between ideas, priority scoring based on your goals, turn creative chaos into structured execution.",
      }}
      techStack={[
        "GPT-4 (Idea Analysis)",
        "Notion API",
        "Zapier (Multi-Source Integration)",
        "Voice-to-Text (Whisper AI)",
        "Email Integration",
        "Automated Categorization",
      ]}
      systemComplexity={[
        {
          title: "Multi-Source Idea Capture",
          description: "Integrates with 15+ sources including voice memos (Whisper AI transcription), text files, emails, Slack, Discord, Apple Notes, and Google Docs. Automatically extracts ideas from unstructured content using GPT-4 pattern recognition and natural language processing.",
        },
        {
          title: "AI-Powered Idea Analysis & Validation",
          description: "GPT-4 analyzes each idea for feasibility, required resources, potential challenges, and market opportunity. Generates structured project briefs including problem statement, solution approach, success metrics, and estimated timeline. Identifies similar ideas and suggests consolidation.",
        },
        {
          title: "Intelligent Categorization & Tagging",
          description: "Automatically categorizes ideas by theme (product, investment, side project, research), priority level, and required skills. Tags ideas with relevant technologies, industries, and collaborators. Creates dynamic views filtered by category, status, and timeline.",
        },
        {
          title: "Action Plan Generation & Prioritization",
          description: "Converts validated ideas into actionable project plans with clear next steps, milestones, and resource requirements. Prioritizes projects based on your goals, available time, and potential impact. Sends weekly digests with top 3 ideas to work on.",
        },
      ]}
      outcomes={[
        "Organize 500+ scattered ideas into structured database",
        "Generate 120+ actionable project plans with clear next steps",
        "Save 15+ hours monthly searching for and organizing ideas",
        "AI pattern recognition identifies connections between ideas",
        "Turn creative chaos into focused execution",
      ]}
      testimonial={{
        quote: "I used to have ideas everywhere - voice memos, random notes, Slack messages to myself. Most of them died because I couldn't remember them or didn't know where to start. Now everything gets captured automatically and I get action plans with actual next steps. I've shipped 3 side projects this year that would have stayed ideas forever.",
        author: "David R.",
        role: "IT Specialist & Side Project Builder",
      }}
      gallery={[
        {
          src: "/project-idea-organizer-gallery-1-v1.png",
          alt: "System Architecture",
          caption: "Multi-source idea capture system integrating voice memos, text files, emails, and messaging apps with AI analysis engine",
        },
        {
          src: "/project-idea-organizer-gallery-2-v1.png",
          alt: "Idea Dashboard",
          caption: "Organized idea dashboard showing categorized projects, AI-generated action plans, and priority scoring",
        },
      ]}
      ethicsNote="This tool is designed to amplify your creativity, not replace it. AI analysis provides structure and suggestions, but you maintain full control over which ideas to pursue and how to execute them. The system helps you organize and prioritize, not dictate your creative direction."
    />
  );
}
