import React from 'react';

const Banner = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[url('/images/hero.jpg')] bg-cover bg-center text-white">
            <div className="bg-black bg-opacity-60 p-10 rounded text-center max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to CHEF DAWN</h1>
                <p className="text-lg md:text-xl">
                    Showcasing the chef’s culinary philosophy and signature style.
                </p>
            </div>
        </section>
    );
};

export default Banner;