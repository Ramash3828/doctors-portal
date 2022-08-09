import React from "react";

import { useQuery } from "react-query";

import Loading from "../../Loading";
import UsersRow from "./UsersRow";

const AllUsers = () => {
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch(`http://localhost:5000/users`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-2xl text-accent text-center my5 font-bold">
                All Users
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <UsersRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UsersRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
