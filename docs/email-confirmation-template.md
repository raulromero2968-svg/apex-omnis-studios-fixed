# Email Confirmation Template for Make.com

This template should be used in your Make.com scenario to send confirmation emails after application submission.

---

## Email Configuration

**Subject:** Your Apex Omnis Studios Application - Confirmation Code Inside

**From:** Apex Omnis Studios <noreply@apexomnisstudios.com>

**To:** {{applicant_email}}

---

## Email Body (HTML)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #e5e5e5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a;">
    <!-- Header -->
    <tr>
      <td style="padding: 40px 20px; text-align: center; background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%);">
        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Apex Omnis Studios</h1>
      </td>
    </tr>
    
    <!-- Main Content -->
    <tr>
      <td style="padding: 40px 30px; background-color: #1a1a1a; border-left: 1px solid #2a2a2a; border-right: 1px solid #2a2a2a;">
        <!-- Success Icon -->
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="display: inline-block; width: 60px; height: 60px; background-color: #06b6d4; border-radius: 50%; position: relative;">
            <span style="color: #ffffff; font-size: 36px; line-height: 60px;">✓</span>
          </div>
        </div>
        
        <!-- Title -->
        <h2 style="margin: 0 0 20px 0; color: #ffffff; font-size: 24px; text-align: center;">Application Received!</h2>
        
        <!-- Greeting -->
        <p style="margin: 0 0 20px 0; color: #a3a3a3; font-size: 16px; line-height: 1.6;">
          Hi {{applicant_name}},
        </p>
        
        <p style="margin: 0 0 20px 0; color: #a3a3a3; font-size: 16px; line-height: 1.6;">
          Thank you for applying to work with Apex Omnis Studios! We've received your application and our founders will personally review it.
        </p>
        
        <!-- Confirmation Code Box -->
        <div style="background-color: #2a2a2a; border: 1px solid #3a3a3a; border-radius: 8px; padding: 20px; margin: 30px 0; text-align: center;">
          <p style="margin: 0 0 10px 0; color: #a3a3a3; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Your Confirmation Code</p>
          <p style="margin: 0; color: #06b6d4; font-size: 32px; font-weight: bold; font-family: 'Courier New', monospace; letter-spacing: 4px;">
            {{confirmation_code}}
          </p>
          <p style="margin: 10px 0 0 0; color: #737373; font-size: 12px;">Save this code to track your application status</p>
        </div>
        
        <!-- What Happens Next -->
        <h3 style="margin: 30px 0 15px 0; color: #ffffff; font-size: 18px;">What Happens Next?</h3>
        
        <div style="margin-bottom: 15px;">
          <table cellpadding="0" cellspacing="0" style="width: 100%;">
            <tr>
              <td style="width: 30px; vertical-align: top; padding-top: 2px;">
                <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); border-radius: 50%; color: #ffffff; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold;">1</div>
              </td>
              <td style="padding-left: 10px; color: #a3a3a3; font-size: 14px; line-height: 1.6;">
                <strong style="color: #ffffff;">We Review (24-48 hours)</strong><br/>
                Our founders personally review every application for alignment with our values and community fit.
              </td>
            </tr>
          </table>
        </div>
        
        <div style="margin-bottom: 15px;">
          <table cellpadding="0" cellspacing="0" style="width: 100%;">
            <tr>
              <td style="width: 30px; vertical-align: top; padding-top: 2px;">
                <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); border-radius: 50%; color: #ffffff; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold;">2</div>
              </td>
              <td style="padding-left: 10px; color: #a3a3a3; font-size: 14px; line-height: 1.6;">
                <strong style="color: #ffffff;">Discovery Call (If Selected)</strong><br/>
                If we see a strong fit, we'll schedule a 30-minute call to dive deeper into your goals.
              </td>
            </tr>
          </table>
        </div>
        
        <div style="margin-bottom: 25px;">
          <table cellpadding="0" cellspacing="0" style="width: 100%;">
            <tr>
              <td style="width: 30px; vertical-align: top; padding-top: 2px;">
                <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); border-radius: 50%; color: #ffffff; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold;">3</div>
              </td>
              <td style="padding-left: 10px; color: #a3a3a3; font-size: 14px; line-height: 1.6;">
                <strong style="color: #ffffff;">Custom Proposal</strong><br/>
                We'll create a tailored proposal outlining scope, timeline, and partnership structure.
              </td>
            </tr>
          </table>
        </div>
        
        <!-- Timeline Badge -->
        <div style="background-color: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 20px; padding: 8px 16px; display: inline-block; margin-bottom: 25px;">
          <span style="color: #06b6d4; font-size: 12px;">⏱️ Most applications reviewed within 3-5 business days</span>
        </div>
        
        <!-- Track Application Button -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://apexomnisstudios.com/application-status" style="display: inline-block; background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: bold; font-size: 16px;">
            Track Your Application
          </a>
        </div>
        
        <p style="margin: 20px 0 0 0; color: #737373; font-size: 13px; text-align: center;">
          Use your email and confirmation code to check your application status anytime.
        </p>
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="padding: 30px; background-color: #0a0a0a; border-top: 1px solid #2a2a2a; text-align: center;">
        <p style="margin: 0 0 10px 0; color: #737373; font-size: 12px;">
          Questions? Reply to this email or visit our <a href="https://apexomnisstudios.com/faq" style="color: #06b6d4; text-decoration: none;">FAQ page</a>
        </p>
        <p style="margin: 0; color: #525252; font-size: 11px;">
          © 2024 Apex Omnis Studios. Building automation that serves communities.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## Plain Text Version (Fallback)

```
APEX OMNIS STUDIOS
Application Received!

Hi {{applicant_name}},

Thank you for applying to work with Apex Omnis Studios! We've received your application and our founders will personally review it.

YOUR CONFIRMATION CODE: {{confirmation_code}}

Save this code to track your application status at:
https://apexomnisstudios.com/application-status

WHAT HAPPENS NEXT?

1. We Review (24-48 hours)
   Our founders personally review every application for alignment with our values and community fit.

2. Discovery Call (If Selected)
   If we see a strong fit, we'll schedule a 30-minute call to dive deeper into your goals.

3. Custom Proposal
   We'll create a tailored proposal outlining scope, timeline, and partnership structure.

⏱️ Most applications reviewed within 3-5 business days

Track your application: https://apexomnisstudios.com/application-status

Questions? Reply to this email or visit: https://apexomnisstudios.com/faq

© 2024 Apex Omnis Studios. Building automation that serves communities.
```

---

## Make.com Variables to Include

When setting up this template in Make.com, map these variables from the webhook data:

- `{{applicant_name}}` → Form field: `name`
- `{{applicant_email}}` → Form field: `email`
- `{{confirmation_code}}` → **Generate using formula**: `{{upper(substring(md5(email + timestamp), 0, 3))}}-{{upper(substring(md5(email + timestamp), 3, 3))}}-{{upper(substring(md5(email + timestamp), 6, 3))}}`

### Confirmation Code Generation

The confirmation code should be:
- **Format**: ABC-123-XYZ (3 segments of 3 characters, uppercase)
- **Unique**: Based on email + timestamp hash
- **Memorable**: Short enough to type manually

**Make.com Formula Example:**
```
{{upper(substring(md5(concat(email, formatDate(now, 'X'))), 0, 3))}}-{{upper(substring(md5(concat(email, formatDate(now, 'X'))), 3, 3))}}-{{upper(substring(md5(concat(email, formatDate(now, 'X'))), 6, 3))}}
```

---

## Testing Checklist

Before going live, test:
- [ ] Email renders correctly in Gmail, Outlook, Apple Mail
- [ ] Confirmation code generates uniquely for each submission
- [ ] "Track Your Application" link works
- [ ] Plain text fallback displays properly
- [ ] Mobile responsive (most emails are opened on mobile)
- [ ] Spam folder check (send to yourself first)

---

## Notes

- Replace `apexomnisstudios.com` with your actual domain
- Update copyright year as needed
- Consider adding your logo image URL in the header
- Store confirmation codes in a database/Notion for status lookup
