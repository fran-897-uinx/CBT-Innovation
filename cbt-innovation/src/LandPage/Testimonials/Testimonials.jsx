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
    }
]

const Testimonials = () => {
    return (
        <div className='text-center my-19 px-3'>
            <h1 className="font-bold text-2xl mb-12">What Our Users Say</h1>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
                {
                    TestimonialLists.map((item, index) => (
                        <div key={index} className='text-left'>
                            <div className="flex gap-3">
                                <img src={item.userAvatar} alt={item.userName} />
                                <div className="mt-5">
                                    <p className="font-bold text-[17px]">{item.userName}</p>
                                    <p>{item.userReview}</p>
                                </div>
                            </div>
                            <p>{item.userTestimony}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials