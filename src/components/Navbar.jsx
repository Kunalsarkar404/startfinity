import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCog, FaTrophy, FaInfoCircle, FaEnvelope, FaRocket, FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary-600 text-white py-4">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-xs">
                    <div className="flex items-center space-x-2">
                        <span className="font-medium">🎉 New: Genesis Fund ₹490Cr for Tech Startups</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
                        <a href="tel:+919157142657" className="flex items-center hover:text-accent-orange transition-colors">
                            <FaPhone className="mr-1.5 text-xs" /> +91 9157142657
                        </a>
                        <Link to="/contact" className="hover:text-accent-orange transition-colors">
                            Get Instant Callback
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-3">
                        {/* Logo */}
                        <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
                            <img
                                src="/startfinity-logo.png"
                                alt="STARTFINITY Logo"
                                className="h-12 sm:h-14 w-auto"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center justify-center gap-8 flex-1 mx-8">
                            <Link
                                to="/"
                                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 group text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            >
                                <FaHome className="text-sm transition-colors" />
                                <span>Home</span>
                            </Link>
                            <Link
                                to="/services"
                                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 group text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            >
                                <FaCog className="text-sm transition-colors" />
                                <span>Services</span>
                            </Link>
                            <Link
                                to="/success-stories"
                                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 group text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            >
                                <FaTrophy className="text-sm transition-colors" />
                                <span>Success Stories</span>
                            </Link>
                            <Link
                                to="/about"
                                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 group text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            >
                                <FaInfoCircle className="text-sm transition-colors" />
                                <span>About Us</span>
                            </Link>
                            <Link
                                to="/contact"
                                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 group text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            >
                                <FaEnvelope className="text-sm transition-colors" />
                                <span>Contact Us</span>
                            </Link>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <Link
                                to="/apply"
                                className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-sm px-6 py-3 rounded-xl font-semibold text-white focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            >
                                <FaRocket className="text-sm" />
                                <span>Start Funding Journey</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden text-gray-700 focus:outline-none hover:text-primary-600 transition-colors"
                        >
                            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>

                    {/* Mobile Menu with Smooth Animation */}
                    <div
                        className={`lg:hidden border-t border-gray-100 transition-all duration-300 ease-in-out ${isOpen
                            ? 'max-h-screen opacity-100 py-4 overflow-y-auto'
                            : 'max-h-0 opacity-0 overflow-hidden'
                            }`}
                    >
                        <div className="flex flex-col space-y-2">
                            <Link
                                to="/"
                                className="flex items-center space-x-2.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-3 px-4 hover:bg-gray-50 rounded-lg text-sm active:bg-gray-100"
                                onClick={toggleMenu}
                            >
                                <FaHome className="text-sm" />
                                <span>Home</span>
                            </Link>
                            <Link
                                to="/services"
                                className="flex items-center space-x-2.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-3 px-4 hover:bg-gray-50 rounded-lg text-sm active:bg-gray-100"
                                onClick={toggleMenu}
                            >
                                <FaCog className="text-sm" />
                                <span>Services</span>
                            </Link>
                            <Link
                                to="/success-stories"
                                className="flex items-center space-x-2.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-3 px-4 hover:bg-gray-50 rounded-lg text-sm active:bg-gray-100"
                                onClick={toggleMenu}
                            >
                                <FaTrophy className="text-sm" />
                                <span>Success Stories</span>
                            </Link>
                            <Link
                                to="/about"
                                className="flex items-center space-x-2.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-3 px-4 hover:bg-gray-50 rounded-lg text-sm active:bg-gray-100"
                                onClick={toggleMenu}
                            >
                                <FaInfoCircle className="text-sm" />
                                <span>About Us</span>
                            </Link>
                            <Link
                                to="/contact"
                                className="flex items-center space-x-2.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-3 px-4 hover:bg-gray-50 rounded-lg text-sm active:bg-gray-100"
                                onClick={toggleMenu}
                            >
                                <FaEnvelope className="text-sm" />
                                <span>Contact Us</span>
                            </Link>
                            <Link
                                to="/apply"
                                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-center shadow-md mt-3 text-sm px-6 py-3 rounded-xl text-white"
                                onClick={toggleMenu}
                            >
                                <FaRocket className="text-sm" />
                                <span>Start Funding Journey</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;