// import clsx from 'clsx'

// export default function Pricingcard({
//     plan,
//     value,
//     offers = [],
//     isFeatured = false
// }) {
//     return (
//         <div className={clsx(
//             'bg-white flex-1 rounded py-8 px-4 shadow-lg',
//             isFeatured && 'border border-blue-600 scale-110'
//         )}>
//             <h4 className={clsx('font-bold', isFeatured && 'text-blue-600')}>{plan}</h4>
//             <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>{typeof value === 'string' ? value : `$${value}`}</h2>
//             <button className={clsx('rounded w-full py-2 px-7 my-7 font-bold cursor-pointer', isFeatured ? 'bg-blue-600 text-white' : 'bg-blue-300 text-blue-700')}>
//                 Choose Plan
//             </button>
//             {offers.map((o) => (
//                 <p key={o} className='my-2 text-nowrap'>
//                     <span className='mr-3 font-normal text-[15px]'>✔️</span> {o}
//                 </p>
//             ))}
//         </div>
//     )
// }



import clsx from 'clsx'

export default function PricingCard({
    plan,
    value,
    period = '/month', // Added period prop for flexibility
    offers = [],
    isFeatured = false
}) {
    return (
        <div className={clsx(
            'group flex-1 rounded-xl py-8 px-6 transition-all duration-300 hover:shadow-xl',
            'bg-white border-2',
            isFeatured
                ? 'border-blue-500 shadow-lg relative'
                : 'border-gray-200 shadow-md hover:border-blue-300'
        )}>
            {/* Featured badge */}
            {isFeatured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                    </span>
                </div>
            )}

            {/* Plan name */}
            <h4 className={clsx(
                'font-bold text-lg mb-2',
                isFeatured ? 'text-blue-600' : 'text-gray-800'
            )}>
                {plan}
            </h4>

            {/* Price */}
            <div className="mb-6">
                <h2 className="font-bold text-4xl sm:text-5xl text-gray-900">
                    {typeof value === 'string' ? value : `$${value}`}
                </h2>
                {period && (
                    <p className="text-gray-600 text-sm mt-1">{period}</p>
                )}
            </div>

            {/* CTA Button */}
            <button className={clsx(
                'rounded-lg w-full py-3 px-6 mb-8 font-semibold cursor-pointer transition-all duration-200',
                'border-2',
                isFeatured
                    ? 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600'
                    : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-50 hover:border-blue-500'
            )}>
                Choose Plan
            </button>

            {/* Features list */}
            <div className="space-y-3">
                {offers.map((offer, index) => (
                    <div key={index} className="flex items-start">
                        <span className={clsx(
                            'mr-3 mt-0.5 flex-shrink-0',
                            isFeatured ? 'text-blue-500' : 'text-green-500'
                        )}>
                            ✓
                        </span>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {offer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}