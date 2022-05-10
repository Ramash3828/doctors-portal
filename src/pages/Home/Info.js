import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import marker from "../../assets/icons/marker.svg";

const Info = () => {
    return (
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <InfoCard
                bgClassName={`bg-gradient-to-r from-primary to-secondary`}
                img={clock}
                title={"Opening Hours"}
                infoText={"Lorem Ipsum is simply dummy text of the pri"}
            ></InfoCard>
            <InfoCard
                bgClassName={`bg-accent`}
                img={marker}
                title={"Visit our locations"}
                infoText={"Brooklyn, NY 10036, United States"}
            ></InfoCard>
            <InfoCard
                bgClassName={`bg-gradient-to-r from-primary to-secondary`}
                img={phone}
                title={"Contact us now"}
                infoText={"+01714-000000"}
            ></InfoCard>
        </div>
    );
};

export default Info;
