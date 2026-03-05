import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <div className='bg-black p-20 flex flex-col lg:flex-row gap-10 justify-between mt-auto'>
                <div className='max-w-sm'>
                    <h1 className='text-2xl text-white font-bold mb-2'>CS — Ticket System</h1>
                    <p className='text-gray-400'>
                        We build reliable customer support solutions that streamline communication, improve response times, and enhance operational transparency. Our platform is designed to help businesses manage tickets efficiently and deliver consistent customer experiences.
                    </p>
                </div>
                <div>
                    <h2 className='text-xl text-white font-medium mb-2'>Company</h2>
                    <ul className='text-gray-400'>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Our Mission</a></li>
                        <li><a href='#'>Contact Sales</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl text-white font-medium mb-2'>Services</h2>
                    <ul className='text-gray-400'>
                        <li><a href='#'>Products & Services</a></li>
                        <li><a href='#'>Customer Stories</a></li>
                        <li><a href='#'>Download Apps</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl text-white font-medium mb-2'>Information</h2>
                    <ul className='text-gray-400'>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Terms & Conditions</a></li>
                        <li><a href='#'>Join Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl text-white font-medium mb-2'>Social Links</h2>
                    <ul className='text-gray-400'>
                        <li className='flex items-center gap-2'><FaXTwitter className='text-white' /><a href='#'>@CS — Ticket System</a></li>
                        <li className='flex items-center gap-2'><FaLinkedin className='text-white' /><a href='#'>@CS — Ticket System</a></li>
                        <li className='flex items-center gap-2'><FaFacebook className='text-white' /><a href='#'>@CS — Ticket System</a></li>
                        <li className='flex items-center gap-2'><FaEnvelope className='text-white' /><a href='#'>support@cst.com</a></li>
                    </ul>
                </div>
            </div>
            <div className='bg-black'>
                <div className='w-11/12 mx-auto px-3'>
                    <hr className='border-t border-gray-700' />
                </div>
            </div>
            <div className='text-center text-[#FAFAFA] py-5 bg-black'>
                &copy; 2025 CS — Ticket System. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;