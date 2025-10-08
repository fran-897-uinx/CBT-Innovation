const Footer = () => {
    const socialIcons = [
        {
            name: 'Twitter',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">TP</span>
                            </div>
                            <h4 className="font-bold text-2xl text-gray-900">TestPrep</h4>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                            Empowering students worldwide to achieve academic excellence through innovative learning solutions.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            {socialIcons.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="
                                        w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center
                                        text-gray-600 hover:text-gray-900 hover:border-gray-400
                                        transition-all duration-200 hover:shadow-sm
                                        cursor-pointer
                                    "
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Product */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 text-lg">Product</h4>
                            <div className="space-y-3">
                                {['Features', 'Pricing', 'Testimonials', 'Updates'].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="
                                            block text-gray-600 hover:text-gray-900 
                                            transition-colors duration-200 cursor-pointer
                                            hover:translate-x-1 transform transition-transform
                                        "
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Company */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 text-lg">Company</h4>
                            <div className="space-y-3">
                                {['About Us', 'Careers', 'Contact', 'Press'].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="
                                            block text-gray-600 hover:text-gray-900 
                                            transition-colors duration-200 cursor-pointer
                                            hover:translate-x-1 transform transition-transform
                                        "
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Legal */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 text-lg">Legal</h4>
                            <div className="space-y-3">
                                {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Compliance'].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="
                                            block text-gray-600 hover:text-gray-900 
                                            transition-colors duration-200 cursor-pointer
                                            hover:translate-x-1 transform transition-transform
                                        "
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 text-lg">Resources</h4>
                            <div className="space-y-3">
                                {['Blog', 'Documentation', 'Help Center', 'Community'].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="
                                            block text-gray-600 hover:text-gray-900 
                                            transition-colors duration-200 cursor-pointer
                                            hover:translate-x-1 transform transition-transform
                                        "
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-600 text-sm">
                            © 2025 TestPrep. All rights reserved.
                        </div>

                        {/* Additional Links */}
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
                                Security
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
                                Sitemap
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
                                Status
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;