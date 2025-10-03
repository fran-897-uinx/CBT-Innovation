import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md py-2'
                : 'bg-white/90 backdrop-blur-sm py-4'
                }`}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <a href='#home' className='flex items-center group'>
                        <h1 className='font-bold text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-200'>
                            Test<span className='text-blue-600'>Prep</span>
                        </h1>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center gap-8'>
                        {navItems.map((item) => (

                            <a key={item.name}
                                href={item.href}
                                className='relative font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 group'
                            >
                                {item.name}
                                < span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300' />
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className='hidden md:flex items-center gap-4'>
                        <button className='font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200'>
                            Sign In
                        </button>
                        <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200'>
                            Start Free Trial
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors'
                        aria-label='Toggle menu'
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className='flex flex-col gap-4 py-4 border-t border-gray-200 mt-4'>
                        {navItems.map((item) => (

                            <a key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className='font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors duration-200'
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className='flex flex-col gap-2 pt-2 border-t border-gray-200'>
                            <button className='font-semibold text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors'>
                                Sign In
                            </button>
                            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition-colors'>
                                Start Free Trial
                            </button>
                        </div>
                    </nav>
                </div>
            </div >
        </header >
    );
};

export default Nav;