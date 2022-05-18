import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/myappointment?email=${user.email}`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
                return res.json();
            })
            .then((data) => {
                setAppointment(data);
                toast.error(data.message);
            });
    }, [user, navigate]);

    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-accent my-3">
                My Appointment
            </h2>
            <div className="overflow-x-auto shadow-lg">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Treatment</th>

                            <th>Booking Date</th>
                            <th>Time</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment?.map((booking, index) => {
                            return (
                                <tr key={booking._id}>
                                    <td>{index + 1}</td>
                                    <td>{booking.patientName}</td>
                                    <td>{booking.treatmentName}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.slot}</td>
                                    <td>{booking.phone}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
