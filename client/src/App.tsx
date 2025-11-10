import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import DataDashboard from "./pages/projects/DataDashboard";
import MuseumTracker from "./pages/projects/MuseumTracker";
import AIPipeline from "./pages/projects/AIPipeline";
import ClassroomAutomation from "./pages/projects/ClassroomAutomation";
import LessonPlanGenerator from "./pages/projects/LessonPlanGenerator";
import ProjectIdeaOrganizer from "./pages/projects/ProjectIdeaOrganizer";
import QuickLaunchWebsite from "./pages/projects/QuickLaunchWebsite";
import Ethics from "./pages/Ethics";
import FAQ from "./pages/FAQ";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/projects/data-dashboard"} component={DataDashboard} />
      <Route path={"/projects/museum-tracker"} component={MuseumTracker} />
      <Route path={"/projects/ai-pipeline"} component={AIPipeline} />
      <Route path={"/projects/classroom-automation"} component={ClassroomAutomation} />
      <Route path={"/projects/lesson-plan-generator"} component={LessonPlanGenerator} />
      <Route path={"/projects/project-idea-organizer"} component={ProjectIdeaOrganizer} />
      <Route path={"/projects/quick-launch-website"} component={QuickLaunchWebsite} />
      <Route path={"/ethics"} component={Ethics} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
