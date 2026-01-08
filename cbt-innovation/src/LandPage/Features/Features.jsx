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
        featureIcon: <FaClipboardCheck />,
        featureTitle: 'Comprehensive Practice Tests',
        featureDescription: 'Access a vast library of practice tests covering various subjects and difficulty levels to ensure thorough preparation.',
        highlights: ['1000+ questions', 'Multiple subjects', 'Adaptive difficulty'],
        accentColor: 'blue'
    },
    {
        featureIcon: <FaClock />,
        featureTitle: 'Timed Exams',
        featureDescription: 'Simulate real exam conditions with timed tests to improve your speed, accuracy, and time management skills.',
        highlights: ['Real-time clock', 'Exam simulation', 'Performance under pressure'],
        accentColor: 'purple'
    },
    {
        featureIcon: <FaChartLine />,
        featureTitle: 'Performance Analytics',
        featureDescription: 'Track your progress with detailed performance reports and identify areas for improvement with smart insights.',
        highlights: ['Progress tracking', 'Weakness analysis', 'Smart recommendations'],
        accentColor: 'green'
    },
    {
        featureIcon: <FaMobileAlt />,
        featureTitle: 'Mobile Friendly',
        featureDescription: 'Study anywhere, anytime with our fully responsive platform that works seamlessly across all devices.',
        highlights: ['Responsive design', 'Offline access', 'Cross-platform sync'],
        accentColor: 'orange'
    },
    {
        featureIcon: <FaBookOpen />,
        featureTitle: 'Detailed Explanations',
        featureDescription: 'Understand concepts better with step-by-step solutions and detailed explanations for every question.',
        highlights: ['Step-by-step solutions', 'Concept explanations', 'Learning resources'],
        accentColor: 'indigo'
    },
    {
        featureIcon: <FaAward />,
        featureTitle: 'Achievement System',
        featureDescription: 'Stay motivated with badges, certificates, and rewards for completing milestones and achieving high scores.',
        highlights: ['Badges & certificates', 'Progress milestones', 'Leaderboards'],
        accentColor: 'amber'
    }
];

const FeatureCard = ({ item, index }) => {
    const colorClasses = {
        blue: {
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-600',
            border: 'border-blue-200',
            badge: 'bg-blue-500',
            hover: 'hover:border-blue-300'
        },
        purple: {
            iconBg: 'bg-purple-50',
            iconColor: 'text-purple-600',
            border: 'border-purple-200',
            badge: 'bg-purple-500',
            hover: 'hover:border-purple-300'
        },
        green: {
            iconBg: 'bg-green-50',
            iconColor: 'text-green-600',
            border: 'border-green-200',
            badge: 'bg-green-500',
            hover: 'hover:border-green-300'
        },
        orange: {
            iconBg: 'bg-orange-50',
            iconColor: 'text-orange-600',
            border: 'border-orange-200',
            badge: 'bg-orange-500',
            hover: 'hover:border-orange-300'
        },
        indigo: {
            iconBg: 'bg-indigo-50',
            iconColor: 'text-indigo-600',
            border: 'border-indigo-200',
            badge: 'bg-indigo-500',
            hover: 'hover:border-indigo-300'
        },
        amber: {
            iconBg: 'bg-amber-50',
            iconColor: 'text-amber-600',
            border: 'border-amber-200',
            badge: 'bg-amber-500',
            hover: 'hover:border-amber-300'
        }
    };

    const colors = colorClasses[item.accentColor];

    return (
      <div
        id="features"
        className={`
            group relative bg-white rounded-2xl border-2 ${colors.border} ${colors.hover}
            shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1
            overflow-hidden
        `}
      >
        {/* Index Badge */}
        <div
          className={`absolute top-4 right-4 ${colors.badge} text-white text-sm font-semibold px-3 py-1 rounded-full z-10`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icon Section */}
        <div className={`p-8 ${colors.iconBg} border-b ${colors.border}`}>
          <div className="flex items-center justify-between">
            <div
              className={`p-4 rounded-2xl bg-white border ${colors.border} shadow-sm`}
            >
              <div className={`text-2xl ${colors.iconColor}`}>
                {item.featureIcon}
              </div>
            </div>
            {/* Decorative Element */}
            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
            {item.featureTitle}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
            {item.featureDescription}
          </p>

          {/* Highlights List */}
          <div className="space-y-3">
            {item.highlights.map((highlight, highlightIndex) => (
              <div
                key={highlightIndex}
                className="flex items-center gap-3 text-sm"
              >
                <div
                  className={`w-5 h-5 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0`}
                >
                  <FaRegCheckCircle className={`text-xs ${colors.iconColor}`} />
                </div>
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Hover Indicator */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-gray-900 transition-colors duration-500"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-900 rounded-full translate-y-12 -translate-x-12"></div>
        </div>
      </div>
    );
};

const Features = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-20">
                    {/* Subtle Badge */}
                    <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                            Why Choose TestPrep
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-6">
                        Designed for{' '}
                        <span className="relative inline-block">
                            Excellence
                            <svg
                                className="absolute -bottom-2 left-0 w-full text-gray-900"
                                viewBox="0 0 100 8"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,4 Q25,0 50,4 T100,4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our platform combines cutting-edge technology with proven learning methodologies
                        to deliver an unparalleled exam preparation experience.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FeaturesList.map((item, index) => (
                        <FeatureCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <div className="bg-gray-50 rounded-3xl p-12 max-w-4xl mx-auto border border-gray-200">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                                <FaUsers className="text-2xl text-white" />
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Join 10,000+ Successful Students
                            </h2>

                            <p className="text-gray-600 text-lg mb-8 max-w-2xl">
                                Start your journey to academic excellence with our comprehensive learning platform.
                                Experience the difference that quality preparation makes.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="
                                    bg-gray-900 text-white font-semibold py-4 px-8 rounded-xl
                                    border border-gray-900
                                    hover:bg-gray-800 hover:border-gray-800
                                    active:bg-gray-700 active:scale-95
                                    transition-all duration-200
                                    cursor-pointer
                                    flex items-center gap-3
                                    group
                                ">
                                    <span>Start Free Trial</span>
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>

                                <button className="
                                    text-gray-900 font-semibold py-4 px-8 rounded-xl
                                    border-2 border-gray-300
                                    hover:border-gray-400 hover:bg-white
                                    active:bg-gray-50 active:scale-95
                                    transition-all duration-200
                                    cursor-pointer
                                    flex items-center gap-3
                                ">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Watch Platform Tour</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;