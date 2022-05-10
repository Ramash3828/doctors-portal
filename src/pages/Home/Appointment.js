import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const Appointment = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="my-24"
        >
            <div class="flex gap-24 items-center px-12">
                <div className="flex-1 md:block hidden">
                    <img
                        className="mt-[-100px] object-cover w-full"
                        src={doctor}
                        alt="Album"
                    />
                </div>
                <div className="text-left flex-1 py-12 sm:py-12">
                    <p3 className="text-primary text-xl font-bold">
                        Appointment
                    </p3>
                    <h2 class="card-title text-5xl text-white mt-5">
                        Make an appointment Today
                    </h2>
                    <p className="text-[16px] my-9 text-white">
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

export default Appointment;
