# Video Transcript Extractor - Backend Setup Guide

## Overview

The Video Transcript Extractor tool currently has a **frontend-only implementation**. To enable full functionality, you'll need to set up a backend service that can download videos and extract transcripts.

---

## Current Status

✅ **Frontend Complete** - UI, URL validation, transcript display, export features  
⚠️ **Backend Required** - Video download and transcription processing

---

## Backend Implementation Options

### Option 1: Serverless Function (Recommended for MVP)

Use a serverless function (Vercel, Netlify, AWS Lambda) to process videos on-demand.

**Pros:**
- No server management
- Pay-per-use pricing
- Scales automatically

**Cons:**
- 10-minute execution limit (most platforms)
- Cold start delays
- File size limits

**Stack:**
- **Runtime:** Node.js or Python
- **Video Download:** `yt-dlp` (supports Twitter/X, YouTube, TikTok)
- **Transcription:** Whisper API (OpenAI) or AssemblyAI

---

### Option 2: Dedicated Backend Server

Run a persistent backend server for more control and longer processing times.

**Pros:**
- No execution time limits
- Better for large videos
- More control over processing

**Cons:**
- Server costs
- Requires maintenance
- Scaling complexity

**Stack:**
- **Server:** Express.js (Node) or FastAPI (Python)
- **Video Download:** `yt-dlp`
- **Transcription:** Whisper (local) or cloud APIs

---

## Implementation Steps

### 1. Install Dependencies

**For Node.js:**
```bash
npm install yt-dlp-wrap openai
```

**For Python:**
```bash
pip install yt-dlp openai
```

---

### 2. Create API Endpoint

**Example: Node.js + Express**

```javascript
const express = require('express');
const YTDlpWrap = require('yt-dlp-wrap').default;
const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

const app = express();
const ytDlp = new YTDlpWrap();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/extract-transcript', async (req, res) => {
  const { videoUrl } = req.body;
  
  try {
    // 1. Download video
    const videoPath = path.join(__dirname, 'temp', `video_${Date.now()}.mp4`);
    await ytDlp.execPromise([
      videoUrl,
      '-f', 'best[ext=mp4]',
      '-o', videoPath
    ]);
    
    // 2. Transcribe with Whisper
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(videoPath),
      model: 'whisper-1',
      response_format: 'verbose_json',
      timestamp_granularities: ['segment']
    });
    
    // 3. Clean up
    fs.unlinkSync(videoPath);
    
    // 4. Return transcript
    res.json({
      duration: transcription.duration,
      language: transcription.language,
      segments: transcription.segments,
      fullText: transcription.text
    });
    
  } catch (error) {
    console.error('Transcription error:', error);
    res.status(500).json({ error: 'Failed to extract transcript' });
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));
```

---

### 3. Update Frontend to Call Backend

Update `VideoTranscriptExtractor.tsx`:

```typescript
const handleExtract = async () => {
  setIsProcessing(true);
  setError(null);
  
  try {
    const response = await fetch('/api/extract-transcript', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoUrl })
    });
    
    if (!response.ok) throw new Error('Extraction failed');
    
    const data = await response.json();
    setTranscript(data);
    toast.success("Transcript extracted successfully!");
    
  } catch (err) {
    setError("Failed to extract transcript. Please try again.");
    toast.error("Failed to extract transcript");
  } finally {
    setIsProcessing(false);
  }
};
```

---

## Cost Estimates

### Whisper API (OpenAI)
- **Pricing:** $0.006 per minute of audio
- **Example:** 4-minute video = $0.024

### AssemblyAI
- **Pricing:** $0.00025 per second ($0.015 per minute)
- **Example:** 4-minute video = $0.06
- **Includes:** Speaker labels, sentiment analysis

### Self-Hosted Whisper
- **Cost:** Server/GPU costs only
- **Pros:** No per-minute fees
- **Cons:** Requires GPU for fast processing

---

## Security Considerations

1. **Rate Limiting** - Prevent abuse with rate limits (e.g., 10 requests/hour per IP)
2. **URL Validation** - Only allow whitelisted domains (Twitter/X, YouTube, TikTok)
3. **File Size Limits** - Cap video downloads at 100MB
4. **Temporary Storage** - Delete downloaded videos after processing
5. **API Key Protection** - Never expose OpenAI/AssemblyAI keys in frontend

---

## Alternative: Client-Side Processing

For **privacy-focused** users, consider client-side transcription:

**Whisper.cpp (WebAssembly)**
- Runs entirely in browser
- No backend required
- Slower than cloud APIs
- Limited by browser memory

**Library:** [whisper.cpp](https://github.com/ggerganov/whisper.cpp)

---

## Recommended Setup for Apex Omnis Studios

**Phase 1 (MVP):**
- Serverless function on Vercel
- OpenAI Whisper API
- 100MB file size limit
- 10 requests/hour rate limit

**Phase 2 (Scale):**
- Dedicated backend server
- Self-hosted Whisper (GPU)
- Queue system for large videos
- User accounts with usage tracking

---

## Testing

**Test URLs:**
- Twitter/X: `https://x.com/breakerculture/status/1987202186195960141`
- YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- TikTok: `https://www.tiktok.com/@username/video/123456789`

**Expected Response:**
```json
{
  "duration": 221.6,
  "language": "english",
  "segments": [
    {
      "start": 0,
      "end": 5.3,
      "text": "There is a big shift happening..."
    }
  ],
  "fullText": "There is a big shift happening in the hobby..."
}
```

---

## Next Steps

1. Choose backend implementation (serverless vs dedicated)
2. Set up OpenAI API key or AssemblyAI account
3. Deploy backend endpoint
4. Update frontend API URL
5. Test with sample videos
6. Add rate limiting and security
7. Monitor costs and usage

---

## Support

For questions or issues:
- Email: contact@apexomnis.io
- Documentation: `/docs/video-transcript-backend-setup.md`
