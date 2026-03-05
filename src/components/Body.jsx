import React, { Suspense, useState } from 'react';
import Banner from './Banner';
import CustomerTickets from './CustomerTickets';
const fetchData = async () => {
    const response = await fetch('/data.json');
    return response.json();
}
const Body = () => {
    const dataPromise = fetchData();
    const [selectedCount, setSelectedCount] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);
    return (
        <div className='bg-gray-100'>
            <Banner selectedCount={selectedCount} completedCount={completedCount} />
            <Suspense fallback={<div className='text-center py-20'><span className="loading loading-bars loading-xl"></span></div>}>
                <CustomerTickets setSelectedCount={setSelectedCount} setCompletedCount={setCompletedCount} dataPromise={dataPromise} />
            </Suspense>
        </div>
    );
};

export default Body;