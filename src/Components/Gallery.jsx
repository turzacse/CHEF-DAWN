// import React from 'react';

// const Gallery = () => {
//     return (
//         <section className="py-16  text-center px-4">
//             <h2 className="text-3xl font-semibold mb-4 headline-color">Gallery</h2>
//             <p className="max-w-3xl mx-auto mb-6">
//                 A visual feast of vibrant dishes, behind-the-scenes moments, and highlights.
//             </p>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
//                 {/* Replace with actual images */}
//                 <div className="h-40 bg-gray-300 rounded-lg"></div>
//                 <div className="h-40 bg-gray-300 rounded-lg"></div>
//                 <div className="h-40 bg-gray-300 rounded-lg"></div>
//                 <div className="h-40 bg-gray-300 rounded-lg"></div>
//             </div>
//         </section>
//     );
// };

// export default Gallery;




import React from 'react';
import img1 from '../assets/Gallery/img1.png';
import img2 from '../assets/Gallery/img4.png';
import img3 from '../assets/Gallery/img3.png';
import img4 from '../assets/Gallery/img2.png';

const Gallery = () => {
    return (
        <section className="py-16 text-center px-4">
            <h2 className="text-3xl font-semibold mb-4 headline-color">Gallery</h2>
            <p className="max-w-3xl mx-auto mb-6">
                A visual feast of vibrant dishes, behind-the-scenes moments, and highlights.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <img src={img1} alt="Gallery 1" className=" w-full object-cover rounded-lg" />
                <img src={img2} alt="Gallery 2" className=" w-full object-cover rounded-lg" />
                <img src={img3} alt="Gallery 3" className=" w-full object-cover rounded-lg" />
                <img src={img4} alt="Gallery 4" className=" w-full object-cover rounded-lg" />
            </div>
        </section>
    );
};

export default Gallery;
