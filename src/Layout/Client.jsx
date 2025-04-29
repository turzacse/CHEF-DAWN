import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Client = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-[#0F0F0F] text-color'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Client;