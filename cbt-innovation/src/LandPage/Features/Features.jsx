import React from 'react'

const FeaturesList = [
    {
        featureIcon: '',
        featureTitle: 'Comprehensive Practice Tests',
        featureDescription: 'Access a vast library of practice tests covering various subjects and difficulty levels.'
    },
    {
        featureIcon: '',
        featureTitle: 'Timed Exams',
        featureDescription: 'Stimulate real exam conditions with timed tests to improve your speed and accuracy.'
    },
    {
        featureIcon: '',
        featureTitle: 'Performance Analytics',
        featureDescription: 'Track your progress with detailed performance reports and identify areas for improvement.'
    }
]

const Features = () => {
    return (
        <div className='my-15 px-4 text-center'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4'>Key Features</h1>
            <p className='text-center'>Our platform offers a range of features designed to help you prepare effectively for your exams.</p>

            {/* features */}
            <div className='flex flex-col sm:flex-row justify-between gap-5 mt-15'>
                {
                    FeaturesList.map((item, index) => (
                        <div key={index} className='w-fit py-13 px-3 bg-white shadow-md rounded'>
                            <h1 className='font-bold sm:text-[17px] md:text-2xl mb-3'>{item.featureTitle}</h1>
                            <p>{item.featureDescription}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Features