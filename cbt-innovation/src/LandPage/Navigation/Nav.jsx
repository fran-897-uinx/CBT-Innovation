import React from 'react'

const Nav = () => {
    return (
        <div className='flex justify-between align-middle py-3'>
            {/* logo */}
            <h1 className='font-bold text-2xl text-gray-950'>TestPrep</h1>
            {/* Nav items */}
            <nav className='flex gap-6 font-bold cursor-pointer'>
                <a className='hover:text-gray-700'>Home</a>
                <a className='hover:text-gray-700'>Features</a>
                <a className='hover:text-gray-700'>Pricing</a>
                <a className='hover:text-gray-700'>Testimonials</a>
            </nav>

            {/* cta */}
            <button className='bg-blue-500 py-2 px-4 text-gray-50 font-bold rounded cursor-pointer hover:bg-blue-400 active:bg-blue-300'>Start Test</button>
        </div>
    )
}

export default Nav