import { ProjectPage } from "@/components/ProjectPage";

export default function LessonPlanGenerator() {
  return (
    <ProjectPage
      title="AI Lesson Plan Generator"
      subtitle="Intelligent curriculum planning with standards alignment and differentiation"
      heroImage="/lesson-plan-generator-hero-v1.png"
      problem="Creating comprehensive lesson plans that align with state standards, differentiate for diverse learners, and include engaging activities takes 5-8 hours per week. Teachers must manually cross-reference standards documents, search for resources, adapt materials for different learning levels, and ensure vertical alignment across units. New teachers struggle even more, often spending 15+ hours weekly on lesson planning. The workload is unsustainable and leaves little time for creativity or personalization."
      solution="We built an AI-powered lesson plan generator that creates standards-aligned, differentiated curriculum in minutes instead of hours. The system uses GPT-4 trained on state standards, curriculum frameworks, and best practices to generate complete lesson plans including learning objectives, activities, assessments, and differentiation strategies. Teachers input their topic, grade level, and student needs, and the AI generates a comprehensive plan with embedded resources, pacing guides, and alignment documentation. The system saves 5-8 hours per week while improving lesson quality and consistency."
      scaleMetrics={[
        { label: "Lesson Plans Generated", value: "1,200+" },
        { label: "State Standards Covered", value: "50" },
        { label: "Hours Saved Per Week", value: "5-8" },
      ]}
      beforeAfter={{
        before: "Spending 5-8 hours every week manually creating lesson plans, cross-referencing standards documents, searching Pinterest and TPT for activities, adapting materials for different reading levels, and ensuring alignment across units. New teachers spending 15+ hours weekly just to stay ahead.",
        after: "Generate complete, standards-aligned lesson plans in 10-15 minutes. AI suggests differentiation strategies, embeds resources, creates assessments, and documents standards alignment. Teachers spend time customizing and personalizing instead of building from scratch.",
      }}
      techStack={[
        "GPT-4 (Curriculum Generation)",
        "State Standards Database",
        "Notion (Lesson Library)",
        "Resource Integration APIs",
        "Differentiation Engine",
        "Assessment Generator",
      ]}
      systemComplexity={[
        {
          title: "Standards-Aligned AI Engine",
          description: "GPT-4 model fine-tuned on 50 state standards frameworks, Common Core, NGSS, and curriculum best practices. Automatically maps learning objectives to specific standards, generates aligned assessments, and ensures vertical alignment across grade levels.",
        },
        {
          title: "Intelligent Differentiation System",
          description: "Analyzes student data (reading levels, IEPs, language proficiency) to generate differentiated materials including scaffolded activities, modified texts, visual supports, and extension tasks. Creates 3-4 versions of each activity to meet diverse learner needs.",
        },
        {
          title: "Resource Integration & Curation",
          description: "Connects to 15+ educational resource databases (Khan Academy, ReadWorks, PhET, etc.) to automatically embed relevant videos, articles, simulations, and practice activities. Curates resources based on quality ratings and alignment to learning objectives.",
        },
        {
          title: "Assessment & Rubric Generator",
          description: "Creates formative and summative assessments aligned to lesson objectives, generates scoring rubrics, and suggests exit tickets. Includes multiple question types (multiple choice, short answer, performance tasks) and provides answer keys.",
        },
      ]}
      outcomes={[
        "Generate 1,200+ standards-aligned lesson plans",
        "Save 5-8 hours per week on curriculum planning",
        "Automatic differentiation for diverse learners",
        "Embedded resources from 15+ educational databases",
        "Complete assessments with rubrics and answer keys",
      ]}
      testimonial={{
        quote: "As a first-year teacher, I was drowning in lesson planning. This system taught me what good lessons look like while saving me 10+ hours every week. I customize the AI-generated plans instead of building from scratch, and my students are more engaged because I have time to make lessons creative.",
        author: "Marcus L.",
        role: "First-Year Middle School Science Teacher",
      }}
      gallery={[
        {
          src: "/lesson-plan-generator-gallery-1-v1.png",
          alt: "AI Generation Workflow",
          caption: "GPT-4 curriculum generation workflow showing standards alignment, resource integration, and differentiation engine",
        },
        {
          src: "/lesson-plan-generator-gallery-2-v1.png",
          alt: "Generated Lesson Plan",
          caption: "Sample AI-generated lesson plan with learning objectives, activities, assessments, and embedded resources",
        },
      ]}
      ethicsNote="This tool is designed to support teacher creativity, not replace it. AI-generated lesson plans are starting points that teachers customize based on their students' unique needs. The system amplifies teacher expertise rather than automating away professional judgment."
    />
  );
}
