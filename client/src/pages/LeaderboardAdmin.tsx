import { useState } from "react";
import { ConstellationBackground } from "@/components/ConstellationBackground";
import { Link } from "wouter";
import { ArrowLeft, Trophy, Check, X, Eye, Calendar, User, Mail, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface PendingSubmission {
  id: string;
  username: string;
  email: string;
  setName: string;
  completionTime: number;
  totalBudget: number;
  cardsCollected: number | null;
  totalCards: number | null;
  submittedDate: string;
  screenshotUrl: string;
  status: "pending" | "approved" | "rejected";
}

// Mock data - will be replaced with real data from backend
const mockSubmissions: PendingSubmission[] = [
  {
    id: "1",
    username: "NewCollector123",
    email: "collector@example.com",
    setName: "Base Set (102 cards)",
    completionTime: 35.5,
    totalBudget: 425,
    cardsCollected: 102,
    totalCards: 102,
    submittedDate: "2025-01-16T10:30:00.000Z",
    screenshotUrl: "https://via.placeholder.com/400x300?text=Screenshot+1",
    status: "pending",
  },
  {
    id: "2",
    username: "FastTrader",
    email: "trader@example.com",
    setName: "Jungle Set (64 cards)",
    completionTime: 22.8,
    totalBudget: 280,
    cardsCollected: 64,
    totalCards: 64,
    submittedDate: "2025-01-16T08:15:00.000Z",
    screenshotUrl: "https://via.placeholder.com/400x300?text=Screenshot+2",
    status: "pending",
  },
];

export default function LeaderboardAdmin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<PendingSubmission[]>(mockSubmissions);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  // Password authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password check (in production, use proper auth)
    if (password === "apex2024") {
      setIsAuthenticated(true);
      toast.success("Access granted");
    } else {
      toast.error("Incorrect password");
    }
  };

  // Approve submission
  const handleApprove = (id: string) => {
    setSubmissions(submissions.map(sub => 
      sub.id === id ? { ...sub, status: "approved" as const } : sub
    ));
    
    const submission = submissions.find(s => s.id === id);
    toast.success(`Approved: ${submission?.username} - ${submission?.setName}`);
    
    // TODO: Send approval email via webhook
    console.log("Send approval email to:", submission?.email);
  };

  // Reject submission
  const handleReject = (id: string) => {
    setSubmissions(submissions.map(sub => 
      sub.id === id ? { ...sub, status: "rejected" as const } : sub
    ));
    
    const submission = submissions.find(s => s.id === id);
    toast.error(`Rejected: ${submission?.username} - ${submission?.setName}`);
    
    // TODO: Send rejection email via webhook
    console.log("Send rejection email to:", submission?.email);
  };

  // Bulk approve all pending
  const handleApproveAll = () => {
    const pendingCount = submissions.filter(s => s.status === "pending").length;
    setSubmissions(submissions.map(sub => 
      sub.status === "pending" ? { ...sub, status: "approved" as const } : sub
    ));
    toast.success(`Approved ${pendingCount} submissions`);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center p-4 relative">
        <ConstellationBackground />
        <div className="relative z-10 w-full flex items-center justify-center">
        <Card className="w-full max-w-md bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Trophy className="h-6 w-6 text-cyan-400" />
              Leaderboard Admin
            </CardTitle>
            <CardDescription className="text-gray-400">
              Enter password to access submission management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/60 border-white/20 text-white"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
        </div>
      </div>
    );
  }

  // Admin dashboard
  const pendingSubmissions = submissions.filter(s => s.status === "pending");
  const approvedSubmissions = submissions.filter(s => s.status === "approved");
  const rejectedSubmissions = submissions.filter(s => s.status === "rejected");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative">
      <ConstellationBackground />
      <div className="relative z-10">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/challenge-leaderboard">
            <Button variant="ghost" className="mb-4 text-cyan-400 hover:text-cyan-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Leaderboard
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Leaderboard Admin</h1>
              <p className="text-gray-400">
                Review and manage challenge submissions
              </p>
            </div>
            <Trophy className="h-16 w-16 text-yellow-500" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-yellow-500/10 border-yellow-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Pending Review</p>
                  <p className="text-3xl font-bold text-yellow-500">{pendingSubmissions.length}</p>
                </div>
                <Clock className="h-12 w-12 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-500/10 border-green-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Approved</p>
                  <p className="text-3xl font-bold text-green-500">{approvedSubmissions.length}</p>
                </div>
                <Check className="h-12 w-12 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-500/10 border-red-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Rejected</p>
                  <p className="text-3xl font-bold text-red-500">{rejectedSubmissions.length}</p>
                </div>
                <X className="h-12 w-12 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bulk Actions */}
        {pendingSubmissions.length > 0 && (
          <div className="mb-6 flex gap-4">
            <Button
              onClick={handleApproveAll}
              className="bg-green-600 hover:bg-green-700"
            >
              <Check className="mr-2 h-4 w-4" />
              Approve All Pending ({pendingSubmissions.length})
            </Button>
          </div>
        )}

        {/* Pending Submissions */}
        <Card className="mb-8 bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Pending Submissions</CardTitle>
            <CardDescription className="text-gray-400">
              Review screenshots and approve/reject entries
            </CardDescription>
          </CardHeader>
          <CardContent>
            {pendingSubmissions.length === 0 ? (
              <p className="text-gray-400 text-center py-8">No pending submissions</p>
            ) : (
              <div className="space-y-6">
                {pendingSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="border border-white/10 rounded-lg p-6 bg-black/40"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Submission Details */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">{submission.setName}</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-300">
                            <User className="h-4 w-4 text-cyan-400" />
                            <span className="font-semibold">{submission.username}</span>
                          </div>

                          <div className="flex items-center gap-2 text-gray-300">
                            <Mail className="h-4 w-4 text-cyan-400" />
                            <span>{submission.email}</span>
                          </div>

                          <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="h-4 w-4 text-cyan-400" />
                            <span>{submission.completionTime} hours</span>
                          </div>

                          <div className="flex items-center gap-2 text-gray-300">
                            <DollarSign className="h-4 w-4 text-green-400" />
                            <span>${submission.totalBudget}</span>
                          </div>

                          <div className="flex items-center gap-2 text-gray-300">
                            <Calendar className="h-4 w-4 text-purple-400" />
                            <span>{formatDate(submission.submittedDate)}</span>
                          </div>

                          {submission.cardsCollected && submission.totalCards && (
                            <div className="text-gray-300">
                              <span className="font-semibold">Cards:</span> {submission.cardsCollected} / {submission.totalCards}
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mt-6">
                          <Button
                            onClick={() => handleApprove(submission.id)}
                            className="flex-1 bg-green-600 hover:bg-green-700"
                          >
                            <Check className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                          <Button
                            onClick={() => handleReject(submission.id)}
                            variant="outline"
                            className="flex-1 border-red-500/50 text-red-400 hover:bg-red-500/10"
                          >
                            <X className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                        </div>
                      </div>

                      {/* Screenshot Preview */}
                      <div>
                        <div className="relative">
                          <img
                            src={submission.screenshotUrl}
                            alt="Submission screenshot"
                            className="w-full rounded-lg border border-white/20 cursor-pointer hover:border-cyan-500/50 transition-colors"
                            onClick={() => setSelectedScreenshot(submission.screenshotUrl)}
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute top-2 right-2 bg-black/60 border-white/20"
                            onClick={() => setSelectedScreenshot(submission.screenshotUrl)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Full Size
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Approved Submissions */}
        {approvedSubmissions.length > 0 && (
          <Card className="mb-8 bg-black/40 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                Approved Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {approvedSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-green-500/20"
                  >
                    <div>
                      <p className="text-white font-semibold">{submission.username}</p>
                      <p className="text-sm text-gray-400">{submission.setName}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-400 font-bold">{submission.completionTime}h</p>
                      <p className="text-sm text-gray-500">${submission.totalBudget}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Screenshot Modal */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 bg-black/60 border-white/20"
              onClick={() => setSelectedScreenshot(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <img
              src={selectedScreenshot}
              alt="Full size screenshot"
              className="w-full rounded-lg border border-white/20"
            />
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
