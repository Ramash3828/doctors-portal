import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Loading";

const AddDoctors = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const { data: services, isLoading } = useQuery("services", () =>
        fetch(`http://localhost:5000/services`).then((res) => res.json())
    );

    const imagebbKey = "78b51101c93df6505232dd1a07d4af99";

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        img: img,
                        specialty: data.specialty,
                    };
                    fetch(`http://localhost:5000/doctor`, {
                        method: "POST",
                        body: JSON.stringify(doctor),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            authorization: `Bearer ${localStorage.getItem(
                                "accessToken"
                            )}`,
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.insertedId) {
                                toast.success(`Data insert successfully`);
                                reset();
                            }
                        });
                }
            });
    };

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <h2 className="text-center text-2xl text-secondary my-2 font-bold">
                Add Doctors
            </h2>
            <div className="card mx-auto lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center">
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
                                <span className="label-text">
                                    Specialization
                                </span>
                            </label>
                            <select
                                {...register("specialty")}
                                className="select w-full max-w-lg"
                            >
                                {services.map((service) => (
                                    <option
                                        key={service._id}
                                        value={service.name}
                                    >
                                        {service.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Picture</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Select file"
                                className="input input-bordered w-full "
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required",
                                    },
                                })}
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-500">
                                    {errors.file?.type === "required" && (
                                        <p>{errors.file?.message}</p>
                                    )}
                                </span>
                            </label>
                        </div>
                        <input
                            type="submit"
                            value="Add"
                            className="btn  w-full"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctors;
