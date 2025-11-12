import React from "react";
import { FaCloudDownloadAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router";

const HeroSection = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 py-16 bg-gradient-from-r from-blue-50 to-purple-100 rounded-lg shadow-sm mt-4">
            <div className="max-w-xl space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
                    Explore, Create & Share Stunning{" "}
                    <span className="text-blue-600">3D Models</span>
                </h1>
                <p className="text-lg text-gray-600">
                    Dive into a world of creativity! Upload your own 3D models, explore
                    others’ creations, and download the ones that inspire you most.
                </p>
                <div className="flex gap-4">
                    <Link to="/allmodels" className="btn btn-primary flex items-center gap-2">
                        <FaCloudDownloadAlt /> Explore Models
                    </Link>
                    <Link to="/addmodels" className="btn btn-outline flex items-center gap-2">
                        <FaPlus /> Add Your Model
                    </Link>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
                <img
                    src="https://norsesoundcreative.com/wp-content/uploads/2017/09/hero-image-feature-img.jpg"
                    alt="3D Model Illustration"
                    className="w-full max-w-md lg:max-w-lg drop-shadow-lg"
                />
            </div>
        </section>
    );
};

export default HeroSection;
