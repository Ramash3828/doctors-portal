import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading";

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery("doctors", () =>
        fetch(`http://localhost:5000/manage-docrtors`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-2xl font-bol my-2 text-primary">
                Manage Doctors
            </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor) => (
                            <tr key={doctor._id}>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    className="object-cover"
                                                    src={doctor.img}
                                                    alt={doctor.name}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {doctor.name}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">
                                        details
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;
