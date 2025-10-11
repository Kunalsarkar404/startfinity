import React, { useState } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import { emailService } from '../services/emailService';

const Apply = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        businessName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await emailService.sendApplicationForm(formData);

            if (result.success) {
                setShowSuccessModal(true);
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    businessName: ''
                });
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4">Apply for Funding</h1>
                        <p className="text-lg text-gray-100">
                            Fill in your basic details and our experts will connect with you soon
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-2xl font-bold mb-6 text-center">Get Started Today</h2>

                            {error && (
                                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-700 text-sm">{error}</p>
                                </div>
                            )}

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Business Name *</label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your business name"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {loading ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: '✓', text: '100% Secure' },
                            { icon: '✓', text: 'Quick Processing' },
                            { icon: '✓', text: 'Expert Support' },
                            { icon: '✓', text: '95% Success Rate' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center text-green-600 text-xl font-bold">
                                    {item.icon}
                                </div>
                                <p className="font-semibold text-gray-700">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <FaTimes size={20} />
                        </button>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <FaCheckCircle className="text-green-600 text-2xl" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Thank You!
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Your application has been received successfully. Our expert will connect with you soon to discuss your funding requirements.
                            </p>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                <p className="text-sm text-blue-800">
                                    <strong>What happens next:</strong>
                                </p>
                                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                    <li>• Our expert will call you within 2-4 hours</li>
                                    <li>• Discuss your funding needs and eligibility</li>
                                    <li>• Guide you through the documentation process</li>
                                    <li>• Help you choose the best funding option</li>
                                </ul>
                            </div>                            <div className="flex gap-4">
                                <button
                                    onClick={() => {
                                        setShowSuccessModal(false);
                                        window.location.href = '/';
                                    }}
                                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Go to Homepage
                                </button>
                                <button
                                    onClick={() => setShowSuccessModal(false)}
                                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Apply;
