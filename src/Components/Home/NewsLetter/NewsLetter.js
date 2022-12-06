

const NewsLetter = () => {
    return (
        <div className="relative">
            <div className="mid-container">
                <div className="flex justify-evenly mt-16 mb-10">
                    <div className="text-center font-semibold">
                        <h1>2300+</h1>
                        <h1>Happy Customer</h1>
                    </div>
                    <div className="text-center font-semibold">
                        <h1>65000+</h1>
                        <h1>Exclusive Product</h1>
                    </div>
                    <div className="text-center font-semibold">
                        <h1>2500+</h1>
                        <h1>Today Order</h1>
                    </div>
                </div>

                <div className="flex justify-center py-6 bg-[#0a0d41] text-white rounded">
                    <div className="text-center ">
                        <h1 className="text-2xl font-bold mb-1">Join Our Newsletter</h1>
                        <p>See all our popular products in this week.</p>
                        <div className="text-center mt-5">
                            <div className="form-control ">
                                <label className="input-group">
                                    <input style={{ outline: "none" }} type="text" placeholder="Your Email" className="input input-bordered hover:outline-none md:w-96 w-full  text-neutral" />
                                    <span className="cursor-pointer btn bg-primary border-none font-bold">Join</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter-bg">

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;