import React from 'react';
import { Link } from 'react-router-dom';

const TailoredFundingSection = () => {
    const tabs = ['All Schemes', 'Micro Credit', 'Guarantee Schemes', 'Subsidy Programs', 'Startup Funds', 'Emergency Credit'];

    const fundingSchemes = [
        {
            name: 'Pradhan Mantri Mudra Yojana',
            amount: 'Shishu ₹50K • Kishore ₹5L • Tarun ₹10L',
            desc: 'Collateral-free micro credit for non-farm income generating activities across three progressive categories.',
            tags: ['Collateral-free', 'Micro Credit'],
            success: '98%',
            time: '7-10 days',
            popular: true
        },
        {
            name: 'CGTMSE Credit Guarantee',
            amount: 'Guarantee up to ₹10Cr',
            desc: '75-85% guarantee coverage on collateral-free credit facilities for MSMEs through banks.',
            tags: ['Guarantee Scheme', 'Collateral-free'],
            success: '95%',
            time: '15-20 days',
            popular: true
        },
        {
            name: 'Startup India Seed Fund',
            amount: 'Up to ₹50L seed funding',
            desc: 'Government seed funding for early-stage startups to validate proof of concept and prototype development.',
            tags: ['Startup Fund', 'Seed Capital'],
            success: '87%',
            time: '30-45 days',
            popular: true
        },
        {
            name: 'PM Employment Generation Programme',
            amount: '₹50L (Mfg) • ₹20L (Service)',
            desc: 'Margin money subsidy of 15-35% for new enterprise creation in manufacturing and service sectors.',
            tags: ['Subsidy Program', 'New Ventures'],
            success: '92%',
            time: '30-45 days',
            popular: false
        },
        {
            name: 'Stand Up India Scheme',
            amount: '₹10L to ₹1Cr bank loans',
            desc: 'Bank loans for SC/ST and women entrepreneurs for greenfield enterprises in manufacturing, services or trading.',
            tags: ['Women Entrepreneurs', 'SC/ST Support'],
            success: '88%',
            time: '25-35 days',
            popular: false
        },
        {
            name: 'Emergency Credit Line Guarantee',
            amount: 'Up to 20% of outstanding credit',
            desc: 'Additional funding support for business revival with 100% guarantee coverage and moratorium options.',
            tags: ['Emergency Credit', 'COVID Relief'],
            success: '94%',
            time: '10-15 days',
            popular: false
        }
    ];

    return (
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
                    {tabs.map((tab, index) => (
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
                    {fundingSchemes.map((scheme, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-400 hover:shadow-lg transition-all duration-200 relative"
                        >
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
                                    <span
                                        key={idx}
                                        className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-lg font-medium"
                                    >
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
                                to="/schemes"
                                className="block text-center bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200"
                            >
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/schemes"
                        className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200 focus-visible:ring-4 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                    >
                        Explore All Government Schemes
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TailoredFundingSection;
