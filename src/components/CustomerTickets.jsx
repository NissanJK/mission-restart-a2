import React from 'react';

const CustomerTickets = () => {
    return (
        <div className='max-w-11/12 mx-auto pb-20 px-3'>
            <div className='flex h-screen gap-5'>
                <div className='flex flex-col w-4/5'>
                    <h1 className='font-semibold text-2xl text-[#34485A]'>Customer Tickets</h1>
                    <div className='w-full h-screen flex gap-5 '>
                        <div className='w-1/2'>

                        </div>
                        <div className='w-1/2'>

                        </div>

                    </div>
                </div>
                <div className='flex flex-col w-1/5 h-screen gap-5'>
                    <div>
                        <h1 className='font-semibold text-2xl text-[#34485A]'>Task Status</h1>
                        <div className='w-full h-fit'>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-2xl text-[#34485A]'>Resolved Task</h1>
                        <div className='w-full h-fit'>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerTickets;