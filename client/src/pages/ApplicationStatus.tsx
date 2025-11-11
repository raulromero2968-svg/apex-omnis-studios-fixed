import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, CheckCircle, Clock, XCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

export default function ApplicationStatus() {
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [applicationData, setApplicationData] = useState<any>(null);

  const handleSearch = async () => {
    if (!email || !confirmationCode) {
      toast.error("Please enter both email and confirmation code");
      return;
    }

    setIsSearching(true);

    // Simulate API call - in production, this would query your backend
    setTimeout(() => {
      // Mock response - replace with actual API call
      toast.info("Status tracking coming soon! Check your email for updates.");
      setIsSearching(false);
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "received":
        return <Mail className="w-6 h-6 text-cyan-500" />;
      case "under_review":
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case "approved":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "declined":
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <Clock className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "received":
        return "Application Received";
      case "under_review":
        return "Under Review";
      case "approved":
        return "Approved - Awaiting Contact";
      case "declined":
        return "Not Selected";
      default:
        return "Unknown Status";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-cyan-500/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Check Application Status
            </h1>
            <p className="text-muted-foreground">
              Enter your email and confirmation code to track your application progress
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="code">Confirmation Code</Label>
                <Input
                  id="code"
                  type="text"
                  placeholder="ABC-123-XYZ"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value.toUpperCase())}
                  className="mt-2 font-mono"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  You received this code via email after submitting your application
                </p>
              </div>

              <Button
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                {isSearching ? (
                  <>
                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Check Status
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Status Result (shown after search) */}
          {applicationData && (
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                {getStatusIcon(applicationData.status)}
                <div>
                  <h2 className="text-2xl font-bold">{getStatusText(applicationData.status)}</h2>
                  <p className="text-sm text-muted-foreground">
                    Submitted on {new Date(applicationData.submittedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30">
                  <p className="text-sm font-medium mb-2">Timeline</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Application received</span>
                    </div>
                    {applicationData.status !== "received" && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Initial review completed</span>
                      </div>
                    )}
                    {applicationData.status === "approved" && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Approved - Check your email for next steps</span>
                      </div>
                    )}
                  </div>
                </div>

                {applicationData.notes && (
                  <div className="p-4 rounded-lg bg-muted/30">
                    <p className="text-sm font-medium mb-2">Notes</p>
                    <p className="text-sm text-muted-foreground">{applicationData.notes}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Can't find your confirmation code?
            </p>
            <p className="text-sm text-muted-foreground">
              Check your email spam folder or{" "}
              <Link href="/services">
                <a className="text-cyan-500 hover:text-cyan-400 underline">
                  contact us
                </a>
              </Link>{" "}
              for assistance
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
