import React, { use, useState } from 'react';
import Ticket from './Ticket';

const CustomerTickets = ({ dataPromise, setSelectedCount, setCompletedCount }) => {
    const data = use(dataPromise);
    const [tickets, setTickets] = useState(data);
    const [showAlert, setShowAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("");
    const handleStatusChange = (id) => {
        setTickets(prev =>
            prev.map(ticket =>
                ticket.id === id && ticket.status === "OPEN"
                    ? { ...ticket, status: "IN_PROGRESS" }
                    : ticket
            )
        );
        setSelectedCount(prev => prev + 1);
    };

    const handleComplete = (id) => {
        setTickets(prev =>
            prev.map(ticket =>
                ticket.id === id
                    ? { ...ticket, status: "RESOLVED" }
                    : ticket
            )
        );
        setSelectedCount(prev => prev - 1);
        setCompletedCount(prev => prev + 1);
        setAlertTitle(tickets.find(ticket => ticket.id === id).title);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 4000);
    };

    const inProgressTickets = tickets.filter(ticket => ticket.status === "IN_PROGRESS");
    const resolvedTickets = tickets.filter(ticket => ticket.status === "RESOLVED");

    return (
        <div className='max-w-11/12 mx-auto pb-20 px-3'>
            <div className='flex flex-col lg:flex-row h-fit gap-5'>
                <div className='flex flex-col w-full lg:w-4/5'>
                    <h1 className='font-semibold text-2xl text-[#34485A] mb-3'>Customer Tickets</h1>
                    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                        {tickets.map(ticket => (
                            <Ticket
                                key={ticket.id}
                                ticket={ticket}
                                onClick={() => handleStatusChange(ticket.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col w-full lg:w-1/5 h-fit mt-10 lg:mt-0 gap-5'>
                    <div>
                        <h1 className='font-semibold text-2xl text-[#34485A]'>
                            Task Status
                        </h1>

                        <div className='space-y-3 mt-3'>

                            {inProgressTickets.length === 0 && (
                                <p className='text-gray-400 text-sm'>
                                    Select a ticket to add to Task Status
                                </p>
                            )}

                            {inProgressTickets.map(ticket => (
                                <div
                                    key={ticket.id}
                                    className="card bg-base-100 shadow-md p-4"
                                >
                                    <h3 className="font-medium text-gray-700 mb-3">
                                        {ticket.title}
                                    </h3>

                                    <button
                                        onClick={() => handleComplete(ticket.id)}
                                        className="btn btn-success w-full gradient-two"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='font-semibold text-2xl text-[#34485A]'>
                                Resolved Task
                            </h1>

                            <div className='space-y-3 mt-3'>

                                {resolvedTickets.length === 0 && (
                                    <p className='text-gray-400 text-sm'>
                                        No resolved tasks yet.
                                    </p>
                                )}

                                {resolvedTickets.map(ticket => (
                                    <div
                                        key={ticket.id}
                                        className="card p-4 bg-[#E0E7FF] shadow-md"
                                    >
                                        <h3 className="font-medium text-gray-700">
                                            {ticket.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {showAlert && (
                        <div role="alert" className="alert alert-success alert-soft mb-4">
                            <span>{alertTitle} Resolved Successfully</span>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default CustomerTickets;