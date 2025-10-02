import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroBackground = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <div className='relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900'>
            {/* Background video with proper positioning */}
            <video
                className='absolute top-0 left-0 w-full h-full object-cover opacity-40'
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={() => setIsVideoLoaded(true)}
            >
                <source src='/STUDENT.mp4' type='video/mp4' />
            </video>

            {/* Fallback image if video fails */}
            {!isVideoLoaded && (
                <img
                    className='absolute top-0 left-0 w-full h-full object-cover opacity-30'
                    src='/undraw_certification_i2m0.svg'
                    alt='Students studying'
                />
            )}

            {/* Gradient overlay for better text readability */}
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/30 to-black/60' />

            {/* Main content */}
            <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-5xl mx-auto'>
                {/* Animated fade-in effect */}
                <div className='animate-fade-in-up space-y-6'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight'>
                        Ace Your Exams with{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>
                            Confidence
                        </span>
                    </h1>

                    <p className='text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200'>
                        Prepare for your exams with our comprehensive Computer-Based Testing platform.
                        Get access to practice tests, detailed analytics, and personalized study plans.
                    </p>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
                        <button className='bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200'>
                            Start Free Trial
                        </button>
                        <button className='bg-white/10 cursor-pointer hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transform hover:scale-105 transition-all duration-200'>
                            View Demo
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div className='flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-300'>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'>✓</span>
                            <span>10,000+ Students</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'>✓</span>
                            <span>500+ Practice Tests</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'>✓</span>
                            <span>95% Success Rate</span>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                    <ChevronDown className='w-8 h-8 text-white/70' />
                </div>
            </div>
        </div>
    );
};

export default HeroBackground;