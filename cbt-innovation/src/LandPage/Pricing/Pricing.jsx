const pricePlanList = [
    {
        pricePlan: 'Basic',
        pricePlanValue: 'Free',
        priceOffer: [
            'Access to limited practice test', 'Basic performance report'
        ]
    },
    {
        pricePlan: 'Premium',
        pricePlanValue: 19,
        priceOffer: [
            'Access to all practice test', 'Detailed performance report', 'Personalized study plans'
        ]
    },
    {
        pricePlan: 'Pro',
        pricePlanValue: 49,
        priceOffer: [
            'All premium features', 'Priority support', 'Live tuttoring sections'
        ]
    }
]

const Pricing = () => {
    return (
        <div className='bg-white w-full flex justify-center text-center py-15'>
            <div>
                <div>
                    <h1 className='font-bold sm:text-[20px] md:text-[40px] lg:text-3xl mb-4'>Flexible Pricing Plans</h1>
                    <p className="sm:text-[19px] sm:font-normal">Choose the plan that is right for you. Get stated for free.</p>
                </div>

                {/* plans */}
                <div className='flex flex-col gap-13 sm:flex-row justify-between sm:gap-8 mt-9 text-left'>
                    {
                        pricePlanList.map((item, index) => (
                            <div key={index} className={`bg-white flex-1 rounded py-8 px-4 shadow sm:shadow-gray-700/50 shadow-lg ${index == 1 ? 'border-1 border-blue-600 relative sm:scale-110' : ''}`}>

                                <h4 className={`font-bold ${index == 1 ? 'text-blue-600' : ''}`}>{item.pricePlan}</h4>

                                <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>{typeof item.pricePlanValue === 'string' ? `${item.pricePlanValue}` : `$${item.pricePlanValue}`}<span className='text-[12px] font-normal'> / month</span></h2>

                                <button className={`bg-blue-300 text-blue-700 rounded w-full py-2 px-7 my-7 font-bold cursor-pointer text-center ${index == 1 ? 'bg-blue-600 text-white' : ''}`}>Choose Plan</button>

                                {
                                    item.priceOffer.map((i) => (
                                        <p className='my-2 text-nowrap'><span className="mr-3 font-normal text-[15px]">✔️</span>{i}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Pricing