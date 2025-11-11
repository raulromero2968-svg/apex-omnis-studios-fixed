#!/usr/bin/env node

/**
 * Grok TCG Sentiment Analyzer Prototype
 * 
 * Tests Grok's real-time X platform integration for TCG market intelligence.
 * Analyzes social sentiment for Pokemon TCG cards using Grok-4 API.
 * 
 * Usage:
 *   node scripts/grok-tcg-sentiment.mjs "Charizard VMAX"
 *   node scripts/grok-tcg-sentiment.mjs "Pikachu VMAX"
 * 
 * Requirements:
 *   - GROK_API_KEY environment variable set
 *   - Grok Business subscription (for X platform access)
 */

const GROK_API_KEY = process.env.GROK_API_KEY;
const GROK_API_URL = 'https://api.x.ai/v1/chat/completions';

if (!GROK_API_KEY) {
  console.error('❌ Error: GROK_API_KEY environment variable not set');
  console.error('');
  console.error('To fix:');
  console.error('1. Go to Manus Management UI → Settings → Secrets');
  console.error('2. Add secret: GROK_API_KEY = your_xai_api_key');
  console.error('3. Restart the dev server');
  process.exit(1);
}

const cardName = process.argv[2];

if (!cardName) {
  console.error('❌ Error: Card name required');
  console.error('');
  console.error('Usage:');
  console.error('  node scripts/grok-tcg-sentiment.mjs "Charizard VMAX"');
  process.exit(1);
}

console.log(`\n🔍 Analyzing TCG sentiment for: ${cardName}\n`);
console.log('⏳ Querying Grok API with real-time X platform data...\n');

async function analyzeTCGSentiment(cardName) {
  const systemPrompt = `You are a Pokemon TCG market analyst with access to real-time X (Twitter) platform data. 

Your job is to analyze current social sentiment and market trends for specific Pokemon TCG cards.

Provide analysis in this exact JSON format:
{
  "card": "card name",
  "sentiment_score": number from -10 to +10,
  "trend_direction": "up" | "down" | "stable",
  "confidence": number from 0 to 1,
  "key_mentions": [
    "quote from influential collector or trader",
    "quote from influential collector or trader"
  ],
  "price_prediction": "brief 1-sentence prediction for next 7 days",
  "reasoning": "2-3 sentence explanation of why this sentiment exists",
  "data_sources": "brief note about X data analyzed (e.g., 'analyzed 500+ mentions in past 24h')"
}`;

  const userPrompt = `Analyze current social sentiment on X (Twitter) for the Pokemon TCG card: "${cardName}"

Focus on:
1. Recent mentions from TCG collectors, traders, and influencers
2. Price discussion trends (buying, selling, holding)
3. Pull rate speculation or set rotation news
4. Competitive play viability mentions

Provide your analysis in the JSON format specified.`;

  try {
    const response = await fetch(GROK_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROK_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'grok-3',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.3,
        max_tokens: 1500
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Grok API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Try to parse JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    } else {
      // If no JSON found, return raw content
      return { raw_response: content };
    }
  } catch (error) {
    console.error('❌ Error calling Grok API:', error.message);
    throw error;
  }
}

// Run analysis
try {
  const analysis = await analyzeTCGSentiment(cardName);

  console.log('✅ Analysis Complete!\n');
  console.log('═'.repeat(60));
  console.log(`📊 TCG Market Intelligence: ${cardName}`);
  console.log('═'.repeat(60));

  if (analysis.raw_response) {
    // Grok didn't return JSON, show raw response
    console.log('\n' + analysis.raw_response);
  } else {
    // Display structured analysis
    console.log(`\n🎯 Sentiment Score: ${analysis.sentiment_score}/10`);
    
    const trendEmoji = {
      'up': '📈',
      'down': '📉',
      'stable': '➡️'
    };
    console.log(`${trendEmoji[analysis.trend_direction] || '❓'} Trend: ${analysis.trend_direction.toUpperCase()}`);
    console.log(`🎲 Confidence: ${(analysis.confidence * 100).toFixed(0)}%`);

    console.log(`\n💬 Key Mentions:`);
    if (analysis.key_mentions && analysis.key_mentions.length > 0) {
      analysis.key_mentions.forEach((mention, i) => {
        console.log(`   ${i + 1}. "${mention}"`);
      });
    } else {
      console.log('   (No specific mentions captured)');
    }

    console.log(`\n🔮 Price Prediction (Next 7 Days):`);
    console.log(`   ${analysis.price_prediction}`);

    console.log(`\n📝 Reasoning:`);
    console.log(`   ${analysis.reasoning}`);

    console.log(`\n📊 Data Sources:`);
    console.log(`   ${analysis.data_sources}`);
  }

  console.log('\n' + '═'.repeat(60));
  console.log('\n💡 Next Steps:');
  console.log('   1. Test with more cards to validate accuracy');
  console.log('   2. Compare predictions vs actual price changes');
  console.log('   3. Integrate into TCG Portfolio Tracker if >60% accurate\n');

} catch (error) {
  console.error('\n❌ Analysis failed:', error.message);
  process.exit(1);
}
