import React from "react";
import { FaCube } from "react-icons/fa";
import { Link } from "react-router";

const CallToAction = () => {
    return (
        <section className="bg-blue-600 text-white text-center py-12 mt-10">
            <h2 className="text-3xl font-bold mb-4">Join the 3D Creator Community!</h2>
            <p className="mb-6 text-blue-100">
                Start sharing your models and connect with designers worldwide.
            </p>
            <Link
                to="/addmodels"
                className="btn btn-light text-blue-600 font-semibold bg-white hover:bg-blue-50"
            >
                <FaCube /> Upload Now
            </Link>
        </section>
    );
};

export default CallToAction;
