# EmailJS Setup Guide

This guide will help you configure EmailJS for the Contact form in your Communication Wave website.

## Steps to Configure EmailJS

### 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (allows up to 200 emails/month)
3. Verify your email address

### 2. Add Email Service

1. Go to the **Email Services** section in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Use the following template structure:

**Template Name:** `contact_form`

**Subject:** `New Contact Form Submission from {{from_name}}`

**Content:**

```
Hello Communication Wave Team,

You have received a new contact form submission:

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Required: {{service_required}}

Message:
{{message}}

---
This email was sent from the Communication Wave contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)

### 5. Update the Contact Form

Open `src/pages/Contact.jsx` and replace the placeholder values around line 24-26:

```javascript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your actual Service ID
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your actual Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your actual Public Key
```

**Example:**

```javascript
const serviceId = "service_abc123";
const templateId = "template_xyz789";
const publicKey = "abcdefghijklmnop";
```

### 6. Test the Contact Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your email to confirm receipt

## Template Variables Used

The contact form sends the following variables to your email template:

- `from_name`: Full name of the sender
- `from_email`: Email address of the sender
- `phone`: Phone number (or "Not provided")
- `service_required`: Selected service option
- `message`: Message content
- `to_name`: Recipient name (set as "Communication Wave Team")

## Troubleshooting

### Form not sending emails

1. Check browser console for error messages
2. Verify all three IDs (Service ID, Template ID, Public Key) are correct
3. Ensure your EmailJS service is properly connected and verified

### Rate Limiting

- Free tier: 200 emails/month
- Consider upgrading if you expect high traffic

### CORS Issues

- EmailJS handles CORS automatically
- No additional configuration needed

## Security Notes

- Public Key is safe to expose in client-side code
- Never share your Private Key
- EmailJS handles email authentication server-side

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)

---

For any issues, refer to the [EmailJS Support](https://www.emailjs.com/support/)
