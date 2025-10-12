import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className="py-4">
            {/* Professional Government Service Heading */}
            <h1 className="font-extrabold mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.1' }}>
                Accelerate Your Business Growth with
                <span className="block text-primary-200 mt-1">Government-Backed Funding</span>
            </h1>
            <p className="mb-3 text-primary-100 font-medium text-xl">
                Expert Guidance • Guaranteed Results • Nationwide Support
            </p>
            <p className="mb-6 text-primary-100 font-medium text-base">
                Access ₹5L to ₹10Cr through verified government schemes and institutional funding
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                    { number: '48hrs', label: 'Processing' },
                    { number: '₹120Cr+', label: 'Disbursed' },
                    { number: '95%', label: 'Success Rate' },
                    { number: '28+', label: 'States Covered' }
                ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 hover:bg-white/15 transition-all text-center">
                        <p className="text-xl font-bold mb-0.5">{stat.number}</p>
                        <p className="text-xs text-primary-100">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
                <Link
                    to="/apply"
                    className="btn-ripple inline-flex items-center justify-center px-8 py-4 text-base bg-white text-primary-700 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700"
                >
                    Start Application
                    <FaArrowRight className="ml-2" />
                </Link>
                <Link
                    to="/schemes"
                    className="btn-ripple inline-flex items-center justify-center px-8 py-4 text-base bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700"
                >
                    Explore Schemes
                </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                    <FaCheck className="text-accent-green mr-2 flex-shrink-0" size={16} />
                    <span className="font-medium text-sm">Zero Collateral</span>
                </div>
                <div className="flex items-center">
                    <FaCheck className="text-accent-green mr-2 flex-shrink-0" size={16} />
                    <span className="font-medium text-sm">Minimal Documentation</span>
                </div>
                <div className="flex items-center">
                    <FaCheck className="text-accent-green mr-2 flex-shrink-0" size={16} />
                    <span className="font-medium text-sm">Lower Interest Rates</span>
                </div>
                <div className="flex items-center">
                    <FaCheck className="text-accent-green mr-2 flex-shrink-0" size={16} />
                    <span className="font-medium text-sm">Expert Support</span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
