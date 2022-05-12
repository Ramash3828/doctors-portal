import React from "react";
import { Oval } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./src/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return (
            <Oval
                height="100"
                width="100"
                color="grey"
                ariaLabel="loading"
            ></Oval>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
