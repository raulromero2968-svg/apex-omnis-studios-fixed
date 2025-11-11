# Approval Email Template for Make.com

This template should be used when accepting applications to move forward with discovery calls.

---

## Email Configuration

**Subject:** Great News: Your Apex Omnis Studios Application ✨

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
  <title>Application Approved</title>
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
        <!-- Greeting -->
        <p style="margin: 0 0 20px 0; color: #a3a3a3; font-size: 16px; line-height: 1.6;">
          Hi {{applicant_name}},
        </p>
        
        <p style="margin: 0 0 20px 0; color: #a3a3a3; font-size: 16px; line-height: 1.6;">
          Great news! We're excited to move forward with your application. After reviewing your goals and the community you're serving, we see strong alignment with our expertise and values.
        </p>
        
        <!-- Success Badge -->
        <div style="background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); border-radius: 8px; padding: 20px; margin: 30px 0; text-align: center;">
          <h2 style="margin: 0; color: #ffffff; font-size: 24px;">🎉 Application Approved!</h2>
        </div>
        
        <!-- What We Liked -->
        <div style="background-color: #2a2a2a; border-left: 3px solid #06b6d4; padding: 20px; margin: 30px 0;">
          <h3 style="margin: 0 0 15px 0; color: #ffffff; font-size: 18px;">What Stood Out</h3>
          <p style="margin: 0; color: #a3a3a3; font-size: 14px; line-height: 1.6;">
            Your focus on {{community_focus}} aligns perfectly with our mission to build automation that serves communities, not exploits them. We're particularly excited about your goal to {{automation_goal}}.
          </p>
        </div>
        
        <!-- Next Steps -->
        <h3 style="margin: 30px 0 15px 0; color: #ffffff; font-size: 20px;">What Happens Next</h3>
        
        <!-- Step 1 -->
        <div style="background-color: #2a2a2a; border: 1px solid #3a3a3a; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
          <div style="display: flex; align-items: flex-start;">
            <div style="background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); color: #ffffff; font-weight: bold; font-size: 18px; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">1</div>
            <div>
              <h4 style="margin: 0 0 8px 0; color: #ffffff; font-size: 16px;">Discovery Call Scheduled</h4>
              <p style="margin: 0; color: #a3a3a3; font-size: 14px; line-height: 1.5;">
                You'll receive a calendar invite within the next 24 hours for a 30-minute discovery call. We'll dive deep into your specific needs, timeline, and success metrics.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Step 2 -->
        <div style="background-color: #2a2a2a; border: 1px solid #3a3a3a; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
          <div style="display: flex; align-items: flex-start;">
            <div style="background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); color: #ffffff; font-weight: bold; font-size: 18px; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">2</div>
            <div>
              <h4 style="margin: 0 0 8px 0; color: #ffffff; font-size: 16px;">Custom Proposal</h4>
              <p style="margin: 0; color: #a3a3a3; font-size: 14px; line-height: 1.5;">
                After our call, we'll prepare a detailed proposal outlining scope, timeline, pricing, and deliverables tailored specifically to your project.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Step 3 -->
        <div style="background-color: #2a2a2a; border: 1px solid #3a3a3a; border-radius: 8px; padding: 20px;">
          <div style="display: flex; align-items: flex-start;">
            <div style="background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); color: #ffffff; font-weight: bold; font-size: 18px; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">3</div>
            <div>
              <h4 style="margin: 0 0 8px 0; color: #ffffff; font-size: 16px;">Partnership Kickoff</h4>
              <p style="margin: 0; color: #a3a3a3; font-size: 14px; line-height: 1.5;">
                Once you approve the proposal, we'll begin the done-with-you build process. You'll have direct access to our team throughout the entire project.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Prepare for Call -->
        <div style="background-color: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 8px; padding: 20px; margin: 30px 0;">
          <h3 style="margin: 0 0 15px 0; color: #ffffff; font-size: 16px;">📋 Prepare for Your Discovery Call</h3>
          <p style="margin: 0 0 10px 0; color: #a3a3a3; font-size: 14px; line-height: 1.6;">
            To make the most of our time together, please have ready:
          </p>
          <ul style="margin: 0; padding-left: 20px; color: #a3a3a3; font-size: 14px; line-height: 1.8;">
            <li>Examples of current manual processes you want to automate</li>
            <li>Any existing tools or platforms you're already using</li>
            <li>Questions about our process or past projects</li>
            <li>Your ideal timeline and any hard deadlines</li>
          </ul>
        </div>
        
        <!-- CTA Button -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://apexomnisstudios.com/application-status" style="display: inline-block; background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px;">
            Track Your Application Status
          </a>
        </div>
        
        <!-- Closing -->
        <p style="margin: 20px 0 0 0; color: #a3a3a3; font-size: 14px; line-height: 1.6;">
          We're looking forward to working with you to build something meaningful for {{community_focus}}. If you have any questions before our call, don't hesitate to reply to this email.
        </p>
        
        <p style="margin: 15px 0 0 0; color: #a3a3a3; font-size: 14px;">
          Best regards,<br/>
          <strong style="color: #ffffff;">The Apex Omnis Studios Team</strong>
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

Hi {{applicant_name}},

Great news! We're excited to move forward with your application. After reviewing your goals and the community you're serving, we see strong alignment with our expertise and values.

🎉 APPLICATION APPROVED!

WHAT STOOD OUT

Your focus on {{community_focus}} aligns perfectly with our mission to build automation that serves communities, not exploits them. We're particularly excited about your goal to {{automation_goal}}.

WHAT HAPPENS NEXT

1. Discovery Call Scheduled
You'll receive a calendar invite within the next 24 hours for a 30-minute discovery call. We'll dive deep into your specific needs, timeline, and success metrics.

2. Custom Proposal
After our call, we'll prepare a detailed proposal outlining scope, timeline, pricing, and deliverables tailored specifically to your project.

3. Partnership Kickoff
Once you approve the proposal, we'll begin the done-with-you build process. You'll have direct access to our team throughout the entire project.

PREPARE FOR YOUR DISCOVERY CALL

To make the most of our time together, please have ready:
• Examples of current manual processes you want to automate
• Any existing tools or platforms you're already using
• Questions about our process or past projects
• Your ideal timeline and any hard deadlines

→ Track Your Application Status: https://apexomnisstudios.com/application-status

We're looking forward to working with you to build something meaningful for {{community_focus}}. If you have any questions before our call, don't hesitate to reply to this email.

Best regards,
The Apex Omnis Studios Team

---
Questions? Reply to this email or visit: https://apexomnisstudios.com/faq
© 2024 Apex Omnis Studios. Building automation that serves communities.
```

---

## Make.com Variables

- `{{applicant_name}}` → Form field: `name`
- `{{applicant_email}}` → Form field: `email`
- `{{community_focus}}` → Form field: `targetAudience`
- `{{automation_goal}}` → Form field: `automationGoals`

---

## When to Send

Send this email when:
- Application review is complete and decision is "Approved"
- You're ready to schedule a discovery call within 24 hours
- You have capacity to take on the project

**Timing:** Send within 3-5 business days of application receipt (matches your timeline promise)

---

## Follow-Up Actions

After sending this email:
1. **Schedule Discovery Call** - Send calendar invite within 24 hours (use Calendly or manual)
2. **Update Notion Status** - Change status to "Approved - Call Scheduled"
3. **Prepare Call Notes** - Review application details before the call
4. **Set Reminder** - Follow up if no calendar response within 48 hours

---

## Key Principles

1. **Celebrate the Win** - Make them feel special and excited
2. **Set Clear Expectations** - Outline exact next steps with timeline
3. **Build Anticipation** - Hint at the value they'll get from the call
4. **Reduce Friction** - Provide prep checklist so they're ready
5. **Maintain Momentum** - Promise calendar invite within 24 hours

---

## Testing Checklist

Before going live:
- [ ] Email renders correctly in Gmail, Outlook, Apple Mail
- [ ] All links work (status page, FAQ)
- [ ] Variables populate correctly from form data
- [ ] Tone feels exciting and professional
- [ ] Plain text fallback is readable
- [ ] Mobile responsive
- [ ] Spam folder check

---

## Notes

- This email sets the tone for the entire partnership
- Approved applicants are potential long-term clients and referral sources
- Personalization (community_focus, automation_goal) shows you read their application
- Prep checklist reduces no-shows and makes calls more productive
- Replace domain/links with your actual URLs
