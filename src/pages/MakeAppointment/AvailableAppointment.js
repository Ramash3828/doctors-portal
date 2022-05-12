import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookingAppointment from "./BookingAppointment";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selected }) => {
    const [timerSlots, setTimerSlots] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setTimerSlots(data));
    }, []);

    return (
        <section className="my-24 text-center">
            <h2 className="text-2xl font-bold text-secondary">
                Available appointment on {format(selected, "PP")}{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-12 mt-10">
                {timerSlots.map((timerSlot) => (
                    <BookingAppointment
                        key={timerSlot._id}
                        timerSlot={timerSlot}
                        setTreatment={setTreatment}
                    ></BookingAppointment>
                ))}
                {treatment && (
                    <BookingModal
                        treatment={treatment}
                        selected={selected}
                    ></BookingModal>
                )}
            </div>
        </section>
    );
};

export default AvailableAppointment;
