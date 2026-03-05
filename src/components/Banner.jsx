import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-11/12 mx-auto py-20 px-3'>
            <div className='flex flex-col lg:flex-row items-center gap-10'>
                <div className='text-center border rounded-lg p-10 w-full lg:w-1/2 gradient-one'>
                    <p className='text-2xl mb-2'>In-progress</p>
                    <h1 className='font-semibold text-6xl'>0</h1>
                </div>
                <div className='text-center border rounded-lg p-10 w-full lg:w-1/2 gradient-two'>
                    <p className='text-2xl mb-2'>Resolved</p>
                    <h1 className='font-semibold text-6xl'>0</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;