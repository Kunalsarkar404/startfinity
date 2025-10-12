import React from 'react';
import { FaRocket, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MSMESuccessSection = () => {
    const stats = [
        { value: '477K+', label: 'MSMEs Registered', sublabel: 'On Udyam Portal' },
        { value: '₹500Cr+', label: 'Credit Facilitated', sublabel: 'Since 2020' },
        { value: '95%', label: 'Success Rate', sublabel: 'Approval Rate' },
        { value: '28/36', label: 'Pan India Coverage', sublabel: 'States & UTs' }
    ];

    const topStates = [
        { state: 'Maharashtra', count: '82L+', code: 'MH' },
        { state: 'Tamil Nadu', count: '49L+', code: 'TN' },
        { state: 'Gujarat', count: '41L+', code: 'GJ' },
        { state: 'Uttar Pradesh', count: '39L+', code: 'UP' },
        { state: 'Karnataka', count: '34L+', code: 'KA' },
        { state: 'West Bengal', count: '25L+', code: 'WB' },
        { state: 'Rajasthan', count: '22L+', code: 'RJ' },

    ];

    const sectors = [
        { name: 'Manufacturing', percentage: 31, icon: FaRocket, color: '#2563eb' },
        { name: 'Trading', percentage: 36, icon: FaChartLine, color: '#1d4ed8' },
        { name: 'Services', percentage: 33, icon: FaShieldAlt, color: '#1e40af' }
    ];

    const governmentSupport = [
        { value: '₹4.14L Cr', label: 'MUDRA loans' },
        { value: '₹7,593 Cr', label: 'SRI Fund invested' },
        { value: '200+', label: 'RAMP proposals' },
        { value: '20.5%', label: 'Women-owned' }
    ];

    // Pie chart data
    const pieData = {
        labels: sectors.map(sector => sector.name),
        datasets: [
            {
                data: sectors.map(sector => sector.percentage),
                backgroundColor: sectors.map(sector => sector.color),
                hoverOffset: 20,
            },
        ],
    };

    const pieOptions = {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                    },
                    padding: 20,
                    boxWidth: 20,
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${context.raw}%`,
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Driving MSME Success Across India
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        4.77 crore MSMEs registered on Udyam portal, transforming India's economic landscape
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-primary-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200"
                        >
                            <p className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">{stat.value}</p>
                            <p className="text-base font-semibold text-gray-700 mb-1">{stat.label}</p>
                            <p className="text-sm text-gray-500">{stat.sublabel}</p>
                        </div>
                    ))}
                </div>

                {/* Pan India and Top States Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 items-stretch">
                    {/* Pan India Presence (Unchanged) */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                            Pan-India Presence
                        </h3>
                        <div className="flex justify-center">
                            <img
                                src="/state-wise-tech-startups.webp"
                                alt="India Map showing MSME distribution across states"
                                className="w-full max-w-md h-auto rounded-lg"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600 mb-2">📍 Startups Across India</p>
                            <div className="flex justify-center items-center space-x-4 text-xs">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-primary-600 rounded mr-1"></div>
                                    <span>High Density States</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-primary-300 rounded mr-1"></div>
                                    <span>Emerging States</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Top MSME States (Height Matched) */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                            Top MSME States
                        </h3>
                        <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                            {topStates.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:border-primary-200 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                                    title={`${item.state} - ${item.count} MSMEs`}
                                >
                                    <div className="flex items-center">
                                        <span className="text-sm font-bold text-gray-500 w-6">{index + 1}</span>
                                        <span className="font-semibold text-gray-900 ml-3 group-hover:text-primary-600 transition-colors">
                                            {item.state}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-primary-600 font-bold text-lg">{item.count}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sector Distribution (Pie Chart) */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm mb-12">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                        Sector Distribution
                    </h3>
                    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0">
                        {/* Pie Chart */}
                        <div className="w-full max-w-xs md:max-w-sm" style={{ height: '250px' }}>
                            <Pie data={pieData} options={pieOptions} />
                        </div>

                        {/* Sector List */}
                        <div className="space-y-4">
                            {sectors.map((sector, index) => {
                                const Icon = sector.icon;
                                return (
                                    <div key={index} className="flex items-center">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                                            style={{ backgroundColor: `${sector.color}20` }}
                                        >
                                            <Icon className="text-xl" style={{ color: sector.color }} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{sector.name}</p>
                                            <p className="text-sm text-gray-600">{sector.percentage}% of total MSMEs</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


                {/* Government Support */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                        Government Support
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        {governmentSupport.map((item, index) => (
                            <div key={index}>
                                <p className={`text-2xl md:text-3xl font-bold text-${item.color}-600 mb-1`}>
                                    {item.value}
                                </p>
                                <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MSMESuccessSection;