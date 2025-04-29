// import React from 'react';

// const Products = () => {
//     return (
//         <section className="py-16  text-center px-4">
//             <h2 className="text-3xl headline-color font-semibold mb-4">Our Products</h2>
//             <p className="max-w-3xl mx-auto mb-6 ">
//                 Explore handcrafted spice blends and exclusive kitchen essentials curated by CHEF DAWN.
//             </p>
//             <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//                 {/* Replace below with mapped product cards */}
//                 <div className="bg-white headline-color shadow-md p-6 rounded">Spice Blend</div>
//                 <div className="bg-white headline-color shadow-md p-6 rounded">Cooking Oil</div>
//                 <div className="bg-white headline-color shadow-md p-6 rounded">Chef's Knife</div>
//             </div>
//         </section>
//     );
// };

// export default Products;


import React from 'react';
import spice from '../assets/Products/spice.png';
import oil from '../assets/Products/oil.png';
import knife from '../assets/Products/knife.png';

const Products = () => {
    const productData = [
        {
            name: "Spice Blend",
            img: spice
        },
        {
            name: "Cooking Oil",
            img: oil
        },
        {
            name: "Chef's Knife",
            img: knife
        }
    ];

    return (
        <section className="py-16 text-center px-4">
            <h2 className="text-3xl headline-color font-semibold mb-4">Our Products</h2>
            <p className="max-w-3xl mx-auto mb-6">
                Explore handcrafted spice blends and exclusive kitchen essentials curated by CHEF DAWN.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {productData.map((product, idx) => (
                    <div key={idx} className="bg-white rounded shadow-md overflow-hidden">
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full object-cover"
                        />
                        <div className="p-4 headline-color font-medium text-lg">
                            {product.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
