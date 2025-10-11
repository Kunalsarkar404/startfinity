# EmailJS Setup Instructions

This project uses EmailJS to handle form submissions. Follow these steps to set up EmailJS integration:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID**

## 3. Create Email Templates

Create three email templates in your EmailJS dashboard:

### Contact Form Template
- Template ID: `contact_form`
- Subject: `New Contact Form Submission from {{from_name}}`
- Body:
```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

### Application Form Template
- Template ID: `application_form`
- Subject: `New Funding Application from {{from_name}}`
- Body:
```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Business Name: {{business_name}}
Application Type: {{application_type}}
```

### Eligibility Form Template
- Template ID: `eligibility_form`
- Subject: `New Eligibility Check Submission`
- Body:
```
Business Type: {{business_type}}
Annual Turnover: {{annual_turnover}}
Loan Amount: {{loan_amount}}
Business Age: {{business_age}}
Location: {{location}}
Form Type: {{form_type}}
```

## 4. Get Your Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** (User ID)
3. Copy this value

## 5. Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT=contact_form
REACT_APP_EMAILJS_TEMPLATE_ID_APPLY=application_form
REACT_APP_EMAILJS_TEMPLATE_ID_ELIGIBILITY=eligibility_form
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Integration

1. Start your development server: `npm start`
2. Try submitting forms on:
   - Contact page
   - Apply page
   - Home page (eligibility form)
3. Check your email for received messages

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already added to `.gitignore`
- EmailJS public key is safe to use in frontend applications
- For production, consider setting up environment variables in your hosting platform

## Troubleshooting

- Ensure all template variable names match exactly
- Check EmailJS dashboard for failed sends
- Verify your email service is properly configured
- Make sure environment variables are loaded correctly