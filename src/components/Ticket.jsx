import { CalendarDays } from 'lucide-react';
import React from 'react';
const Ticket = ({ ticket, onClick }) => {
    return (
        <div className="card bg-base-100 shadow-md border border-base-200" onClick={onClick}>
            <div className="card-body p-5">

                <div className="flex justify-between items-start">
                    <h2 className="card-title text-lg font-medium text-[#001931]">
                        {ticket.title}
                    </h2>

                    <span className={`badge badge-soft font-medium ${ticket.status === 'OPEN' ? 'badge-error' : ticket.status === 'IN_PROGRESS' ? 'badge-warning' : 'badge-success'} gap-2 px-3 py-3`}>
                        <span className={`w-3 h-3 rounded-full ${ticket.status === 'OPEN' ? 'bg-red-500' : ticket.status === 'IN_PROGRESS' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
                        {ticket.status}
                    </span>
                </div>

                <p className="text-sm text-gray-500">
                    {ticket.description}
                </p>

                <div className="flex justify-between items-center mt-3 text-sm">

                    <div className="flex gap-4 items-center">
                        <span className="text-gray-500 font-medium">{ticket.id}</span>

                        <span className={`font-medium ${ticket.priority === 'HIGH' ? 'text-red-500' : ticket.priority === 'MEDIUM' ? 'text-yellow-500' : 'text-green-500'}`}>
                            {ticket.priority} PRIORITY
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500">
                        <span>{ticket.customer}</span>

                        <div className="flex items-center gap-1">
                            <CalendarDays size={16} />
                            <span>{ticket.createdAt}</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Ticket;