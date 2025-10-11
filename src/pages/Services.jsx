import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaMoneyBillWave, FaCertificate, FaBalanceScale } from 'react-icons/fa';
import { companyProfile } from '../data/companyProfile';

const Services = () => {
    const services = [
        {
            icon: <FaMoneyBillWave />,
            title: 'Business Loans',
            description: 'Comprehensive lending solutions for all business needs',
            color: 'blue',
            features: companyProfile.services[0].subcategories,
            link: '/services/funding',
            image: '/fund-raising.jpg'
        },
        {
            icon: <FaCertificate />,
            title: 'Government Schemes',
            description: 'Access to various government funding and support schemes',
            color: 'purple',
            features: companyProfile.services[1].subcategories,
            link: '/services/schemes',
            image: '/business-prediction.jpg'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Business Registration',
            description: 'Complete support for company registration and compliance',
            color: 'green',
            features: companyProfile.services[2].subcategories,
            link: '/services/registration',
            image: '/business-pitching.jpg'
        },
        {
            icon: <FaBalanceScale />,
            title: 'Financial Advisory',
            description: 'Strategic financial consulting and advisory services',
            color: 'indigo',
            features: companyProfile.services[3].subcategories,
            link: '/services/advisory',
            image: '/women-fund-raising.jpg'
        }
    ];

    const colorClasses = {
        blue: { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600' },
        purple: { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600' },
        green: { bg: 'from-green-500 to-green-600', text: 'text-green-600' },
        indigo: { bg: 'from-indigo-500 to-indigo-600', text: 'text-indigo-600' }
    };

    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl text-gray-100">
                            Comprehensive business solutions tailored for MSME success
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                {/* Service Image */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={`${service.title} illustration`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className={`p-8 bg-gradient-to-r ${colorClasses[service.color].bg} text-white`}>
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-100">{service.description}</p>
                                </div>
                                <div className="p-8">
                                    <h4 className="font-bold text-lg mb-4">What we offer:</h4>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <FaCheckCircle className={`mr-3 ${colorClasses[service.color].text}`} />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to={service.link} className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${colorClasses[service.color].bg} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Consultation', desc: 'Free consultation to understand your business needs' },
                            { step: '02', title: 'Assessment', desc: 'Detailed analysis of eligibility and solutions' },
                            { step: '03', title: 'Application', desc: 'We handle all paperwork and applications' },
                            { step: '04', title: 'Success', desc: 'Get approved funding and ongoing support' }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Choose STARTFINITY?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: 'Expert Team', desc: 'Experienced professionals', stat: '150+' },
                            { title: 'Fast Processing', desc: 'Quick turnaround times', stat: companyProfile.statistics.avgProcessingTime },
                            { title: 'Success Rate', desc: 'High approval rate', stat: companyProfile.statistics.successRate },
                            { title: 'Pan India', desc: 'Coverage across India', stat: companyProfile.statistics.statesCovered }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                                <p className="text-4xl font-bold text-blue-600 mb-2">{item.stat}</p>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
                    <p className="text-xl mb-8 text-gray-100">
                        Let our experts help you find the perfect funding solution
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/apply" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                            Apply Now
                        </Link>
                        <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition">
                            Get Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
