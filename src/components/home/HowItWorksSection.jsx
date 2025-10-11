import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaShieldAlt, FaCheck, FaClock } from 'react-icons/fa';

const HowItWorksSection = () => {
    const steps = [
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
    ];

    const features = [
        { label: 'Fast Approvals', icon: <FaClock /> },
        { label: '95% Success', icon: <FaCheck /> },
        { label: 'No Hidden Fees', icon: <FaShieldAlt /> },
        { label: 'Expert Support', icon: <FaChartLine /> }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-bold text-center mb-4 text-gray-900">
                    How We Secure Your Funding
                </h2>
                <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
                    Our streamlined approach helps businesses get funded in as little as 7 days
                </p>

                {/* Process Image */}
                <div className="flex justify-center">
                    <img
                        src="/business-prediction.jpg"
                        alt="Business planning and funding process"
                        className="w-full max-w-sm"
                    />
                </div>

                {/* Steps Sequence Layout */}
                <div className="relative mb-12">
                    <div className="flex flex-col md:flex-row md:items-stretch gap-6">
                        {steps.map((item, index) => (
                            <div key={index} className="relative flex-1 min-h-full">
                                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 h-full flex flex-col">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                            {item.step}
                                        </div>
                                        <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-lg">
                                            {item.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mr-3">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2 font-medium">Step {item.step} of 4</p>
                                    <p className="text-sm text-gray-700 mb-2 leading-relaxed">{item.desc}</p>
                                    <p className="text-sm text-primary-600 font-semibold mt-auto">{item.subDesc}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 -right-6 w-6 h-2 bg-primary-600"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="flex justify-center mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 max-w-fit">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 rounded-full p-6 text-center flex flex-col items-center justify-center"
                                style={{ width: '160px', height: '160px' }}
                            >
                                <div className="w-12 h-12 bg-primary-50 rounded-full mb-3 flex items-center justify-center text-primary-600 text-xl">
                                    {feature.icon}
                                </div>
                                <p className="font-semibold text-gray-900 text-sm">{feature.label}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* CTA */}
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
    );
};

export default HowItWorksSection;