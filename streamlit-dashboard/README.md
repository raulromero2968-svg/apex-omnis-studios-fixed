# Grok TCG Sentiment Dashboard

**Built by:** Maple (AIS Strategic Advisor)  
**Integrated by:** Manus AI  
**Purpose:** Real-time TCG market intelligence dashboard powered by Grok's X platform data

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies

```bash
cd streamlit-dashboard
python3.11 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 2. Configure Secrets

Edit `.streamlit/secrets.toml` and add:
- Google Sheets service account JSON
- Notion API key and database ID  
- Grok API key

### 3. Run Dashboard

```bash
streamlit run app.py
```

Dashboard will open at `http://localhost:8501`

---

## 📊 Features

### 1. Sentiment Tracker
- Top 10 cards by sentiment score
- Real-time X platform mentions
- 24-hour rolling averages

### 2. Prediction Accuracy Monitor
- 3-day and 7-day prediction windows
- Confidence intervals
- Accuracy percentage tracking

### 3. Bullish vs Bearish Movers
- 24-hour price changes
- Sentiment correlation
- Top gainers and losers

### 4. API Cost Analytics
- Cost per 100 calls
- Cache hit rate (target: ≥70%)
- Token usage tracking

### 5. Sentiment Bias Audit
- Game-level sentiment analysis
- Prediction bias detection
- Calibration metrics

---

## 🔌 Data Pipeline Setup

### Google Sheets Schema

Create a Google Sheet with these columns:

```
Card, Game, Set, Rarity, Timestamp, SentimentScore, Confidence,
PredictedDeltaPct, XMentions, ActualPrice, PredictedWindowDays,
APICalls, Tokens, CacheHit
```

### Notion Database Schema

Create a Notion database with these properties:

```
Card (title), Set (text), Rarity (select), Game (select),
SetAgeDays (number), Watchlist (checkbox), RiskFlag (select),
Sentiment Trend (formula), Prediction Accuracy (rollup/number)
```

### Automation (Make.com/Zapier)

1. **Grok API → Google Sheets**
   - Trigger: Every 6-12 hours
   - Action: Append row to Google Sheet
   - Data: Grok sentiment analysis output

2. **Google Sheets → Notion**
   - Trigger: When sentiment changes ≥10%
   - Action: Update Notion database
   - Sync: Only changed records

---

## 🎯 72-Hour Validation Test

### Setup

1. Select 30-50 cards for tracking
2. Run Grok sentiment analysis every 6 hours
3. Log predictions to Google Sheets
4. Track actual price changes

### Success Criteria

- **Prediction Accuracy:** >60%
- **Cache Hit Rate:** ≥70%
- **API Cost:** <$5 for 72 hours
- **Data Quality:** No missing timestamps

### Metrics to Report

1. Rolling accuracy % (3-day and 7-day windows)
2. Cache hit % (batch + rate-limit optimization)
3. API cost per 100 calls
4. Sentiment bias by game

---

## 📁 File Structure

```
streamlit-dashboard/
├── app.py                  # Main dashboard application
├── requirements.txt        # Python dependencies
├── .streamlit/
│   └── secrets.toml       # Configuration secrets
└── README.md              # This file
```

---

## 🔧 Troubleshooting

### Dashboard won't start
- Check Python version (3.10+ required)
- Verify all dependencies installed
- Check secrets.toml format

### No data showing
- Verify Google Sheets connection
- Check sheet ID in secrets.toml
- Confirm column headers match schema

### API errors
- Verify Grok API key is valid
- Check API credit balance
- Review rate limits

---

## 🚀 Deployment (Streamlit Cloud)

### 1. Push to GitHub

```bash
git add streamlit-dashboard/
git commit -m "Add Grok sentiment dashboard"
git push origin main
```

### 2. Deploy on Streamlit Cloud

1. Go to https://streamlit.io/cloud
2. Click "New app"
3. Select your repository
4. Set app path: `streamlit-dashboard/app.py`
5. Add secrets in Settings → Secrets (paste contents of secrets.toml)
6. Deploy!

### 3. Share Dashboard

Once deployed, share the public URL with:
- Team members
- Potential partners
- Beta testers

---

## 📈 Next Steps

1. **Week 1:** Validate >60% prediction accuracy
2. **Week 2:** Build predictive model with ML
3. **Week 3:** Scale to 100+ cards and integrate into main website

---

## 💡 Tips from Maple

- **Start small:** Test with 10-20 cards first
- **Batch updates:** Every 6-12 hours (not real-time) to save API costs
- **Cache aggressively:** Target ≥70% cache hit rate
- **Monitor bias:** Check if sentiment consistently over/under-predicts
- **Iterate fast:** 3-day validation loops, not 7-day

---

## 🆘 Support

If you hit friction on any connector:
1. Identify which loader (Sheets or Notion)
2. Ask Maple for minimal replacement snippet
3. Test with demo data first, then swap to production

**Remember:** The goal is to prove >60% accuracy in Week 1. Everything else is secondary.
