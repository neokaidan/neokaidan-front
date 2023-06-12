import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const session = true;

    if (!session) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
