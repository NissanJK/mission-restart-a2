import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const NavBar = () => {
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <div className="navbar w-11/12 mx-auto">
                <div className="flex-1">
                    <div className="dropdown">
                        <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabindex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                            <li><a className="btn text-base font-semibold gradient-one flex items-center"><FaPlus/>New Ticket</a></li>
                        </ul>
                    </div>
                    <a className="font-bold text-2xl">CS — Ticket System</a>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li><a className="btn text-base font-semibold gradient-one flex items-center"><FaPlus/>New Ticket</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;