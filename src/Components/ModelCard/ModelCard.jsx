import React from "react";
import { useNavigate } from "react-router";

const ModelCard = ({ model }) => {
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

    const path = useNavigate();
    const handleViewMoreButtonClick = () => {
        path(`/modelDetails/${model._id}`)
    }

    return (
        <div className="card w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Thumbnail */}
            <figure>
                <img src={thumbnailUrl} alt={name} className="h-48 w-full object-cover" />
            </figure>

            <div className="card-body">
                {/* Name & Category */}
                <h2 className="card-title text-lg font-bold">{name}</h2>
                <p className="text-sm text-gray-500 mb-2">{category}</p>

                {/* Description */}
                <p className="text-gray-700 text-sm line-clamp-3">{description}</p>

                {/* Footer info */}
                <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500">
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

                {/* Action Button */}
                <div className="card-actions justify-end mt-4">
                    <button
                        onClick={handleViewMoreButtonClick}
                        className="btn btn-sm btn-primary">View Model</button>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;
