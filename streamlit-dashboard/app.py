# Grok Streamlit Dashboard Prototype (AIS)
# app.py
# -------------------------------------------------------------
# This prototype ships with *demo data loaders* you can replace
# later with Google Sheets + Notion connectors. Search for the
# "CONNECTOR SWAP" sections for drop-in points.
# -------------------------------------------------------------

from __future__ import annotations

import math
import random
from datetime import datetime, timedelta, timezone
from typing import List, Tuple

import numpy as np
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import streamlit as st

# -------------------------------------------------------------
# Page Config
# -------------------------------------------------------------
st.set_page_config(
    page_title="AIS Grok Dashboard",
    page_icon="🧪",
    layout="wide",
    initial_sidebar_state="expanded",
)

# -------------------------------------------------------------
# Utilities
# -------------------------------------------------------------
UTC = timezone.utc
NOW = datetime.now(tz=UTC)
RNG = np.random.default_rng(42)

def fmt_pct(x: float) -> str:
    return f"{x*100:,.2f}%"

def fmt_usd(x: float) -> str:
    return "$" + f"{x:,.2f}"

# -------------------------------------------------------------
# DEMO DATA LOADERS (Replace later)
# -------------------------------------------------------------
# CONNECTOR SWAP: Replace these with Google Sheets / Notion pulls.
# - Keep return schemas stable and the rest of the app will work.

@st.cache_data(ttl=600)
def load_demo_cards(n_cards: int = 80) -> pd.DataFrame:
    """Demo catalog of cards across games/sets/rarities."""
    games = ["Pokémon", "Magic: The Gathering", "Yu-Gi-Oh!"]
    rarities = ["Common", "Uncommon", "Rare", "Ultra Rare", "Secret Rare"]
    sets = [
        "Base Set",
        "Neo Genesis",
        "Evolving Skies",
        "Lorcana Crossover? (mock)",
        "Zendikar Rising",
        "Pharaoh's Servant",
    ]
    rows = []
    for i in range(n_cards):
        game = RNG.choice(games)
        rarity = RNG.choice(rarities, p=[0.30, 0.25, 0.22, 0.15, 0.08])
        rows.append(
            {
                "card_id": f"CARD{i:04d}",
                "game": game,
                "name": f"{game[:2].upper()} Card {i}",
                "set": RNG.choice(sets),
                "rarity": rarity,
            }
        )
    return pd.DataFrame(rows)

@st.cache_data(ttl=600)
def load_demo_sentiment(hours: int = 7 * 24, cards: pd.DataFrame | None = None) -> pd.DataFrame:
    """Simulated hourly sentiment per card from social/news/market chatter.

    Returns columns: [timestamp, card_id, game, name, sentiment, mentions]
    sentiment in [-1,1].
    """
    if cards is None:
        cards = load_demo_cards()
    timestamps = [NOW - timedelta(hours=h) for h in range(hours)][::-1]
    rows = []
    for _, row in cards.iterrows():
        base = RNG.normal(0.0, 0.15)
        vol = RNG.uniform(0.4, 0.9)
        for ts in timestamps:
            # AR(1)-ish drift + noise
            base = 0.7 * base + RNG.normal(0, 0.25)
            s = np.tanh(base * vol)
            mentions = max(0, int(abs(RNG.normal(20, 12))))
            rows.append(
                {
                    "timestamp": ts,
                    "card_id": row.card_id,
                    "game": row.game,
                    "name": row.name,
                    "sentiment": float(s),
                    "mentions": mentions,
                }
            )
    df = pd.DataFrame(rows)
    return df

@st.cache_data(ttl=600)
def load_demo_prices(days: int = 30, cards: pd.DataFrame | None = None) -> pd.DataFrame:
    """Simulated daily prices per card.

    Returns columns: [date, card_id, price]
    """
    if cards is None:
        cards = load_demo_cards()
    dates = [ (NOW - timedelta(days=d)).date() for d in range(days) ][::-1]
    rows = []
    for _, row in cards.iterrows():
        p = max(1.0, RNG.lognormal(mean=3.2, sigma=0.35))
        for dt in dates:
            shock = RNG.normal(0, 0.02)
            drift = RNG.normal(0.000, 0.003)
            p = max(0.5, p * (1 + drift + shock))
            rows.append({"date": dt, "card_id": row.card_id, "price": float(p)})
    return pd.DataFrame(rows)

@st.cache_data(ttl=600)
def load_demo_predictions(cards: pd.DataFrame | None = None) -> pd.DataFrame:
    """Simulated model predictions made each day for 7d horizon.

    Returns columns: [date, card_id, horizon_days, pred_return, pred_direction]
    """
    if cards is None:
        cards = load_demo_cards()
    horizons = [3, 7]
    start = (NOW - timedelta(days=21)).date()
    dates = pd.date_range(start=start, end=NOW.date(), freq="D").date
    rows = []
    for _, row in cards.iterrows():
        for dt in dates:
            for h in horizons:
                mu = RNG.normal(0.0, 0.01)
                sigma = RNG.uniform(0.03, 0.08)
                pred = RNG.normal(mu, sigma)
                rows.append(
                    {
                        "date": dt,
                        "card_id": row.card_id,
                        "horizon_days": h,
                        "pred_return": float(pred),
                        "pred_direction": int(np.sign(pred) or RNG.choice([-1, 1])),
                    }
                )
    return pd.DataFrame(rows)

@st.cache_data(ttl=600)
def load_demo_api_costs(days: int = 30) -> pd.DataFrame:
    """Simulated daily API usage/costs by provider and endpoint.

    Returns columns: [date, provider, endpoint, calls, tokens_in, tokens_out, cost_usd]
    """
    providers = ["OpenAI", "Anthropic", "SerpAPI", "CrawlKit"]
    endpoints = {
        "OpenAI": ["gpt-4o-mini", "gpt-4.1", "embedding-3-large"],
        "Anthropic": ["claude-3.5-sonnet"],
        "SerpAPI": ["/search"],
        "CrawlKit": ["/fetch"],
    }
    dates = pd.date_range(end=NOW.date(), periods=days).date
    rows = []
    for dt in dates:
        for p in providers:
            for ep in endpoints[p]:
                calls = max(0, int(RNG.normal(60, 25)))
                tok_in = int(abs(RNG.normal(1200, 400))) * calls
                tok_out = int(abs(RNG.normal(900, 300))) * calls
                # naive blended CPM
                cpm = {
                    "OpenAI": 2.5,
                    "Anthropic": 3.2,
                    "SerpAPI": 10.0,
                    "CrawlKit": 1.0,
                }[p]
                cost = (tok_in + tok_out) / 1000 * (cpm / 1000) + calls * (0.001 if p in ["CrawlKit"] else 0)
                rows.append(
                    {
                        "date": dt,
                        "provider": p,
                        "endpoint": ep,
                        "calls": calls,
                        "tokens_in": tok_in,
                        "tokens_out": tok_out,
                        "cost_usd": float(cost),
                    }
                )
    return pd.DataFrame(rows)

@st.cache_data(ttl=600)
def load_demo_bias(cards: pd.DataFrame | None = None, prices: pd.DataFrame | None = None, sentiment: pd.DataFrame | None = None) -> pd.DataFrame:
    """Aggregate sentiment vs. realized move to audit bias by game.

    Returns columns: [date, game, avg_sentiment, realized_return]
    """
    if cards is None:
        cards = load_demo_cards()
    if prices is None:
        prices = load_demo_prices(cards=cards)
    if sentiment is None:
        sentiment = load_demo_sentiment(cards=cards)

    # Daily sentiment by game
    s_daily = (
        sentiment
        .assign(date=lambda d: pd.to_datetime(d["timestamp"]).dt.date)
        .groupby(["date", "game"], as_index=False)
        .agg(avg_sentiment=("sentiment", "mean"))
    )
    # Daily game-level VWAP price using last price per card per day
    last_price = prices.sort_values(["card_id", "date"]).drop_duplicates(["card_id", "date"], keep="last")
    p_daily = (
        last_price
        .merge(load_demo_cards()[["card_id", "game"]], on="card_id", how="left")
        .groupby(["date", "game"], as_index=False)
        .agg(price=("price", "mean"))
        .sort_values(["game", "date"])
    )
    p_daily["realized_return"] = p_daily.groupby("game")["price"].pct_change().fillna(0.0)

    df = s_daily.merge(p_daily[["date", "game", "realized_return"]], on=["date", "game"], how="left").fillna(0.0)
    return df

# -------------------------------------------------------------
# CONNECTOR SWAP STUBS
# -------------------------------------------------------------
# Example outlines for your production connectors.
# Replace the demo loaders above with thin wrappers around these.

def fetch_from_google_sheets(sheet_id: str, range_name: str) -> pd.DataFrame:
    """Stub for Google Sheets pull. Return a DataFrame.
    In prod, use gspread or Google Sheets API v4.
    """
    raise NotImplementedError("Wire this to your Sheets data source.")


def fetch_from_notion(database_id: str, filter_payload: dict | None = None) -> pd.DataFrame:
    """Stub for Notion pull. Return a DataFrame.
    In prod, use the Notion SDK and map properties -> columns.
    """
    raise NotImplementedError("Wire this to your Notion data source.")

# -------------------------------------------------------------
# Derivations
# -------------------------------------------------------------

def compute_top10_sentiment(sentiment_df: pd.DataFrame, game_filter: List[str] | None, hours:int=24) -> pd.DataFrame:
    cutoff = NOW - timedelta(hours=hours)
    df = sentiment_df[sentiment_df["timestamp"] >= cutoff]
    if game_filter:
        df = df[df["game"].isin(game_filter)]
    top = (
        df.groupby(["card_id", "name", "game"], as_index=False)
        .agg(avg_sentiment=("sentiment", "mean"), mentions=("mentions", "sum"))
        .sort_values(["avg_sentiment", "mentions"], ascending=[False, False])
        .head(10)
    )
    return top


def compute_bull_bear_movers(price_df: pd.DataFrame, cards: pd.DataFrame, game_filter: List[str] | None, hours:int=24) -> Tuple[pd.DataFrame, pd.DataFrame]:
    cutoff_date = (NOW - timedelta(hours=hours)).date()
    recent = price_df[price_df["date"] >= cutoff_date]
    last_two = recent.sort_values(["card_id", "date"]).groupby("card_id").tail(2)
    piv = last_two.pivot(index="card_id", columns="date", values="price").dropna()
    if piv.shape[1] < 2:
        return pd.DataFrame(), pd.DataFrame()
    cols = sorted(piv.columns)
    ret = (piv[cols[-1]] - piv[cols[-2]]) / piv[cols[-2]]
    df = (
        ret.rename("return_24h")
        .to_frame()
        .merge(cards, on="card_id", how="left")
        .sort_values("return_24h", ascending=False)
    )
    if game_filter:
        df = df[df["game"].isin(game_filter)]
    top_gainers = df.head(10)
    top_losers = df.tail(10).sort_values("return_24h")
    return top_gainers, top_losers


def compute_prediction_accuracy(pred_df: pd.DataFrame, price_df: pd.DataFrame, horizon_days: int, game_filter: List[str] | None) -> pd.DataFrame:
    prices = price_df.copy()
    # Future realized returns per card/horizon
    future = prices.sort_values(["card_id", "date"]).copy()

    # Compute horizon return as close(t+h)/close(t) - 1
    future["future_price"] = future.groupby("card_id")["price"].shift(-horizon_days)
    future["realized_return"] = (future["future_price"] - future["price"]) / future["price"]
    future = future.dropna(subset=["realized_return"])  # drop incomplete horizons

    # Align predictions to realized
    pred = pred_df[pred_df["horizon_days"] == horizon_days].copy()
    df = pred.merge(future[["date", "card_id", "realized_return"]], on=["date", "card_id"], how="inner")

    # Add game info
    cards = load_demo_cards()[["card_id", "game", "name"]]
    df = df.merge(cards, on="card_id", how="left")
    if game_filter:
        df = df[df["game"].isin(game_filter)]

    df["realized_direction"] = np.sign(df["realized_return"]).astype(int).replace(0, 1)  # treat flat as up
    df["correct"] = (df["pred_direction"] == df["realized_direction"]).astype(int)
    # Aggregate metrics
    metrics = (
        df.groupby("game", as_index=False)
        .agg(
            n=("correct", "size"),
            accuracy=("correct", "mean"),
            avg_pred=("pred_return", "mean"),
            avg_realized=("realized_return", "mean"),
        )
        .sort_values("accuracy", ascending=False)
    )
    return metrics, df


def compute_bias_audit(bias_df: pd.DataFrame) -> pd.DataFrame:
    out = (
        bias_df.groupby("game", as_index=False)
        .agg(
            avg_sentiment=("avg_sentiment", "mean"),
            avg_realized_return=("realized_return", "mean"),
        )
    )
    out["bias"] = out["avg_sentiment"].clip(-0.99, 0.99) - out["avg_realized_return"].clip(-0.99, 0.99)
    return out.sort_values("bias", ascending=False)

# -------------------------------------------------------------
# Sidebar Controls
# -------------------------------------------------------------
with st.sidebar:
    st.title("AIS Controls")
    st.caption("Demo mode with synthetic data. Swap connectors when ready.")

    games = ["Pokémon", "Magic: The Gathering", "Yu-Gi-Oh!"]
    game_filter = st.multiselect("Games", games, default=games)

    st.divider()
    st.subheader("Windows")
    sentiment_hours = st.slider("Sentiment window (hours)", min_value=6, max_value=168, value=24, step=6)
    movers_hours = st.slider("Movers lookback (hours)", min_value=12, max_value=72, value=24, step=12)

    st.divider()
    st.subheader("Prediction Horizons")
    horizon_opts = st.multiselect("Evaluate horizons (days)", options=[3,7], default=[3,7])

    st.divider()
    st.subheader("API Analytics")
    show_per_endpoint = st.checkbox("Detail by endpoint", value=True)

    st.divider()
    st.caption("Tip: Use ⌘/Ctrl+R to refresh caches after swapping connectors.")

# -------------------------------------------------------------
# Load Data
# -------------------------------------------------------------
cards_df = load_demo_cards()
sentiment_df = load_demo_sentiment(cards=cards_df)
price_df = load_demo_prices(cards=cards_df)
pred_df = load_demo_predictions(cards=cards_df)
api_df = load_demo_api_costs()
bias_df = load_demo_bias(cards=cards_df, prices=price_df, sentiment=sentiment_df)

# -------------------------------------------------------------
# Header KPIs
# -------------------------------------------------------------
st.title("Grok Streamlit Dashboard Prototype — AIS")
col1, col2, col3, col4 = st.columns(4)
with col1:
    st.metric("Cards Tracked", f"{cards_df.shape[0]:,}")
with col2:
    last_24h_msgs = sentiment_df[sentiment_df["timestamp"] >= NOW - timedelta(hours=24)]["mentions"].sum()
    st.metric("Mentions (24h)", f"{last_24h_msgs:,}")
with col3:
    mtd_cost = api_df[pd.to_datetime(api_df["date"]) >= pd.to_datetime(NOW.date().replace(day=1))]["cost_usd"].sum()
    st.metric("API Spend (MTD)", fmt_usd(mtd_cost))
with col4:
    avg_bias = compute_bias_audit(bias_df)["bias"].mean()
    st.metric("Sentiment Bias (avg)", fmt_pct(avg_bias))

st.markdown("---")

# -------------------------------------------------------------
# Layout Tabs
# -------------------------------------------------------------
tab1, tab2, tab3, tab4, tab5 = st.tabs([
    "🔎 Sentiment Tracker",
    "🎯 Prediction Accuracy",
    "📈 Movers (24h)",
    "💸 API Cost Analytics",
    "🧪 Sentiment Bias Audit",
])

# -------------------------------------------------------------
# TAB 1 — Sentiment Tracker (Top 10)
# -------------------------------------------------------------
with tab1:
    st.subheader("Top 10 Cards by Average Sentiment")
    top10 = compute_top10_sentiment(sentiment_df, game_filter, hours=sentiment_hours)

    c1, c2 = st.columns([3, 2])
    with c1:
        if not top10.empty:
            fig = px.bar(
                top10[::-1],
                x="avg_sentiment",
                y="name",
                color="game",
                orientation="h",
                title=f"Average Sentiment (last {sentiment_hours}h)",
                color_discrete_sequence=px.colors.qualitative.Set2,
            )
            fig.update_layout(height=480, margin=dict(l=10, r=10, t=60, b=10))
            st.plotly_chart(fig, use_container_width=True)
        else:
            st.info("No sentiment data in the selected window.")

    with c2:
        st.dataframe(
            top10.assign(
                avg_sentiment=lambda d: d["avg_sentiment"].map(lambda x: round(x, 3)),
            )[["name", "game", "avg_sentiment", "mentions"]]
            .rename(columns={"name": "Card", "avg_sentiment": "Avg Sentiment"}),
            use_container_width=True,
            hide_index=True,
            height=480,
        )

# -------------------------------------------------------------
# TAB 2 — Prediction Accuracy Monitor (3d/7d)
# -------------------------------------------------------------
with tab2:
    st.subheader("Prediction Accuracy by Game")

    cols = st.columns(len(horizon_opts) or 1)
    for i, horizon in enumerate(horizon_opts or [3]):
        metrics, df = compute_prediction_accuracy(pred_df, price_df, horizon, game_filter)
        with cols[i]:
            if metrics.empty:
                st.warning(f"No data for {horizon}d horizon.")
            else:
                st.markdown(f"**Horizon:** {horizon}d")
                st.dataframe(
                    metrics.assign(
                        accuracy=lambda d: (d["accuracy"] * 100).round(1),
                        avg_pred=lambda d: (d["avg_pred"] * 100).round(2),
                        avg_realized=lambda d: (d["avg_realized"] * 100).round(2),
                    ).rename(
                        columns={
                            "accuracy": "Accuracy %",
                            "avg_pred": "Avg Pred %",
                            "avg_realized": "Avg Realized %",
                        }
                    ),
                    use_container_width=True,
                    hide_index=True,
                )

    st.markdown("\n")
    st.caption("Direction is evaluated as up/down vs realized returns; flat treated as up.")

    # Detail chart for latest horizon selected
    if horizon_opts:
        h = horizon_opts[0]
        _, detail_df = compute_prediction_accuracy(pred_df, price_df, h, game_filter)
        # Sample 400 rows for speed
        d2 = detail_df.sample(min(400, len(detail_df)), random_state=7) if not detail_df.empty else detail_df
        if not d2.empty:
            fig = px.scatter(
                d2,
                x="pred_return",
                y="realized_return",
                color="game",
                hover_data=["name", "date"],
                title=f"Predicted vs Realized Returns (h={h}d)",
                color_discrete_sequence=px.colors.qualitative.Set2,
            )
            fig.add_trace(
                go.Scatter(
                    x=[d2["pred_return"].min(), d2["pred_return"].max()],
                    y=[d2["pred_return"].min(), d2["pred_return"].max()],
                    mode="lines",
                    name="y=x",
                    line=dict(dash="dash", color="#999"),
                    showlegend=True,
                )
            )
            fig.update_layout(height=500)
            st.plotly_chart(fig, use_container_width=True)
        else:
            st.info("Not enough data to render scatter plot.")

# -------------------------------------------------------------
# TAB 3 — Bullish vs Bearish Movers (24h)
# -------------------------------------------------------------
with tab3:
    st.subheader("Bullish vs Bearish Movers (last 24h)")
    gainers, losers = compute_bull_bear_movers(price_df, cards_df, game_filter, hours=movers_hours)
    c1, c2 = st.columns(2)

    def render_movers(df: pd.DataFrame, title: str, color: str):
        if df.empty:
            st.info("Not enough price points in the selected window.")
            return
        fig = px.bar(
            df.assign(pct=lambda d: d["return_24h"] * 100)[::-1],
            x="pct",
            y="name",
            color_discrete_sequence=[color],
            orientation="h",
            title=title,
            hover_data=["game", "set", "rarity"],
        )
        fig.update_layout(height=520, margin=dict(l=10, r=10, t=60, b=10))
        st.plotly_chart(fig, use_container_width=True)
        st.dataframe(
            df.assign(Return=lambda d: d["return_24h"].map(fmt_pct))[["name", "game", "Return", "set", "rarity"]]
            .rename(columns={"name": "Card"}),
            use_container_width=True,
            hide_index=True,
            height=260,
        )

    with c1:
        render_movers(gainers, "Top Gainers", "#16a34a")
    with c2:
        render_movers(losers, "Top Losers", "#dc2626")

# -------------------------------------------------------------
# TAB 4 — API Cost Analytics
# -------------------------------------------------------------
with tab4:
    st.subheader("API Cost Analytics")

    # Summary KPIs
    total = api_df["cost_usd"].sum()
    last7 = api_df[pd.to_datetime(api_df["date"]) >= pd.to_datetime(NOW.date() - timedelta(days=7))]["cost_usd"].sum()
    c1, c2, c3 = st.columns(3)
    c1.metric("Total Cost (all time)", fmt_usd(total))
    c2.metric("Last 7 Days", fmt_usd(last7))
    c3.metric("Providers", f"{api_df['provider'].nunique()}" )

    # Cost over time by provider
    g = api_df.groupby(["date", "provider"], as_index=False)["cost_usd"].sum()
    fig = px.area(
        g,
        x="date",
        y="cost_usd",
        color="provider",
        title="Daily Cost by Provider",
        color_discrete_sequence=px.colors.qualitative.Set2,
    )
    fig.update_layout(yaxis_title="USD", legend_title_text="Provider")
    st.plotly_chart(fig, use_container_width=True)

    # Cost per endpoint/provider
    if show_per_endpoint:
        ep = api_df.groupby(["provider", "endpoint"], as_index=False).agg(
            calls=("calls", "sum"),
            tokens_in=("tokens_in", "sum"),
            tokens_out=("tokens_out", "sum"),
            cost_usd=("cost_usd", "sum"),
        )
        ep["cost_per_1k_tokens"] = ep["cost_usd"] / ((ep["tokens_in"] + ep["tokens_out"]) / 1000 + 1e-9)
        st.dataframe(
            ep.assign(
                cost_usd=lambda d: d["cost_usd"].map(fmt_usd),
                cost_per_1k_tokens=lambda d: d["cost_per_1k_tokens"].map(fmt_usd),
            ).rename(
                columns={
                    "provider": "Provider",
                    "endpoint": "Endpoint",
                    "calls": "Calls",
                    "tokens_in": "Tokens In",
                    "tokens_out": "Tokens Out",
                    "cost_usd": "Total Cost",
                    "cost_per_1k_tokens": "Cost / 1K tokens",
                }
            ),
            use_container_width=True,
            hide_index=True,
        )

# -------------------------------------------------------------
# TAB 5 — Sentiment Bias Audit by Game
# -------------------------------------------------------------
with tab5:
    st.subheader("Sentiment Bias Audit")

    agg = compute_bias_audit(bias_df)

    c1, c2 = st.columns([3,2])
    with c1:
        fig = px.scatter(
            bias_df,
            x="avg_sentiment",
            y="realized_return",
            color="game",
            trendline="ols",
            title="Daily Average Sentiment vs Realized Return",
            labels={"avg_sentiment": "Avg Sentiment", "realized_return": "Realized Return"},
            color_discrete_sequence=px.colors.qualitative.Set2,
        )
        fig.update_layout(height=520)
        st.plotly_chart(fig, use_container_width=True)

    with c2:
        st.markdown("**Bias by Game**")
        st.dataframe(
            agg.assign(
                avg_sentiment=lambda d: (d["avg_sentiment"] * 100).round(2),
                avg_realized_return=lambda d: (d["avg_realized_return"] * 100).round(2),
                bias=lambda d: (d["bias"] * 100).round(2),
            ).rename(
                columns={
                    "game": "Game",
                    "avg_sentiment": "Avg Sent %",
                    "avg_realized_return": "Avg Realized %",
                    "bias": "Bias (Sent - Realized) %",
                }
            ),
            use_container_width=True,
            hide_index=True,
            height=300,
        )

    st.caption(
        "Bias = average sentiment minus average realized return. Positive bias suggests systematic optimism; negative implies pessimism. Use this to recalibrate model priors by game.")

# -------------------------------------------------------------
# Footer / How-To
# -------------------------------------------------------------
st.markdown("---")
st.caption(
    "Replace demo loaders with Sheets/Notion connectors. Maintain output schemas to keep charts working. \n"
    "Key returns: sentiment: [timestamp, card_id, game, name, sentiment, mentions]; prices: [date, card_id, price];\n"
    "predictions: [date, card_id, horizon_days, pred_return, pred_direction]; api: [date, provider, endpoint, calls, tokens_in, tokens_out, cost_usd]; bias: [date, game, avg_sentiment, realized_return]."
)
