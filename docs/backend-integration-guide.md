# Backend Integration Guide

Complete guide for integrating the application management system with Make.com and Notion/Airtable.

---

## Architecture Overview

```
Application Form → Make.com Webhook → Notion Database → Status Lookup API
                                    ↓
                            Email Confirmation
```

**Flow:**
1. User submits application form
2. Form data sent to Make.com webhook
3. Make.com creates Notion database entry
4. Make.com generates confirmation code
5. Make.com sends confirmation email
6. User can lookup status using email + code

---

## Part 1: Make.com Webhook Setup

### Step 1: Create Webhook Scenario

1. Go to Make.com → Create new scenario
2. Add "Webhooks" → "Custom webhook" as first module
3. Copy webhook URL
4. Add to Manus secrets as `VITE_MAKE_WEBHOOK_URL`

### Step 2: Parse Incoming Data

The webhook will receive this JSON structure:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "businessName": "Acme Corp",
  "businessDescription": "We build widgets",
  "attachmentFiles": [
    {
      "name": "pitch-deck.pdf",
      "type": "application/pdf",
      "size": 2048576,
      "base64": "JVBERi0xLjQK..."
    }
  ],
  "currentChallenges": "Manual processes",
  "automationGoals": "Save 10 hours/week",
  "successMetrics": "Time saved, error reduction",
  "targetAudience": "Small business owners",
  "communityImpact": "Help local entrepreneurs",
  "ethicalAlignment": "Transparency and fairness",
  "budgetRange": "$5,000 - $10,000",
  "timeline": "1-2 months",
  "whyNow": "Scaling quickly"
}
```

### Step 3: Generate Confirmation Code

Add "Tools" → "Set variable" module:

**Variable name:** `confirmation_code`

**Formula:**
```
{{upper(substring(md5(concat(email, formatDate(now, 'X'))), 0, 3))}}-{{upper(substring(md5(concat(email, formatDate(now, 'X'))), 3, 3))}}-{{upper(substring(md5(concat(email, formatDate(now, 'X'))), 6, 3))}}
```

**Example output:** `A3F-B2E-C9D`

---

## Part 2: Notion Database Setup

### Database Schema

Create a Notion database with these properties:

| Property Name | Type | Description |
|--------------|------|-------------|
| Name | Title | Applicant name |
| Email | Email | Applicant email |
| Business Name | Text | Business name |
| Business Description | Text | Business description |
| Confirmation Code | Text | Generated code (ABC-123-XYZ) |
| Status | Select | `Received`, `Under Review`, `Approved`, `Declined` |
| Submitted Date | Date | Auto-filled with submission timestamp |
| Review Date | Date | When review was completed |
| Current Challenges | Text | From form |
| Automation Goals | Text | From form |
| Success Metrics | Text | From form |
| Target Audience | Text | From form |
| Community Impact | Text | From form |
| Ethical Alignment | Text | From form |
| Budget Range | Select | `Under $5k`, `$5k-$10k`, `$10k-$25k`, `$25k+` |
| Timeline | Select | `< 1 month`, `1-2 months`, `2-3 months`, `3+ months` |
| Why Now | Text | From form |
| Attachments | Files & media | Uploaded files |
| Notes | Text | Internal notes |
| Reviewer | Person | Who reviewed |

### Make.com → Notion Integration

Add "Notion" → "Create a database item" module:

**Mapping:**
- Title (Name) → `{{name}}`
- Email → `{{email}}`
- Business Name → `{{businessName}}`
- Business Description → `{{businessDescription}}`
- Confirmation Code → `{{confirmation_code}}`
- Status → `Received` (default)
- Submitted Date → `{{now}}`
- Current Challenges → `{{currentChallenges}}`
- Automation Goals → `{{automationGoals}}`
- Success Metrics → `{{successMetrics}}`
- Target Audience → `{{targetAudience}}`
- Community Impact → `{{communityImpact}}`
- Ethical Alignment → `{{ethicalAlignment}}`
- Budget Range → `{{budgetRange}}`
- Timeline → `{{timeline}}`
- Why Now → `{{whyNow}}`

### Handling File Attachments

For each file in `attachmentFiles` array:

1. Add "Tools" → "Iterator" to loop through files
2. Add "HTTP" → "Make a request" to upload to temporary storage:
   - Method: POST
   - URL: `https://tmpfiles.org/api/v1/upload`
   - Body: `{{base64}}`
   - Headers: `Content-Type: application/octet-stream`
3. Extract URL from response
4. Add URL to Notion "Attachments" field

**Alternative:** Upload directly to Google Drive/Dropbox and link in Notion.

---

## Part 3: Email Automation

### Confirmation Email

Add "Email" → "Send an email" module:

- **To:** `{{email}}`
- **Subject:** `Your Apex Omnis Studios Application - Confirmation Code Inside`
- **Content:** Use template from `/docs/email-confirmation-template.md`
- **Variables:**
  - `{{applicant_name}}` → `{{name}}`
  - `{{applicant_email}}` → `{{email}}`
  - `{{confirmation_code}}` → `{{confirmation_code}}`

### Rejection Email

Create separate scenario triggered by Notion status change:

1. Trigger: "Notion" → "Watch database items"
2. Filter: Status changed to "Declined"
3. Action: "Email" → "Send an email"
   - Use template from `/docs/email-rejection-template.md`

### Approval Email

Similar to rejection, but triggered when status = "Approved":

**Subject:** `Great News: Your Apex Omnis Studios Application`

**Content:**
```
Hi {{name}},

We're excited to move forward with your application! We see strong alignment between your goals and our expertise.

Next Steps:
1. We'll schedule a 30-minute discovery call
2. You'll receive a calendar invite within 24 hours
3. We'll prepare a custom proposal based on our discussion

Looking forward to working with you!

Best,
The Apex Omnis Studios Team
```

---

## Part 4: Status Lookup API

### Option A: Make.com Webhook (Recommended)

Create a second webhook for status lookups:

**Endpoint:** `https://hook.us1.make.com/xxxxx` (different from submission webhook)

**Input:**
```json
{
  "email": "john@example.com",
  "confirmationCode": "A3F-B2E-C9D"
}
```

**Make.com Flow:**
1. Receive webhook request
2. Query Notion database:
   - Filter: Email = `{{email}}` AND Confirmation Code = `{{confirmationCode}}`
3. If found, return application data:
   ```json
   {
     "found": true,
     "status": "under_review",
     "submittedAt": "2024-01-15T10:30:00Z",
     "notes": "Your application is being reviewed by our founders."
   }
   ```
4. If not found:
   ```json
   {
     "found": false,
     "error": "No application found with that email and confirmation code."
   }
   ```

### Option B: Notion API Direct

If you prefer direct API calls (requires backend):

```javascript
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function lookupApplication(email, confirmationCode) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Email',
          email: { equals: email }
        },
        {
          property: 'Confirmation Code',
          rich_text: { equals: confirmationCode }
        }
      ]
    }
  });

  if (response.results.length === 0) {
    return { found: false };
  }

  const page = response.results[0];
  return {
    found: true,
    status: page.properties.Status.select.name,
    submittedAt: page.properties['Submitted Date'].date.start,
    notes: page.properties.Notes.rich_text[0]?.plain_text || ''
  };
}
```

### Update ApplicationStatus.tsx

Replace the mock API call in `ApplicationStatus.tsx`:

```typescript
const handleSearch = async () => {
  if (!email || !confirmationCode) {
    toast.error("Please enter both email and confirmation code");
    return;
  }

  setIsSearching(true);

  try {
    const response = await fetch(import.meta.env.VITE_STATUS_LOOKUP_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, confirmationCode })
    });

    const data = await response.json();

    if (data.found) {
      setApplicationData(data);
    } else {
      toast.error("No application found. Please check your email and confirmation code.");
    }
  } catch (error) {
    toast.error("Failed to lookup application. Please try again.");
  } finally {
    setIsSearching(false);
  }
};
```

Add to secrets:
- `VITE_STATUS_LOOKUP_WEBHOOK_URL` → Your Make.com status lookup webhook URL

---

## Part 5: Analytics Integration

### Data Collection

To power the ApplicationAnalytics dashboard, you need to aggregate data from Notion.

**Option A: Make.com Scheduled Scenario**

1. Create scenario with "Schedule" trigger (runs daily)
2. Query Notion database for all applications
3. Calculate metrics:
   - Total applications (count all)
   - Pending (status = "Received" or "Under Review")
   - Approved (status = "Approved")
   - Declined (status = "Declined")
   - Average review time (difference between Submitted Date and Review Date)
4. Store in separate "Analytics" Notion database or Google Sheets
5. Expose via webhook for dashboard to fetch

**Option B: Real-time Calculation**

Query Notion directly from ApplicationAnalytics page:

```typescript
useEffect(() => {
  async function fetchAnalytics() {
    const response = await fetch(import.meta.env.VITE_ANALYTICS_WEBHOOK_URL);
    const data = await response.json();
    setStats(data);
  }
  fetchAnalytics();
}, [dateRange]);
```

---

## Security Considerations

1. **API Keys:** Never expose Notion API keys in frontend code
2. **Webhooks:** Use Make.com as middleware to protect credentials
3. **Rate Limiting:** Implement rate limiting on status lookup to prevent abuse
4. **Validation:** Validate email format and confirmation code format before querying
5. **CORS:** Ensure Make.com webhooks allow requests from your domain

---

## Testing Checklist

- [ ] Submit test application → verify Notion entry created
- [ ] Check confirmation email received with correct code
- [ ] Test status lookup with correct email + code
- [ ] Test status lookup with incorrect code (should fail gracefully)
- [ ] Change status in Notion → verify email triggers
- [ ] Test file upload → verify files accessible in Notion
- [ ] Check analytics dashboard displays correct metrics
- [ ] Test all email templates render correctly

---

## Troubleshooting

**Issue:** Confirmation code not generating
- **Fix:** Check Make.com formula syntax, ensure `email` variable is available

**Issue:** Notion entry not created
- **Fix:** Verify Notion integration permissions, check database ID

**Issue:** Status lookup returns "not found" for valid code
- **Fix:** Ensure exact match on email (case-sensitive) and code format

**Issue:** Files not uploading
- **Fix:** Check base64 encoding, file size limits, temporary storage availability

**Issue:** Analytics showing zero
- **Fix:** Verify Notion query filters, check date range calculations

---

## Next Steps

1. Set up Make.com webhooks (submission + status lookup)
2. Create Notion database with schema above
3. Configure email templates in Make.com
4. Add webhook URLs to Manus secrets
5. Test end-to-end flow
6. Monitor first 10 applications for issues
7. Iterate based on real usage patterns
