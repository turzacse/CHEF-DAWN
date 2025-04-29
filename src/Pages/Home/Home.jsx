import React from 'react';
import Banner from '../../Components/Banner';
import AboutChef from '../../Components/AboutChef';
import Products from '../../Components/Products';
import SignatureDishes from '../../Components/SignatureDishes';
import Gallery from '../../Components/Gallery';
import ContactSection from '../../Components/ContactSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutChef />
            <Products />
            <SignatureDishes />
            <Gallery />
            <ContactSection />
        </div>
    );
};

export default Home;