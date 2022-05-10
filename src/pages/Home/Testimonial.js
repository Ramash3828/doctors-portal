import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            location: "California",
            comment:
                "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
        },
        {
            _id: 2,
            name: "Winson Herry",
            location: "California",
            comment:
                "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
        },
        {
            _id: 3,
            name: "Winson Herry",
            location: "California",
            comment:
                "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
        },
    ];
    return (
        <section className="pb-24 mx-auto px-12">
            <div className="flex justify-between ">
                <div className="text-left">
                    <h3 className="text-primary text-xl font-bold mb-3">
                        Testimonial
                    </h3>
                    <h2 className="text-accent text-4xl">
                        What Our Patients Says
                    </h2>
                </div>
                <div className="w-12 md:w-24">
                    <img className="objectFit-cover" src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-5">
                {reviews.map((review) => (
                    <Review key={review._id} review={review}></Review>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
