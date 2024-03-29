import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile px-11">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className="text-3xl text-secondary my-6 font-bold text-center">
                    Welcome Doctors Portal Dashboard
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
                    {admin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/allusers">
                                    All Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/adddocotrs">
                                    Add Doctors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageDoctor">
                                    Manage Doctors
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
