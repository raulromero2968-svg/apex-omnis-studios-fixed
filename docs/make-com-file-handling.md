# Make.com File Handling Guide

This guide explains how to handle file uploads from the client application form in your Make.com webhook scenario.

## Overview

When applicants submit the application form with file attachments, the webhook receives a JSON payload containing:
- Application form data (name, email, business info, etc.)
- File attachments as base64-encoded data (up to 3 files)

## Webhook Payload Structure

```json
{
  "type": "client_application",
  "timestamp": "2025-11-10T22:30:00.000Z",
  "name": "John Doe",
  "email": "john@example.com",
  "businessName": "Acme Corp",
  "businessDescription": "...",
  "currentChallenges": "...",
  "automationGoals": "...",
  "successMetrics": "...",
  "targetAudience": "...",
  "communityImpact": "...",
  "ethicalAlignment": "...",
  "budgetRange": "5k-15k",
  "timeline": "1-3-months",
  "whyNow": "...",
  "attachments": [
    {
      "fileName": "business-plan.pdf",
      "fileType": "application/pdf",
      "fileSize": 2457600,
      "fileData": "data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PC9UeXBlL..."
    },
    {
      "fileName": "pitch-deck.pptx",
      "fileType": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "fileSize": 5242880,
      "fileData": "data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64,UEsDBBQABgAI..."
    }
  ]
}
```

## File Data Format

Each file in the `attachments` array contains:
- **fileName**: Original filename with extension
- **fileType**: MIME type (e.g., `application/pdf`, `image/jpeg`)
- **fileSize**: Size in bytes
- **fileData**: Base64-encoded file content with data URI prefix

## Make.com Integration Options

### Option 1: Save to Google Drive

**Steps:**
1. Add **Google Drive > Upload a File** module after the webhook
2. Map the file data:
   - **File Name**: `{{attachments[].fileName}}`
   - **Data**: `{{attachments[].fileData}}`
   - **Folder**: Choose your applications folder
3. Use an **Iterator** module if you want to process multiple files
4. Store the Google Drive file URL in your database/Notion

**Example Flow:**
```
Webhook → Iterator (attachments) → Google Drive Upload → Notion Create Page
```

### Option 2: Save to Dropbox

**Steps:**
1. Add **Dropbox > Upload a File** module after the webhook
2. Map the file data:
   - **File Name**: `{{attachments[].fileName}}`
   - **Data**: `{{attachments[].fileData}}`
   - **Folder Path**: `/Applications/[Business Name]`
3. Use an **Iterator** module for multiple files
4. Store the Dropbox share link

### Option 3: Attach to Notion Database

**Steps:**
1. Create a Notion database with a "Files" property (type: Files & media)
2. Add **Notion > Create a Database Item** module
3. For file attachments, you need to:
   - First upload files to a public URL (Google Drive, Dropbox, or S3)
   - Then reference those URLs in Notion's file property
4. Alternative: Store base64 data in a Notion text property for later processing

**Note:** Notion doesn't support direct base64 uploads, so you must first upload to a file storage service.

### Option 4: Email with Attachments

**Steps:**
1. Add **Email > Send an Email** module
2. Map attachments:
   - **Attachments**: Use the `attachments` array
   - **File Name**: `{{attachments[].fileName}}`
   - **Data**: `{{attachments[].fileData}}`
3. Include application details in email body

## Recommended Workflow

**Best Practice: Google Drive + Notion**

```
1. Webhook Trigger
   ↓
2. Iterator (loop through attachments array)
   ↓
3. Google Drive > Upload a File
   - File Name: {{fileName}}
   - Data: {{fileData}}
   - Folder: /Applications/{{businessName}}
   ↓
4. Aggregator (collect all Google Drive URLs)
   ↓
5. Notion > Create Database Item
   - Name: {{businessName}} - {{name}}
   - Email: {{email}}
   - Files: [Array of Google Drive URLs]
   - Budget: {{budgetRange}}
   - Timeline: {{timeline}}
   - Status: "New Application"
```

## Handling Base64 Data

### Understanding the Data URI Format

The `fileData` field contains a data URI:
```
data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PC9UeXBlL...
```

**Structure:**
- `data:` - Data URI prefix
- `application/pdf` - MIME type
- `;base64,` - Encoding indicator
- `JVBERi0...` - Base64-encoded file content

### Extracting Pure Base64

If a service requires pure base64 (without the data URI prefix), use Make.com's **Text Parser**:

1. Add **Text Parser > Match Pattern** module
2. Pattern: `data:.*?;base64,(.+)`
3. Extract group 1 to get pure base64 string

## File Size Considerations

- Maximum file size: **10MB per file**
- Maximum total payload: **~30MB** (3 files × 10MB)
- Base64 encoding increases size by ~33%
- Make.com has a 5MB default webhook limit - **you must increase this in webhook settings**

### Increasing Make.com Webhook Limit

1. Open your webhook module settings
2. Go to "Advanced settings"
3. Set "Maximum request size" to **50MB**
4. Save and test

## Testing Your Setup

### Test Payload (Single File)

```json
{
  "type": "client_application",
  "name": "Test User",
  "email": "test@example.com",
  "businessName": "Test Business",
  "attachments": [
    {
      "fileName": "test.pdf",
      "fileType": "application/pdf",
      "fileSize": 1024,
      "fileData": "data:application/pdf;base64,JVBERi0xLjQKJeLjz9MK"
    }
  ]
}
```

### Validation Checklist

- [ ] Webhook receives payload successfully
- [ ] Files upload to Google Drive/Dropbox
- [ ] File names are preserved
- [ ] Multiple files (2-3) are handled correctly
- [ ] Large files (8-10MB) upload without errors
- [ ] Notion/database entries include file links
- [ ] Email notifications include attachments (if using email)

## Troubleshooting

### Error: "Request size too large"
**Solution:** Increase webhook maximum request size to 50MB in advanced settings

### Error: "Invalid base64 data"
**Solution:** Ensure you're passing the full data URI (including `data:...;base64,` prefix) to file upload modules

### Files not appearing in Google Drive
**Solution:** Check folder permissions and ensure the Google Drive module has write access

### Notion files not working
**Solution:** Notion requires public URLs, not base64. Upload to Google Drive first, then reference the share link

## Security Considerations

1. **Webhook Authentication**: Add API key authentication to your webhook (already configured in the application form)
2. **File Validation**: The form validates file types and sizes client-side, but consider server-side validation in Make.com
3. **Storage Permissions**: Ensure Google Drive/Dropbox folders have restricted access
4. **Data Retention**: Set up automatic deletion of old application files after review period

## Next Steps

1. Set up your Make.com webhook scenario using one of the recommended workflows
2. Test with a sample application (use the test payload above)
3. Verify files are saved correctly to your chosen storage
4. Configure notifications for new applications
5. Document your specific workflow for team members

---

**Need Help?**
- Make.com Documentation: https://www.make.com/en/help
- Google Drive API: https://developers.google.com/drive
- Notion API: https://developers.notion.com
