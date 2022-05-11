import React from "react";
import { Link } from "react-router-dom";
import footer from "../assets/images/footer.png";

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="pb-10 px-12"
        >
            <div className="footer p-10 bg-transparent text-center mx-auto">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">
                        Branding
                    </Link>
                    <Link to="/" className="link link-hover">
                        Design
                    </Link>
                    <Link to="/" className="link link-hover">
                        Marketing
                    </Link>
                    <Link to="/" className="link link-hover">
                        Advertisement
                    </Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">
                        About us
                    </Link>
                    <Link to="/" className="link link-hover">
                        Contact
                    </Link>
                    <Link to="/" className="link link-hover">
                        Jobs
                    </Link>
                    <Link to="/" className="link link-hover">
                        Press kit
                    </Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">
                        Terms of use
                    </Link>
                    <Link to="/" className="link link-hover">
                        Privacy policy
                    </Link>
                    <Link to="/" className="link link-hover">
                        Cookie policy
                    </Link>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">
                                Enter your email address
                            </span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered w-full pr-16"
                            />
                            <button className="btn bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary border-0 uppercase text-white font-bold absolute top-0 right-0 rounded-l-none">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-secondary font-bold">
                Copyright &copy; {new Date().getFullYear()} - All right reserved
            </p>
        </footer>
    );
};

export default Footer;
