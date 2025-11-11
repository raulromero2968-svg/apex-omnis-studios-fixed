import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Timer, Trophy, Target, DollarSign, TrendingUp, 
  Play, Pause, RotateCcw, Check, X, Search, Plus
} from "lucide-react";
import { Link } from "wouter";
import { searchByName, getMarketPrice } from "@/lib/pokemonTcgApi";
import { toast } from "sonner";

interface ChallengeCard {
  id: string;
  name: string;
  set: string;
  imageUrl: string;
  targetPrice: number;
  actualPrice: number | null;
  acquired: boolean;
  acquiredAt?: Date;
}

export default function ChallengeMode() {
  // Challenge settings
  const [challengeName, setChallengeName] = useState("Complete Evolving Skies Set");
  const [targetCards, setTargetCards] = useState(10);
  const [budget, setBudget] = useState(500);
  const [timeLimit, setTimeLimit] = useState(48); // hours

  // Challenge state
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(0); // seconds

  // Card tracking
  const [cards, setCards] = useState<ChallengeCard[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!isActive || isPaused || !startTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const elapsed = now.getTime() - startTime.getTime();
      const totalTime = timeLimit * 60 * 60 * 1000; // convert hours to milliseconds
      const remaining = Math.max(0, totalTime - elapsed);
      
      setTimeRemaining(Math.floor(remaining / 1000)); // convert to seconds

      if (remaining <= 0) {
        setIsActive(false);
        toast.error("Time's up! Challenge failed.");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, isPaused, startTime, timeLimit]);

  // Start challenge
  const handleStart = () => {
    if (cards.length === 0) {
      toast.error("Add at least one card to start the challenge");
      return;
    }

    const now = new Date();
    setStartTime(now);
    setEndTime(new Date(now.getTime() + timeLimit * 60 * 60 * 1000));
    setIsActive(true);
    setIsPaused(false);
    toast.success(`Challenge started! You have ${timeLimit} hours to complete it.`);
  };

  // Pause/Resume
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    toast.info(isPaused ? "Challenge resumed" : "Challenge paused");
  };

  // Reset challenge
  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setStartTime(null);
    setEndTime(null);
    setTimeRemaining(0);
    setCards(cards.map(c => ({ ...c, acquired: false, actualPrice: null, acquiredAt: undefined })));
    toast.info("Challenge reset");
  };

  // Search cards
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a card name");
      return;
    }

    setIsSearching(true);
    try {
      const results = await searchByName(searchQuery);
      setSearchResults(results);
      if (results.length === 0) {
        toast.info("No cards found. Try a different search.");
      }
    } catch (error) {
      console.error("Search error:", error);
      toast.error("Failed to search cards. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  // Add card to challenge
  const handleAddCard = (apiCard: any) => {
    const marketPrice = getMarketPrice(apiCard);
    if (!marketPrice) {
      toast.error("Price data not available for this card");
      return;
    }

    const newCard: ChallengeCard = {
      id: apiCard.id,
      name: apiCard.name,
      set: apiCard.set.name,
      imageUrl: apiCard.images.small,
      targetPrice: marketPrice,
      actualPrice: null,
      acquired: false,
    };

    setCards([...cards, newCard]);
    toast.success(`Added ${apiCard.name} to challenge`);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Mark card as acquired
  const handleAcquireCard = (cardId: string, actualPrice: number) => {
    setCards(cards.map(c => 
      c.id === cardId 
        ? { ...c, acquired: true, actualPrice, acquiredAt: new Date() }
        : c
    ));
    toast.success("Card acquired!");
  };

  // Calculate metrics
  const acquiredCards = cards.filter(c => c.acquired).length;
  const progress = cards.length > 0 ? (acquiredCards / cards.length) * 100 : 0;
  const totalSpent = cards.reduce((sum, c) => sum + (c.actualPrice || 0), 0);
  const budgetRemaining = budget - totalSpent;
  const avgDiscount = cards.filter(c => c.acquired && c.actualPrice).length > 0
    ? cards.filter(c => c.acquired && c.actualPrice).reduce((sum, c) => {
        const discount = ((c.targetPrice - (c.actualPrice || 0)) / c.targetPrice) * 100;
        return sum + discount;
      }, 0) / cards.filter(c => c.acquired && c.actualPrice).length
    : 0;

  // Format time remaining
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
          <h1 className="text-xl font-bold">🏆 Challenge Mode</h1>
          <Link href="/challenge-leaderboard">
            <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
              <Trophy className="w-4 h-4 mr-2" />
              Leaderboard
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg p-8 mb-8 text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Complete Set Challenge</h2>
          <p className="text-muted-foreground">
            Inspired by <strong>Deep Pocket Monster</strong> - Can you complete your target set within the time limit and budget?
          </p>
        </div>

        {/* Challenge Setup (only show if not active) */}
        {!isActive && (
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Challenge Settings</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Challenge Name</label>
                <Input
                  type="text"
                  value={challengeName}
                  onChange={(e) => setChallengeName(e.target.value)}
                  placeholder="e.g., Complete Evolving Skies Set"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Time Limit (hours)</label>
                <Input
                  type="number"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(parseInt(e.target.value) || 48)}
                  min={1}
                  max={168}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Budget ($)</label>
                <Input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(parseFloat(e.target.value) || 500)}
                  min={0}
                  step={10}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Target Cards</label>
                <Input
                  type="number"
                  value={targetCards}
                  onChange={(e) => setTargetCards(parseInt(e.target.value) || 10)}
                  min={1}
                  disabled
                  className="bg-muted"
                />
                <p className="text-xs text-muted-foreground mt-1">Add cards below to set target</p>
              </div>
            </div>

            {/* Card Search */}
            <div className="border-t border-border pt-6">
              <h4 className="font-bold mb-4">Add Cards to Challenge</h4>
              
              <div className="flex gap-2 mb-4">
                <Input
                  type="text"
                  placeholder="Search for cards (e.g., Charizard, Pikachu)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="bg-cyan-500 hover:bg-cyan-600"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </div>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
                  {searchResults.map((card) => {
                    const marketPrice = getMarketPrice(card);
                    const alreadyAdded = cards.some(c => c.id === card.id);
                    
                    return (
                      <div 
                        key={card.id} 
                        className="flex items-center gap-4 p-3 bg-background border border-border rounded-lg"
                      >
                        <img 
                          src={card.images.small} 
                          alt={card.name}
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h5 className="font-bold text-sm">{card.name}</h5>
                          <p className="text-xs text-muted-foreground">{card.set.name}</p>
                          {marketPrice && (
                            <p className="text-xs font-bold text-green-500 mt-1">
                              ${marketPrice.toFixed(2)}
                            </p>
                          )}
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleAddCard(card)}
                          disabled={!marketPrice || alreadyAdded}
                          className="bg-cyan-500 hover:bg-cyan-600"
                        >
                          {alreadyAdded ? "Added" : <><Plus className="w-3 h-3 mr-1" /> Add</>}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Added Cards Preview */}
              {cards.length > 0 && (
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">
                    Cards in Challenge: {cards.length}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cards.map((card) => (
                      <div 
                        key={card.id}
                        className="relative group"
                      >
                        <img 
                          src={card.imageUrl} 
                          alt={card.name}
                          className="w-16 h-22 object-cover rounded border-2 border-border"
                        />
                        <button
                          onClick={() => setCards(cards.filter(c => c.id !== card.id))}
                          className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button 
              onClick={handleStart}
              disabled={cards.length === 0}
              className="w-full mt-6 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Challenge
            </Button>
          </div>
        )}

        {/* Active Challenge */}
        {isActive && (
          <>
            {/* Timer & Metrics */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {/* Timer */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Timer className="w-5 h-5 text-cyan-500" />
                  <h3 className="font-bold">Time Remaining</h3>
                </div>
                <p className={`text-3xl font-bold ${timeRemaining < 3600 ? 'text-red-500' : 'text-cyan-500'}`}>
                  {formatTime(timeRemaining)}
                </p>
              </div>

              {/* Progress */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  <h3 className="font-bold">Progress</h3>
                </div>
                <p className="text-3xl font-bold text-purple-500">
                  {acquiredCards}/{cards.length}
                </p>
                <p className="text-sm text-muted-foreground">{progress.toFixed(0)}% complete</p>
              </div>

              {/* Budget */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold">Budget</h3>
                </div>
                <p className={`text-3xl font-bold ${budgetRemaining < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  ${budgetRemaining.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Spent: ${totalSpent.toFixed(2)}
                </p>
              </div>

              {/* Avg Discount */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold">Avg Discount</h3>
                </div>
                <p className="text-3xl font-bold text-yellow-500">
                  {avgDiscount.toFixed(1)}%
                </p>
                <p className="text-sm text-muted-foreground">Below market</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4 mb-8">
              <Button 
                onClick={handlePauseResume}
                variant="outline"
                className="flex-1"
              >
                {isPaused ? <><Play className="w-4 h-4 mr-2" /> Resume</> : <><Pause className="w-4 h-4 mr-2" /> Pause</>}
              </Button>
              <Button 
                onClick={handleReset}
                variant="outline"
                className="flex-1 border-red-500 text-red-500 hover:bg-red-500/10"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Challenge
              </Button>
            </div>

            {/* Cards List */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Challenge Cards</h3>
              
              <div className="space-y-3">
                {cards.map((card) => (
                  <div 
                    key={card.id}
                    className={`flex items-center gap-4 p-4 border rounded-lg transition-all ${
                      card.acquired 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : 'bg-background border-border'
                    }`}
                  >
                    <img 
                      src={card.imageUrl} 
                      alt={card.name}
                      className="w-16 h-22 object-cover rounded"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-bold">{card.name}</h4>
                      <p className="text-sm text-muted-foreground">{card.set}</p>
                      <p className="text-sm">
                        Target: <span className="font-bold">${card.targetPrice.toFixed(2)}</span>
                        {card.actualPrice && (
                          <span className="ml-2">
                            | Paid: <span className={`font-bold ${card.actualPrice < card.targetPrice ? 'text-green-500' : 'text-red-500'}`}>
                              ${card.actualPrice.toFixed(2)}
                            </span>
                          </span>
                        )}
                      </p>
                    </div>

                    {card.acquired ? (
                      <div className="flex items-center gap-2 text-green-500">
                        <Check className="w-5 h-5" />
                        <span className="font-bold">Acquired</span>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => {
                          const price = prompt(`Enter price paid for ${card.name}:`);
                          if (price) {
                            handleAcquireCard(card.id, parseFloat(price));
                          }
                        }}
                        className="bg-cyan-500 hover:bg-cyan-600"
                      >
                        Mark Acquired
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Success/Failure Message */}
            {progress === 100 && (
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-lg p-8 mt-8 text-center">
                <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">🎉 Challenge Complete!</h2>
                <p className="text-muted-foreground mb-4">
                  You completed the challenge with {formatTime(timeRemaining)} remaining!
                </p>
                <div className="flex justify-center gap-8 text-sm">
                  <div>
                    <p className="text-muted-foreground">Total Spent</p>
                    <p className="text-2xl font-bold">${totalSpent.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg Discount</p>
                    <p className="text-2xl font-bold text-green-500">{avgDiscount.toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Budget Remaining</p>
                    <p className="text-2xl font-bold">${budgetRemaining.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
