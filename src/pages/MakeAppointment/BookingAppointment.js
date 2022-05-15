import React from "react";

const BookingAppointment = ({ timerSlot, setTreatment }) => {
    const { name, slots } = timerSlot;

    return (
        <div className="card md:max-w-md bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {slots.length ? (
                        <span>{slots[0]}</span>
                    ) : (
                        <span className="text-red-500">Try another date</span>
                    )}
                </p>
                <p>
                    {slots.length} {slots.length > 1 ? "spaces" : "space"}{" "}
                    available
                </p>
                <div className="card-actions">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(timerSlot)}
                        htmlFor="booking-modal"
                        className="btn modal-button bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary border-0 uppercase btn-sm"
                    >
                        Book appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BookingAppointment;
