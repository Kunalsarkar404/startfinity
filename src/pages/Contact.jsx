import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { companyProfile } from '../data/companyProfile';
import { emailService } from '../services/emailService';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const result = await emailService.sendContactForm(formData);

            if (result.success) {
                setSuccess(result.message);
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
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
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl text-gray-100">
                        We're here to help your business succeed. Reach out to us today!
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

                            {error && (
                                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-700 text-sm">{error}</p>
                                </div>
                            )}

                            {success && (
                                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-700 text-sm">{success}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
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
                                    <label className="block text-sm font-semibold mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="What can we help you with?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Tell us more about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                            {/* Local Presence Badge */}
                            <div className="mb-8 p-4 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl border border-orange-200">
                                <div className="flex items-center">
                                    <img
                                        src="/indian-flag-logo.jpg"
                                        alt="Indian Flag"
                                        className="w-8 h-6 mr-3 rounded"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">Proudly Indian</h3>
                                        <p className="text-sm text-gray-600">Supporting MSMEs across India with local expertise</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 mb-8">
                                {/* Phone */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                                        <p className="text-gray-600">{companyProfile.company.phone}</p>
                                        <p className="text-sm text-gray-500">Mon - Sat: 9 AM - 6 PM</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email</h3>
                                        <p className="text-gray-600">{companyProfile.company.email}</p>
                                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                                        <FaPhone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                                        <a
                                            href={`https://wa.me/91${companyProfile.company.phone.replace(/[^0-9]/g, '').slice(-10)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-600 hover:underline"
                                        >
                                            Chat with us on WhatsApp
                                        </a>
                                        <p className="text-sm text-gray-500">Quick responses, 9 AM - 8 PM</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mr-4">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{companyProfile.offices[0].type}</h3>
                                        <p className="text-gray-600">
                                            {companyProfile.offices[0].address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 text-2xl">
                                📞
                            </div>
                            <h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
                            <p className="text-gray-600 mb-4">Book a consultation with our experts</p>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                                Book Now
                            </button>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center text-purple-600 text-2xl">
                                💬
                            </div>
                            <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                            <p className="text-gray-600 mb-4">Chat with our support team now</p>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                                Start Chat
                            </button>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center text-green-600 text-2xl">
                                📧
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email Support</h3>
                            <p className="text-gray-600 mb-4">Send us a detailed inquiry via email</p>
                            <a
                                href={`mailto:${companyProfile.company.email}`}
                                className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                            >
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
