import React, { useState, useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';

// Number Counter Component
const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [started, end, duration]);

    return (
        <span ref={countRef}>
            {started ? count.toLocaleString('en-IN') + suffix : `0${suffix}`}
        </span>
    );
};

const PartnersAndImpactSection = () => {
    const partners = [
        'SIDBI', 'StartupIndia', 'DPIIT', 'SBI',
        'HDFC Bank', 'MUDRA', 'NABARD', 'Bank of Baroda'
    ];

    const certifications = [
        { title: 'DPIIT Recognition', desc: 'Officially recognized by DPIIT' },
        { title: 'ISO 9001:2015', desc: 'Quality management certified' },
        { title: 'GeM Registered', desc: 'Government e-Marketplace vendor' },
        { title: 'Top 100 Fintech', desc: 'Leading emerging fintech' }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 lg:px-8">

                {/* <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Strategic Partners
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Collaborating with leaders to bring you the best funding solutions
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8 max-w-fit">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border-2 border-gray-100 p-6 flex items-center justify-center group cursor-pointer hover:border-primary-200 transition-all duration-200"
                            >
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-primary-50 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-primary-100 transition-colors group-hover:scale-110 transform duration-200">
                                        <span className="text-2xl font-extrabold text-primary-600">
                                            {partner.charAt(0)}
                                        </span>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-700">{partner}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h3
                        className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8"
                    >
                        Certifications & Recognitions
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border-2 border-gray-100 p-6 text-center group hover:border-green-200 transition-all duration-200 transform hover:scale-[1.02]"
                            >
                                <div className="w-16 h-16 bg-green-50 rounded-xl mx-auto mb-5 flex items-center justify-center group-hover:bg-green-100 transition-colors group-hover:rotate-12 transform duration-300">
                                    <FaCheck className="text-2xl text-green-600" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-gray-900 leading-snug">
                                    {cert.title}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Impact Stats */}

                <h3 className="text-xl md:text-4xl font-bold mb-8 text-center">
                    Our Impact
                </h3>
                <div className="bg-primary-600 rounded-2xl p-12 text-white">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                            <p
                                className="text-3xl md:text-4xl font-extrabold mb-4 leading-none"
                            >
                                ₹<CountUp end={500} duration={2000} suffix=" Crore+" />
                            </p>
                            <p className="text-lg text-white/90 font-medium leading-relaxed">
                                Facilitated in MSME funding through strategic partnerships
                            </p>
                        </div>
                        <div className="text-center">
                            <p
                                className="text-3xl md:text-4xl font-extrabold mb-4 leading-none"
                            >
                                <CountUp end={200} duration={2000} suffix="+" />
                            </p>
                            <p className="text-lg text-white/90 font-medium leading-relaxed">
                                Businesses trusted us across India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersAndImpactSection;