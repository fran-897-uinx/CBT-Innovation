import Pricingcard from "./PricingCard"

const pricePlanList = [
    {
        plan: 'Basic',
        value: 'Free',
        offers: [
            'Access to limited practice test',
            'Basic performance report'
        ]
    },
    {
        plan: 'Premium',
        value: 19,
        offers: [
            'Access to all practice test',
            'Detailed performance report',
            'Personalized study plans'
        ]
    },
    {
        plan: 'Pro',
        value: 49,
        offers: [
            'All premium features',
            'Priority support',
            'Live tutoring sections'
        ]
    }
]

const Pricing = () => {
    return (
        <div className='bg-white w-full flex justify-center text-center py-15'>
            <div>
                {/* Header */}
                <div>
                    <h1 className='font-bold sm:text-[20px] md:text-[40px] lg:text-3xl mb-4'>Flexible Pricing Plans</h1>
                    <p className="sm:text-[19px] sm:font-normal">Choose the plan that is right for you. Get started for free.</p>
                </div>

                {/* plans */}
                <div className='flex flex-col gap-13 sm:flex-row justify-between sm:gap-8 mt-9 text-left'>
                    {
                        pricePlanList.map((item, index) => (
                            <Pricingcard
                                key={item.plan}
                                plan={item.plan}
                                value={item.value}
                                offers={item.offers}
                                isFeatured={index === 1}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Pricing