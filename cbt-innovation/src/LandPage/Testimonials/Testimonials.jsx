import { useRef, useEffect } from 'react';

const TestimonialLists = [
    {
        userAvatar: '',
        userName: 'Sophia Clerk',
        userReview: '⭐⭐⭐⭐',
        userTestimony: 'The platform has been instrumental in my exam preparation. The practice tests are well structured, and the performance analysis helped me identify my weaknesses'
    },
    {
        userAvatar: '',
        userName: 'Ethan Bennet',
        userReview: '⭐⭐⭐',
        userTestimony: 'I found the timed exam feature very useful for improving my speed. The platform is user-friendly and offers a great learning experience.'
    },
    {
        userAvatar: '',
        userName: 'Olivia Carter',
        userReview: '⭐⭐⭐⭐⭐',
        userTestimony: 'The personalized study plans are a great game-changer. They helped me focus on the right topics and significantly improved my scores. Highly recommended.'
    },
    {
        userAvatar: '',
        userName: 'Michael Rodriguez',
        userReview: '⭐⭐⭐⭐',
        userTestimony: 'Excellent platform with comprehensive study materials. The progress tracking feature kept me motivated throughout my preparation journey.'
    },
    {
        userAvatar: '',
        userName: 'Emma Thompson',
        userReview: '⭐⭐⭐⭐⭐',
        userTestimony: 'The mobile app integration is seamless. I could study on the go and sync my progress across all devices effortlessly.'
    }
];

const TestimonialCard = ({ item }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 mx-4 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <span className="font-bold text-blue-600 text-sm">
                    {item.userName.split(' ').map(n => n[0]).join('')}
                </span>
            </div>
            <div>
                <p className="font-bold text-gray-800 text-lg">{item.userName}</p>
                <p className="text-yellow-500 text-sm">{item.userReview}</p>
            </div>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
            "{item.userTestimony}"
        </p>
    </div>
);

const MarqueeRow = ({ items, direction = 'left', speed = 40 }) => {
    const marqueeRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        if (!marqueeRef.current || !scrollerRef.current) return;

        const scrollerContent = Array.from(scrollerRef.current.children);

        // Duplicate content for seamless loop
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', 'true');
            scrollerRef.current.appendChild(duplicatedItem);
        });

        // Cleanup function to remove duplicated items
        return () => {
            const duplicatedItems = scrollerRef.current?.querySelectorAll('[aria-hidden="true"]');
            duplicatedItems?.forEach(item => item.remove());
        };
    }, [items]);

    return (
        <div className="relative overflow-hidden py-4">
            {/* Fade effect on left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />

            {/* Fade effect on right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            <div
                ref={marqueeRef}
                className="flex"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`
                }}
            >
                <div ref={scrollerRef} className="flex">
                    {items.map((item, index) => (
                        <TestimonialCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    // Split testimonials into two groups for the two rows
    const firstRowItems = [...TestimonialLists];
    const secondRowItems = [...TestimonialLists].reverse(); // Reverse for visual variety

    return (
        <div className="my-20 px-4">
            <div className="text-center mb-16">
                <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-4">
                    What Our Users Say
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Don't just take our word for it. Here's what our community has to say about their learning experience.
                </p>
            </div>

            {/* First row - scrolls left to right */}
            <MarqueeRow
                items={firstRowItems}
                direction="left"
                speed={50}
            />

            {/* Second row - scrolls right to left */}
            <MarqueeRow
                items={secondRowItems}
                direction="right"
                speed={45}
            />

            <style jsx>{`
                @keyframes marquee-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes marquee-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Testimonials;