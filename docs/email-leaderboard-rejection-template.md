# Leaderboard Rejection Email Template

**Use Case:** Send to users when their challenge submission cannot be verified or is rejected.

**Trigger:** Admin clicks "Reject" button in `/leaderboard-admin` dashboard.

---

## HTML Email Template

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Challenge Submission Update</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a; color: #e2e8f0;">
  
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Main Container -->
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #64748b 0%, #475569 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #ffffff;">
                Challenge Submission Update
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                Hi <strong style="color: #06b6d4;">{{username}}</strong>,
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                Thank you for submitting your challenge completion for <strong>{{setName}}</strong>. After reviewing your submission, we're unable to verify it at this time.
              </p>
              
              <!-- Submission Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0f172a; border-radius: 8px; padding: 20px; margin: 30px 0;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #94a3b8;">Your Submission</h3>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; font-size: 14px; color: #94a3b8;">Set:</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #e2e8f0; text-align: right;">{{setName}}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 14px; color: #94a3b8;">Completion Time:</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #e2e8f0; text-align: right;">{{completionTime}} hours</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 14px; color: #94a3b8;">Total Budget:</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #e2e8f0; text-align: right;">${{totalBudget}}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <h3 style="margin: 30px 0 15px 0; font-size: 18px; color: #cbd5e1;">Common Reasons for Rejection:</h3>
              
              <ul style="margin: 0 0 20px 0; padding-left: 20px; font-size: 14px; line-height: 1.8; color: #94a3b8;">
                <li>Screenshot doesn't clearly show completed set</li>
                <li>Completion time or budget appears unrealistic</li>
                <li>Screenshot shows different set than claimed</li>
                <li>Image quality too low to verify details</li>
                <li>Duplicate submission detected</li>
              </ul>
              
              <p style="margin: 20px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                <strong>Want to try again?</strong> You're welcome to resubmit with a clearer screenshot or corrected information. Make sure your screenshot clearly shows:
              </p>
              
              <ul style="margin: 0 0 20px 0; padding-left: 20px; font-size: 14px; line-height: 1.8; color: #94a3b8;">
                <li>Complete card list or collection page</li>
                <li>Set name clearly visible</li>
                <li>All cards marked as collected/owned</li>
                <li>High resolution and unedited</li>
              </ul>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="https://your-domain.manus.space/challenge-leaderboard" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Submit Again
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 30px 0 0 0; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                Questions? Reply to this email and we'll be happy to help clarify our verification process.
              </p>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #0f172a; border-top: 1px solid #334155; text-align: center;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #64748b;">
                Apex Omnis Studios<br>
                Building tools for collectors, educators, and creatives
              </p>
              <p style="margin: 0; font-size: 12px; color: #475569;">
                © 2025 Apex Omnis Studios. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>
```

---

## Plain Text Version

```
Challenge Submission Update

Hi {{username}},

Thank you for submitting your challenge completion for {{setName}}. After reviewing your submission, we're unable to verify it at this time.

YOUR SUBMISSION:
- Set: {{setName}}
- Completion Time: {{completionTime}} hours
- Total Budget: ${{totalBudget}}

COMMON REASONS FOR REJECTION:
• Screenshot doesn't clearly show completed set
• Completion time or budget appears unrealistic
• Screenshot shows different set than claimed
• Image quality too low to verify details
• Duplicate submission detected

WANT TO TRY AGAIN?
You're welcome to resubmit with a clearer screenshot or corrected information. Make sure your screenshot clearly shows:
• Complete card list or collection page
• Set name clearly visible
• All cards marked as collected/owned
• High resolution and unedited

Submit Again: https://your-domain.manus.space/challenge-leaderboard

Questions? Reply to this email and we'll be happy to help clarify our verification process.

---
Apex Omnis Studios
Building tools for collectors, educators, and creatives

© 2025 Apex Omnis Studios. All rights reserved.
```

---

## Make.com Setup

### Trigger: Notion Status Change

1. **Create new scenario:** "Send Leaderboard Rejection Email"
2. **Trigger:** Notion → Watch Database Items
3. **Filter:** Status = "Rejected" AND Verified Date = Today
4. **Action:** Gmail → Send an Email

### Email Configuration

- **To:** `{{Email}}` (from Notion)
- **Subject:** `Challenge Submission Update - {{setName}}`
- **Body:** Use HTML template above
- **Variables to map:**
  - `{{username}}` → Notion: Username
  - `{{setName}}` → Notion: Set Name
  - `{{completionTime}}` → Notion: Completion Time
  - `{{totalBudget}}` → Notion: Total Budget

---

## Best Practices

### Tone Guidelines
- Be respectful and encouraging
- Avoid accusatory language
- Offer clear path to resubmit
- Maintain professional but friendly tone

### Timing
- Send rejection emails within 24 hours
- Don't let submissions sit in "pending" too long
- Be consistent with approval/rejection criteria

### Follow-up
- Monitor replies for legitimate disputes
- Update verification guidelines if common issues arise
- Consider adding FAQ section to leaderboard page

---

## Testing Checklist

- [ ] Replace `your-domain.manus.space` with actual domain
- [ ] Test email in Gmail, Outlook, Apple Mail
- [ ] Verify all variables populate correctly
- [ ] Check mobile rendering
- [ ] Confirm links work
- [ ] Test plain text fallback
- [ ] Review tone with team

---

## Related Documentation

- `/docs/email-leaderboard-approval-template.md` - Approval email
- `/docs/make-com-leaderboard-integration.md` - Full webhook setup
- `/docs/make-com-quick-start.md` - General Make.com guide
