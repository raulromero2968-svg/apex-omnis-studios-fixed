import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, TrendingDown, AlertTriangle, Shield, DollarSign, 
  Calendar, MapPin, Users, Activity, Info, X, Plus
} from "lucide-react";
import { Link } from "wouter";

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  type: "Sports Cards" | "TCG" | "Gaming" | "Collectibles";
  invested: number;
  revenue: number;
  roi: number;
  marketCondition: "bubble" | "stable" | "growing";
}

export default function EventTrackerPro() {
  const [showBubbleWarning, setShowBubbleWarning] = useState(true);
  
  // Mock event data
  const [events] = useState<Event[]>([
    { id: 1, name: "Kansas City Sports Card Show", date: "2024-03-15", location: "Kansas City, MO", type: "Sports Cards", invested: 2500, revenue: 3200, roi: 28, marketCondition: "bubble" },
    { id: 2, name: "Pokéfest Convention", date: "2024-03-22", location: "Chicago, IL", type: "TCG", invested: 1800, revenue: 2100, roi: 16.7, marketCondition: "stable" },
    { id: 3, name: "Capital Trade Show", date: "2024-04-05", location: "Washington, DC", type: "Sports Cards", invested: 3000, revenue: 2400, roi: -20, marketCondition: "bubble" },
    { id: 4, name: "Magic: The Gathering GP", date: "2024-04-12", location: "Las Vegas, NV", type: "TCG", invested: 1500, revenue: 1950, roi: 30, marketCondition: "growing" },
    { id: 5, name: "Retro Gaming Expo", date: "2024-04-20", location: "Portland, OR", type: "Gaming", invested: 800, revenue: 1100, roi: 37.5, marketCondition: "growing" },
  ]);

  // Calculate portfolio metrics
  const totalInvested = events.reduce((sum, e) => sum + e.invested, 0);
  const totalRevenue = events.reduce((sum, e) => sum + e.revenue, 0);
  const totalROI = ((totalRevenue - totalInvested) / totalInvested * 100).toFixed(1);
  
  // Market condition analysis
  const bubbleEvents = events.filter(e => e.marketCondition === "bubble").length;
  const sportsCardEvents = events.filter(e => e.type === "Sports Cards");
  const sportsCardROI = sportsCardEvents.length > 0 
    ? (sportsCardEvents.reduce((sum, e) => sum + e.roi, 0) / sportsCardEvents.length).toFixed(1)
    : "0";

  const riskLevel = bubbleEvents >= 2 ? "High" : bubbleEvents === 1 ? "Medium" : "Low";
  const riskColor = riskLevel === "High" ? "text-red-500" : riskLevel === "Medium" ? "text-yellow-500" : "text-green-500";

  const getMarketBadge = (condition: string) => {
    switch (condition) {
      case "bubble":
        return <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-500 border border-red-500/30">⚠️ Bubble Risk</span>;
      case "stable":
        return <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500 border border-yellow-500/30">📊 Stable</span>;
      case "growing":
        return <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500 border border-green-500/30">📈 Growing</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-500/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Event Tracker Pro</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Sports Card Market Bubble Warning */}
        {showBubbleWarning && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8 relative">
            <button
              onClick={() => setShowBubbleWarning(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-red-500/20 flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-2">⚠️ Sports Card Market Warning</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The sports card market is experiencing a **bubble similar to 2021**. Vendors report declining ROI at shows, 
                  with many breaking even or losing money. Common and mid-tier cards are especially vulnerable.
                </p>
                <div className="bg-background/50 border border-border rounded-lg p-4 mb-3">
                  <h4 className="font-bold mb-2 text-sm">What Vendors Are Seeing:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fewer buyers at shows (foot traffic down 20-30%)</li>
                    <li>• Lower average sale prices (buyers negotiating harder)</li>
                    <li>• Inventory moving slower (longer hold times)</li>
                    <li>• Increased competition (more vendors, same buyers)</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-500 mb-2 text-sm">💡 Smart Strategies:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• **Reduce inventory** - Don't overstock before shows</li>
                    <li>• **Focus on high-end** - Rare cards still selling</li>
                    <li>• **Track ROI closely** - Know when to exit a show early</li>
                    <li>• **Diversify markets** - Don't rely only on sports cards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ty Wilson Insights */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-5 h-5 text-cyan-500" />
            <h3 className="text-lg font-bold">Expert Insights from Ty Wilson (@BreakerCulture)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2 text-sm">🎯 Consistency is EVERYTHING</h4>
              <p className="text-xs text-muted-foreground">
                "The closest thing you have to a magic button is being consistent." - Track your show attendance frequency below.
              </p>
            </div>
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2 text-sm">💬 Counter Offers, Don't Decline</h4>
              <p className="text-xs text-muted-foreground">
                "It's a HUGE turnoff to buyers when sellers just decline." - Always counter offers to maximize sales.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Calendar className="w-6 h-6 text-purple-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{events.length}</h3>
            <p className="text-sm text-muted-foreground">Events Tracked</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-cyan-500/10">
                <DollarSign className="w-6 h-6 text-cyan-500" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${parseFloat(totalROI) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {parseFloat(totalROI) >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {totalROI}%
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">${totalRevenue.toLocaleString()}</h3>
            <p className="text-sm text-muted-foreground">Total Revenue</p>
            <p className="text-xs text-muted-foreground mt-2">
              ${totalInvested.toLocaleString()} invested
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${riskLevel === "High" ? "bg-red-500/10" : riskLevel === "Medium" ? "bg-yellow-500/10" : "bg-green-500/10"}`}>
                <Shield className={`w-6 h-6 ${riskColor}`} />
              </div>
              <span className="text-sm text-muted-foreground">{bubbleEvents} at risk</span>
            </div>
            <h3 className={`text-2xl font-bold mb-1 ${riskColor}`}>{riskLevel} Risk</h3>
            <p className="text-sm text-muted-foreground">Market Exposure</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${parseFloat(sportsCardROI) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {parseFloat(sportsCardROI) >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {sportsCardROI}%
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{sportsCardEvents.length}</h3>
            <p className="text-sm text-muted-foreground">Sports Card Shows</p>
            <p className="text-xs text-muted-foreground mt-2">
              Avg ROI: {sportsCardROI}%
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <Users className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">85%</h3>
            <p className="text-sm text-muted-foreground">Consistency Score</p>
            <p className="text-xs text-muted-foreground mt-2">
              📈 Ty Wilson: "Consistency is EVERYTHING"
            </p>
          </div>
        </div>

        {/* Leonhart Insights: Competitive Play & Content */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-bold">Leonhart Insights: Competitive Play & Community Building</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2 text-sm">🏆 Track Competitive Events</h4>
              <p className="text-xs text-muted-foreground">
                Leonhart founded a competitive TCG team. Track tournament performance, team results, and prize winnings separately from reselling events.
              </p>
            </div>
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2 text-sm">🎥 Content Creation ROI</h4>
              <p className="text-xs text-muted-foreground">
                Track which events generate the best YouTube content. Video views × CPM = content revenue to add to event ROI.
              </p>
            </div>
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2 text-sm">❤️ Charitable Events</h4>
              <p className="text-xs text-muted-foreground">
                Leonhart does Make-A-Wish collaborations. Track charitable events separately - they build community goodwill and long-term brand value.
              </p>
            </div>
          </div>
        </div>

        {/* Market Condition Analysis */}
        {bubbleEvents >= 2 && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-yellow-500 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              ⚠️ High Bubble Exposure Detected
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              {bubbleEvents} of your tracked events are in bubble-risk markets. Consider diversifying into stable or growing markets 
              like TCG (Pokémon, Magic) or retro gaming to reduce exposure.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <h5 className="font-bold text-sm mb-2">Reduce Risk:</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Skip low-performing sports card shows</li>
                  <li>• Increase TCG/gaming event attendance</li>
                  <li>• Lower inventory investment per show</li>
                </ul>
              </div>
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <h5 className="font-bold text-sm mb-2">Track Performance:</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Set ROI targets before each show</li>
                  <li>• Exit early if targets aren't met</li>
                  <li>• Compare show-to-show trends</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Events Table */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-500" />
              <h3 className="text-xl font-bold">Your Events</h3>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Event</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Invested</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Revenue</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">ROI</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Market</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-medium">{event.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm">{new Date(event.date).toLocaleDateString()}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {event.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <p className="text-sm text-muted-foreground">${event.invested.toLocaleString()}</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <p className="text-sm font-medium">${event.revenue.toLocaleString()}</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className={`flex items-center justify-end gap-1 text-sm font-medium ${event.roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {event.roi >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {event.roi >= 0 ? '+' : ''}{event.roi.toFixed(1)}%
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {getMarketBadge(event.marketCondition)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-8 bg-card border border-cyan-500/30 rounded-lg p-6">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-cyan-500" />
            Vendor Best Practices (2024)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-sm mb-2">Before the Show:</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Research show history (attendance, vendor feedback)</li>
                <li>• Set clear ROI targets (minimum 20% for sports cards)</li>
                <li>• Bring diverse inventory (don't over-invest in one category)</li>
                <li>• Have exit strategy (know when to pack up early)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-2">During the Show:</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Track sales hourly (identify slow periods)</li>
                <li>• Network with other vendors (share market intel)</li>
                <li>• Adjust pricing based on demand (don't be stubborn)</li>
                <li>• Note buyer behavior (what's hot, what's not)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
