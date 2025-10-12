import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCertificate, FaCode, FaArrowRight, FaBuilding } from 'react-icons/fa';
import { ToastContainer, useToast } from '../components/Toast';
import HeroSection from '../components/home/HeroSection';
import EligibilityForm from '../components/home/EligibilityForm';
import PartnersAndImpactSection from '../components/home/PartnersAndImpactSection';
import MSMESuccessSection from '../components/home/MSMESuccessSection';
import TailoredFundingSection from '../components/home/TailoredFundingSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import ContactSection from '../components/home/ContactSection';
import { emailService } from '../services/emailService';

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
    const handleSubmit = async (e) => {
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

        // Send via EmailJS
        setLoading(true);
        setErrors({});

        try {
            const eligibilityData = {
                businessType: formData.businessType,
                annualTurnover: formData.fundingRequired, // Using funding required as turnover for now
                loanAmount: formData.fundingRequired,
                businessAge: formData.businessStage,
                location: 'Not specified'
            };

            const result = await emailService.sendEligibilityForm(eligibilityData);

            if (result.success) {
                setSuccess(true);
                addToast('✅ Your eligibility report will be sent to your email shortly!', 'success', 5000);

                // Reset after 5 seconds
                setTimeout(() => {
                    setSuccess(false);
                    setFormData({ businessType: '', fundingRequired: '', businessStage: '' });
                }, 5000);
            } else {
                addToast('Failed to submit eligibility check. Please try again.', 'error', 4000);
            }
        } catch (error) {
            addToast('An unexpected error occurred. Please try again.', 'error', 4000);
        } finally {
            setLoading(false);
        }
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
            <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-16 lg:py-20 overflow-hidden">
                {/* Professional pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0djIwaDIwVjE0SDM2em0tMiAySDRWNGgzMHYxMHptMCAydjMwSDRWMTZoMzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

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

                {/* Professional Trust Indicators */}
                <div className="container mx-auto px-4 mt-14 relative z-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-primary-100">
                            <div className="text-center mb-6">
                                <p className="text-lg font-semibold text-gray-800">
                                    ✨ Trusted by <span className="text-primary-600 font-bold">20,000+</span> businesses across India
                                </p>
                            </div>

                            {/* Government Certifications */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                                    <div className="text-primary-600 font-bold text-sm">Government</div>
                                    <div className="text-xs text-gray-600 mt-1">Registered</div>
                                </div>
                                <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                                    <div className="text-primary-600 font-bold text-sm">ISO Certified</div>
                                    <div className="text-xs text-gray-600 mt-1">Quality Assured</div>
                                </div>
                                <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                                    <div className="text-primary-600 font-bold text-sm">RBI Approved</div>
                                    <div className="text-xs text-gray-600 mt-1">Partner Network</div>
                                </div>
                                <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                                    <div className="text-primary-600 font-bold text-sm">Data Secure</div>
                                    <div className="text-xs text-gray-600 mt-1">SSL Protected</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Partners, Certifications & Impact */}
            <PartnersAndImpactSection />

            {/* Clean Services Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Our Core Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive business solutions designed to accelerate your growth
                        </p>
                    </div>

                    {/* Services Grid - Clean & Spacious */}
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Financial Services */}
                            <div className="group">
                                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center group-hover:shadow-xl transition-all duration-300 border border-primary-200">
                                    <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <FaRocket className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        Business loans, government schemes, and financial advisory services
                                    </p>
                                    <Link to="/services" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                                        Explore Services <FaArrowRight className="ml-2 text-sm" />
                                    </Link>
                                </div>
                            </div>

                            {/* Compliance Services */}
                            <div className="group">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center group-hover:shadow-xl transition-all duration-300 border border-blue-200">
                                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <FaCertificate className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Legal & Compliance</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        Company registration, GST certificates, and ongoing compliance management
                                    </p>
                                    <Link to="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                        Get Started <FaArrowRight className="ml-2 text-sm" />
                                    </Link>
                                </div>
                            </div>

                            {/* Registration Services */}
                            <div className="group">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center group-hover:shadow-xl transition-all duration-300 border border-green-200">
                                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <FaBuilding className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Business Setup</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        Complete business registration and licensing solutions for all entity types
                                    </p>
                                    <Link to="/contact" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
                                        Start Setup <FaArrowRight className="ml-2 text-sm" />
                                    </Link>
                                </div>
                            </div>

                            {/* Technology Solutions */}
                            <div className="group">
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center group-hover:shadow-xl transition-all duration-300 border border-purple-200">
                                    <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <FaCode className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Solutions</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        Custom software development, websites, and mobile applications
                                    </p>
                                    <Link to="/contact" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                                        Start Project <FaArrowRight className="ml-2 text-sm" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple Stats Section */}
                    <div className="mt-20 text-center">
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="p-6">
                                <div className="text-3xl font-bold text-primary-600 mb-2">20,000+</div>
                                <div className="text-gray-600">Businesses Served</div>
                            </div>
                            <div className="p-6">
                                <div className="text-3xl font-bold text-primary-600 mb-2">₹500+ Cr</div>
                                <div className="text-gray-600">Funding Facilitated</div>
                            </div>
                            <div className="p-6">
                                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                                <div className="text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Driving MSME Success */}
            <MSMESuccessSection />

            {/* Top Government Schemes */}
            {/* <GovernmentSchemesSection /> */}

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
