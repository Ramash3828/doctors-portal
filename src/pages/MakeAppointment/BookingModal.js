import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, selected }) => {
    const [user] = useAuthState(auth);
    const { name, slots } = treatment;
    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2 "
                    >
                        ✕
                    </label>
                    <h2 className="card-title text-secondary">
                        Booking for {name}
                    </h2>
                    <form className="grid grid-cols-1 gap-y-2 mx-auto w-full mt-7">
                        <input
                            disabled
                            type="text"
                            value={format(selected, "PP")}
                            className="input input-bordered w-full "
                        />

                        <select
                            name="slot"
                            className="input input-bordered w-full "
                        >
                            {slots.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={user.displayName}
                            className="input input-bordered w-full "
                            disabled
                        />
                        <input
                            type="email"
                            value={user.email}
                            className="input input-bordered w-full "
                            disabled
                        />
                        <input
                            type="number"
                            placeholder="Phone number"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="input input-bordered w-full  uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary border-0 "
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
