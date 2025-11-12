import React from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { FaUserCircle, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router"; // make sure it's react-router-dom
import { AuthContext } from "../../../../../../Context/AuthContext/AuthContext";

const UserLogin = () => {
    const { signInWithGoogle, setUser } = useContext(AuthContext);
    const path = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const user = { email, password };
        console.log(user);
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                setUser(result.user); // update context
                Swal.fire({
                    title: "Login Successful!",
                    text: `Welcome back, ${result.user.displayName || result.user.userName || "User"}!`,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true,
                    position: "center",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    }
                });
                path(location.state?.from?.pathname || '/');
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Left side text */}
                <div className="text-center lg:text-left max-w-md">
                    <h1 className="text-5xl font-bold flex items-center gap-2">
                        <FaUserCircle className="text-blue-500" /> User Login
                    </h1>
                    <p className="py-6 text-gray-600">
                        Welcome back! Please log in to access your 3D model dashboard and manage your creations.
                    </p>
                </div>

                {/* Login form */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label htmlFor="email" className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="input input-bordered"
                                placeholder="Enter your email"
                                autoComplete="current-email"
                                required
                            />

                            <label htmlFor="password" className="label">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="input input-bordered"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                required
                            />

                            <div className="flex flex-col items-start gap-2 justify-center mt-2">
                                <a className="link link-hover text-sm">Forgot password?</a>
                                <Link to="/register" className="btn btn-sm btn-outline btn-primary">
                                    Don't have an account? Register
                                </Link>
                            </div>

                            <button type="submit" className="btn btn-neutral mt-4 w-full">
                                Login
                            </button>

                            <div className="flex flex-col gap-2 mt-4">
                                {/* Google Sign-In */}
                                <button
                                    onClick={handleGoogleSignIn}
                                    type="button"
                                    className="btn btn-outline btn-success w-full flex items-center justify-center gap-2"
                                >
                                    <FaGoogle className="text-red-500" /> Sign in with Google
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
