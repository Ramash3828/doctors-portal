import { useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState("");
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user?.email;
    fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",

        headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            setAdmin(data.admin);
            setAdminLoading(false);
        });

    return [admin, adminLoading];
};

export default useAdmin;
