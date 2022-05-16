import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className="text-4xl text-secondary my-4 font-bold text-center">
                    Dashboard
                </h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <NavLink to="/dashboard/myappointment">
                            My Appointment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myreviews">My Reviews</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
