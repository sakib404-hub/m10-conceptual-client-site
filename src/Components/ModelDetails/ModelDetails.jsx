import React from "react";
import { useLoaderData } from "react-router";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const ModelDetailsCard = () => {
    const model = useLoaderData();
    const {
        name,
        category,
        description,
        thumbnailUrl,
        createdBy,
        createdAt,
        downloads,
    } = model;

    // Format date nicely
    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // Dummy stats data for chart
    const downloadData = [
        { day: "Mon", downloads: 2 },
        { day: "Tue", downloads: 5 },
        { day: "Wed", downloads: 3 },
        { day: "Thu", downloads: 8 },
        { day: "Fri", downloads: 4 },
        { day: "Sat", downloads: 7 },
        { day: "Sun", downloads: 6 },
    ];

    return (
        <div className="flex items-center justify-center my-15">
            <div className="card w-full max-w-4xl bg-base-100 shadow-xl p-4 flex flex-col lg:flex-row gap-6">
                {/* Left side: Thumbnail */}
                <div className="w-full lg:w-1/3">
                    <img
                        src={thumbnailUrl}
                        alt={name}
                        className="rounded-lg h-full w-full object-cover shadow-md"
                    />
                </div>

                {/* Right side: Details and chart */}
                <div className="flex-1 flex flex-col gap-4">
                    {/* Title & category */}
                    <div>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className="text-gray-500">{category}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700">{description}</p>

                    {/* Footer info */}
                    <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 mt-2">
                        <p>
                            <span className="font-semibold">Created By:</span> {createdBy}
                        </p>
                        <p>
                            <span className="font-semibold">Created At:</span> {formattedDate}
                        </p>
                        <p>
                            <span className="font-semibold">Downloads:</span> {downloads}
                        </p>
                    </div>

                    {/* Chart section */}
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-inner">
                        <h3 className="text-md font-semibold mb-2">Weekly Downloads</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={downloadData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="downloads" fill="#3b82f6" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-4 flex gap-2">
                        <button className="btn btn-primary btn-sm">View Model</button>
                        <button className="btn btn-outline btn-sm">Download</button>
                        <button className="btn btn-success btn-sm">Add to Favorites</button>
                    </div>

                    {/* Dummy text at the end */}
                    <div className="mt-6 text-gray-600 leading-relaxed text-sm">
                        <p>
                            This 3D model has been crafted with attention to detail and optimized
                            for real-time rendering in modern engines. Whether you're designing a
                            cinematic scene, a game character, or an AR/VR experience, the Atlas
                            Warrior adds depth and realism to your project. Further customization
                            options, texture variations, and rigging features are coming soon in
                            future updates. Stay tuned for more assets from our creative library!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelDetailsCard;
