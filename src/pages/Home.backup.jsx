import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaRocket, FaClock, FaChartLine, FaShieldAlt, FaArrowRight, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { ToastContainer, useToast } from '../components/Toast';

const Home = () => {
    const [formData, setFormData] = useState({
        businessType: '',
        fundingRequired: '',
        businessStage: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef(null);
    const { toasts, addToast, removeToast } = useToast();

    // Scroll reveal animation
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

    // Stats counter animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !statsVisible) {
                    setStatsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, [statsVisible]);

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

    // Number counter animation component
    const CountUp = ({ end, duration = 2000, suffix = '' }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!statsVisible) return;

            let startTime;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [end, duration]);

        return <span>{count}{suffix}</span>;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Toast Notifications */}
            <ToastContainer toasts={toasts} removeToast={removeToast} />

            {/* Hero Section - Fixed spacing */}
            <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-blue-700 text-white pt-16 pb-32 lg:pt-24 lg:pb-40 overflow-hidden">
                {/* Decorative elements - Increased opacity for better visibility */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0djIwaDIwVjE0SDM2em0tMiAySDRWNGgzMHYxMHptMCAydjMwSDRWMTZoMzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="py-8">
                            {/* Badge */}
                            <div className="inline-flex items-center bg-white/15 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30 shadow-soft">
                                <span className="text-sm font-semibold leading-none">आपकी सफलता, हमारी ज़िम्मेदारी</span>
                            </div>

                            {/* Heading - Fluid typography */}
                            <h1 className="font-extrabold mb-6 tracking-tight text-shadow-lg" style={{ fontSize: 'clamp(2rem, 5vw + 0.5rem, 3.75rem)', lineHeight: '1.1' }}>
                                Your Business Deserves
                                <span className="block text-accent-yellow mt-2">Funding, Not Rejection</span>
                            </h1>

                            {/* Subtitle - Fluid typography */}
                            <p className="mb-8 text-blue-50 font-medium" style={{ fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.375rem)', lineHeight: '1.6' }}>
                                Get ₹5 Lakhs to ₹10 Crores with India's fastest MSME funding platform
                            </p>

                            {/* Stats Grid - Enhanced with cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-4 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium">
                                    <p className="stat-number mb-1">48hrs</p>
                                    <p className="stat-label text-blue-100">Quick Approval</p>
                                </div>
                                <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-4 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium">
                                    <p className="stat-number mb-1">₹500Cr+</p>
                                    <p className="stat-label text-blue-100">Funded</p>
                                </div>
                                <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-4 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium">
                                    <p className="stat-number mb-1">95%</p>
                                    <p className="stat-label text-blue-100">Success Rate</p>
                                </div>
                                <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-4 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium">
                                    <p className="stat-number mb-1">100%</p>
                                    <p className="stat-label text-blue-100">Online Process</p>
                                </div>
                            </div>

                            {/* CTA Buttons - Enhanced with ripple effect */}
                            <div className="flex flex-wrap gap-4 mb-6">
                                <Link
                                    to="/apply"
                                    className="btn-ripple inline-flex items-center justify-center px-8 py-4 text-base bg-white text-primary-700 rounded-xl font-bold shadow-large hover:shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700 animate-pulse-slow"
                                >
                                    Apply for Funding
                                    <FaArrowRight className="ml-2" />
                                </Link>
                                <Link
                                    to="/schemes"
                                    className="btn-ripple inline-flex items-center justify-center px-8 py-4 text-base bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700"
                                >
                                    View All Schemes
                                </Link>
                            </div>

                            {/* Features - Better spacing and sizing */}
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center">
                                    <FaCheck className="text-accent-green mr-2 flex-shrink-0" size={16} />
                                    <span className="font-medium text-sm">Zero Collateral</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCheck className="text-accent-green mr-2 flex-shrink-0" size={16} />
                                    <span className="font-medium text-sm">Minimal Docs</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCheck className="text-accent-green mr-2 flex-shrink-0" size={16} />
                                    <span className="font-medium text-sm">Expert Support</span>
                                </div>
                            </div>
                        </div>

                        {/* Eligibility Form - Enhanced with states */}
                        <div className="bg-white rounded-3xl shadow-large p-8 text-gray-800 animate-slide-up">
                            {/* Success Message */}
                            {success && (
                                <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-center animate-scale-in">
                                    <FaCheck className="text-green-600 mr-3 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-bold text-green-900">Success!</p>
                                        <p className="text-sm text-green-700">Your eligibility report will be sent to your email shortly.</p>
                                    </div>
                                </div>
                            )}

                            <h3 className="font-bold mb-2 text-gray-900" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.2' }}>
                                Check Your Eligibility
                            </h3>
                            <p className="text-gray-600 mb-6" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                Get instant funding options in 30 seconds
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                                        Business Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        disabled={loading}
                                        className={`w-full px-4 py-3 text-base bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-all text-gray-900 font-medium ${errors.businessType ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <option value="">Select Business Type</option>
                                        <option value="manufacturing">Manufacturing</option>
                                        <option value="trading">Trading</option>
                                        <option value="services">Services</option>
                                        <option value="retail">Retail</option>
                                    </select>
                                    {errors.businessType && (
                                        <p className="text-red-600 text-sm mt-1 flex items-center">
                                            <span className="mr-1">⚠️</span> {errors.businessType}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                                        Funding Required <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="fundingRequired"
                                        value={formData.fundingRequired}
                                        onChange={handleChange}
                                        disabled={loading}
                                        className={`w-full px-4 py-3 text-base bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-all text-gray-900 font-medium ${errors.fundingRequired ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <option value="">Select Funding Range</option>
                                        <option value="0-10L">₹0 - ₹10 Lakh</option>
                                        <option value="10L-50L">₹10 Lakh - ₹50 Lakh</option>
                                        <option value="50L-1Cr">₹50 Lakh - ₹1 Crore</option>
                                        <option value="1Cr+">₹1 Crore+</option>
                                    </select>
                                    {errors.fundingRequired && (
                                        <p className="text-red-600 text-sm mt-1 flex items-center">
                                            <span className="mr-1">⚠️</span> {errors.fundingRequired}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                                        Business Stage <span className="text-red-500">*</span>
                                    </label>
                                    <div className={`grid grid-cols-2 gap-3 ${errors.businessStage ? 'p-3 bg-red-50 border-2 border-red-500 rounded-xl' : ''}`}>
                                        {['Idea Stage', 'Early Revenue', 'Scaling', 'Established'].map((stage) => (
                                            <button
                                                key={stage}
                                                type="button"
                                                disabled={loading}
                                                onClick={() => setFormData({ ...formData, businessStage: stage })}
                                                className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all text-center min-h-[44px] ${formData.businessStage === stage
                                                    ? 'bg-primary-500 text-white shadow-md scale-[0.98]'
                                                    : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700'
                                                    } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            >
                                                {stage}
                                            </button>
                                        ))}
                                    </div>
                                    {errors.businessStage && (
                                        <p className="text-red-600 text-sm mt-1 flex items-center">
                                            <span className="mr-1">⚠️</span> {errors.businessStage}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-medium hover:shadow-large transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center min-h-[56px] focus-visible:ring-4 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {loading ? (
                                        <>
                                            <span className="inline-block w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin mr-3"></span>
                                            Processing...
                                        </>
                                    ) : success ? (
                                        <>
                                            <FaCheck className="mr-2" />
                                            Success!
                                        </>
                                    ) : (
                                        <>
                                            Check Eligibility
                                            <FaArrowRight className="ml-2" />
                                        </>
                                    )}
                                </button>

                                <div className="flex items-center justify-center space-x-3 lg:space-x-4 text-xs lg:text-sm text-gray-600 pt-1">
                                    <div className="flex items-center">
                                        <FaCheck className="text-xs text-green-500 mr-1" />
                                        <span>100% Free</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaCheck className="text-xs text-green-500 mr-1" />
                                        <span>No Spam</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaCheck className="text-xs text-green-500 mr-1" />
                                        <span>Secure</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Trusted Badge - Integrated */}
                <div className="container mx-auto px-4 mt-16 relative z-20">
                    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 text-center border-2 border-primary-100 animate-scale-in">
                        <p className="text-base lg:text-lg font-semibold text-gray-800">
                            ✨ Trusted by <span className="text-primary-600 font-bold">20,000+</span> businesses across India
                        </p>
                    </div>
                </div>
            </section>

            {/* Strategic Partners */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="section-title">Our Strategic Partners</h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            Collaborating with leaders to bring you the best funding solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8">
                        {['SIDBI', 'StartupIndia', 'DPIIT', 'SBI', 'HDFC Bank', 'MUDRA', 'NABARD', 'Bank of Baroda'].map((partner, index) => (
                            <div key={index} className="bg-white rounded-xl border-2 border-gray-100 p-6 flex items-center justify-center group cursor-pointer hover:border-primary-200 hover:shadow-md transition-all duration-200 scroll-reveal">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-primary-50 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-primary-100 transition-colors group-hover:scale-110 transform duration-200">
                                        <span className="text-2xl font-extrabold text-primary-600">{partner.charAt(0)}</span>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-700">{partner}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="mt-20">
                        <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }} className="font-bold text-center mb-12">
                            Certifications & Recognitions
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'DPIIT Recognition', desc: 'Officially recognized by DPIIT' },
                                { title: 'ISO 9001:2015', desc: 'Quality management certified' },
                                { title: 'GeM Registered', desc: 'Government e-Marketplace vendor' },
                                { title: 'Top 100 Fintech', desc: 'Leading emerging fintech' }
                            ].map((cert, index) => (
                                <div key={index} className="scroll-reveal bg-white rounded-xl border-2 border-gray-100 hover:border-green-200 p-8 text-center group hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
                                    <div className="w-16 h-16 bg-green-50 rounded-xl mx-auto mb-5 flex items-center justify-center group-hover:bg-green-100 transition-colors group-hover:rotate-12 transform duration-300">
                                        <FaCheck className="text-2xl text-green-600" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 text-gray-900 leading-snug">{cert.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{cert.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Stats - Animated Counters */}
                    <div ref={statsRef} className="mt-20 bg-primary-600 rounded-2xl p-12 lg:p-16 text-white shadow-lg relative overflow-hidden scroll-reveal">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0djIwaDIwVjE0SDM2em0tMiAySDRWNGgzMHYxMHptMCAydjMwSDRWMTZoMzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
                        <div className="relative z-10">
                            <h3 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-bold mb-8 text-center">
                                Our Impact
                            </h3>
                            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                                <div className="text-center">
                                    <p style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }} className="font-extrabold mb-4 leading-none">
                                        ₹<CountUp end={500} duration={2000} suffix=" Crore+" />
                                    </p>
                                    <p className="text-lg lg:text-xl text-white/90 font-medium leading-relaxed">
                                        Facilitated in MSME funding through strategic partnerships
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }} className="font-extrabold mb-4 leading-none">
                                        <CountUp end={20000} duration={2500} suffix="+" />
                                    </p>
                                    <p className="text-lg lg:text-xl text-white/90 font-medium leading-relaxed">
                                        Businesses trusted us across India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Driving MSME Success */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="section-title">Driving MSME Success Across India</h2>
                        <p className="section-subtitle max-w-3xl mx-auto">
                            4.77 crore MSMEs registered on Udyam portal, transforming India's economic landscape
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-8 text-center hover:border-blue-200 hover:shadow-md transition-all duration-200">
                            <p className="stat-number text-blue-600 mb-2">477K+</p>
                            <p className="text-base text-gray-700 font-semibold mb-1">MSMEs Registered</p>
                            <p className="text-sm text-gray-600">On Udyam Portal</p>
                        </div>
                        <div className="bg-purple-50 border-2 border-purple-100 rounded-xl p-8 text-center hover:border-purple-200 hover:shadow-md transition-all duration-200">
                            <p className="stat-number text-purple-600 mb-2">₹500Cr+</p>
                            <p className="text-base text-gray-700 font-semibold mb-1">Credit Facilitated</p>
                            <p className="text-sm text-gray-600">Since 2020</p>
                        </div>
                        <div className="bg-green-50 border-2 border-green-100 rounded-xl p-8 text-center hover:border-green-200 hover:shadow-md transition-all duration-200">
                            <p className="stat-number text-green-600 mb-2">95%</p>
                            <p className="text-base text-gray-700 font-semibold mb-1">Success Rate</p>
                            <p className="text-sm text-gray-600">Approval Rate</p>
                        </div>
                        <div className="bg-pink-50 border-2 border-pink-100 rounded-xl p-8 text-center hover:border-pink-200 hover:shadow-md transition-all duration-200">
                            <p className="stat-number text-pink-600 mb-2">28/36</p>
                            <p className="text-base text-gray-700 font-semibold mb-1">Pan India Coverage</p>
                            <p className="text-sm text-gray-600">States & UTs</p>
                        </div>
                    </div>

                    {/* Pan India Presence */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }} className="font-bold mb-6 leading-tight">
                                Pan-India Presence
                            </h3>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    {['Delhi', 'Mumbai', 'Bengaluru', 'Chennai', 'Kolkata', 'Hyderabad', 'Ahmedabad', 'Pune', 'Jaipur'].map((city, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200">
                                            <span className="text-sm font-medium">📍 {city}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between pt-4 border-t border-gray-200">
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm">Active States</p>
                                        <p className="text-2xl font-bold text-blue-600">28/36</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm">Top Region</p>
                                        <p className="text-2xl font-bold text-purple-600">West India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }} className="font-bold mb-6">
                                Top MSME States
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { state: 'Maharashtra', count: '82L+' },
                                    { state: 'Tamil Nadu', count: '49L+' },
                                    { state: 'Gujarat', count: '41L+' },
                                    { state: 'Uttar Pradesh', count: '39L+' },
                                    { state: 'Karnataka', count: '34L+' }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4 flex justify-between items-center hover:border-blue-200 hover:shadow-md transition-all duration-200">
                                        <span className="font-semibold text-gray-900">{item.state}</span>
                                        <span className="text-blue-600 font-bold text-xl">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sector Distribution */}
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-10">
                        <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="font-bold mb-10 text-center">
                            Sector Distribution
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6 text-center hover:border-blue-200 hover:shadow-md transition-all duration-200">
                                <div className="w-20 h-20 bg-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                    <FaRocket className="text-4xl text-blue-600" />
                                </div>
                                <p className="text-4xl font-bold text-blue-600 mb-2">31%</p>
                                <p className="font-semibold text-gray-900">Manufacturing</p>
                            </div>
                            <div className="bg-purple-50 border-2 border-purple-100 rounded-xl p-6 text-center hover:border-purple-200 hover:shadow-md transition-all duration-200">
                                <div className="w-20 h-20 bg-purple-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                    <FaChartLine className="text-4xl text-purple-600" />
                                </div>
                                <p className="text-4xl font-bold text-purple-600 mb-2">36%</p>
                                <p className="font-semibold text-gray-900">Trading</p>
                            </div>
                            <div className="bg-pink-50 border-2 border-pink-100 rounded-xl p-6 text-center hover:border-pink-200 hover:shadow-md transition-all duration-200">
                                <div className="w-20 h-20 bg-pink-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                    <FaShieldAlt className="text-4xl text-pink-600" />
                                </div>
                                <p className="text-4xl font-bold text-pink-600 mb-2">33%</p>
                                <p className="font-semibold text-gray-900">Services</p>
                            </div>
                        </div>

                        {/* Government Support */}
                        <div className="mt-12 pt-8 border-t-2 border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <p className="text-3xl font-bold text-blue-600 mb-1">₹4.14L Cr</p>
                                <p className="text-sm text-gray-600 font-medium">MUDRA loans</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-purple-600 mb-1">₹7,593 Cr</p>
                                <p className="text-sm text-gray-600 font-medium">SRI Fund invested</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-green-600 mb-1">200+</p>
                                <p className="text-sm text-gray-600 font-medium">RAMP proposals</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-pink-600 mb-1">20.5%</p>
                                <p className="text-sm text-gray-600 font-medium">Women-owned</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Government Schemes */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-bold text-center mb-4">
                        Top Government Schemes
                    </h2>
                    <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
                        Access 50+ government-backed funding schemes with expert guidance and quick approvals
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { name: 'NAIFF', desc: 'National Agriculture Infrastructure Financing Facility' },
                            { name: 'NGO Elevation Program', desc: 'Empowering NGOs with funding solutions' },
                            { name: 'SC-ST-OBC Scheme', desc: 'Special schemes for underrepresented communities' },
                            { name: 'SEED Fund', desc: 'Startup Early Stage Development Fund' },
                            { name: 'Tax Exemption', desc: 'Tax benefits for eligible businesses' },
                            { name: 'Venture Capital', desc: 'VC funding for high-growth startups' }
                        ].map((scheme, index) => (
                            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all duration-200">
                                <div className="h-24 bg-primary-600"></div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold mb-2 text-gray-900">{scheme.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{scheme.desc}</p>
                                    <Link to={`/schemes/${scheme.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
                                        Learn More <span className="ml-1">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/all-schemes"
                            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200 focus-visible:ring-4 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                        >
                            Explore All 50+ Schemes
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tailored Funding Options */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-bold text-center mb-4">
                        Tailored Funding Options
                    </h2>
                    <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
                        Choose from India's leading MSME schemes—fast approvals, expert support, and minimal paperwork
                    </p>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {['All Options', 'Loans', 'Credit', 'Subsidy', 'Grants'].map((tab, index) => (
                            <button
                                key={index}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${index === 0
                                    ? 'bg-primary-600 text-white shadow-md hover:bg-primary-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Funding Schemes Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            {
                                name: 'Pradhan Mantri Mudra Yojana',
                                amount: 'Shishu ₹50K • Kishore ₹5L • Tarun ₹10L',
                                desc: 'Collateral-free credit for non-farm micro enterprises under three categories.',
                                tags: ['Collateral-free', 'Micro'],
                                success: '98%',
                                time: '7-10 days',
                                popular: true
                            },
                            {
                                name: 'PM Employment Generation Programme',
                                amount: '₹50L (Mfg) • ₹20L (Service)',
                                desc: 'Margin money subsidy: 15-35% based on category and location.',
                                tags: ['Subsidy', 'New venture'],
                                success: '92%',
                                time: '30-45 days',
                                popular: true
                            },
                            {
                                name: 'CGTMSE Credit Guarantee',
                                amount: 'Guarantee up to ₹5Cr',
                                desc: '75-85% guarantee coverage on collateral-free credit facilities.',
                                tags: ['Guarantee', 'Collateral-free'],
                                success: '95%',
                                time: '15-20 days',
                                popular: false
                            },
                            {
                                name: 'CLCS-TUS / MSME Champions',
                                amount: '15% capital subsidy • SC/ST up to 25%',
                                desc: 'Technology upgradation support with capital subsidy for MSMEs.',
                                tags: ['Technology', 'Upgrade'],
                                success: '84%',
                                time: '45-60 days',
                                popular: false
                            },
                            {
                                name: 'SFURTI (Traditional Industries)',
                                amount: '₹2.5Cr (Regular) • ₹5Cr (Major)',
                                desc: 'Cluster-based support for artisans and traditional industries.',
                                tags: ['Clusters', 'Traditional'],
                                success: '82%',
                                time: '60-90 days',
                                popular: false
                            },
                            {
                                name: 'PSB Loans in 59 Minutes',
                                amount: '₹1L to ₹5Cr',
                                desc: 'Quick in-principle approval through digital platform with CGTMSE cover.',
                                tags: ['Digital', 'Quick approval'],
                                success: '89%',
                                time: '59 minutes*',
                                popular: false
                            }
                        ].map((scheme, index) => (
                            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-400 hover:shadow-lg transition-all duration-200 relative">
                                {scheme.popular && (
                                    <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-lg">
                                        ⚡ Popular
                                    </span>
                                )}
                                <h3 className="text-lg font-bold mb-2 pr-20 text-gray-900">{scheme.name}</h3>
                                <p className="text-primary-600 font-semibold mb-3 text-sm">{scheme.amount}</p>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{scheme.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {scheme.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-lg font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between text-sm mb-4 pb-4 border-b border-gray-200">
                                    <div>
                                        <p className="text-gray-500 text-xs mb-1">Success Rate</p>
                                        <p className="font-bold text-green-600">{scheme.success}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs mb-1">Processing Time</p>
                                        <p className="font-bold text-primary-600">{scheme.time}</p>
                                    </div>
                                </div>

                                <Link
                                    to={`/schemes/${scheme.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block text-center bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200"
                                >
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/eligibility"
                            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200 focus-visible:ring-4 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                        >
                            Check Your Eligibility
                        </Link>
                    </div>
                </div>
            </section>

            {/* How We Secure Your Funding */}
            <section className="py-20 bg-primary-50">
                <div className="container mx-auto px-4">
                    <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-bold text-center mb-4">
                        How We Secure Your Funding
                    </h2>
                    <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
                        Our streamlined approach helps businesses get funded in as little as 7 days
                    </p>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                step: 1,
                                title: 'Quick Application',
                                time: '2 mins',
                                desc: 'Fill a simple 2-minute form with basic business details',
                                subDesc: 'No complex paperwork needed',
                                icon: <FaRocket />
                            },
                            {
                                step: 2,
                                title: 'Expert Consultation',
                                time: '24 hrs',
                                desc: 'Our funding experts analyze your needs and match with best schemes',
                                subDesc: 'Personalized scheme matching',
                                icon: <FaChartLine />
                            },
                            {
                                step: 3,
                                title: 'Documentation',
                                time: '3-5 days',
                                desc: 'We help prepare and submit all required documents',
                                subDesc: 'End-to-end support',
                                icon: <FaShieldAlt />
                            },
                            {
                                step: 4,
                                title: 'Approval & Disbursement',
                                time: '7-21 days',
                                desc: 'Get approved and receive funds directly in your account',
                                subDesc: 'Direct bank transfer',
                                icon: <FaCheck />
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                            {item.step}
                                        </div>
                                        <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-lg">
                                            {item.time}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                                    <p className="text-xs text-gray-500 mb-2 font-medium">Step {item.step} of 4</p>
                                    <p className="text-sm text-gray-700 mb-2 leading-relaxed">{item.desc}</p>
                                    <p className="text-sm text-primary-600 font-semibold">{item.subDesc}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <FaArrowRight className="text-primary-600 text-xl" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: 'Fast Approvals', icon: <FaClock /> },
                            { label: '95% Success', icon: <FaCheck /> },
                            { label: 'No Hidden Fees', icon: <FaShieldAlt /> },
                            { label: 'Expert Support', icon: <FaChartLine /> }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-primary-200 hover:shadow-md transition-all duration-200">
                                <div className="w-14 h-14 bg-primary-50 rounded-xl mx-auto mb-3 flex items-center justify-center text-primary-600 text-xl">
                                    {feature.icon}
                                </div>
                                <p className="font-semibold">{feature.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/apply"
                            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                        >
                            GET STARTED TODAY
                        </Link>
                        <p className="mt-6 text-gray-600 text-base">Start Your Funding Journey</p>
                    </div>
                </div>
            </section>

            {/* Ready to Transform - Contact Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-bold text-center mb-12">
                        Ready to Transform Your Business?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Contact Form */}
                        <div className="md:col-span-1 bg-primary-50 border-2 border-primary-100 rounded-xl p-8">
                            <h3 className="text-xl font-bold mb-6 text-gray-900">Start Your Funding Journey</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number *"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Funding Requirement *"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>

                        {/* WhatsApp & Call Support */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 hover:border-green-300 hover:shadow-md transition-all duration-200">
                                <div className="flex items-start">
                                    <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center text-white mr-6 flex-shrink-0">
                                        <FaWhatsapp size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-gray-900">WhatsApp Support</h3>
                                        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                            Get instant support via WhatsApp. Our funding experts are available from 9 AM to 8 PM.
                                        </p>
                                        <a
                                            href="https://wa.me/919289247741?text=Hi%20STARTFINITY,%20I%20need%20help%20with%20funding"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200"
                                        >
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                                <div className="flex items-start">
                                    <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center text-white mr-6 flex-shrink-0">
                                        <FaPhone size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us Directly</h3>
                                        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                            Speak with our funding experts directly. Available Monday to Saturday, 9 AM - 6 PM.
                                        </p>
                                        <a
                                            href="tel:+919289247741"
                                            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200"
                                        >
                                            +91 92892 47741
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;