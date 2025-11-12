import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../ModelCard/ModelCard';

const AllModels = () => {
    const allmodels = useLoaderData();
    // console.log(allmodels);
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