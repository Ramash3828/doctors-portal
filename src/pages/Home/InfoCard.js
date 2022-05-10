import React from "react";

const InfoCard = ({ img, bgClassName, title, infoText }) => {
    return (
        <section>
            <div
                className={`card min-h-full md:card-side  shadow-xl ${bgClassName}`}
            >
                <figure>
                    <img
                        src={img}
                        alt="Album"
                        className=" w-20 sm:ml-6 mt-6 sm:mt-0"
                    />
                </figure>
                <div className="card-body text-left h-48 text-white">
                    <h2 className="card-title">{title}</h2>
                    <p>{infoText}</p>
                </div>
            </div>
        </section>
    );
};

export default InfoCard;
