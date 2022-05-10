import React from "react";
import Service from "./Service";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import fluoride from "../../assets/images/fluoride.png";

const Services = () => {
    const services = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,
        },
        {
            _id: 2,
            title: "Cavity Filling",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride,
        },
    ];
    return (
        <section className="my-12">
            <h3 className="text-2xl text-primary text-center mb-3">
                our services
            </h3>
            <h2 className="text-4xl text-accent text-center mb-12">
                Services We Provide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
        </section>
    );
};

export default Services;
