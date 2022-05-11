import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";
import AvailableAppointment from "./AvailableAppointment";
import bg from "../../assets/images/bg.png";
import Footer from "../../Shared/Footer";

const MakeAppointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <>
            <div
                style={{
                    background: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="hero min-h-screen "
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={chair}
                        className="max-w-lg rounded-lg shadow-2xl"
                        alt=""
                    />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                </div>
            </div>
            <AvailableAppointment selected={selected}></AvailableAppointment>
            <Footer></Footer>
        </>
    );
};

export default MakeAppointment;
