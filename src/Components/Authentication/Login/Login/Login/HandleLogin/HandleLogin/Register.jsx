import React from "react";
import { FaUserPlus } from "react-icons/fa";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("User registration form submitted!");
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                {/* Left side text */}
                <div className="text-center lg:text-left max-w-md">
                    <h1 className="text-5xl font-bold flex items-center gap-2">
                        <FaUserPlus className="text-green-500" /> Create an Account
                    </h1>
                    <p className="py-6 text-gray-600">
                        Join our 3D Model community today! Upload, download, and showcase your creativity with
                        thousands of other artists.
                    </p>
                </div>

                {/* Register form */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body" autoComplete="off">
                        <fieldset className="fieldset">
                            <label className="label">Full Name</label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Enter your name"
                                required
                                autoComplete="off"
                            />

                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input input-bordered"
                                placeholder="Enter your email"
                                required
                                autoComplete="off"
                            />

                            <label className="label">Password</label>
                            <input
                                type="password"
                                className="input input-bordered"
                                placeholder="Enter your password"
                                required
                                autoComplete="new-password"
                            />

                            <label className="label">Confirm Password</label>
                            <input
                                type="password"
                                className="input input-bordered"
                                placeholder="Confirm password"
                                required
                                autoComplete="new-password"
                            />

                            <button type="submit" className="btn btn-success mt-4">
                                Register
                            </button>

                            <p className="text-sm mt-2 text-center">
                                Already have an account?{" "}
                                <a href="/login" className="link text-blue-600">
                                    Login here
                                </a>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
