import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
    return (
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
                        {/* WhatsApp Support */}
                        <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-md transition-all duration-200">
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
                                        href="https://wa.me/9157142657?text=Hi%20STARTFINITY,%20I%20need%20help%20with%20funding"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Call Support */}
                        <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-md transition-all duration-200">
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
                                        href="tel:+919157142657"
                                        className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200"
                                    >
                                        +91 9157142657
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
