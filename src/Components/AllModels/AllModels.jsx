import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../ModelCard/ModelCard';
import Swal from 'sweetalert2';

const AllModels = () => {
    const allmodels = useLoaderData();
    // console.log(allmodels);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5002/allmodels/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch((error) => console.log(error.message))
            }
        });
    }
    return (
        <div className='my-5'>
            <div className='my-4'>
                <p className='text-center text-3xl font-semibold'>All Models</p>
                <p className='text-center text-xl text-gray-400'>Explore 3D Models</p>
            </div>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        allmodels.map((model) => {
                            return <ModelCard
                                handleDelete={handleDelete}
                                key={model._id}
                                model={model}></ModelCard>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllModels;