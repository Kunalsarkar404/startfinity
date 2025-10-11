import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { successStories, companyProfile } from '../data/companyProfile';

const SuccessStories = () => {
    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
                        <p className="text-xl text-gray-100">
                            Real stories from real businesses that achieved their dreams with our support
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
                            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                                    <div className="flex items-center mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                                            {story.clientName.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">{story.clientName}</h3>
                                            <p className="text-blue-600 font-semibold">{story.businessName}</p>
                                            <p className="text-gray-500 text-sm">{story.location} • {story.industry}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                            {story.fundingAmount}
                                        </div>
                                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            {story.scheme}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <FaQuoteLeft className="text-blue-300 text-xl mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 leading-relaxed italic">"{story.testimonial}"</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Journey</h4>
                                            <p className="text-gray-600 text-sm">{story.story}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Growth Achievement</h4>
                                            <p className="text-green-600 font-semibold text-sm">{story.growth}</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                            <span className="text-gray-500 text-sm">Year: {story.year}</span>
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

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                            <div className="text-4xl font-bold text-blue-600 mb-2">{companyProfile.statistics.clientsServed}</div>
                            <h3 className="text-lg font-semibold mb-1">Businesses Funded</h3>
                            <p className="text-gray-600 text-sm">Across India</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                            <div className="text-4xl font-bold text-green-600 mb-2">{companyProfile.statistics.fundingFacilitated}</div>
                            <h3 className="text-lg font-semibold mb-1">Total Funding</h3>
                            <p className="text-gray-600 text-sm">Facilitated</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                            <div className="text-4xl font-bold text-purple-600 mb-2">{companyProfile.statistics.successRate}</div>
                            <h3 className="text-lg font-semibold mb-1">Success Rate</h3>
                            <p className="text-gray-600 text-sm">Approval Rate</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">{companyProfile.statistics.statesCovered}</div>
                            <h3 className="text-lg font-semibold mb-1">States Covered</h3>
                            <p className="text-gray-600 text-sm">Pan India Presence</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
                    <p className="text-xl mb-8 text-gray-100">
                        Join thousands of successful businesses who chose STARTFINITY
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/apply" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                            Start Your Journey
                        </a>
                        <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition">
                            Talk to Expert
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
