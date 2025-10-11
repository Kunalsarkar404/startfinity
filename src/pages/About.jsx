import React from 'react';
import { FaCheckCircle, FaUsers, FaLightbulb, FaRocket, FaEye, FaHandshake } from 'react-icons/fa';
import companyProfile from '../data/companyProfile';

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">About STARTFINITY</h1>
                        <p className="text-xl text-gray-100">
                            Let us take care of the formalities while you focus on building your vision!
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                                <FaLightbulb size={32} />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our mission is to empower businesses by simplifying legal, financial, and operational complexities, providing seamless end-to-end solutions that enable entrepreneurs to focus on growth, success, and innovation.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white mb-6">
                                <FaRocket size={32} />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our vision is to be the most trusted and comprehensive business consultancy firm, providing seamless, end-to-end solutions that drive entrepreneurial success and empower businesses to navigate growth with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Story</h2>
                    <div className="max-w-7xl mx-auto bg-white rounded-xl p-6 grid md:grid-cols-[1fr_2fr] gap-8">
                        {/* Image on Left, Horizontally Centered */}
                        <div className="overflow-hidden flex justify-center items-center">
                            <img
                                src="/Business_team.jpg"
                                alt="Professional business team collaborating"
                                className="w-full max-w-sm h-64 md:h-80 object-contain"
                            />
                        </div>
                        {/* Text on Right */}
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                At Startfinity Navigator Private Limited, we provide end-to-end business consultancy services, allowing entrepreneurs and businesses to focus on growth while we handle legal and operational complexities.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Our expert team simplifies incorporation, compliance, taxation, and regulatory filings, ensuring smooth and efficient operations. Whether you’re a startup, small business, or large enterprise, we tailor our solutions to your specific needs.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Committed to accuracy, efficiency, and transparency, we empower businesses by eliminating bureaucratic hurdles and offering strategic guidance, enabling them to navigate the corporate landscape with confidence.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                With over 3+ years of experience, we have onboarded 1000+ startups and provide 50+ services, helping businesses succeed with our comprehensive support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-5 gap-8">
                        {[
                            { title: 'Integrity', description: 'Ensuring transparency and trust', icon: 'FaEye' },
                            { title: 'Excellence', description: 'Delivering high-quality solutions', icon: 'FaCheckCircle' },
                            { title: 'Client-Centricity', description: 'Tailoring services to needs', icon: 'FaUsers' },
                            { title: 'Innovation', description: 'Driving smarter solutions', icon: 'FaLightbulb' },
                            { title: 'Reliability', description: 'Being a dependable partner', icon: 'FaHandshake' }
                        ].map((value, index) => {
                            const getIcon = (iconName) => {
                                switch (iconName) {
                                    case 'FaEye': return <FaEye />;
                                    case 'FaUsers': return <FaUsers />;
                                    case 'FaLightbulb': return <FaLightbulb />;
                                    case 'FaHandshake': return <FaHandshake />;
                                    default: return <FaCheckCircle />;
                                }
                            };

                            return (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                        {getIcon(value.icon)}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Leadership Team</h2>
                    <p className="text-center text-gray-600 mb-8">
                        Meet the experts driving our mission forward
                    </p>
                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: 'Bhadoriya Mohini', position: 'CEO & Founder', experience: '3+ years', expertise: 'Strategic Leadership & Business Development' },
                            { name: 'Himashu', position: 'Legal Team Head', experience: '3+ years', expertise: 'Legal Compliance & Documentation' },
                            { name: 'Sahil Piprotar', position: 'Admin Team Head', experience: '3+ years', expertise: 'Operational Management' },
                            { name: 'Rajesh Rajawat', position: 'Account Team Head', experience: '3+ years', expertise: 'Financial Oversight & Taxation' }
                        ].map((member, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                                <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                                        <FaUsers className="text-4xl text-blue-600" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                                    <p className="text-gray-600 text-sm mb-2">{member.experience} experience</p>
                                    <p className="text-gray-500 text-xs">{member.expertise}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-5xl font-bold mb-2">{companyProfile.statistics.clientsServed}</p>
                            <p className="text-xl">Businesses Funded</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold mb-2">{companyProfile.statistics.fundingFacilitated}</p>
                            <p className="text-xl">Credit Facilitated</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold mb-2">{companyProfile.statistics.successRate}</p>
                            <p className="text-xl">Success Rate</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold mb-2">{companyProfile.statistics.statesCovered}</p>
                            <p className="text-xl">States Covered</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;