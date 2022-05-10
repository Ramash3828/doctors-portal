import React from "react";
import tretment from "../../assets/images/treatment.png";

const DentalCare = () => {
    return (
        <section className="py-24">
            <div class="hero min-h-screen">
                <div class="hero-content gap-24 flex-col lg:flex-row">
                    <img
                        className="max-w-lg w-full object-cover rounded-lg shadow-2xl"
                        src={tretment}
                        alt="Album"
                    />
                    <div className="text-left">
                        <h2 class="card-title text-5xl text-accent">
                            Exceptional Dental Care, on Your Terms
                        </h2>
                        <p className="text-[16px] my-12">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsumis that it has a more-or-less normal
                            distribution of letters,as opposed to using 'Content
                            here, content here', making it look like readable
                            English. Many desktop publishing packages and web
                            page
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

export default DentalCare;
