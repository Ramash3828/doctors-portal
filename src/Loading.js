import React from "react";

import { Rings } from "react-loader-spinner";
const Loading = () => {
    return (
        <div className="flex justify-center mt-11">
            <Rings height="100" width="100" color="black" ariaLabel="loading" />
        </div>
    );
};

export default Loading;
