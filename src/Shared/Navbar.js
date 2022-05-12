import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navBar = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/appointment">Appointment</Link>
            </li>
            <li>
                <Link to="/reviews">Reviews</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                {user ? (
                    <button
                        onClick={() => {
                            auth.signOut(() => Navigate("/"));
                        }}
                        class="btn btn-ghost"
                    >
                        Log Out
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </li>
        </>
    );
    return (
        <div className="navbar bg-gradient-to-r from-primary to-secondary justify-between px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        {navBar}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Doctors Portal
                </Link>
            </div>
            <div className="navbar-center hidden md:flex ">
                <ul className="menu menu-horizontal p-0">{navBar}</ul>
            </div>
        </div>
    );
};

export default Navbar;
