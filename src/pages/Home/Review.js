import React from "react";

const Review = ({ review }) => {
    return (
        <div className="card md:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className="text-[16px]">{review.comment}</p>
            </div>
            <div className="flex items-center gap-3 p-6">
                <div className="avatar mx-3">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div>
                    <h4 className="text-xl">{review.name}</h4>
                    <p className="text-[16px]">{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
