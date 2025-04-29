import React from 'react';
import dish1 from '../assets/Dish/dish1.png';
import dish2 from '../assets/Dish/dish2.png';
import dish3 from '../assets/Dish/dish3.png';

const SignatureDishes = () => {
    return (
        <section className="py-16 text-center px-4">
            <h2 className="text-3xl font-semibold headline-color mb-4">Signature Dishes</h2>
            <p className="max-w-3xl mx-auto mb-6">
                A curated selection of the chef’s most iconic and beloved creations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white rounded shadow-md overflow-hidden">
                    <img src={dish1} alt="Dish One" className="w-full  object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold headline-color">Elegant Appetizer</h3>
                    </div>
                </div>
                <div className="bg-white rounded shadow-md overflow-hidden">
                    <img src={dish2} alt="Dish Two" className="w-full  object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold headline-color">Modern Fusion Entrée</h3>
                    </div>
                </div>
                <div className="bg-white rounded shadow-md overflow-hidden">
                    <img src={dish3} alt="Dish Three" className="w-full  object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold headline-color">Signature Dessert</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignatureDishes;
