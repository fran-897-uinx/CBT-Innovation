import clsx from 'clsx'

export default function Pricingcard({
    plan,
    value,
    offers = [],
    isFeatured = false
}) {
    return (
        <div className={clsx(
            'bg-white flex-1 rounded py-8 px-4 shadow-lg',
            isFeatured && 'border border-blue-600 scale-110'
        )}>
            <h4 className={clsx('font-bold', isFeatured && 'text-blue-600')}>{plan}</h4>
            <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>{typeof value === 'string' ? value : `$${value}`}</h2>
            <button className={clsx('rounded w-full py-2 px-7 my-7 font-bold cursor-pointer', isFeatured ? 'bg-blue-600 text-white' : 'bg-blue-300 text-blue-700')}>
                Choose Plan
            </button>
            {offers.map((o) => (
                <p key={o} className='my-2 text-nowrap'>
                    <span className='mr-3 font-normal text-[15px]'>✔️</span> {o}
                </p>
            ))}
        </div>
    )
}