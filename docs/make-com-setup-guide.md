# Make.com Setup Guide for Apex Omnis Studios

Complete step-by-step guide for setting up Make.com automation workflows for contact forms, application submissions, and email notifications.

---

## Prerequisites

- Make.com account (Core plan or higher recommended)
- Gmail or email service for sending notifications
- Notion account (optional, for application tracking)
- Google Drive account (optional, for file storage)

---

## Workflow 1: Contact Form Submissions

### Overview
Receives contact form submissions from the website and sends email notifications.

### Setup Steps

1. **Create New Scenario**
   - Go to Make.com dashboard
   - Click "Create a new scenario"
   - Name it: "Apex Omnis - Contact Form"

2. **Add Webhooks Module**
   - Search for "Webhooks" in modules
   - Select "Custom webhook"
   - Click "Add"
   - Click "Create a webhook"
   - Name it: "Apex Omnis Contact Form"
   - Copy the webhook URL (you'll need this for `VITE_MAKE_WEBHOOK_URL`)

3. **Add API Key Authentication (Optional but Recommended)**
   - Click webhook settings
   - Enable "API Key authentication"
   - Click "Create a keychain"
   - Name: "My API Key Auth key"
   - API key value: Generate a random string (32+ characters)
   - Save the API key (you'll need this for `VITE_MAKE_API_KEY`)

4. **Test Webhook**
   - Click "Run once" in Make.com
   - Go to your website contact form
   - Submit a test message
   - Return to Make.com - you should see the data

5. **Add Email Module**
   - Click the "+" button after webhook
   - Search for "Email" or "Gmail"
   - Select "Send an Email" (or "Gmail > Send an Email")
   - Connect your email account
   - Configure email:
     - **To:** your@email.com (your notification email)
     - **Subject:** `New Contact Form: {{name}}`
     - **Content:**
       ```
       New contact form submission:
       
       Name: {{name}}
       Email: {{email}}
       Message: {{message}}
       
       Submitted: {{formatDate(now; "YYYY-MM-DD HH:mm:ss")}}
       ```

6. **Add Auto-Reply Module (Optional)**
   - Click "+" after first email module
   - Add another email module
   - Configure:
     - **To:** `{{email}}` (from form)
     - **Subject:** "Thanks for reaching out to Apex Omnis Studios"
     - **Content:** Use template from `/docs/email-confirmation-template.md`

7. **Save & Activate**
   - Click "Save" (bottom left)
   - Toggle "Scheduling" to ON
   - Set to "Immediately as data arrives"

### Environment Variables

Add these to your Manus project secrets:

```
VITE_MAKE_WEBHOOK_URL=https://hook.us1.make.com/xxxxxxxxxxxxx
VITE_MAKE_API_KEY=your_32_character_api_key_here
```

---

## Workflow 2: Application Submissions

### Overview
Receives client applications, stores them in Notion, saves files to Google Drive, and sends confirmation emails with tracking codes.

### Setup Steps

1. **Create New Scenario**
   - Name it: "Apex Omnis - Application Submissions"

2. **Add Webhooks Module**
   - Create webhook: "Apex Omnis Application Form"
   - Enable API key authentication (same as contact form)
   - Copy webhook URL

3. **Add Notion Module (Store Application)**
   - Click "+" after webhook
   - Search for "Notion"
   - Select "Create a Database Item"
   - Connect your Notion account
   - Select your applications database
   - Map fields:
     - **Name:** `{{name}}`
     - **Email:** `{{email}}`
     - **Business:** `{{businessName}}`
     - **Website:** `{{website}}`
     - **Target Audience:** `{{targetAudience}}`
     - **Current Challenges:** `{{currentChallenges}}`
     - **Automation Goals:** `{{automationGoals}}`
     - **Community Importance:** `{{communityImportance}}`
     - **Ethical Concerns:** `{{ethicalConcerns}}`
     - **Budget Range:** `{{budgetRange}}`
     - **Timeline:** `{{timeline}}`
     - **Submitted Date:** `{{formatDate(now; "YYYY-MM-DD")}}`
     - **Status:** "Pending Review"
     - **Confirmation Code:** `{{substring(sha256(email + now); 0; 8)}}` (generates unique code)

4. **Add Google Drive Module (Save Files)**
   - Click "+" after Notion
   - Search for "Google Drive"
   - Select "Upload a File"
   - Connect your Google Drive
   - Configure:
     - **Folder:** Select "Apex Omnis Applications" folder
     - **File Name:** `{{name}}_{{attachments[].fileName}}`
     - **Data:** `{{attachments[].base64Data}}`
   - Click "Add another module" to handle multiple files
   - Use "Iterator" to loop through `{{attachments[]}}`

5. **Add Email Module (Confirmation)**
   - Click "+" after Google Drive
   - Add Gmail/Email module
   - Configure:
     - **To:** `{{email}}`
     - **Subject:** "Application Received - Apex Omnis Studios ✓"
     - **Content:** Use template from `/docs/email-confirmation-template.md`
     - Replace `{{confirmation_code}}` with `{{substring(sha256(email + now); 0; 8)}}`

6. **Add Email Module (Internal Notification)**
   - Click "+" after confirmation email
   - Add another email module
   - Configure:
     - **To:** your@email.com
     - **Subject:** `New Application: {{name}} ({{businessName}})`
     - **Content:**
       ```
       New client application received:
       
       Name: {{name}}
       Business: {{businessName}}
       Email: {{email}}
       Website: {{website}}
       
       Target Audience: {{targetAudience}}
       Budget Range: {{budgetRange}}
       Timeline: {{timeline}}
       
       Automation Goals:
       {{automationGoals}}
       
       View in Notion: [link to Notion database]
       Files saved to Google Drive: [link to folder]
       
       Confirmation Code: {{substring(sha256(email + now); 0; 8)}}
       ```

7. **Save & Activate**
   - Save scenario
   - Toggle scheduling ON
   - Test with a real application submission

### Notion Database Schema

Create a Notion database with these properties:

| Property Name | Type | Description |
|--------------|------|-------------|
| Name | Title | Applicant name |
| Email | Email | Contact email |
| Business | Text | Business name |
| Website | URL | Business website |
| Target Audience | Text | Who they serve |
| Current Challenges | Text | Problems they're facing |
| Automation Goals | Text | What they want to automate |
| Community Importance | Text | Why community matters |
| Ethical Concerns | Text | Ethical considerations |
| Budget Range | Select | $5k-$10k, $10k-$20k, $20k-$50k, $50k+ |
| Timeline | Select | 1-2 months, 2-3 months, 3-6 months, 6+ months |
| Status | Select | Pending Review, Approved, Declined, In Progress |
| Submitted Date | Date | Auto-filled |
| Confirmation Code | Text | Unique tracking code |
| Files | Files & media | Uploaded attachments |
| Notes | Text | Internal notes |

---

## Workflow 3: Application Status Lookup

### Overview
Allows applicants to check their application status using email + confirmation code.

### Setup Steps

1. **Create New Scenario**
   - Name it: "Apex Omnis - Status Lookup"

2. **Add Webhooks Module**
   - Create webhook: "Apex Omnis Status Lookup"
   - Enable API key authentication
   - Copy webhook URL (for `VITE_STATUS_LOOKUP_URL`)

3. **Add Notion Module (Query Database)**
   - Click "+" after webhook
   - Search for "Notion"
   - Select "Search Objects"
   - Connect Notion
   - Configure:
     - **Database:** Your applications database
     - **Filter:** 
       - Email equals `{{email}}`
       - AND Confirmation Code equals `{{confirmationCode}}`

4. **Add Router Module**
   - Click "+" after Notion
   - Add "Router"
   - This will create two paths: Found / Not Found

5. **Path 1: Application Found**
   - Add "Webhook Response"
   - Configure:
     - **Status:** 200
     - **Body:**
       ```json
       {
         "found": true,
         "status": "{{status}}",
         "submittedDate": "{{submittedDate}}",
         "name": "{{name}}",
         "business": "{{businessName}}"
       }
       ```

6. **Path 2: Application Not Found**
   - Add "Webhook Response"
   - Configure:
     - **Status:** 404
     - **Body:**
       ```json
       {
         "found": false,
         "message": "No application found with that email and confirmation code."
       }
       ```

7. **Save & Activate**

### Update Frontend

In `/client/src/pages/ApplicationStatus.tsx`, replace the mock lookup with:

```typescript
const handleLookup = async () => {
  setIsLoading(true);
  setError("");
  setResult(null);

  try {
    const response = await fetch(import.meta.env.VITE_STATUS_LOOKUP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-make-api-key": import.meta.env.VITE_MAKE_API_KEY,
      },
      body: JSON.stringify({ email, confirmationCode }),
    });

    const data = await response.json();

    if (data.found) {
      setResult(data);
    } else {
      setError("No application found. Please check your email and confirmation code.");
    }
  } catch (err) {
    setError("Failed to lookup application. Please try again.");
  } finally {
    setIsLoading(false);
  }
};
```

---

## Workflow 4: Approval & Rejection Emails

### Overview
Manual workflow to send approval or rejection emails after reviewing applications.

### Setup Steps

1. **Create New Scenario**
   - Name it: "Apex Omnis - Application Decision"

2. **Add Notion Module (Watch Database)**
   - Search for "Notion"
   - Select "Watch Database Items"
   - Connect Notion
   - Select applications database
   - **Filter:** Status changed to "Approved" OR "Declined"

3. **Add Router Module**
   - Two paths: Approved / Declined

4. **Path 1: Approved**
   - Add Email module
   - Configure:
     - **To:** `{{email}}`
     - **Subject:** "Great News: Your Apex Omnis Studios Application ✨"
     - **Content:** Use template from `/docs/email-approval-template.md`

5. **Path 2: Declined**
   - Add Email module
   - Configure:
     - **To:** `{{email}}`
     - **Subject:** "Thank you for your application - Apex Omnis Studios"
     - **Content:** Use template from `/docs/email-rejection-template.md`

6. **Save & Activate**

---

## Testing Checklist

Before going live:

- [ ] Contact form webhook receives data correctly
- [ ] Contact form sends notification email to you
- [ ] Contact form sends auto-reply to submitter
- [ ] Application form webhook receives data correctly
- [ ] Application data saves to Notion with all fields
- [ ] Files upload to Google Drive successfully
- [ ] Confirmation email sends with correct code
- [ ] Internal notification email arrives
- [ ] Status lookup finds applications correctly
- [ ] Status lookup returns 404 for invalid codes
- [ ] Approval email sends when status changes
- [ ] Rejection email sends when status changes
- [ ] All emails render correctly in Gmail, Outlook, Apple Mail

---

## Troubleshooting

### Webhook Not Receiving Data

1. Check that webhook URL is correct in Manus secrets
2. Verify API key matches between form and Make.com
3. Check Make.com execution history for errors
4. Test webhook with Postman/curl first

### Files Not Uploading

1. Verify base64 data is being sent correctly
2. Check Google Drive permissions
3. Ensure file size is under 10MB
4. Check Make.com data transfer limits

### Emails Not Sending

1. Verify email account is connected in Make.com
2. Check spam folder
3. Verify email templates have all required variables
4. Check Make.com execution history for errors

### Notion Not Saving Data

1. Verify database permissions
2. Check that all required fields exist
3. Verify field types match (Text, Select, Date, etc.)
4. Check Make.com execution history for mapping errors

---

## Cost Estimation

**Make.com Core Plan ($9/month):**
- 10,000 operations/month
- Unlimited active scenarios

**Estimated Usage:**
- Contact form: ~50 submissions/month = 150 operations (3 per submission)
- Applications: ~20 submissions/month = 120 operations (6 per submission)
- Status lookups: ~40 lookups/month = 40 operations
- Decision emails: ~20 emails/month = 20 operations

**Total:** ~330 operations/month (well within limits)

---

## Security Best Practices

1. **Use API Key Authentication** - Prevents unauthorized webhook access
2. **Validate Input Data** - Use Make.com filters to validate email formats, required fields
3. **Rate Limiting** - Enable Make.com rate limiting to prevent spam
4. **Secure Secrets** - Never commit API keys to git, use Manus secrets
5. **Monitor Execution History** - Check Make.com logs weekly for suspicious activity

---

## Next Steps

After setting up Make.com:

1. Test all workflows thoroughly
2. Add webhook URLs to Manus secrets
3. Monitor first week of submissions closely
4. Set up Make.com email alerts for failed scenarios
5. Create backup scenarios for critical workflows
6. Document any custom modifications

---

## Support

If you encounter issues:

1. Check Make.com execution history for error details
2. Review Make.com documentation: https://www.make.com/en/help
3. Contact Make.com support (Core plan includes email support)
4. Review this guide's troubleshooting section

---

## Maintenance

**Weekly:**
- Review Make.com execution history
- Check for failed scenarios
- Monitor email deliverability

**Monthly:**
- Review operation usage
- Clean up old test scenarios
- Update email templates if needed
- Review Notion database for data quality

**Quarterly:**
- Audit webhook security
- Review and optimize scenarios
- Update documentation
- Test disaster recovery procedures
