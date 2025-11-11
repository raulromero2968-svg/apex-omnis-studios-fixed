import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle, Users, Calendar, Lock } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

export default function ApplicationAnalytics() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [dateRange, setDateRange] = useState("30d");

  // Simple password protection - replace with proper auth
  const ADMIN_PASSWORD = "apex2024"; // TODO: Move to environment variable

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Access granted");
    } else {
      toast.error("Incorrect password");
      setPassword("");
    }
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-cyan-500/5 flex items-center justify-center">
        <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-cyan-500/10">
              <Lock className="w-8 h-8 text-cyan-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Analytics Dashboard</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            This page is password protected. Enter the admin password to continue.
          </p>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="text-center"
            />
            <Button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600"
            >
              Unlock Dashboard
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Contact the administrator if you've forgotten the password.
          </p>
        </div>
      </div>
    );
  }

  // Mock data - replace with real data from Make.com/database
  
  const stats = {
    totalApplications: 47,
    pendingReview: 8,
    approved: 12,
    declined: 27,
    averageReviewTime: 2.3, // days
    approvalRate: 25.5, // percentage
  };

  const trendData = {
    applications: +15, // percentage change
    reviewTime: -12, // percentage change (negative is good)
    approvalRate: +5, // percentage change
  };

  const recentApplications = [
    { id: 1, name: "Sarah Chen", business: "EduTech Startup", status: "pending", submittedDays: 1 },
    { id: 2, name: "Marcus Johnson", business: "Local Game Store", status: "approved", submittedDays: 3 },
    { id: 3, name: "Elena Rodriguez", business: "Fitness Community", status: "pending", submittedDays: 2 },
    { id: 4, name: "David Kim", business: "Art Collective", status: "declined", submittedDays: 4 },
    { id: 5, name: "Priya Patel", business: "Music Education", status: "approved", submittedDays: 5 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
      case "approved": return "text-green-500 bg-green-500/10 border-green-500/30";
      case "declined": return "text-red-500 bg-red-500/10 border-red-500/30";
      default: return "text-muted-foreground bg-muted/10 border-border";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="w-4 h-4" />;
      case "approved": return <CheckCircle className="w-4 h-4" />;
      case "declined": return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-cyan-500/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Application Analytics</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Date Range Selector */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h2>
          <div className="flex gap-2">
            {["7d", "30d", "90d", "1y"].map((range) => (
              <Button
                key={range}
                variant={dateRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setDateRange(range)}
                className={dateRange === range ? "bg-gradient-to-r from-cyan-500 to-purple-600" : ""}
              >
                {range === "7d" && "7 Days"}
                {range === "30d" && "30 Days"}
                {range === "90d" && "90 Days"}
                {range === "1y" && "1 Year"}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Total Applications */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${trendData.applications > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {trendData.applications > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {Math.abs(trendData.applications)}%
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stats.totalApplications}</h3>
            <p className="text-sm text-muted-foreground">Total Applications</p>
          </div>

          {/* Pending Review */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-yellow-500/10">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-sm text-muted-foreground">Needs Action</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stats.pendingReview}</h3>
            <p className="text-sm text-muted-foreground">Pending Review</p>
          </div>

          {/* Average Review Time */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Calendar className="w-6 h-6 text-purple-500" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${trendData.reviewTime < 0 ? 'text-green-500' : 'text-red-500'}`}>
                {trendData.reviewTime < 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                {Math.abs(trendData.reviewTime)}%
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stats.averageReviewTime} days</h3>
            <p className="text-sm text-muted-foreground">Avg Review Time</p>
          </div>

          {/* Approved */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-sm text-green-500">{stats.approvalRate}%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stats.approved}</h3>
            <p className="text-sm text-muted-foreground">Approved</p>
          </div>

          {/* Declined */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-red-500/10">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <span className="text-sm text-muted-foreground">{((stats.declined / stats.totalApplications) * 100).toFixed(1)}%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stats.declined}</h3>
            <p className="text-sm text-muted-foreground">Declined</p>
          </div>

          {/* Approval Rate Trend */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${trendData.approvalRate > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {trendData.approvalRate > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {Math.abs(trendData.approvalRate)}%
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stats.approvalRate}%</h3>
            <p className="text-sm text-muted-foreground">Approval Rate</p>
          </div>
        </div>

        {/* Recent Applications Table */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6">Recent Applications</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Applicant</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Business</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Submitted</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app) => (
                  <tr key={app.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-medium">{app.name}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-muted-foreground">{app.business}</p>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(app.status)}`}>
                        {getStatusIcon(app.status)}
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-muted-foreground">{app.submittedDays}d ago</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-cyan-500/30 rounded-lg p-6">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-500" />
              Positive Trends
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Application volume up {trendData.applications}% this period</li>
              <li>• Review time improved by {Math.abs(trendData.reviewTime)}%</li>
              <li>• Approval rate increased {trendData.approvalRate}%</li>
            </ul>
          </div>

          <div className="bg-card border border-yellow-500/30 rounded-lg p-6">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-500" />
              Action Items
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {stats.pendingReview} applications awaiting review</li>
              <li>• Maintain {stats.averageReviewTime}-day average response time</li>
              <li>• Consider capacity planning for increased volume</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
