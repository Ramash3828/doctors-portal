import React, { useEffect } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Loading";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { updateProfile });
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, user]);

    if (loading || updating) {
        return <Loading></Loading>;
    }
    let errMessage;
    if (error || updateError) {
        return (errMessage = <p className="text-red-500">{error.message}</p>);
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };
    return (
        <div className="card mx-auto lg:max-w-lg bg-base-100 shadow-xl mt-4">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold uppercase">Sign up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="input input-bordered w-full "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required",
                                },
                            })}
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors.name?.type === "required" && (
                                    <p>{errors?.name.message}</p>
                                )}
                            </span>
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full "
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /[a-z0-9][-a-z0-9._]+@([-a-z0-9]+.)+[a-z]{2,5}$/,
                                    message: "Provide your valid email",
                                },
                            })}
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors.email?.type === "required" && (
                                    <p>{errors?.email.message}</p>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <p>{errors?.email.message}</p>
                                )}
                            </span>
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            className="input input-bordered w-full "
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,32}$/,
                                    message:
                                        "Minimum six characters, at least one letter and one number",
                                },
                            })}
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors.password?.type === "required" && (
                                    <p>{errors.password?.message}</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p>{errors.password?.message}</p>
                                )}
                            </span>
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Sign Up"
                        className="btn  w-full"
                    />
                    {errMessage}
                </form>
                <p className="text-left">
                    All ready have an account?{" "}
                    <Link className="text-primary" to="/login">
                        Please Login
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;
