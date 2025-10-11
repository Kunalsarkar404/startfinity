import React, { useState, useEffect } from 'react';
import { ToastContainer, useToast } from '../components/Toast';
import HeroSection from '../components/home/HeroSection';
import EligibilityForm from '../components/home/EligibilityForm';
import PartnersAndImpactSection from '../components/home/PartnersAndImpactSection';
import MSMESuccessSection from '../components/home/MSMESuccessSection';
import GovernmentSchemesSection from '../components/home/GovernmentSchemesSection';
import TailoredFundingSection from '../components/home/TailoredFundingSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
    const [formData, setFormData] = useState({
        businessType: '',
        fundingRequired: '',
        businessStage: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const { toasts, addToast, removeToast } = useToast();

    // Scroll reveal animation setup
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Form handlers
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        const newErrors = {};
        if (!formData.businessType) newErrors.businessType = 'Please select a business type';
        if (!formData.fundingRequired) newErrors.fundingRequired = 'Please select funding amount';
        if (!formData.businessStage) newErrors.businessStage = 'Please select business stage';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            addToast('Please fill in all required fields', 'error', 4000);
            return;
        }

        // Simulate API call
        setLoading(true);
        setErrors({});

        setTimeout(() => {
            console.log('Form submitted:', formData);
            setLoading(false);
            setSuccess(true);
            addToast('✅ Your eligibility report will be sent to your email shortly!', 'success', 5000);

            // Reset after 5 seconds
            setTimeout(() => {
                setSuccess(false);
                setFormData({ businessType: '', fundingRequired: '', businessStage: '' });
            }, 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Toast Notifications */}
            <ToastContainer toasts={toasts} removeToast={removeToast} />

            {/* Hero Section with Eligibility Form */}
            <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-blue-700 text-white pt-16 pb-32 lg:pt-24 lg:pb-40 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0djIwaDIwVjE0SDM2em0tMiAySDRWNGgzMHYxMHptMCAydjMwSDRWMTZoMzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Hero Content */}
                        <HeroSection />

                        {/* Right Column - Eligibility Form */}
                        <div className="lg:pl-8">
                            <EligibilityForm
                                formData={formData}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                loading={loading}
                                errors={errors}
                                success={success}
                                setFormData={setFormData}
                            />
                        </div>
                    </div>
                </div>

                {/* Trusted Badge */}
                <div className="container mx-auto px-4 mt-16 relative z-20">
                    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 text-center border-2 border-primary-100 animate-scale-in">
                        <p className="text-base lg:text-lg font-semibold text-gray-800">
                            ✨ Trusted by <span className="text-primary-600 font-bold">20,000+</span> businesses across India
                        </p>
                    </div>
                </div>
            </section>

            {/* Strategic Partners, Certifications & Impact */}
            <PartnersAndImpactSection />

            {/* Driving MSME Success */}
            <MSMESuccessSection />

            {/* Top Government Schemes */}
            <GovernmentSchemesSection />

            {/* Tailored Funding Options */}
            <TailoredFundingSection />

            {/* How We Secure Your Funding */}
            <HowItWorksSection />

            {/* Ready to Transform - Contact Section */}
            <ContactSection />
        </div>
    );
};

export default Home;
