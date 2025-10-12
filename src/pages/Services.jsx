import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaMoneyBillWave, FaCertificate, FaBalanceScale, FaArrowRight, FaStar, FaUsers, FaClock, FaShieldVirus, FaBuilding, FaFileAlt, FaCode } from 'react-icons/fa';
import { companyProfile } from '../data/companyProfile';

const Services = () => {
    const services = [
        {
            icon: <FaCertificate className="text-3xl" />,
            title: 'Government Schemes',
            description: 'Access to various government funding and support schemes with expert guidance',
            features: companyProfile.services[1].subcategories,
            link: '/schemes',
            badge: 'Government Approved',
            priority: 'high'
        },
        {
            icon: <FaBuilding className="text-3xl" />,
            title: 'Company Registration',
            description: 'Complete company incorporation with ROC filing and comprehensive documentation support',
            features: [
                'Private Limited Company Setup',
                'LLP Registration Services',
                'Sole Proprietorship Formation',
                'Partnership Firm Registration',
                'ROC Filing & Compliance',
                'Digital Signature Certificate',
                'Company Name Approval',
                'Share Certificate Issuance'
            ],
            link: '/contact',
            badge: 'High Demand',
            priority: 'high'
        },
        {
            icon: <FaBalanceScale className="text-3xl" />,
            title: 'Financial Advisory',
            description: 'Strategic financial consulting and advisory services from certified experts',
            features: companyProfile.services[3].subcategories,
            link: '/contact',
            badge: 'Expert Led',
            priority: 'medium'
        },
        {
            icon: <FaCode className="text-3xl" />,
            title: 'Software Development',
            description: 'Custom software solutions to digitize and scale your business operations efficiently',
            features: [
                'Business Website Development',
                'E-commerce Platform Setup',
                'Mobile App Development',
                'CRM System Implementation',
                'ERP Solutions',
                'Digital Payment Integration',
                'Cloud-based Solutions',
                'Technical Support & Maintenance'
            ],
            link: '/contact',
            badge: 'Digital Transformation',
            priority: 'medium'
        },
        {
            icon: <FaMoneyBillWave className="text-3xl" />,
            title: 'Business Loans',
            description: 'Comprehensive lending solutions for all business needs with competitive interest rates',
            features: companyProfile.services[0].subcategories,
            link: '/schemes',
            badge: 'Most Popular',
            priority: 'high'
        },
        {
            icon: <FaCertificate className="text-3xl" />,
            title: 'GST Certificate',
            description: 'Complete GST registration and compliance services for seamless business operations',
            features: [
                'GST Registration Process',
                'Monthly GST Return Filing',
                'Annual GST Compliance',
                'Input Tax Credit Optimization',
                'GST Audit Support',
                'Invoice Management System',
                'Tax Planning & Advisory',
                'Penalty & Notice Handling'
            ],
            link: '/contact',
            badge: 'Essential Service',
            priority: 'high'
        },
        {
            icon: <FaFileAlt className="text-3xl" />,
            title: 'Company Compliances',
            description: 'End-to-end compliance management ensuring your business stays legally compliant',
            features: [
                'Annual Filing & Returns',
                'Board Resolution Drafting',
                'Statutory Audit Coordination',
                'License Renewal Services',
                'Legal Documentation',
                'Regulatory Advisory',
                'Compliance Calendar Management',
                'Government Liaison Support'
            ],
            link: '/contact',
            badge: 'Ongoing Support',
            priority: 'medium'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section remains unchanged */}
            <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPgo=')] opacity-20"></div>
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
                            <FaStar className="mr-2 text-yellow-400" />
                            <span className="text-sm font-medium">Government Recognized Services</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Professional <span className="text-blue-400">Business Services</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive solutions designed to accelerate your business growth with government-backed schemes and expert financial guidance
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <FaShieldVirus className="mr-2 text-green-400" />
                                <span className="text-sm">100% Secure</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <FaClock className="mr-2 text-blue-400" />
                                <span className="text-sm">48hr Processing</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <FaUsers className="mr-2 text-purple-400" />
                                <span className="text-sm">25,000+ Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Services Grid Section with Proper Overlay Effect */}
            <section className="py-20 -mt-12 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4 border-primary-600 hover:-translate-y-2 flex flex-col relative min-h-[420px]"
                            >
                                {/* Main Content - No Get Started Button */}
                                <div className="p-8 text-center relative z-10 flex flex-col h-full">
                                    {/* Icon with White Background */}
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-primary-600">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Service Badge */}
                                    <div className="mb-4">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.priority === 'high'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-blue-100 text-blue-800'
                                            }`}>
                                            {service.badge}
                                        </span>
                                    </div>

                                    {/* Title and Description */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                                        {service.description}
                                    </p>

                                    {/* Features - Show top 4 */}
                                    <div className="space-y-2 mb-6 flex-grow">
                                        {service.features.slice(0, 4).map((feature, i) => (
                                            <div key={i} className="flex items-start text-left text-xs text-gray-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                                                <FaCheckCircle className="mr-2 text-primary-600 text-xs mt-0.5 flex-shrink-0" />
                                                <span className="line-clamp-1">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Overlay Effect - Centered Start Now Button */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-800/95 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-white text-center p-8 z-20">
                                    {/* White Icon Background on Hover */}
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-primary-600">
                                            {service.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-primary-100 text-sm mb-6 leading-relaxed max-w-sm">
                                        {service.description}
                                    </p>

                                    {/* Key Features on Hover */}
                                    <div className="space-y-2 mb-6 flex-grow">
                                        {service.features.slice(0, 4).map((feature, i) => (
                                            <div key={i} className="flex items-start text-left text-xs text-white opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                                                <FaCheckCircle className="mr-2 text-primary-200 text-xs mt-0.5 flex-shrink-0" />
                                                <span className="line-clamp-1">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Centered Start Now Button */}
                                    <Link
                                        to={service.link}
                                        className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all duration-300 shadow-lg transform hover:scale-105"
                                    >
                                        <span>Start Now</span>
                                        <FaArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section remains unchanged */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Streamlined Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A systematic approach ensuring efficient service delivery and maximum success rates
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                step: '01',
                                title: 'Initial Consultation',
                                desc: 'Free expert consultation to understand your specific business requirements and goals',
                                icon: <FaUsers className="text-2xl" />
                            },
                            {
                                step: '02',
                                title: 'Detailed Assessment',
                                desc: 'Comprehensive analysis of eligibility criteria and best-fit solution identification',
                                icon: <FaCheckCircle className="text-2xl" />
                            },
                            {
                                step: '03',
                                title: 'Application Processing',
                                desc: 'Complete handling of documentation, applications, and regulatory compliance',
                                icon: <FaCertificate className="text-2xl" />
                            },
                            {
                                step: '04',
                                title: 'Success & Support',
                                desc: 'Approval achievement with ongoing support and business advisory services',
                                icon: <FaStar className="text-2xl" />
                            }
                        ].map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white font-bold text-lg mb-6 shadow-lg mx-auto">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm text-center">{step.desc}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section remains unchanged */}
            <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Choose STARTFINITY?</h2>
                        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                            Trusted by thousands of businesses across India for reliable and result-oriented services
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: 'Expert Professionals',
                                desc: 'Certified consultants and advisors',
                                stat: '150+',
                                icon: <FaUsers className="text-3xl" />
                            },
                            {
                                title: 'Quick Processing',
                                desc: 'Average application processing time',
                                stat: companyProfile.statistics.avgProcessingTime,
                                icon: <FaClock className="text-3xl" />
                            },
                            {
                                title: 'Success Rate',
                                desc: 'Application approval success rate',
                                stat: companyProfile.statistics.successRate,
                                icon: <FaStar className="text-3xl" />
                            },
                            {
                                title: 'National Presence',
                                desc: 'States and territories covered',
                                stat: companyProfile.statistics.statesCovered,
                                icon: <FaShieldVirus className="text-3xl" />
                            }
                        ].map((item, index) => (
                            <div key={index} className="group">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center h-[280px] flex flex-col">
                                    <div className="text-primary-300 mb-4 flex justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <p className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary-200 to-white bg-clip-text text-transparent overflow-hidden text-ellipsis whitespace-nowrap">
                                        {item.stat}
                                    </p>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-primary-200 text-sm leading-relaxed flex-grow line-clamp-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section remains unchanged */}
            <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                            Join thousands of successful entrepreneurs who have accelerated their growth with our expert services
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link
                                to="/apply"
                                className="group inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <span>Start Your Application</span>
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/contact"
                                className="group inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Get Expert Consultation</span>
                                <FaUsers className="ml-2 group-hover:scale-110 transition-transform duration-300" />
                            </Link>
                        </div>
                        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
                            {[
                                { icon: <FaShieldVirus className="text-green-400" />, text: 'SSL Secured' },
                                { icon: <FaCertificate className="text-yellow-400" />, text: 'Government Certified' },
                                { icon: <FaStar className="text-yellow-400" />, text: '5-Star Rated' }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[150px] justify-center"
                                >
                                    {item.icon}
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;