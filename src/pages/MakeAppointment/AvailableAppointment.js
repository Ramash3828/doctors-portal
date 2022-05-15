import { format } from "date-fns";
import React from "react";

import { useState } from "react";
import { useQuery } from "react-query";
import BookingAppointment from "./BookingAppointment";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selected }) => {
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(selected, "PP");

    const {
        isLoading,
        refetch,
        data: services,
    } = useQuery(["available", formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`).then(
            (res) => res.json()
        )
    );
    if (isLoading) {
        return <h2 className="text-center">Loading....</h2>;
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setTimerSlots(data);
    //         });
    // }, [formatedDate]);

    return (
        <section className="my-24 text-center">
            <h2 className="text-2xl font-bold text-secondary">
                Available appointment on {formatedDate}{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-12 mt-10">
                {services.map((timerSlot) => (
                    <BookingAppointment
                        key={timerSlot._id}
                        timerSlot={timerSlot}
                        setTreatment={setTreatment}
                    ></BookingAppointment>
                ))}
                {treatment && (
                    <BookingModal
                        refetch={refetch}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        selected={selected}
                    ></BookingModal>
                )}
            </div>
        </section>
    );
};

export default AvailableAppointment;
