import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

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
                subject: formData.subject,
                message: formData.message,
                to_email: 'support@startfinity.co.in'
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
                business_name: formData.businessName,
                to_email: 'support@startfinity.co.in',
                application_type: 'Funding Application'
            };

            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID_APPLY,
                templateParams
            );

            return {
                success: true,
                message: 'Application submitted successfully! Our expert will connect with you soon.',
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
    },

    // Send eligibility form email
    sendEligibilityForm: async (formData) => {
        try {
            const templateParams = {
                business_type: formData.businessType,
                annual_turnover: formData.annualTurnover,
                loan_amount: formData.loanAmount,
                business_age: formData.businessAge,
                location: formData.location,
                to_email: 'support@startfinity.co.in',
                form_type: 'Eligibility Check'
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