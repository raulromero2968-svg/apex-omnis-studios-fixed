import { ProjectPage } from "@/components/ProjectPage";

export default function ClassroomAutomation() {
  return (
    <ProjectPage
      title="Classroom Automation Hub"
      subtitle="Intelligent automation system for grading, attendance, and parent communication"
      heroImage="/classroom-automation-hero-mockup-v1.png"
      problem="Teachers spend 10-15 hours per week on administrative tasks that take time away from actual teaching. Grading assignments, tracking attendance, responding to parent emails, updating gradebooks, and generating progress reports consume evenings and weekends. The manual workload leads to burnout, inconsistent communication, and delayed feedback to students. Teachers need their time back to focus on what matters: teaching."
      solution="We built an intelligent classroom automation system that handles the busywork so teachers can focus on students. The platform integrates with Google Classroom, Canvas, and Schoology to automatically grade assignments, track attendance patterns, generate parent communication templates, and create real-time progress reports. AI-powered grading handles multiple-choice, short answer, and even essay questions with customizable rubrics. Attendance tracking identifies patterns and triggers automated parent notifications. The system saves teachers 10+ hours per week while improving communication consistency."
      scaleMetrics={[
        { label: "Hours Saved Per Week", value: "10-15" },
        { label: "Assignments Auto-Graded", value: "2,500+" },
        { label: "Parent Communications", value: "500+" },
      ]}
      beforeAfter={{
        before: "Spending 2-3 hours every evening grading papers, manually entering grades into multiple systems, writing individual parent emails, tracking attendance in spreadsheets, and generating progress reports by hand. Weekends consumed by catch-up work.",
        after: "Assignments auto-graded within minutes, grades synced across all platforms, parent emails generated from templates with personalized data, attendance tracked automatically with pattern alerts, progress reports generated on-demand. Evenings and weekends reclaimed.",
      }}
      techStack={[
        "GPT-4 (Essay Grading)",
        "Google Classroom API",
        "Canvas LMS API",
        "Zapier (62-step workflow)",
        "Notion (Parent Communication)",
        "Automated Reporting",
      ]}
      systemComplexity={[
        {
          title: "AI-Powered Grading Engine",
          description: "GPT-4 integration with custom rubrics for essay grading, automated multiple-choice scoring, short answer pattern matching, and plagiarism detection. Handles 2,500+ assignments monthly with 95% accuracy, requiring teacher review only for edge cases.",
        },
        {
          title: "62-Step Automation Workflow",
          description: "Complex Zapier pipeline that syncs data between Google Classroom, Canvas, Schoology, and Notion. Handles grade entry, attendance tracking, assignment distribution, deadline reminders, and parent notification triggers. Includes error handling and manual override options.",
        },
        {
          title: "Intelligent Parent Communication System",
          description: "Automated email generation using templates personalized with student data, attendance patterns, grade trends, and upcoming assignments. Tracks parent engagement, schedules follow-ups, and escalates concerns to administrators when needed.",
        },
        {
          title: "Real-Time Progress Reporting",
          description: "Dynamic dashboards showing student performance trends, class averages, assignment completion rates, and attendance patterns. Generates printable progress reports, parent-teacher conference summaries, and intervention recommendations.",
        },
      ]}
      outcomes={[
        "Save 10-15 hours per week on administrative tasks",
        "Auto-grade 2,500+ assignments monthly with AI",
        "Generate 500+ personalized parent communications",
        "Track attendance patterns and trigger early interventions",
        "Reclaim evenings and weekends for lesson planning and rest",
      ]}
      gallery={[
        {
          src: "/classroom-automation-gallery-1-v1.png",
          alt: "System Architecture",
          caption: "62-step automation workflow integrating Google Classroom, Canvas, GPT-4 grading engine, and parent communication system",
        },
        {
          src: "/classroom-automation-gallery-2-v1.png",
          alt: "Teacher Dashboard",
          caption: "Real-time classroom dashboard showing auto-graded assignments, attendance patterns, and parent communication tracking",
        },
      ]}
      ethicsNote="This tool is designed to amplify teacher effectiveness, not replace human judgment. All AI-graded work is reviewed by teachers before final grades are assigned. The system is built to give teachers more time for meaningful student interaction, not to automate away the teaching profession."
    />
  );
}
