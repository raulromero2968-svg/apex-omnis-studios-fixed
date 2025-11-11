import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Trophy, Clock, DollarSign, Calendar, User, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface LeaderboardEntry {
  id: string;
  username: string;
  setName: string;
  completionTime: number; // in hours
  totalBudget: number;
  completedDate: string;
  cardsCollected: number;
  totalCards: number;
}

// Mock data - will be replaced with real data from backend
const mockLeaderboard: LeaderboardEntry[] = [
  {
    id: "1",
    username: "CardMaster2024",
    setName: "Base Set (102 cards)",
    completionTime: 36.5,
    totalBudget: 450,
    completedDate: "2025-01-15",
    cardsCollected: 102,
    totalCards: 102,
  },
  {
    id: "2",
    username: "FastCollector",
    setName: "Jungle Set (64 cards)",
    completionTime: 28.2,
    totalBudget: 320,
    completedDate: "2025-01-14",
    cardsCollected: 64,
    totalCards: 64,
  },
  {
    id: "3",
    username: "BudgetKing",
    setName: "Fossil Set (62 cards)",
    completionTime: 42.0,
    totalBudget: 180,
    completedDate: "2025-01-13",
    cardsCollected: 62,
    totalCards: 62,
  },
  {
    id: "4",
    username: "SpeedRunner99",
    setName: "Team Rocket (83 cards)",
    completionTime: 31.8,
    totalBudget: 520,
    completedDate: "2025-01-12",
    cardsCollected: 83,
    totalCards: 83,
  },
  {
    id: "5",
    username: "SmartShopper",
    setName: "Gym Heroes (132 cards)",
    completionTime: 47.5,
    totalBudget: 290,
    completedDate: "2025-01-11",
    cardsCollected: 132,
    totalCards: 132,
  },
];

export default function ChallengeLeaderboard() {
  const [filterSet, setFilterSet] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"time" | "budget">("time");
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  // Submission form state
  const [formData, setFormData] = useState({
    username: "",
    setName: "",
    completionTime: "",
    totalBudget: "",
    cardsCollected: "",
    totalCards: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.username || !formData.setName || !formData.completionTime || !formData.totalBudget) {
      toast.error("Please fill in all required fields");
      return;
    }

    // TODO: Send to backend/webhook
    console.log("Submitting challenge completion:", formData);

    toast.success("Challenge submission received! Your entry will appear on the leaderboard after verification.", {
      duration: 5000,
    });

    // Reset form
    setFormData({
      username: "",
      setName: "",
      completionTime: "",
      totalBudget: "",
      cardsCollected: "",
      totalCards: "",
    });
    setShowSubmitForm(false);
  };

  // Filter and sort leaderboard
  const filteredLeaderboard = mockLeaderboard
    .filter((entry) => filterSet === "all" || entry.setName.includes(filterSet))
    .sort((a, b) => {
      if (sortBy === "time") {
        return a.completionTime - b.completionTime;
      } else {
        return a.totalBudget - b.totalBudget;
      }
    });

  const topByTime = [...filteredLeaderboard].sort((a, b) => a.completionTime - b.completionTime).slice(0, 10);
  const topByBudget = [...filteredLeaderboard].sort((a, b) => a.totalBudget - b.totalBudget).slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/tcg-portfolio">
            <Button variant="ghost" className="mb-4 text-cyan-400 hover:text-cyan-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio Tracker
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Challenge Leaderboard</h1>
              <p className="text-gray-400">
                Compete with collectors worldwide. Complete sets in 48 hours or less!
              </p>
            </div>
            <Trophy className="h-16 w-16 text-yellow-500" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-8 bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Filter className="h-5 w-5 text-cyan-400" />
              Filters & Sort
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="filter-set" className="text-gray-300">Filter by Set</Label>
              <Select value={filterSet} onValueChange={setFilterSet}>
                <SelectTrigger id="filter-set" className="bg-black/60 border-white/20 text-white">
                  <SelectValue placeholder="All Sets" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sets</SelectItem>
                  <SelectItem value="Base Set">Base Set</SelectItem>
                  <SelectItem value="Jungle">Jungle</SelectItem>
                  <SelectItem value="Fossil">Fossil</SelectItem>
                  <SelectItem value="Team Rocket">Team Rocket</SelectItem>
                  <SelectItem value="Gym Heroes">Gym Heroes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="sort-by" className="text-gray-300">Sort By</Label>
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as "time" | "budget")}>
                <SelectTrigger id="sort-by" className="bg-black/60 border-white/20 text-white">
                  <SelectValue placeholder="Fastest Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="time">Fastest Time</SelectItem>
                  <SelectItem value="budget">Lowest Budget</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                onClick={() => setShowSubmitForm(!showSubmitForm)}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500"
              >
                {showSubmitForm ? "Cancel" : "Submit Your Challenge"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Submission Form */}
        {showSubmitForm && (
          <Card className="mb-8 bg-black/40 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-white">Submit Your Challenge Completion</CardTitle>
              <CardDescription className="text-gray-400">
                Share your achievement with the community! All submissions are verified before appearing on the leaderboard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="username" className="text-gray-300">Username *</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Your display name"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="bg-black/60 border-white/20 text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="setName" className="text-gray-300">Set Name *</Label>
                    <Input
                      id="setName"
                      type="text"
                      placeholder="e.g., Base Set (102 cards)"
                      value={formData.setName}
                      onChange={(e) => setFormData({ ...formData, setName: e.target.value })}
                      className="bg-black/60 border-white/20 text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="completionTime" className="text-gray-300">Completion Time (hours) *</Label>
                    <Input
                      id="completionTime"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 36.5"
                      value={formData.completionTime}
                      onChange={(e) => setFormData({ ...formData, completionTime: e.target.value })}
                      className="bg-black/60 border-white/20 text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="totalBudget" className="text-gray-300">Total Budget ($) *</Label>
                    <Input
                      id="totalBudget"
                      type="number"
                      placeholder="e.g., 450"
                      value={formData.totalBudget}
                      onChange={(e) => setFormData({ ...formData, totalBudget: e.target.value })}
                      className="bg-black/60 border-white/20 text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cardsCollected" className="text-gray-300">Cards Collected</Label>
                    <Input
                      id="cardsCollected"
                      type="number"
                      placeholder="e.g., 102"
                      value={formData.cardsCollected}
                      onChange={(e) => setFormData({ ...formData, cardsCollected: e.target.value })}
                      className="bg-black/60 border-white/20 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="totalCards" className="text-gray-300">Total Cards in Set</Label>
                    <Input
                      id="totalCards"
                      type="number"
                      placeholder="e.g., 102"
                      value={formData.totalCards}
                      onChange={(e) => setFormData({ ...formData, totalCards: e.target.value })}
                      className="bg-black/60 border-white/20 text-white"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500"
                >
                  Submit Challenge
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Leaderboards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Fastest Completions */}
          <Card className="bg-black/40 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Clock className="h-5 w-5 text-cyan-400" />
                Top 10 Fastest Completions
              </CardTitle>
              <CardDescription className="text-gray-400">Speed demons of the collecting world</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topByTime.map((entry, index) => (
                  <div
                    key={entry.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/10 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-white font-semibold">{entry.username}</span>
                      </div>
                      <p className="text-sm text-gray-400">{entry.setName}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400 font-bold">{entry.completionTime}h</div>
                      <div className="text-xs text-gray-500">${entry.totalBudget}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Best Budgets */}
          <Card className="bg-black/40 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <DollarSign className="h-5 w-5 text-green-400" />
                Top 10 Best Budgets
              </CardTitle>
              <CardDescription className="text-gray-400">Masters of value hunting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topByBudget.map((entry, index) => (
                  <div
                    key={entry.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/10 hover:border-green-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-white font-semibold">{entry.username}</span>
                      </div>
                      <p className="text-sm text-gray-400">{entry.setName}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">${entry.totalBudget}</div>
                      <div className="text-xs text-gray-500">{entry.completionTime}h</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Completions */}
        <Card className="bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Calendar className="h-5 w-5 text-purple-400" />
              Recent Completions
            </CardTitle>
            <CardDescription className="text-gray-400">Latest challenge victories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredLeaderboard.slice(0, 10).map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-white/10 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-white font-semibold">{entry.username}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{entry.completedDate}</span>
                    </div>
                    <p className="text-gray-300 mb-2">{entry.setName}</p>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-cyan-400" />
                        <span className="text-gray-400">{entry.completionTime} hours</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-green-400" />
                        <span className="text-gray-400">${entry.totalBudget}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">
                      {entry.cardsCollected}/{entry.totalCards}
                    </div>
                    <div className="text-xs text-gray-500">cards</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border-cyan-500/30">
          <CardContent className="p-8 text-center">
            <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Join the Challenge?</h3>
            <p className="text-gray-400 mb-6">
              Complete any TCG set in 48 hours or less and claim your spot on the leaderboard!
            </p>
            <Link href="/tcg-portfolio">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500">
                Start Challenge Mode
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
