// FeaturedModels.jsx
import React from "react";

const FeaturedModels = () => {
    return (
        <section className="px-6 lg:px-20 py-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                Featured <span className="text-blue-600">3D Models</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="card bg-base-100 shadow-md hover:shadow-lg transition rounded-xl"
                    >
                        <figure>
                            <img
                                src="https://media.cgtrader.com/variants/Eyd4S8qsDeUMaKAdA9PjYdZw/78add9c2f02fbd73a43ffb3970be38683c5f15eff6ca849dc78c644f4ff9ce1b/RENDER_Thumbnail.webp"
                                alt="3D Model"
                                className="h-52 w-full object-cover rounded-t-xl"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-lg font-semibold">Model #{i}</h3>
                            <p className="text-gray-600 text-sm">
                                A beautiful and realistic 3D model for your creative project.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-outline btn-primary">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedModels;
