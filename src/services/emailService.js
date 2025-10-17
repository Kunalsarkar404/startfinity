
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Email service functions
export const emailService = {
    // Send contact form email
    sendContactForm: async (formData) => {
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                subject: formData.subject || 'New Message',
                message: formData.message,
                to_email: 'info@startfinitynavigator.com'
            };

            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT,
                templateParams
            );

            return {
                success: true,
                message: 'Message sent successfully! We will get back to you soon.',
                data: response
            };
        } catch (error) {
            console.error('Email send error:', error);
            return {
                success: false,
                message: 'Failed to send message. Please try again later.',
                error: error
            };
        }
    },

    // Send application form email
    sendApplicationForm: async (formData) => {
        try {
            const templateParams = {
                from_name: formData.fullName,
                from_email: formData.email,
                phone: formData.phone,
                subject: `New ${formData.serviceType} Application Submitted`,
                message: `New service application received:
                
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Business Name: ${formData.businessName}
Service Type: ${formData.serviceType}
                
Please contact this applicant for ${formData.serviceType} service processing.`,
                service_type: formData.serviceType,
                business_name: formData.businessName,
                to_email: 'info@startfinitynavigator.com'
            };

            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT,
                templateParams
            );

            return {
                success: true,
                message: `${formData.serviceType} application submitted successfully! Our expert will connect with you soon.`,
                data: response
            };
        } catch (error) {
            console.error('Email send error:', error);
            return {
                success: false,
                message: 'Failed to submit application. Please try again later.',
                error: error
            };
        }
    },    // Send eligibility form email
    sendEligibilityForm: async (formData) => {
        try {
            const templateParams = {
                from_name: 'Eligibility Check Request',
                from_email: 'info@startfinitynavigator.com',
                phone: 'N/A',
                subject: 'New Eligibility Check Submitted',
                message: `New eligibility check request received:
                
Business Type: ${formData.businessType}
Annual Turnover: ${formData.annualTurnover}
Loan Amount Required: ${formData.loanAmount}
Business Age: ${formData.businessAge}
Location: ${formData.location}
                
Please process this eligibility check and respond to the customer.`,
                to_email: 'info@startfinitynavigator.com'
            };

            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ELIGIBILITY,
                templateParams
            );

            return {
                success: true,
                message: 'Eligibility check submitted! We will analyze your requirements and get back to you.',
                data: response
            };
        } catch (error) {
            console.error('Email send error:', error);
            return {
                success: false,
                message: 'Failed to submit eligibility check. Please try again later.',
                error: error
            };
        }
    }
};

export default emailService;