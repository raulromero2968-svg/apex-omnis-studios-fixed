import { useState } from "react";
import { ConstellationBackground } from "@/components/ConstellationBackground";
import { Link } from "wouter";
import { ArrowLeft, Video, Download, Copy, FileText, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface TranscriptSegment {
  start: number;
  end: number;
  text: string;
}

interface TranscriptResult {
  duration: number;
  language: string;
  segments: TranscriptSegment[];
  fullText: string;
}

export default function VideoTranscriptExtractor() {
  const [videoUrl, setVideoUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleExtract = async () => {
    if (!videoUrl.trim()) {
      toast.error("Please enter a video URL");
      return;
    }

    // Validate URL format
    const urlPattern = /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com|youtube\.com|youtu\.be|tiktok\.com)/i;
    if (!urlPattern.test(videoUrl)) {
      toast.error("Please enter a valid Twitter/X, YouTube, or TikTok URL");
      return;
    }

    setIsProcessing(true);
    setError(null);
    setTranscript(null);

    try {
      // TODO: Implement backend API call to process video
      // For now, show a placeholder message
      toast.info("Video processing feature coming soon! Backend integration required.");
      
      // Simulated delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock transcript for demonstration
      const mockTranscript: TranscriptResult = {
        duration: 221.6,
        language: "english",
        segments: [
          { start: 0, end: 5.3, text: "There is a big shift happening in the hobby right now..." },
          { start: 5.3, end: 10.1, text: "because you got the big sales you got the big headlines..." },
        ],
        fullText: "There is a big shift happening in the hobby right now and on the surface it looks amazing because you got the big sales you got the big headlines..."
      };
      
      setTranscript(mockTranscript);
      toast.success("Transcript extracted successfully!");
      
    } catch (err) {
      console.error("Extraction error:", err);
      setError("Failed to extract transcript. Please try again.");
      toast.error("Failed to extract transcript");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopyTranscript = () => {
    if (!transcript) return;
    
    navigator.clipboard.writeText(transcript.fullText);
    toast.success("Transcript copied to clipboard!");
  };

  const handleDownloadTxt = () => {
    if (!transcript) return;
    
    const blob = new Blob([transcript.fullText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Transcript downloaded!");
  };

  const handleDownloadJson = () => {
    if (!transcript) return;
    
    const jsonData = JSON.stringify(transcript, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("JSON downloaded!");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-500/5 relative">
      <ConstellationBackground />
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <Video className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Video Analysis Tool</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Video Transcript Extractor
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extract transcripts from Twitter/X, YouTube, and TikTok videos. Analyze content from TCG influencers, market analysts, and community leaders.
            </p>
          </div>

          {/* Input Section */}
          <Card className="mb-8 bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle>Enter Video URL</CardTitle>
              <CardDescription>
                Supports Twitter/X, YouTube, and TikTok videos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  type="url"
                  placeholder="https://x.com/breakerculture/status/..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleExtract()}
                  className="flex-1"
                  disabled={isProcessing}
                />
                <Button 
                  onClick={handleExtract}
                  disabled={isProcessing || !videoUrl.trim()}
                  className="bg-cyan-500 hover:bg-cyan-600"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <FileText className="mr-2 h-4 w-4" />
                      Extract
                    </>
                  )}
                </Button>
              </div>

              {/* Supported Platforms */}
              <div className="mt-4 p-4 bg-background/50 rounded-lg border border-border/50">
                <h4 className="text-sm font-medium mb-2">Supported Platforms:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Twitter/X (x.com, twitter.com)</li>
                  <li>• YouTube (youtube.com, youtu.be)</li>
                  <li>• TikTok (tiktok.com)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Error Message */}
          {error && (
            <Card className="mb-8 bg-red-500/10 border-red-500/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-red-500">
                  <AlertCircle className="h-5 w-5" />
                  <p className="font-medium">{error}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Transcript Result */}
          {transcript && (
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Transcript Ready
                    </CardTitle>
                    <CardDescription>
                      Duration: {formatTime(transcript.duration)} • Language: {transcript.language}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleCopyTranscript}
                      className="border-cyan-500/50 hover:bg-cyan-500/10"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleDownloadTxt}
                      className="border-purple-500/50 hover:bg-purple-500/10"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      TXT
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleDownloadJson}
                      className="border-purple-500/50 hover:bg-purple-500/10"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      JSON
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Timestamped Segments */}
                <div className="space-y-4">
                  <h4 className="font-medium text-sm text-muted-foreground">Timestamped Transcript:</h4>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {transcript.segments.map((segment, index) => (
                      <div 
                        key={index}
                        className="p-3 bg-background/50 rounded-lg border border-border/50"
                      >
                        <div className="text-xs text-cyan-400 font-mono mb-1">
                          [{formatTime(segment.start)} - {formatTime(segment.end)}]
                        </div>
                        <p className="text-sm text-foreground">{segment.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Full Text */}
                  <div className="mt-6">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Full Transcript:</h4>
                    <div className="p-4 bg-background/50 rounded-lg border border-border/50 max-h-64 overflow-y-auto">
                      <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                        {transcript.fullText}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Info Section */}
          <Card className="mt-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-cyan-400">Why Extract Transcripts?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Analyze Market Insights:</span> Extract wisdom from TCG influencers like Ty Wilson, Deep Pocket Monster, and Leonhart to understand market trends and community concerns.
              </p>
              <p>
                <span className="text-foreground font-medium">Research & Documentation:</span> Save important community discussions, tournament coverage, and educational content for future reference.
              </p>
              <p>
                <span className="text-foreground font-medium">Content Creation:</span> Use transcripts to create blog posts, summaries, or educational materials while properly crediting original creators.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
