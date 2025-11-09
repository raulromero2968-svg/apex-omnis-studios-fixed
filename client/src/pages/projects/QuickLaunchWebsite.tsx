import { ProjectPage } from "@/components/ProjectPage";

export default function QuickLaunchWebsite() {
  return (
    <ProjectPage
      title="Quick Launch Website Builder"
      subtitle="Turn business concepts into live, professional websites in 24 hours"
      heroImage="/quick-launch-website-hero-v1.png"
      problem="Entrepreneurs have brilliant business ideas but get stuck at the website stage. Your friend wants to launch a gaming equipment rental business but the website project has been stalled for months. Financial analysts need landing pages for investment newsletters. IT specialists want portfolio sites to showcase projects. Engineers need product pages for hardware prototypes. Traditional web development takes weeks or months and costs thousands of dollars. No-code builders still require design skills and hours of work. By the time the website is ready, the momentum is gone and the opportunity has passed."
      solution="We built a rapid website deployment system that turns business concepts into live, professional websites in 24 hours. You provide the business idea, target audience, and key features. Our system generates a complete website including copywriting, design, responsive layout, contact forms, and SEO optimization. The process includes AI-powered copywriting based on your business model, custom design matching your brand, mobile-responsive layouts, integrated contact forms with email notifications, and one-click deployment to custom domains. Perfect for entrepreneurs who need to validate ideas quickly, launch rental businesses, showcase portfolios, or test market demand without months of development."
      scaleMetrics={[
        { label: "Websites Launched", value: "45+" },
        { label: "Average Launch Time", value: "18 hours" },
        { label: "Cost vs Traditional Dev", value: "90% less" },
      ]}
      beforeAfter={{
        before: "Business idea stalled for months waiting for website, paying thousands for traditional development, learning no-code tools that still take weeks, losing momentum and market opportunities, never launching because the website feels too hard.",
        after: "Live, professional website in 24 hours, AI-generated copywriting that converts, mobile-responsive design that looks custom, integrated contact forms capturing leads, launch and validate ideas before competitors even start building.",
      }}
      techStack={[
        "GPT-4 (Copywriting)",
        "React + Tailwind CSS",
        "Vercel (Deployment)",
        "EmailJS (Contact Forms)",
        "Custom Domain Integration",
        "SEO Optimization",
      ]}
      systemComplexity={[
        {
          title: "AI-Powered Copywriting Engine",
          description: "GPT-4 generates complete website copy including headlines, value propositions, feature descriptions, CTAs, and about sections. Trained on high-converting landing pages across industries. Adapts tone and messaging based on target audience (B2B, B2C, technical, consumer). Includes A/B testing suggestions for key conversion points.",
        },
        {
          title: "Rapid Design & Development Pipeline",
          description: "Pre-built React component library with 50+ customizable sections (hero, features, pricing, testimonials, contact). Tailwind CSS theming system generates brand-matched color palettes and typography. Responsive layouts tested across 15+ device sizes. Accessibility compliance (WCAG 2.1) built into all components.",
        },
        {
          title: "One-Click Deployment & Domain Setup",
          description: "Automated deployment to Vercel with CDN distribution and SSL certificates. Custom domain integration with DNS configuration assistance. Contact form integration with EmailJS for instant lead notifications. Google Analytics and SEO meta tags configured automatically.",
        },
        {
          title: "Post-Launch Optimization & Support",
          description: "Performance monitoring with Core Web Vitals tracking. SEO audit and recommendations. Conversion rate optimization suggestions based on user behavior. 30-day support for content updates and tweaks. Training on how to update content independently.",
        },
      ]}
      outcomes={[
        "Launch 45+ professional websites in 24 hours or less",
        "90% cost savings vs traditional web development",
        "AI-generated copywriting that converts visitors to customers",
        "Mobile-responsive design tested across all devices",
        "Validate business ideas before competitors finish planning",
      ]}
      testimonial={{
        quote: "I've been trying to launch my gaming equipment rental business for a year. The website was always the blocker - too expensive to hire someone, too time-consuming to build myself. This system gave me a professional site in one day. I'm now taking bookings and making money instead of still planning the website.",
        author: "Mike T.",
        role: "Gaming Equipment Rental Business Owner",
      }}
      gallery={[
        {
          src: "/quick-launch-website-gallery-1-v1.png",
          alt: "Development Pipeline",
          caption: "Rapid website deployment pipeline showing AI copywriting, component assembly, and one-click deployment workflow",
        },
        {
          src: "/quick-launch-website-gallery-2-v1.png",
          alt: "Website Examples",
          caption: "Portfolio of launched websites across industries: rental business, investment newsletter, engineering portfolio",
        },
      ]}
      ethicsNote="This tool is designed to help entrepreneurs launch and validate ideas quickly, not to spam the internet with low-quality websites. All sites include original AI-generated content tailored to the specific business, not templates filled with placeholder text. We prioritize quality and conversion over volume."
    />
  );
}
