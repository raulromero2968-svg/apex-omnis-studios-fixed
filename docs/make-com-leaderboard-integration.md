# Make.com Leaderboard Integration Guide

**Purpose:** Set up webhook automation to receive, verify, and display Challenge Mode leaderboard submissions.

**Time Required:** 20 minutes

---

## Overview

The Challenge Mode leaderboard collects competitive achievements from users who complete TCG sets within time/budget constraints. This guide shows you how to:

1. Receive leaderboard submissions via webhook
2. Store submissions in Notion database
3. Save screenshot proof to Google Drive
4. Send verification/approval emails
5. (Optional) Auto-publish approved entries to public leaderboard

---

## Webhook Payload Structure

When a user submits a challenge completion, the webhook receives:

```json
{
  "username": "CardMaster2024",
  "email": "collector@example.com",
  "setName": "Base Set (102 cards)",
  "completionTime": 36.5,
  "totalBudget": 450,
  "cardsCollected": 102,
  "totalCards": 102,
  "submittedDate": "2025-01-15T10:30:00.000Z",
  "screenshot": {
    "fileName": "completed-set.png",
    "fileType": "image/png",
    "fileSize": 2458624,
    "fileData": "iVBORw0KGgoAAAANSUhEUgAA..." // base64 encoded
  }
}
```

---

## Step 1: Create Webhook Scenario (5 minutes)

1. **Log into Make.com** → Click **"Create a new scenario"**
2. Click **"+"** → Search **"Webhooks"** → Select **"Custom webhook"**
3. Click **"Create a webhook"**
4. **Webhook name:** `Challenge Leaderboard Submissions`
5. Click **"Save"** → Copy the webhook URL
6. **Add to Manus secrets:** `VITE_LEADERBOARD_WEBHOOK_URL` = `<your_webhook_url>`

---

## Step 2: Save Screenshot to Google Drive (5 minutes)

1. Click **"+"** after webhook → Search **"Google Drive"** → Select **"Upload a File"**
2. **Connect Google Drive** (one-time OAuth)
3. **Folder:** Create "Challenge Screenshots" folder in Google Drive first
4. **File name:** `{{username}}_{{setName}}_{{timestamp}}.{{fileExtension}}`
5. **File data:** `{{base64ToBinary(screenshot.fileData)}}`
6. **Get shareable link:** Enable "Anyone with the link can view"
7. **Save the link** → We'll use this in Notion

---

## Step 3: Create Notion Database Entry (5 minutes)

### Notion Database Schema

Create a new database in Notion called **"Challenge Leaderboard"** with these properties:

| Property Name | Type | Description |
|--------------|------|-------------|
| Username | Title | Display name |
| Email | Email | User email for notifications |
| Set Name | Text | TCG set completed |
| Completion Time | Number | Hours taken |
| Total Budget | Number | Dollars spent |
| Cards Collected | Number | Cards acquired |
| Total Cards | Number | Cards in set |
| Submitted Date | Date | When submitted |
| Screenshot | URL | Google Drive link |
| Status | Select | Pending / Approved / Rejected |
| Verified By | Text | Admin who verified |
| Verified Date | Date | When verified |
| Rank (Time) | Number | Position in time leaderboard |
| Rank (Budget) | Number | Position in budget leaderboard |
| Notes | Text | Admin notes |

### Make.com Setup

1. Click **"+"** → Search **"Notion"** → **"Create a database item"**
2. **Connect Notion** (OAuth)
3. **Database:** Select "Challenge Leaderboard"
4. **Map fields:**
   - Username → `{{username}}`
   - Email → `{{email}}`
   - Set Name → `{{setName}}`
   - Completion Time → `{{completionTime}}`
   - Total Budget → `{{totalBudget}}`
   - Cards Collected → `{{cardsCollected}}`
   - Total Cards → `{{totalCards}}`
   - Submitted Date → `{{submittedDate}}`
   - Screenshot → `{{Google Drive: Shareable Link}}`
   - Status → "Pending"

---

## Step 4: Send Confirmation Email (3 minutes)

1. Click **"+"** → Search **"Gmail"** → **"Send an Email"**
2. **To:** `{{email}}`
3. **Subject:** `Challenge Submission Received - {{username}}`
4. **Content:**

```
Hi {{username}},

Thanks for submitting your challenge completion!

Your Achievement:
- Set: {{setName}}
- Time: {{completionTime}} hours
- Budget: ${{totalBudget}}

We'll review your submission within 24-48 hours and notify you when it's approved for the leaderboard.

Screenshot: {{Google Drive: Shareable Link}}

Best regards,
Apex Omnis Studios Team
```

---

## Step 5: Notify Yourself (2 minutes)

1. Click **"+"** → Add another **"Gmail: Send an Email"**
2. **To:** Your email
3. **Subject:** `🏆 New Challenge Submission: {{username}} - {{setName}}`
4. **Content:**

```
New challenge leaderboard submission!

User: {{username}}
Set: {{setName}}
Time: {{completionTime}} hours
Budget: ${{totalBudget}}
Cards: {{cardsCollected}} / {{totalCards}}

Screenshot: {{Google Drive: Shareable Link}}

Review in Notion: [Link to your Notion database]

Action Required: Verify screenshot and approve/reject submission.
```

---

## Step 6: Test & Activate

1. Click **"Run once"**
2. Go to your website → Submit test challenge
3. Check:
   - ✅ Screenshot saved to Google Drive
   - ✅ Notion entry created with "Pending" status
   - ✅ Confirmation email received (if email collected)
   - ✅ Notification email received
4. **Activate:** Scheduling → ON → Immediately as data arrives
5. **Save scenario**

---

## Verification Workflow (Manual for Now)

### How to Verify Submissions

1. **Check Notion database** for new "Pending" submissions
2. **Open screenshot** from Google Drive link
3. **Verify legitimacy:**
   - Screenshot shows completed set
   - Time/budget claims are reasonable
   - No obvious photoshopping or fake data
4. **Update Notion status:**
   - ✅ **Approved** → Entry will appear on leaderboard
   - ❌ **Rejected** → Send rejection email with reason
5. **Calculate ranks** (optional):
   - Sort by completion time → assign Rank (Time)
   - Sort by total budget → assign Rank (Budget)

### Red Flags to Watch For

- Completion time < 10 hours (likely fake)
- Budget < $50 for large sets (unrealistic)
- Screenshot shows different set than claimed
- Blurry/cropped screenshot hiding details
- Same user submitting multiple times with different usernames

---

## Advanced: Auto-Publish to Leaderboard (Optional - Month 2+)

### Option A: Notion API Integration

1. Create **new scenario**: "Fetch Approved Leaderboard Entries"
2. **Trigger:** Scheduled (runs every 15 minutes)
3. **Notion: Search database** → Filter by Status = "Approved"
4. **Webhook Response** → Return JSON array of approved entries
5. **Update frontend** to fetch from this webhook instead of mock data

### Option B: Google Sheets (Simpler)

1. Add **"Google Sheets: Add a row"** module after Notion
2. Only trigger when Status = "Approved"
3. Frontend fetches from public Google Sheets
4. Easier but less features than Notion API

---

## Security Considerations

### Prevent Spam/Abuse

1. **Rate limiting:** Set Make.com to max 10 submissions/hour from same IP
2. **Email verification:** Require email confirmation before submission appears
3. **Screenshot required:** Reject submissions without proof
4. **Manual review:** Don't auto-approve until you have 50+ legitimate entries

### Privacy

- Don't collect personal info (email optional)
- Screenshots may contain usernames/addresses → remind users to crop
- GDPR compliance: Allow users to request deletion

---

## Cost Estimates

**Make.com Core Membership:** $10.59/month (already purchased)

**Operations per submission:**
- Webhook receive: 1 op
- Google Drive upload: 1 op
- Notion create: 1 op
- Gmail send (2 emails): 2 ops
- **Total:** 5 operations per submission

**Monthly estimate:**
- 50 submissions/month = 250 operations
- Well within Core plan limits (10,000 ops/month)

---

## Troubleshooting

### Screenshot Not Saving to Google Drive

**Problem:** File upload fails or shows empty file  
**Solution:**
1. Check base64 decoding: `{{base64ToBinary(screenshot.fileData)}}`
2. Verify Google Drive folder permissions
3. Check file size limits (10MB max)

### Notion Entry Not Created

**Problem:** Webhook runs but no Notion entry  
**Solution:**
1. Re-authenticate Notion connection
2. Check database permissions (Make.com needs edit access)
3. Verify all required fields are mapped

### Duplicate Submissions

**Problem:** User submits multiple times  
**Solution:**
1. Add filter: Check if username + setName already exists in Notion
2. If exists, send "Already submitted" email instead of creating new entry
3. Or allow multiple submissions but mark as "Duplicate" status

---

## Next Steps

1. **Test with 5-10 submissions** to catch edge cases
2. **Monitor for 1 week** to see submission patterns
3. **Add email collection** to submission form (optional)
4. **Build approval/rejection email automation** (see `/docs/email-approval-template.md`)
5. **Consider auto-publish** once you have 20+ verified entries

---

## Resources

- **Make.com Documentation:** https://www.make.com/en/help
- **Notion API:** https://developers.notion.com/
- **Google Drive API:** https://developers.google.com/drive
- **Related Guides:**
  - `/docs/make-com-quick-start.md` - Contact/application form setup
  - `/docs/make-com-file-handling.md` - File upload details
  - `/docs/backend-integration-guide.md` - Full backend architecture

---

**Questions?** Document issues in `/docs/make-com-troubleshooting.md` as you encounter them.
