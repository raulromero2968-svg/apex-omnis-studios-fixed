# Make.com Quick-Start Guide

**Purpose:** Get your Apex Omnis Studios contact forms and application system working in under 30 minutes.

**Prerequisites:**
- Make.com Core membership (already purchased ✅)
- Gmail account for notifications
- Notion account (optional, for application tracking)

---

## Overview

You'll create 2 main workflows:

1. **Contact Form Webhook** - Receives contact form submissions from homepage
2. **Application Form Webhook** - Receives Early Builder Partnership applications

---

## Workflow 1: Contact Form (15 minutes)

### Step 1: Create Webhook

1. Log into Make.com → Click **"Create a new scenario"**
2. Click **"+"** → Search **"Webhooks"** → Select **"Custom webhook"**
3. Click **"Create a webhook"**
4. **Webhook name:** `Apex Omnis Contact Form`
5. Click **"Save"** → Copy the webhook URL
6. **Add to Manus secrets:** `VITE_MAKE_WEBHOOK_URL` = `<your_webhook_url>`

### Step 2: Send Email Notification

1. Click **"+"** after webhook → Search **"Gmail"** → Select **"Send an Email"**
2. **Connect your Gmail account** (one-time OAuth)
3. **To:** Your email address
4. **Subject:** `New Contact Form Submission - {{name}}`
5. **Content:**
```
New contact form submission from Apex Omnis Studios:

Name: {{name}}
Email: {{email}}
Message: {{message}}

Submitted: {{timestamp}}
```
6. Map fields from webhook data

### Step 3: Auto-Reply to Sender

1. Click **"+"** after Gmail → Add another **"Gmail: Send an Email"**
2. **To:** `{{email}}` (from webhook)
3. **Subject:** `Thanks for reaching out! - Apex Omnis Studios`
4. **Content:**
```
Hi {{name}},

Thanks for reaching out! I received your message and will get back to you within 24-48 hours.

In the meantime, feel free to explore our tools and services:
- TCG Portfolio Tracker: https://your-domain.manus.space/tcg-portfolio
- Event Tracker Pro: https://your-domain.manus.space/event-tracker
- Services: https://your-domain.manus.space/services

Best regards,
Apex Omnis Studios Team
```

### Step 4: Test & Activate

1. Click **"Run once"** → Submit test form on your website
2. Check if you received both emails
3. Click **"Scheduling"** → Toggle **"ON"** → **"Immediately as data arrives"**
4. Click **"Save"**

**Done!** Contact form is live ✅

---

## Workflow 2: Application Form (15 minutes)

### Step 1: Create Webhook

1. Make.com → **"Create a new scenario"**
2. Add **"Webhooks: Custom webhook"**
3. **Webhook name:** `Apex Omnis Application Form`
4. Copy webhook URL
5. **Add to Manus secrets:** `VITE_MAKE_WEBHOOK_URL` = `<application_webhook_url>`

**Note:** You'll need TWO separate secrets if using different webhooks:
- `VITE_CONTACT_WEBHOOK_URL` (contact form)
- `VITE_APPLICATION_WEBHOOK_URL` (application form)

Or use the SAME webhook and route based on `form_type` field.

### Step 2: Generate Confirmation Code

1. Click **"+"** → Search **"Tools"** → Select **"Set variable"**
2. **Variable name:** `confirmation_code`
3. **Variable value:** `{{substring(sha256(email + timestamp); 0; 8)}}`

This creates an 8-character code from email + timestamp hash.

### Step 3: Send Confirmation Email

1. Add **"Gmail: Send an Email"**
2. **To:** `{{email}}`
3. **Subject:** `Application Received - Confirmation Code: {{confirmation_code}}`
4. **Content:** Use the template from `/docs/email-confirmation-template.md`

Replace placeholders:
- `{{firstName}}` → `{{businessName}}` (or extract from full name)
- `{{confirmationCode}}` → `{{confirmation_code}}`
- `{{trackingLink}}` → `https://your-domain.manus.space/application-status`

### Step 4: Save to Notion (Optional)

1. Click **"+"** → Search **"Notion"** → **"Create a database item"**
2. **Connect Notion** (OAuth)
3. **Database:** Create "Applications" database in Notion first
4. **Map fields:**
   - Name → `{{businessName}}`
   - Email → `{{email}}`
   - Website → `{{website}}`
   - Challenges → `{{challenges}}`
   - Budget → `{{budget}}`
   - Timeline → `{{timeline}}`
   - Confirmation Code → `{{confirmation_code}}`
   - Status → "Pending Review"
   - Submitted → `{{timestamp}}`

### Step 5: Handle File Attachments

If application includes files:

1. Click **"+"** → Search **"Google Drive"** → **"Upload a File"**
2. **Folder:** Create "Application Files" folder in Google Drive
3. **File name:** `{{businessName}}_{{timestamp}}_{{fileName}}`
4. **File data:** `{{base64ToBinary(fileData)}}`
5. **Get shareable link** → Add to Notion database

### Step 6: Notify Yourself

1. Add **"Gmail: Send an Email"** (to yourself)
2. **Subject:** `🚨 New Application: {{businessName}} - Budget: {{budget}}`
3. **Content:**
```
New Early Builder Partnership application!

Business: {{businessName}}
Email: {{email}}
Website: {{website}}

Budget: {{budget}}
Timeline: {{timeline}}

Challenges:
{{challenges}}

Goals:
{{goals}}

Community:
{{community}}

Confirmation Code: {{confirmation_code}}

Review in Notion: [Link to Notion database]
```

### Step 7: Test & Activate

1. **Run once** → Submit test application
2. Check: Confirmation email received, Notion entry created, notification received
3. **Activate:** Scheduling → ON → Immediately
4. **Save**

**Done!** Application system is live ✅

---

## Advanced: Status Lookup API (Optional - Month 2+)

To enable real status tracking (not mock data):

### Option A: Notion API (Recommended)

1. Create **new scenario**: "Application Status Lookup"
2. **Webhook** → Receives `{email, confirmationCode}`
3. **Notion: Search database** → Filter by email + confirmation code
4. **Webhook Response** → Return status JSON:
```json
{
  "found": true,
  "status": "Under Review",
  "submittedDate": "2025-01-15",
  "lastUpdated": "2025-01-16",
  "message": "We're reviewing your application and will reach out within 2-3 business days."
}
```

### Option B: Google Sheets (Simpler)

1. Create Google Sheet: "Applications"
2. Webhook writes to sheet (instead of Notion)
3. Status lookup reads from sheet
4. Easier but less features than Notion

---

## Troubleshooting

### Webhook Not Receiving Data

**Problem:** Form submits but Make.com shows no executions  
**Solution:**
1. Check webhook URL in Manus secrets (no typos)
2. Test webhook with Postman/curl
3. Check Make.com execution history for errors

### Emails Not Sending

**Problem:** Workflow runs but no emails arrive  
**Solution:**
1. Check Gmail spam folder
2. Re-authenticate Gmail connection in Make.com
3. Check Gmail sending limits (500/day for free accounts)

### File Uploads Failing

**Problem:** Files not saving to Google Drive  
**Solution:**
1. Check base64 decoding: `{{base64ToBinary(fileData)}}`
2. Verify Google Drive folder permissions
3. Check file size limits (10MB max)

### Confirmation Codes Not Unique

**Problem:** Multiple users get same code  
**Solution:**
1. Add random salt: `{{sha256(email + timestamp + rand())}}`
2. Or use UUID: `{{uuid()}}`

---

## Cost Estimates

**Make.com Core Membership:** $10.59/month (already purchased)

**Operations per submission:**
- Contact Form: 3 operations (webhook + 2 emails) = **~90 ops/month** (30 submissions)
- Application Form: 5-7 operations (webhook + emails + Notion + Drive) = **~150 ops/month** (30 applications)

**Total:** ~250 operations/month = **Well within Core plan limits** (10,000 ops/month)

---

## Next Steps After Setup

1. **Test thoroughly** - Submit 5-10 test forms to catch edge cases
2. **Monitor for 1 week** - Check Make.com execution history daily
3. **Add error handling** - Set up error notifications (Make.com → Gmail on failure)
4. **Optimize** - Remove unnecessary steps, combine operations
5. **Scale** - When you hit 100+ submissions/month, consider upgrading plan

---

## Security Best Practices

1. **Never expose webhook URLs publicly** - Only in Manus secrets
2. **Add API key authentication** - Use `x-make-api-key` header (see `/docs/make-com-file-handling.md`)
3. **Validate input data** - Check for required fields, format validation
4. **Rate limiting** - Use Make.com's built-in rate limiting (10 req/min default)
5. **Monitor for abuse** - Set up alerts for >50 submissions/hour

---

## Timeline

**Today (30 min):**
- ✅ Set up contact form webhook
- ✅ Set up application form webhook
- ✅ Test both workflows

**Week 1:**
- Monitor execution history
- Fix any issues
- Optimize workflows

**Month 2:**
- Add status lookup API (if needed)
- Implement decision email automation (approval/rejection)
- Connect to analytics

**Month 6:**
- Review costs vs. benefit
- Consider custom backend if volume is high (>1000 submissions/month)

---

## Resources

- **Make.com Documentation:** https://www.make.com/en/help
- **Gmail API Limits:** https://developers.google.com/gmail/api/reference/quota
- **Notion API:** https://developers.notion.com/
- **Your Detailed Guides:**
  - `/docs/make-com-file-handling.md` - File upload details
  - `/docs/backend-integration-guide.md` - Status lookup implementation
  - `/docs/email-confirmation-template.md` - Confirmation email HTML
  - `/docs/email-rejection-template.md` - Rejection email template
  - `/docs/email-approval-template.md` - Approval email template

---

**Questions?** Document issues in `/docs/make-com-troubleshooting.md` as you encounter them.
