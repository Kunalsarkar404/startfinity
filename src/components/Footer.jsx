import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { companyProfile } from '../data/companyProfile';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="mb-4">
                            <img
                                src="/startfinity-logo.png"
                                alt="STARTFINITY Logo"
                                className="h-16 w-auto"
                            />
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Empowering entrepreneurs with seamless access to funding, expert guidance, and innovative business solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md p-1" aria-label="Facebook">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md p-1" aria-label="Twitter">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md p-1" aria-label="LinkedIn">
                                <FaLinkedinIn size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md p-1" aria-label="Instagram">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">About Us</Link></li>
                            <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Blogs</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Funding Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Funding Services</h4>
                        <ul className="space-y-3">
                            <li><Link to="/services/grants" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Grants</Link></li>
                            <li><Link to="/services/loans" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Loans</Link></li>
                            <li><Link to="/services/nbfc" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">NBFC Solutions</Link></li>
                            <li><Link to="/services/registration" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Business Registration</Link></li>
                            <li><Link to="/services/certifications" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Certifications & IP</Link></li>
                        </ul>
                    </div>

                    {/* Consultancy */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Consultancy</h4>
                        <ul className="space-y-3">
                            <li><Link to="/services/ma-advisory" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">M&A Advisory</Link></li>
                            <li><Link to="/services/marketing" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Marketing & Branding</Link></li>
                            <li><Link to="/services/legal" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Legal Consultancy</Link></li>
                            <li><Link to="/services/growth" className="text-gray-300 hover:text-white transition-colors duration-200 inline-block focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Growth Strategy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h5 className="font-semibold mb-3 text-white">Phone</h5>
                            <a href={`tel:${companyProfile.company.phone.replace(/[^0-9]/g, '')}`} className="text-gray-300 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                                {companyProfile.company.phone}
                            </a>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-3 text-white">Email</h5>
                            <a href={`mailto:${companyProfile.company.email}`} className="text-gray-300 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                                {companyProfile.company.email}
                            </a>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-3 text-white">Address</h5>
                            <p className="text-gray-300 leading-relaxed">{companyProfile.offices[0].address}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-300 text-sm">
                            © 2025 STARTFINITY Financial Services. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Privacy Policy</Link>
                            <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Terms of Service</Link>
                            <Link to="/refund" className="text-gray-300 hover:text-white text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Refund Policy</Link>
                            <Link to="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
