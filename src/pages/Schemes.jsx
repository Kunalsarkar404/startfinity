import React, { useState } from 'react';
import { FaMoneyBillWave, FaCertificate, FaIndustry, FaLightbulb, FaShieldAlt, FaCheck, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

const Schemes = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');

    const schemeCategories = [
        { id: 'all', name: 'All Schemes', icon: FaMoneyBillWave },
        { id: 'loans', name: 'Loans & Credit', icon: FaMoneyBillWave },
        { id: 'grants', name: 'Grants & Subsidies', icon: FaCertificate },
        { id: 'technology', name: 'Technology Development', icon: FaLightbulb },
        { id: 'manufacturing', name: 'Manufacturing Support', icon: FaIndustry },
        { id: 'guarantee', name: 'Credit Guarantee', icon: FaShieldAlt }
    ];

    const schemeTypes = [
        { id: 'all', name: 'All Types' },
        { id: 'central', name: 'Central Government' },
        { id: 'state', name: 'State Government' },
        { id: 'bank', name: 'Banking Schemes' }
    ];

    const schemes = [
        // MUDRA Schemes
        {
            id: 1,
            name: 'Pradhan Mantri MUDRA Yojana (PMMY)',
            shortName: 'MUDRA Loan',
            category: 'loans',
            type: 'central',
            amount: '₹50K - ₹20L',
            interest: '8.5% - 12%',
            tenure: '1-7 years',
            description: 'Collateral-free loans for micro and small enterprises covering manufacturing, trading, and service activities.',
            features: ['No collateral required', 'Quick processing', 'Flexible repayment', 'Multiple lending partners'],
            eligibility: ['Non-corporate, non-farm enterprises', 'Valid business plan', 'Good credit history'],
            website: 'https://www.mudra.org.in',
            applyUrl: 'https://udyamimitra.in'
        },
        // Credit Guarantee Schemes
        {
            id: 2,
            name: 'Credit Guarantee Fund Trust for MSE (CGTMSE)',
            shortName: 'CGTMSE',
            category: 'guarantee',
            type: 'central',
            amount: 'Up to ₹10 Cr',
            interest: 'Bank rates apply',
            tenure: 'As per bank terms',
            description: 'Provides guarantee coverage for collateral-free credit facilities to micro and small enterprises.',
            features: ['85-90% guarantee coverage', 'No collateral/third party guarantee', 'Reduced documentation', 'Special benefits for women, SC/ST entrepreneurs'],
            eligibility: ['Micro and Small Enterprises', 'Manufacturing and service activities', 'New and existing enterprises'],
            benefits: ['Women enterprises: 90% coverage', 'SC/ST enterprises: Special benefits', 'ZED certified units: Additional benefits'],
            website: 'https://www.cgtmse.in',
            applyUrl: 'https://www.cgtmse.in'
        },
        // Startup Schemes
        {
            id: 3,
            name: 'Startup India Seed Fund Scheme (SISFS)',
            shortName: 'Seed Fund',
            category: 'grants',
            type: 'central',
            amount: 'Up to ₹50L',
            interest: 'Grant/Equity',
            tenure: 'Milestone based',
            description: 'Provides financial assistance to startups for proof of concept, prototype development, product trials, market entry and commercialization.',
            features: ['Proof of concept support', 'Prototype development', 'Market validation', 'Product launch support'],
            eligibility: ['DPIIT recognized startups', 'Incorporated within 2 years', 'Working on innovative solutions'],
            website: 'https://seedfund.startupindia.gov.in',
            applyUrl: 'https://seedfund.startupindia.gov.in'
        },
        // Technology Development
        {
            id: 4,
            name: 'Technology Development Fund (TDF)',
            shortName: 'TDF Scheme',
            category: 'technology',
            type: 'central',
            amount: '₹25L - ₹5Cr',
            interest: '6% - 8%',
            tenure: '5-10 years',
            description: 'Soft loan scheme for technology development and upgradation in MSMEs.',
            features: ['Technology upgradation', 'R&D support', 'Commercialization assistance', 'Flexible repayment'],
            eligibility: ['Existing MSMEs', 'Technology-based projects', 'Innovation potential'],
            website: 'https://www.sidbi.in',
            applyUrl: 'https://www.sidbi.in'
        },
        // Manufacturing Support
        {
            id: 5,
            name: 'Production Linked Incentive (PLI) Scheme',
            shortName: 'PLI',
            category: 'manufacturing',
            type: 'central',
            amount: 'Based on production',
            interest: 'Incentive based',
            tenure: '5 years',
            description: 'Incentive scheme for boosting domestic manufacturing and attracting investments in mobile phone manufacturing, pharmaceutical, automotive, textiles, and other sectors.',
            features: ['Production-based incentives', 'Multiple sectors covered', 'Export promotion', 'Job creation'],
            eligibility: ['Manufacturing companies', 'Minimum investment thresholds', 'Production targets'],
            sectors: ['Mobile & Components', 'Pharmaceuticals', 'Automobiles', 'Textiles', 'Electronics', 'Solar PV'],
            website: 'https://dpiit.gov.in',
            applyUrl: 'https://dpiit.gov.in'
        },
        // ASPIRE Scheme
        {
            id: 6,
            name: 'A Scheme for Promotion of Innovation, Rural Industry and Entrepreneurship (ASPIRE)',
            shortName: 'ASPIRE',
            category: 'grants',
            type: 'central',
            amount: '₹50L - ₹15Cr',
            interest: 'Grant based',
            tenure: 'Project based',
            description: 'Promotes innovation and rural entrepreneurship through Livelihood Business Incubators (LBI) and Technology Business Incubators (TBI).',
            features: ['Rural entrepreneurship', 'Innovation support', 'Incubation facilities', 'Skill development'],
            eligibility: ['Rural entrepreneurs', 'Innovative startups', 'Livelihood focused businesses'],
            website: 'https://msme.gov.in',
            applyUrl: 'https://msme.gov.in'
        },
        // Stand Up India
        {
            id: 7,
            name: 'Stand Up India Scheme',
            shortName: 'Stand Up India',
            category: 'loans',
            type: 'central',
            amount: '₹10L - ₹1Cr',
            interest: 'Base rate + 3%',
            tenure: '7 years',
            description: 'Facilitates bank loans for setting up greenfield enterprises by SC/ST and women entrepreneurs.',
            features: ['Dedicated for women & SC/ST', 'Greenfield projects', 'Handholding support', 'Credit guarantee'],
            eligibility: ['Women entrepreneurs', 'SC/ST entrepreneurs', '18+ years age', 'First-time entrepreneurs'],
            website: 'https://www.standupmitra.in',
            applyUrl: 'https://www.standupmitra.in'
        },
        // PM Vishwakarma
        {
            id: 8,
            name: 'PM Vishwakarma Scheme',
            shortName: 'PM Vishwakarma',
            category: 'loans',
            type: 'central',
            amount: '₹1L - ₹3L',
            interest: '5%',
            tenure: '18-30 months',
            description: 'Provides collateral-free credit support to artisans and craftspeople engaged in 18 traditional trades.',
            features: ['Traditional artisans support', 'Skill development', 'Modern tools', 'Market linkage'],
            eligibility: ['Traditional artisans', '18 specific trades', 'Age 18+ years'],
            trades: ['Carpenter', 'Boat Maker', 'Armourer', 'Blacksmith', 'Hammer & Toolkit Maker', 'Locksmith', 'Goldsmith', 'Potter', 'Sculptor', 'Stone Breaker', 'Weaver', 'Basket/Mat/Broom/Fishing Net Maker', 'Doll & Toy Maker', 'Barber', 'Garland Maker', 'Washerman', 'Tailor', 'Cobbler'],
            website: 'https://pmvishwakarma.gov.in',
            applyUrl: 'https://pmvishwakarma.gov.in'
        },
        // RAMP Scheme
        {
            id: 9,
            name: 'Raising and Accelerating MSME Performance (RAMP)',
            shortName: 'RAMP',
            category: 'grants',
            type: 'central',
            amount: 'State specific',
            interest: 'Grant based',
            tenure: '5 years',
            description: 'World Bank assisted scheme for improving access to market and credit, strengthening institutions and governance at the Centre and State level.',
            features: ['Market access improvement', 'Credit facilitation', 'Institutional strengthening', 'Digital transformation'],
            eligibility: ['MSMEs in participating states', 'Technology adoption', 'Market expansion'],
            website: 'https://msme.gov.in',
            applyUrl: 'https://msme.gov.in'
        },
        // Emergency Credit Line Guarantee Scheme
        {
            id: 10,
            name: 'Emergency Credit Line Guarantee Scheme (ECLGS)',
            shortName: 'ECLGS',
            category: 'guarantee',
            type: 'central',
            amount: 'Based on turnover',
            interest: 'Bank rates',
            tenure: '4-6 years',
            description: 'Provides guaranteed emergency credit funding to MSMEs, business enterprises, MUDRA borrowers, and individual loans.',
            features: ['100% guarantee cover', 'Emergency funding', 'Moratorium period', 'Quick disbursement'],
            eligibility: ['Existing borrowers', 'Account should be standard', 'MSME classification'],
            website: 'https://www.cgtmse.in',
            applyUrl: 'https://www.cgtmse.in'
        }
    ];

    const filteredSchemes = schemes.filter(scheme => {
        const categoryMatch = selectedCategory === 'all' || scheme.category === selectedCategory;
        const typeMatch = selectedType === 'all' || scheme.type === selectedType;
        return categoryMatch && typeMatch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">Government Funding Schemes</h1>
                        <p className="text-xl text-gray-100 mb-8">
                            Comprehensive list of funding schemes for MSMEs, startups, and entrepreneurs across India
                        </p>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="text-2xl font-bold">{schemes.length}+</div>
                                <div className="text-sm">Active Schemes</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="text-2xl font-bold">₹50K+</div>
                                <div className="text-sm">Funding Range</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="text-2xl font-bold">10Cr</div>
                                <div className="text-sm">Maximum Amount</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="text-2xl font-bold">48hrs</div>
                                <div className="text-sm">Quick Approval</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-8 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex items-center gap-4">
                            <FaFilter className="text-gray-600" />
                            <span className="font-semibold text-gray-800">Filter Schemes:</span>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {schemeCategories.map(category => {
                                const Icon = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Icon size={14} />
                                        {category.name}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Type Filter */}
                        <div className="flex flex-wrap gap-2">
                            {schemeTypes.map(type => (
                                <button
                                    key={type.id}
                                    onClick={() => setSelectedType(type.id)}
                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${selectedType === type.id
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {type.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Schemes Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredSchemes.map(scheme => (
                            <div key={scheme.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                                {/* Scheme Header */}
                                <div className="p-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold leading-tight">{scheme.shortName}</h3>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${scheme.type === 'central' ? 'bg-white/20' : 'bg-white/30'
                                            }`}>
                                            {scheme.type.charAt(0).toUpperCase() + scheme.type.slice(1)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-white/90 mb-4">{scheme.description}</p>

                                    {/* Key Metrics */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white/10 rounded-lg p-2">
                                            <div className="text-xs text-white/80">Amount</div>
                                            <div className="font-bold text-sm">{scheme.amount}</div>
                                        </div>
                                        <div className="bg-white/10 rounded-lg p-2">
                                            <div className="text-xs text-white/80">Interest/Terms</div>
                                            <div className="font-bold text-sm">{scheme.interest}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Scheme Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Features */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
                                        <div className="space-y-2">
                                            {scheme.features.slice(0, 3).map((feature, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <FaCheck className="text-green-500 mt-0.5 flex-shrink-0" size={12} />
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sub-schemes or Special Info */}
                                    {scheme.subSchemes && (
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-800 mb-2">Categories</h4>
                                            <div className="space-y-1">
                                                {scheme.subSchemes.slice(0, 2).map((sub, index) => (
                                                    <div key={index} className="text-xs bg-gray-50 rounded p-2">
                                                        <span className="font-medium">{sub.name}:</span> {sub.amount}
                                                    </div>
                                                ))}
                                                {scheme.subSchemes.length > 2 && (
                                                    <div className="text-xs text-gray-500">+{scheme.subSchemes.length - 2} more categories</div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Eligibility */}
                                    <div className="mb-4 flex-1">
                                        <h4 className="font-semibold text-gray-800 mb-2">Eligibility</h4>
                                        <div className="text-sm text-gray-600">
                                            {scheme.eligibility.slice(0, 2).join(', ')}
                                            {scheme.eligibility.length > 2 && '...'}
                                        </div>
                                    </div>

                                    {/* Website Link Only */}
                                    <div className="mt-auto">
                                        <a
                                            href={scheme.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full text-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm flex items-center justify-center gap-2"
                                        >
                                            Learn More
                                            <FaExternalLinkAlt size={12} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredSchemes.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 mb-4">
                                <FaMoneyBillWave size={48} className="mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No schemes found</h3>
                            <p className="text-gray-500">Try adjusting your filters to see more schemes.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto text-white">
                        <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Scheme?</h2>
                        <p className="text-xl mb-8 text-gray-100">
                            Our experts can help you identify the best funding options for your business
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="/apply"
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                            >
                                Get Expert Consultation
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                Contact Our Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Schemes;