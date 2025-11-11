/**
 * Pokemon TCG API Service
 * 
 * Integrates with PokemonTCG.io API to fetch live card pricing data from TCGPlayer.
 * Documentation: https://docs.pokemontcg.io/
 */

const API_BASE_URL = "https://api.pokemontcg.io/v2";
const API_KEY = import.meta.env.VITE_POKEMON_TCG_API_KEY || ""; // Optional - higher rate limits with key

interface PokemonCard {
  id: string;
  name: string;
  set: {
    name: string;
    series: string;
    releaseDate: string;
  };
  rarity: string;
  images: {
    small: string;
    large: string;
  };
  tcgplayer?: {
    url: string;
    updatedAt: string;
    prices: {
      holofoil?: {
        low: number;
        mid: number;
        high: number;
        market: number;
      };
      reverseHolofoil?: {
        low: number;
        mid: number;
        high: number;
        market: number;
      };
      normal?: {
        low: number;
        mid: number;
        high: number;
        market: number;
      };
    };
  };
}

interface SearchResponse {
  data: PokemonCard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

/**
 * Fetch card data from Pokemon TCG API
 */
export async function searchCards(query: string): Promise<PokemonCard[]> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  // Add API key if available (optional - increases rate limits)
  if (API_KEY) {
    headers["X-Api-Key"] = API_KEY;
  }

  const response = await fetch(`${API_BASE_URL}/cards?q=${encodeURIComponent(query)}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`Pokemon TCG API error: ${response.statusText}`);
  }

  const data: SearchResponse = await response.json();
  return data.data;
}

/**
 * Get card by ID
 */
export async function getCardById(id: string): Promise<PokemonCard> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (API_KEY) {
    headers["X-Api-Key"] = API_KEY;
  }

  const response = await fetch(`${API_BASE_URL}/cards/${id}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`Pokemon TCG API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
}

/**
 * Get current market price for a card
 */
export function getMarketPrice(card: PokemonCard): number | null {
  if (!card.tcgplayer?.prices) {
    return null;
  }

  // Try to get market price from different variants (holofoil > reverseHolofoil > normal)
  const prices = card.tcgplayer.prices;
  
  if (prices.holofoil?.market) {
    return prices.holofoil.market;
  }
  
  if (prices.reverseHolofoil?.market) {
    return prices.reverseHolofoil.market;
  }
  
  if (prices.normal?.market) {
    return prices.normal.market;
  }

  return null;
}

/**
 * Get price range for a card (low - high)
 */
export function getPriceRange(card: PokemonCard): { low: number; high: number } | null {
  if (!card.tcgplayer?.prices) {
    return null;
  }

  const prices = card.tcgplayer.prices;
  let low = Infinity;
  let high = -Infinity;

  // Check all variants
  [prices.holofoil, prices.reverseHolofoil, prices.normal].forEach(variant => {
    if (variant) {
      if (variant.low < low) low = variant.low;
      if (variant.high > high) high = variant.high;
    }
  });

  if (low === Infinity || high === -Infinity) {
    return null;
  }

  return { low, high };
}

/**
 * Search cards by name
 */
export async function searchByName(name: string): Promise<PokemonCard[]> {
  return searchCards(`name:${name}`);
}

/**
 * Search cards by set
 */
export async function searchBySet(setName: string): Promise<PokemonCard[]> {
  return searchCards(`set.name:"${setName}"`);
}

/**
 * Search cards by rarity
 */
export async function searchByRarity(rarity: string): Promise<PokemonCard[]> {
  return searchCards(`rarity:${rarity}`);
}

/**
 * Advanced search with multiple filters
 */
export async function advancedSearch(filters: {
  name?: string;
  set?: string;
  rarity?: string;
  types?: string[];
}): Promise<PokemonCard[]> {
  const queryParts: string[] = [];

  if (filters.name) {
    queryParts.push(`name:${filters.name}`);
  }

  if (filters.set) {
    queryParts.push(`set.name:"${filters.set}"`);
  }

  if (filters.rarity) {
    queryParts.push(`rarity:${filters.rarity}`);
  }

  if (filters.types && filters.types.length > 0) {
    const typesQuery = filters.types.map(t => `types:${t}`).join(" OR ");
    queryParts.push(`(${typesQuery})`);
  }

  const query = queryParts.join(" ");
  return searchCards(query);
}

/**
 * Categorize card tier based on price
 */
export function categorizeCardTier(price: number): "low-end" | "mid-tier" | "high-end" {
  if (price < 10) return "low-end";
  if (price < 100) return "mid-tier";
  return "high-end";
}

/**
 * Format rarity from API to match our internal format
 */
export function formatRarity(apiRarity: string): "Common" | "Uncommon" | "Rare" | "Ultra Rare" | "Secret Rare" {
  const rarityMap: Record<string, "Common" | "Uncommon" | "Rare" | "Ultra Rare" | "Secret Rare"> = {
    "Common": "Common",
    "Uncommon": "Uncommon",
    "Rare": "Rare",
    "Rare Holo": "Rare",
    "Rare Holo EX": "Ultra Rare",
    "Rare Holo GX": "Ultra Rare",
    "Rare Holo V": "Ultra Rare",
    "Rare Holo VMAX": "Ultra Rare",
    "Rare Holo VSTAR": "Ultra Rare",
    "Rare Ultra": "Ultra Rare",
    "Rare Secret": "Secret Rare",
    "Rare Rainbow": "Secret Rare",
  };

  return rarityMap[apiRarity] || "Rare";
}
