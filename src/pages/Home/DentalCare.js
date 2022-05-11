import React from "react";
import tretment from "../../assets/images/treatment.png";

const DentalCare = () => {
    return (
        <section className="py-24 px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center ">
                <div className="">
                    <img
                        className="max-w-sm w-full object-cover rounded-lg shadow-2xl mx-auto"
                        src={tretment}
                        alt="Album"
                    />
                </div>
                <div className="text-left ">
                    <h2 className="card-title text-5xl text-accent">
                        Exceptional Dental Care, on Your Terms
                    </h2>
                    <p className="text-[16px] my-12">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsumis
                        that it has a more-or-less normal distribution of
                        letters,as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page
                    </p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary border-0 uppercase text-white font-bold">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;
