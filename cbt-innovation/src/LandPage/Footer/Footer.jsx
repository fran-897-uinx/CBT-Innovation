const Footer = () => {
    return (
        <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 py-20">
            <div>
                <h4 className="font-bold sm:text-2xl lg:text-3xl">TestPrep</h4>
                <p>©2025 TestPrep. All rights reserved.</p>
            </div>
            <div className=" flex flex-col gap-3 sm:grid sm:grid-cols-4">
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold sm:text-[15px] lg:text-[20px]">Product</h4>
                    <a className="cursor-pointer">Features</a>
                    <a className="cursor-pointer">Pricing</a>
                    <a className="cursor-pointer">Testimonials</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold sm:text-[15px] lg:text-[20px]">Company</h4>
                    <a className="cursor-pointer">About Us</a>
                    <a className="cursor-pointer">Careers</a>
                    <a className="cursor-pointer">Contact</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold sm:text-[15px] lg:text-[20px]">Legal</h4>
                    <a className="cursor-pointer">Terms of Service</a>
                    <a className="cursor-pointer">Privacy Policy</a>
                </div>
                <div>
                    <h4 className="font-bold sm:text-[15px] lg:text-[20px]">Follow Us</h4>
                    {/* socials */}
                </div>
            </div>
        </div>
    )
}

export default Footer