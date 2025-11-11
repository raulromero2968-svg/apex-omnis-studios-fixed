# Leaderboard Approval Email Template

**Use Case:** Send to users when their challenge submission is approved and added to the public leaderboard.

**Trigger:** Admin clicks "Approve" button in `/leaderboard-admin` dashboard.

---

## HTML Email Template

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Challenge Approved!</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a; color: #e2e8f0;">
  
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Main Container -->
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 32px; font-weight: bold; color: #ffffff;">
                🏆 Congratulations!
              </h1>
              <p style="margin: 10px 0 0 0; font-size: 16px; color: #f0f9ff;">
                Your challenge submission has been approved!
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                Hi <strong style="color: #06b6d4;">{{username}}</strong>,
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                Great news! Your challenge completion has been verified and is now live on the public leaderboard.
              </p>
              
              <!-- Achievement Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0f172a; border-radius: 8px; padding: 20px; margin: 30px 0;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #06b6d4;">Your Achievement</h3>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; font-size: 14px; color: #94a3b8;">Set:</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #e2e8f0; text-align: right;"><strong>{{setName}}</strong></td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 14px; color: #94a3b8;">Completion Time:</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #06b6d4; text-align: right;"><strong>{{completionTime}} hours</strong></td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 14px; color: #94a3b8;">Total Budget:</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #10b981; text-align: right;"><strong>${{totalBudget}}</strong></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                Your achievement is now visible to the entire community. Share your success on social media and inspire other collectors!
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="https://your-domain.manus.space/challenge-leaderboard" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      View Leaderboard
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 30px 0 0 0; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                Want to climb higher? Try completing another set and beat your own record!
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
🏆 Congratulations!

Hi {{username}},

Great news! Your challenge completion has been verified and is now live on the public leaderboard.

YOUR ACHIEVEMENT:
- Set: {{setName}}
- Completion Time: {{completionTime}} hours
- Total Budget: ${{totalBudget}}

Your achievement is now visible to the entire community. Share your success on social media and inspire other collectors!

View Leaderboard: https://your-domain.manus.space/challenge-leaderboard

Want to climb higher? Try completing another set and beat your own record!

---
Apex Omnis Studios
Building tools for collectors, educators, and creatives

© 2025 Apex Omnis Studios. All rights reserved.
```

---

## Make.com Setup

### Trigger: Notion Status Change

1. **Create new scenario:** "Send Leaderboard Approval Email"
2. **Trigger:** Notion → Watch Database Items
3. **Filter:** Status = "Approved" AND Verified Date = Today
4. **Action:** Gmail → Send an Email

### Email Configuration

- **To:** `{{Email}}` (from Notion)
- **Subject:** `🏆 Your Challenge is Now on the Leaderboard!`
- **Body:** Use HTML template above
- **Variables to map:**
  - `{{username}}` → Notion: Username
  - `{{setName}}` → Notion: Set Name
  - `{{completionTime}}` → Notion: Completion Time
  - `{{totalBudget}}` → Notion: Total Budget

---

## Testing Checklist

- [ ] Replace `your-domain.manus.space` with actual domain
- [ ] Test email in Gmail, Outlook, Apple Mail
- [ ] Verify all variables populate correctly
- [ ] Check mobile rendering
- [ ] Confirm links work
- [ ] Test plain text fallback

---

## Customization Notes

- Update domain in CTA button
- Add your logo URL if desired
- Adjust color scheme to match brand
- Consider adding social sharing buttons
