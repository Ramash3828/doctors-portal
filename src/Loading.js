import React from "react";
import "./Loading.css";

// import { Rings } from "react-loader-spinner";
const Loading = () => {
    return (
        <div className="flex justify-center mt-11">
            <div class="loader">Loading...</div>
            {/* <Rings height="100" width="100" color="black" ariaLabel="loading" /> */}
        </div>
    );
};

export default Loading;
