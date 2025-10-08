import React from 'react';
import {
    FaClipboardCheck,
    FaClock,
    FaChartLine,
    FaMobileAlt,
    FaBookOpen,
    FaAward,
    FaUsers,
    FaRegCheckCircle
} from 'react-icons/fa';

const FeaturesList = [
    {
        featureIcon: <FaClipboardCheck className="text-3xl sm:text-4xl" />,
        featureTitle: 'Comprehensive Practice Tests',
        featureDescription: 'Access a vast library of practice tests covering various subjects and difficulty levels to ensure thorough preparation.',
        gradient: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
        highlights: ['1000+ questions', 'Multiple subjects', 'Adaptive difficulty']
    },
    {
        featureIcon: <FaClock className="text-3xl sm:text-4xl" />,
        featureTitle: 'Timed Exams',
        featureDescription: 'Simulate real exam conditions with timed tests to improve your speed, accuracy, and time management skills.',
        gradient: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50',
        highlights: ['Real-time clock', 'Exam simulation', 'Performance under pressure']
    },
    {
        featureIcon: <FaChartLine className="text-3xl sm:text-4xl" />,
        featureTitle: 'Performance Analytics',
        featureDescription: 'Track your progress with detailed performance reports and identify areas for improvement with smart insights.',
        gradient: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-50',
        highlights: ['Progress tracking', 'Weakness analysis', 'Smart recommendations']
    },
    {
        featureIcon: <FaMobileAlt className="text-3xl sm:text-4xl" />,
        featureTitle: 'Mobile Friendly',
        featureDescription: 'Study anywhere, anytime with our fully responsive platform that works seamlessly across all devices.',
        gradient: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50',
        highlights: ['Responsive design', 'Offline access', 'Cross-platform sync']
    },
    {
        featureIcon: <FaBookOpen className="text-3xl sm:text-4xl" />,
        featureTitle: 'Detailed Explanations',
        featureDescription: 'Understand concepts better with step-by-step solutions and detailed explanations for every question.',
        gradient: 'from-indigo-500 to-blue-500',
        bgColor: 'bg-indigo-50',
        highlights: ['Step-by-step solutions', 'Concept explanations', 'Learning resources']
    },
    {
        featureIcon: <FaAward className="text-3xl sm:text-4xl" />,
        featureTitle: 'Achievement System',
        featureDescription: 'Stay motivated with badges, certificates, and rewards for completing milestones and achieving high scores.',
        gradient: 'from-yellow-500 to-amber-500',
        bgColor: 'bg-yellow-50',
        highlights: ['Badges & certificates', 'Progress milestones', 'Leaderboards']
    }
];

const Features = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                        <span className="text-blue-600 font-semibold text-lg">FEATURES</span>
                        <span className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-6">
                        Powerful Learning Features
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our platform offers a comprehensive suite of features designed to maximize
                        your exam preparation and ensure your success.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
                    {FeaturesList.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Icon Container */}
                            <div className={`relative z-10 p-6 ${item.bgColor} rounded-t-2xl`}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-lg`}>
                                        {item.featureIcon}
                                    </div>
                                    <div className="text-4xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                                    {item.featureTitle}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {item.featureDescription}
                                </p>

                                {/* Highlights List */}
                                <div className="space-y-2">
                                    {item.highlights.map((highlight, highlightIndex) => (
                                        <div key={highlightIndex} className="flex items-center gap-3 text-sm text-gray-700">
                                            <FaRegCheckCircle className="text-green-500 flex-shrink-0" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Hover Effect Line */}
                                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500`}></div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <FaUsers className="text-4xl text-blue-500" />
                            <h2 className="text-3xl font-bold text-gray-800">Join Thousands of Successful Students</h2>
                        </div>
                        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                            Start your journey to exam success today with our comprehensive learning platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Start Free Trial
                            </button>
                            <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                                View Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;