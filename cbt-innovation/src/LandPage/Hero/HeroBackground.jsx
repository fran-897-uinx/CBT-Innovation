import React from 'react'

const HeroBackground = () => {
    return (
        <div className='relative aspect-video w-full h-screen overflow-hidden'>
            {/* backgound video */}
            {/* <div className=''> */}
            <video
                className='center w-full object-contain'
                // className='absolute top-0 left-0 w-full object-center object-cover'
                autoPlay
                loop
                muted
                playsInline>
                <source src='/STUDENT.mp4' type='video/mp4' />
                <img className='absolute top-0 left-0 w-full object-cover' src='/undraw_certification_i2m0.svg' />
            </video>
            {/* </div> */}

            {/* dark text overlay */}
            {/* <div className='absolute top-0 left-0 w-full h-full bg-black/40 rounded'> */}
            <div className='absolute top-0 left-0 w-full h-full rounded'>
                {/* text content */}
                <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Ace Your Exams with Confidence
                    </h1>
                    <p className='text-lg md:text-2xl w-2/3'>
                        Prepare for your exams with our comprehensive Computer-Based Testing platform. Get access to a wide range of practice tests, detailed performance analysis, and personalized study plans.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default HeroBackground