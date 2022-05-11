import React from "react";
import appointment from "../../assets/images/appointment.png";

const ContactUs = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="my-12 py-12 px-12"
        >
            <h4 className="text-secondary text-center text-xl font-bold">
                Contact Us
            </h4>
            <h2 className="text-center text-4xl mb-10 text-white">
                Stay connected with us
            </h2>
            <div className="form-area w-full sm:w-1/2 mx-auto">
                <form className="grid grid-cols-1 gap-3 w-full">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="input input-bordered w-full "
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="input input-bordered w-full "
                    />
                    <textarea
                        className="input input-bordered w-full h-24 "
                        placeholder="Your message"
                    ></textarea>
                    <input
                        type="submit"
                        value="Submit"
                        className="w-1/4 mx-auto btn bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary border-0 uppercase text-white font-bold"
                    />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
