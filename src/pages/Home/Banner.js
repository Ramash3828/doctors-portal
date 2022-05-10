import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
    return (
        <section>
            <div className="hero min-h-screen ">
                <div className="hero-content gap-24 flex-col md:flex-row-reverse">
                    <img
                        src={chair}
                        className="max-w-lg w-full object-cover rounded-lg shadow-2xl"
                        alt=""
                    />
                    <div className="text-left ">
                        <h1 className="text-5xl text-accent font-bold">
                            Your New Smile Starts Here
                        </h1>
                        <p className="py-6 ">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary border-0 uppercase text-white font-bold">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
