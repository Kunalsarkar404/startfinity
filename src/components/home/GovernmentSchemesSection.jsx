import React from 'react';
import { Link } from 'react-router-dom';

const GovernmentSchemesSection = () => {
    const schemes = [
        { name: 'NAIFF', desc: 'National Agriculture Infrastructure Financing Facility' },
        { name: 'NGO Elevation Program', desc: 'Empowering NGOs with funding solutions' },
        { name: 'SC-ST-OBC Scheme', desc: 'Special schemes for underrepresented communities' },
        { name: 'SEED Fund', desc: 'Startup Early Stage Development Fund' },
        { name: 'Tax Exemption', desc: 'Tax benefits for eligible businesses' },
        { name: 'Venture Capital', desc: 'VC funding for high-growth startups' }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-bold text-center mb-4">
                    Top Government Schemes
                </h2>
                <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
                    Access 50+ government-backed funding schemes with expert guidance and quick approvals
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {schemes.map((scheme, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all duration-200"
                        >
                            <div className="h-24 bg-primary-600"></div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2 text-gray-900">{scheme.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{scheme.desc}</p>
                                <Link
                                    to={`/schemes/${scheme.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center"
                                >
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
    );
};

export default GovernmentSchemesSection;
