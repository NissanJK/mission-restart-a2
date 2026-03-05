import React from 'react';
import Banner from './Banner';
import CustomerTickets from './CustomerTickets';

const Body = () => {
    return (
        <div className='bg-gray-100'>
            <Banner />
            <CustomerTickets />
        </div>
    );
};

export default Body;