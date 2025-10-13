import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { successStories, companyProfile } from '../data/companyProfile';

const SuccessStories = () => {
    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-6 py-2 mb-6">
                            <FaStar className="mr-2 text-yellow-400" />
                            <span className="text-sm font-medium">Client Success Stories</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Transforming Businesses Across India</h1>
                        <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                            Real success stories from entrepreneurs who chose our services to fuel their business growth and achieve their dreams
                        </p>
                    </div>
                </div>
            </section>

            {/* Success Hero Image */}
            {/* <section className="py-5 bg-white">
                <div className="flex justify-center">
                    <img
                        src="/women-fund-raising.jpg"
                        alt="Successful business entrepreneurs celebrating growth"
                        className="w-full max-w-lg"
                    />

                </div>
            </section> */}

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-1">
                                <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 border-b border-primary-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg">
                                            {story.clientName.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{story.clientName}</h3>
                                            <p className="text-primary-600 font-semibold">{story.industry} Entrepreneur</p>
                                            <p className="text-gray-500 text-sm">{story.location} • {story.year}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                                            {story.fundingAmount}
                                        </div>
                                        <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-semibold">
                                            {story.scheme}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <FaQuoteLeft className="text-primary-300 text-xl mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 leading-relaxed italic text-sm">"{story.testimonial}"</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Business Journey</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{story.story}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Achievement</h4>
                                            <p className="text-green-600 font-semibold text-sm">{story.growth}</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <span className="text-gray-500 text-xs font-medium">Client Since {story.year}</span>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className="text-yellow-400 text-sm" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Measurable success across all our service offerings
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl font-bold text-primary-600 mb-3">{companyProfile.statistics.clientsServed}</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">Businesses Served</h3>
                            <p className="text-gray-600 text-sm">Across India</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl font-bold text-green-600 mb-3">{companyProfile.statistics.fundingFacilitated}</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">Total Funding</h3>
                            <p className="text-gray-600 text-sm">Facilitated</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl font-bold text-primary-600 mb-3">{companyProfile.statistics.successRate}</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">Success Rate</h3>
                            <p className="text-gray-600 text-sm">Client Satisfaction</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-3">{companyProfile.statistics.statesCovered}</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">States Covered</h3>
                            <p className="text-gray-600 text-sm">Pan India Presence</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
                        <p className="text-xl mb-10 text-primary-100 leading-relaxed">
                            Join thousands of successful entrepreneurs who chose our expert services to transform their business dreams into reality
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/apply" className="group inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <span>Start Your Journey</span>
                                <FaStar className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
                            </a>
                            <a href="/contact" className="group inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
                                <span>Talk to Expert</span>
                                <FaQuoteLeft className="ml-2 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-90">
                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <FaStar className="text-yellow-400" />
                                <span className="text-sm">5-Star Rated Service</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <span className="text-sm">✓ Government Certified</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <span className="text-sm">✓ 95% Success Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
