# Pokemon TCG API Research

**Source:** https://pokemontcg.io/

**Date:** 2025-11-11

---

## Summary

**PokemonTCG.io is the best option for live Pokemon card pricing data.**

### Key Features:

✅ **Free API** with optional API key for higher rate limits
✅ **TCGPlayer pricing data** included
✅ **Hi-res card images** 
✅ **Comprehensive dataset** - Base Set through Sword & Shield
✅ **JSON format** - types, attacks, abilities, and more
✅ **Advanced search** - Logical operators (AND, OR, NOT, range)
✅ **Developer SDKs** - Community-contributed libraries
✅ **No authentication required** (basic tier)

### API Endpoint Example:

```
GET https://api.pokemontcg.io/v2/cards?q=name:gardevoir (subtypes:mega OR subtypes:vmax)
```

### Rate Limits:

- **Without API Key:** Lower rate limits, IP-based restrictions
- **With Free API Key:** Higher rate limits, no IP restrictions
- **Enterprise:** Contact andrew@pokemontcg.io for custom limits

### Pricing Data:

- Prices sourced from **TCGPlayer**
- Updated regularly
- Included in card JSON response

### Documentation:

- Full docs available at https://docs.pokemontcg.io/
- Developer portal for API key management
- Community Discord for support

---

## Alternative Options (Backup)

### 1. PokePriceTracker.com
- **URL:** https://www.pokemonpricetracker.com/pokemon-card-price-api
- **Features:** Daily TCGPlayer updates, PSA graded pricing, historical data
- **Pricing:** Free tier available
- **Status:** Good backup option

### 2. JustTCG.com
- **URL:** https://justtcg.com/
- **Features:** Modern TCGPlayer API alternative (2025)
- **Pricing:** Unknown
- **Status:** Need to research further

### 3. TCGPlayer API
- **Status:** ❌ **NO LONGER GRANTING NEW ACCESS**
- **Existing users only**
- **Not an option for new projects**

---

## Implementation Plan

### Phase 1: Basic Integration (Week 1)
1. Sign up for free API key at https://pokemontcg.io/
2. Test API endpoints with sample queries
3. Integrate into TCG Portfolio Tracker
4. Display live pricing for Pokemon cards

### Phase 2: Advanced Features (Week 2-3)
1. Add card search functionality
2. Add hi-res image display
3. Add price history tracking
4. Add set completion tracking

### Phase 3: Optimization (Week 4)
1. Implement caching to reduce API calls
2. Add error handling and fallbacks
3. Monitor rate limits
4. Optimize for performance

---

## Sports Cards API Research

**For sports cards, we need a different API since PokemonTCG.io only covers Pokemon.**

### Options to Research:

1. **eBay API**
   - URL: https://developer.ebay.com/
   - Features: Trading card condition descriptors, grading info
   - Status: Need to research authentication and pricing data

2. **Cardboard Connection API**
   - Status: Need to research

3. **COMC (Check Out My Cards) API**
   - Status: Need to research

4. **Web scraping** (last resort)
   - Scrape prices from eBay, TCGPlayer, etc.
   - Legal concerns, rate limiting issues
   - Not recommended

---

## Next Steps

1. ✅ Research Pokemon card pricing APIs
2. [ ] Sign up for PokemonTCG.io API key
3. [ ] Test API integration in sandbox
4. [ ] Integrate into TCG Portfolio Tracker
5. [ ] Research sports card pricing APIs
6. [ ] Document API usage for users
7. [ ] Add API cost estimates to documentation

---

## Cost Estimates

**PokemonTCG.io:**
- Free tier: $0/month
- API calls: Unlimited (with rate limits)
- No credit card required

**Total estimated cost:** $0/month (free tier sufficient for MVP)

---

## Security Considerations

1. **API Key Storage:** Store in environment variables (VITE_POKEMON_TCG_API_KEY)
2. **Rate Limiting:** Implement client-side caching to avoid hitting limits
3. **Error Handling:** Graceful fallbacks if API is down
4. **CORS:** API supports CORS for browser-based requests

---

## User Documentation Needed

1. How to get your own API key (optional)
2. Rate limit explanations
3. Data freshness (how often prices update)
4. Supported sets and cards
5. Troubleshooting common issues
