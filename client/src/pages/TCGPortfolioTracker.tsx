import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  TrendingUp, TrendingDown, AlertTriangle, Shield, DollarSign, 
  Package, PieChart, Activity, Info, X 
} from "lucide-react";
import { Link } from "wouter";

interface Card {
  id: number;
  name: string;
  set: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Ultra Rare" | "Secret Rare";
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  priceChange: number; // percentage
  tier: "low-end" | "mid-tier" | "high-end";
}

export default function TCGPortfolioTracker() {
  const [showBubbleWarning, setShowBubbleWarning] = useState(true);
  
  // Mock portfolio data
  const [cards] = useState<Card[]>([
    { id: 1, name: "Charizard VMAX", set: "Darkness Ablaze", rarity: "Secret Rare", quantity: 1, purchasePrice: 450, currentPrice: 380, priceChange: -15.6, tier: "high-end" },
    { id: 2, name: "Pikachu V", set: "Vivid Voltage", rarity: "Ultra Rare", quantity: 3, purchasePrice: 15, currentPrice: 12, priceChange: -20, tier: "low-end" },
    { id: 3, name: "Umbreon VMAX", set: "Evolving Skies", rarity: "Secret Rare", quantity: 1, purchasePrice: 320, currentPrice: 350, priceChange: +9.4, tier: "high-end" },
    { id: 4, name: "Eevee", set: "Evolving Skies", rarity: "Common", quantity: 12, purchasePrice: 0.50, currentPrice: 0.35, priceChange: -30, tier: "low-end" },
    { id: 5, name: "Mew VMAX", set: "Fusion Strike", rarity: "Ultra Rare", quantity: 2, purchasePrice: 45, currentPrice: 38, priceChange: -15.6, tier: "mid-tier" },
    { id: 6, name: "Rayquaza VMAX", set: "Evolving Skies", rarity: "Secret Rare", quantity: 1, purchasePrice: 280, currentPrice: 310, priceChange: +10.7, tier: "high-end" },
    { id: 7, name: "Bulbasaur", set: "Base Set", rarity: "Common", quantity: 8, purchasePrice: 2, currentPrice: 1.50, priceChange: -25, tier: "low-end" },
  ]);

  // Calculate portfolio metrics
  const totalValue = cards.reduce((sum, card) => sum + (card.currentPrice * card.quantity), 0);
  const totalInvested = cards.reduce((sum, card) => sum + (card.purchasePrice * card.quantity), 0);
  const totalGainLoss = totalValue - totalInvested;
  const totalGainLossPercent = ((totalGainLoss / totalInvested) * 100).toFixed(1);

  // Diversification analysis
  const lowEndValue = cards.filter(c => c.tier === "low-end").reduce((sum, card) => sum + (card.currentPrice * card.quantity), 0);
  const midTierValue = cards.filter(c => c.tier === "mid-tier").reduce((sum, card) => sum + (card.currentPrice * card.quantity), 0);
  const highEndValue = cards.filter(c => c.tier === "high-end").reduce((sum, card) => sum + (card.currentPrice * card.quantity), 0);

  const lowEndPercent = ((lowEndValue / totalValue) * 100).toFixed(1);
  const midTierPercent = ((midTierValue / totalValue) * 100).toFixed(1);
  const highEndPercent = ((highEndValue / totalValue) * 100).toFixed(1);

  // Risk assessment
  const cardsAtRisk = cards.filter(c => c.tier === "low-end" && c.priceChange < -15).length;
  const riskScore = parseFloat(lowEndPercent) > 40 ? "High" : parseFloat(lowEndPercent) > 20 ? "Medium" : "Low";
  const riskColor = riskScore === "High" ? "text-red-500" : riskScore === "Medium" ? "text-yellow-500" : "text-green-500";

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
          <h1 className="text-xl font-bold">TCG Portfolio Tracker</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Sealed Product Warning (Ty Wilson Insight) */}
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-orange-500/20 flex-shrink-0">
              <Package className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-2">📦 Sealed Product Speculation Warning</h3>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Expert Insight from Ty Wilson (@BreakerCulture):</strong> Opening sealed product is a trap. It's a sure way to waste time and money.
              </p>
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <h4 className="font-bold mb-2 text-sm">Why This Matters:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sealed boxes/packs have negative expected value (EV)</li>
                  <li>• Manufacturers profit from sealed product, not you</li>
                  <li>• Singles market is more predictable and profitable</li>
                  <li>• Focus on buying/selling individual cards, not gambling on packs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Market Bubble Warning */}
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
                <h3 className="text-xl font-bold text-red-500 mb-2">⚠️ Market Bubble Warning</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Industry experts are warning that the Pokémon card market is in a **massive bubble** similar to the 2021 sports card crash. 
                  When this bubble bursts, **low-to-mid-end cards will collapse first** as many people try to sell simultaneously.
                </p>
                <div className="bg-background/50 border border-border rounded-lg p-4 mb-3">
                  <h4 className="font-bold mb-2 text-sm">What This Means For You:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Common and mid-tier cards are highest risk (everyone owns them)</li>
                    <li>• Supply will flood the market when panic selling starts</li>
                    <li>• High-end rare cards are safer (limited supply, serious collectors)</li>
                    <li>• Be extremely selective about what you buy right now</li>
                  </ul>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Source: TCG market analysis from experienced vendors (2024). This tool helps you identify your exposure to at-risk cards.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Deep Pocket Monster Insights: Challenge Tracking & Pack Opening */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-5 h-5 text-cyan-500" />
            <h3 className="text-lg font-bold">Deep Pocket Monster Insights: Smart Collecting Strategies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2 text-sm">🎯 Set Completion Challenges</h4>
              <p className="text-xs text-muted-foreground">
                DPM's "Complete set in 48 hours" challenges are viral. Track your challenge progress: cards needed, budget remaining, time left.
              </p>
            </div>
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2 text-sm">📦 Open vs Keep Tracker</h4>
              <p className="text-xs text-muted-foreground">
                "Should I Open it? Or Should I Keep it?" Track your decisions and results over time. See which strategy actually makes more money.
              </p>
            </div>
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2 text-sm">💸 Pack Opening ROI</h4>
              <p className="text-xs text-muted-foreground">
                Calculate: Pack cost × quantity vs. buying singles. DPM's data shows opening packs costs 40% more than buying singles for set completion.
              </p>
            </div>
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2 text-sm">🎯 Grading Pipeline</h4>
              <p className="text-xs text-muted-foreground">
                Track cards sent to PSA/BGS/CGC. Submission date, estimated return, grading costs, expected grade, and ROI after grading fees.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <DollarSign className="w-6 h-6 text-purple-500" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${parseFloat(totalGainLossPercent) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {parseFloat(totalGainLossPercent) >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {totalGainLossPercent}%
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">${totalValue.toFixed(2)}</h3>
            <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
            <p className="text-xs text-muted-foreground mt-2">
              {parseFloat(totalGainLossPercent) >= 0 ? '+' : ''} ${totalGainLoss.toFixed(2)} from ${totalInvested.toFixed(2)} invested
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-cyan-500/10">
                <Package className="w-6 h-6 text-cyan-500" />
              </div>
              <span className="text-sm text-muted-foreground">{cards.length} unique</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{cards.reduce((sum, c) => sum + c.quantity, 0)}</h3>
            <p className="text-sm text-muted-foreground">Total Cards</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${riskScore === "High" ? "bg-red-500/10" : riskScore === "Medium" ? "bg-yellow-500/10" : "bg-green-500/10"}`}>
                <Shield className={`w-6 h-6 ${riskColor}`} />
              </div>
              <span className="text-sm text-muted-foreground">{cardsAtRisk} at risk</span>
            </div>
            <h3 className={`text-2xl font-bold mb-1 ${riskColor}`}>{riskScore} Risk</h3>
            <p className="text-sm text-muted-foreground">Bubble Exposure</p>
          </div>
        </div>

        {/* Diversification Analysis */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <PieChart className="w-5 h-5 text-cyan-500" />
            <h3 className="text-xl font-bold">Portfolio Diversification</h3>
            <div className="ml-auto group relative">
              <Info className="w-4 h-4 text-muted-foreground cursor-help" />
              <div className="absolute right-0 top-6 w-64 bg-popover border border-border rounded-lg p-3 text-xs hidden group-hover:block z-10">
                <p className="text-muted-foreground">
                  **Low-End** (Common/Uncommon, &lt;$5): Highest bubble risk<br/>
                  **Mid-Tier** (Rare/Ultra Rare, $5-$100): Moderate risk<br/>
                  **High-End** (Secret Rare/Graded, $100+): Lowest risk
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Low-End */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Low-End Cards ({lowEndPercent}%)</span>
                <span className="text-sm text-muted-foreground">${lowEndValue.toFixed(2)}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-red-500 h-3 rounded-full transition-all" 
                  style={{ width: `${lowEndPercent}%` }}
                ></div>
              </div>
              {parseFloat(lowEndPercent) > 40 && (
                <p className="text-xs text-red-500 mt-1">⚠️ High exposure to bubble-risk cards</p>
              )}
            </div>

            {/* Mid-Tier */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Mid-Tier Cards ({midTierPercent}%)</span>
                <span className="text-sm text-muted-foreground">${midTierValue.toFixed(2)}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-yellow-500 h-3 rounded-full transition-all" 
                  style={{ width: `${midTierPercent}%` }}
                ></div>
              </div>
            </div>

            {/* High-End */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">High-End Cards ({highEndPercent}%)</span>
                <span className="text-sm text-muted-foreground">${highEndValue.toFixed(2)}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all" 
                  style={{ width: `${highEndPercent}%` }}
                ></div>
              </div>
              {parseFloat(highEndPercent) < 30 && (
                <p className="text-xs text-green-500 mt-1">💡 Consider increasing high-end allocation for safety</p>
              )}
            </div>
          </div>

          {/* Recommendation */}
          {parseFloat(lowEndPercent) > 40 && (
            <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <h4 className="font-bold text-yellow-500 mb-2">⚠️ Rebalancing Recommended</h4>
              <p className="text-sm text-muted-foreground">
                Your portfolio has {lowEndPercent}% in low-end cards, which are most vulnerable to market crashes. 
                Consider selling some common/uncommon cards and reinvesting in high-end rare cards with limited supply.
              </p>
            </div>
          )}
        </div>

        {/* Cards Table */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-cyan-500" />
            <h3 className="text-xl font-bold">Your Collection</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Card</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Set</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Rarity</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Qty</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Paid</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Current</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Change</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Risk</th>
                </tr>
              </thead>
              <tbody>
                {cards.map((card) => (
                  <tr key={card.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-medium">{card.name}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-muted-foreground">{card.set}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        card.rarity === "Secret Rare" ? "bg-purple-500/20 text-purple-500" :
                        card.rarity === "Ultra Rare" ? "bg-cyan-500/20 text-cyan-500" :
                        card.rarity === "Rare" ? "bg-yellow-500/20 text-yellow-500" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {card.rarity}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <p className="text-sm">{card.quantity}</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <p className="text-sm text-muted-foreground">${card.purchasePrice.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <p className="text-sm font-medium">${card.currentPrice.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className={`flex items-center justify-end gap-1 text-sm ${card.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {card.priceChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {card.priceChange >= 0 ? '+' : ''}{card.priceChange.toFixed(1)}%
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {card.tier === "low-end" && card.priceChange < -15 ? (
                        <div title="High bubble risk"><AlertTriangle className="w-4 h-4 text-red-500 mx-auto" /></div>
                      ) : card.tier === "high-end" ? (
                        <div title="Low bubble risk"><Shield className="w-4 h-4 text-green-500 mx-auto" /></div>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8 bg-card border border-cyan-500/30 rounded-lg p-6">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-cyan-500" />
            Smart Collecting Tips During Market Uncertainty
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• **Focus on high-end cards**: Invest in genuinely rare cards with limited supply</li>
            <li>• **Avoid bulk commons**: These will crash hardest when the bubble bursts</li>
            <li>• **Diversify across games**: Don't put everything in Pokémon—consider Magic, Yu-Gi-Oh!, Flesh and Blood</li>
            <li>• **Hold graded cards**: PSA/BGS graded cards hold value better than raw cards</li>
            <li>• **Set price alerts**: Know when to sell before the market turns</li>
            <li>• **Buy for collection, not speculation**: Only buy cards you actually want to own long-term</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
