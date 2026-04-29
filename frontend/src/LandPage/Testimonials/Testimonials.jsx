import { useRef, useEffect, memo, useMemo } from 'react';


const TESTIMONIAL_LISTS = [
    {
        userName: 'Sophia Clerk',
        userReview: '⭐⭐⭐⭐',
        userTestimony: 'The platform has been instrumental in my exam preparation. The practice tests are well structured, and the performance analysis helped me identify my weaknesses'
    },
    {
        userName: 'Ethan Bennet',
        userReview: '⭐⭐⭐',
        userTestimony: 'I found the timed exam feature very useful for improving my speed. The platform is user-friendly and offers a great learning experience.'
    },
    {
        userName: 'Olivia Carter',
        userReview: '⭐⭐⭐⭐⭐',
        userTestimony: 'The personalized study plans are a great game-changer. They helped me focus on the right topics and significantly improved my scores. Highly recommended.'
    },
    {
        userName: 'Michael Rodriguez',
        userReview: '⭐⭐⭐⭐',
        userTestimony: 'Excellent platform with comprehensive study materials. The progress tracking feature kept me motivated throughout my preparation journey.'
    },
    {
        userName: 'Emma Thompson',
        userReview: '⭐⭐⭐⭐⭐',
        userTestimony: 'The mobile app integration is seamless. I could study on the go and sync my progress across all devices effortlessly.'
    }
];

// Use React.memo for the Card to prevent re-renders unless the 'item' prop changes
const TestimonialCard = memo(({ item }) => (
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
));
TestimonialCard.displayName = 'TestimonialCard';

const MarqueeRow = ({ items, direction = 'left', speed = 40 }) => {
    const scrollerRef = useRef(null);

    // FIX 1: Move cloning logic into a function called only ONCE on mount
    const initializeMarquee = () => {
        if (!scrollerRef.current) return;

        // Clone and append children to the same parent for the seamless loop
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', 'true');
            scrollerRef.current.appendChild(duplicatedItem);
        });
    };

    // FIX 1: Run the cloning logic only on mount
    useEffect(() => {
        initializeMarquee();

        // NO cleanup needed here since we only run once and the component unmounts fully
    }, []);

    // We can remove the `items` dependency from useEffect because we only run on mount.
    // However, if we needed the items to change, we'd memoize them in the parent.

    return (
        <div className="relative overflow-hidden py-4">
            {/* Fade effect on left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />

            {/* Fade effect on right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            <div
                className={`flex marquee-container ${direction === 'right' ? 'right' : 'left'}`}
                style={{
                    // Use a CSS variable for speed. Note: Requires the global CSS to be defined.
                    '--speed': `${speed}s`,
                    // The animation is now controlled by the CSS classes and variables
                }}
            >
                {/* The initial list of items is rendered here. 
                  The cloning happens in useEffect on the children of scrollerRef.
                */}
                <div ref={scrollerRef} className="flex flex-row">
                    {items.map((item, index) => (
                        <TestimonialCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    // FIX 2: Use useMemo to memoize the item arrays. 
    // This ensures the array reference remains stable across renders, 
    // which is a good practice, though not strictly required after removing the 
    // array dependency from MarqueeRow's useEffect.
    const firstRowItems = useMemo(() => [...TESTIMONIAL_LISTS], []);
    const secondRowItems = useMemo(() => [...TESTIMONIAL_LISTS].reverse(), []);

    return (
      <div id="testimonials" className="my-20 px-4">
        <div className="text-center mb-16">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            What Our Users Say
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to
            say about their learning experience.
          </p>
        </div>

        {/* First row - scrolls left to right */}
        <MarqueeRow items={firstRowItems} direction="left" speed={50} />

        {/* Second row - scrolls right to left */}
        <MarqueeRow items={secondRowItems} direction="right" speed={45} />
      </div>
    );
};

export default Testimonials;