import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateModel = () => {
    const { name, category, description, thumbnailUrl, _id } = useLoaderData();
    const handleFromSubmission = (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            category: event.target.category.value,
            description: event.target.description.value,
            thumbnailUrl: event.target.thumbnailUrl.value
        }
        console.log(formData);

        fetch(`http://localhost:5002/allmodels/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.log(error.message))
    }
    return (
        <div className="card w-full max-w-md mx-auto shadow-lg bg-base-100 border border-gray-200 my-10">
            <div className="card-body">
                <div className='flex items-center justify-center'>
                    <h2 className="card-title text-center mb-2">Update Model</h2>
                </div>
                <p className="text-sm text-gray-500 text-center mb-4">
                    Change in the details below to Update your 3D model to the collection.
                </p>

                <form
                    onSubmit={handleFromSubmission}
                    className="space-y-4">
                    {/* Model Name */}
                    <label
                        htmlFor='name'
                        className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium">Model Name</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id='name'
                            defaultValue={name}
                            placeholder="Enter model name"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    {/* Category */}
                    <label
                        htmlFor='category'
                        className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium">Category</span>
                        </div>
                        <select
                            id='category'
                            name="category"
                            defaultValue={category}
                            className="select select-bordered w-full"
                            required>
                            <option value="">Select Category</option>
                            <option>Characters</option>
                            <option>Vehicles</option>
                            <option>Props</option>
                            <option>Environment</option>
                            <option>Weapons</option>
                        </select>
                    </label>

                    {/* Description */}
                    <label
                        htmlFor='description'
                        className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium">Description</span>
                        </div>
                        <textarea
                            id='description'
                            name="description"
                            defaultValue={description}
                            placeholder="Short description of your model"
                            className="textarea textarea-bordered w-full"
                            rows="3"
                            required
                        ></textarea>
                    </label>

                    {/* Thumbnail URL */}
                    <label
                        htmlFor='thumbnailUrl'
                        className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium">Thumbnail URL</span>
                        </div>
                        <input
                            id='thumbnailUrl'
                            type="url"
                            defaultValue={thumbnailUrl}
                            name="thumbnailUrl"
                            placeholder="https://example.com/image.jpg"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    {/* Submit button */}
                    <div className="pt-2">
                        <button type="submit" className="btn btn-primary w-full">
                            Add Model
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateModel;