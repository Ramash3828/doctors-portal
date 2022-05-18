import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({ user, refetch, index }) => {
    const { email } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("You cannot make an Admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("You made Admin successfully");
                    refetch();
                }
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                {user.role !== "admin" && (
                    <button onClick={makeAdmin} className="btn btn-xs">
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                <button className="btn btn-xs">Remove</button>
            </td>
        </tr>
    );
};

export default UsersRow;
