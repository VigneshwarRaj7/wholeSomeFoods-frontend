import React, { useState,useEffect } from 'react';

import productImg from '../assets/banner-removebg.png';
import img1 from '../assets/tayto1.png';
import img2 from '../assets/tayto2.png';
import img3 from '../assets/tayto3.png';
import img4 from '../assets/tayto4.png';
import img5 from '../assets/tayto5.png';
import img6 from '../assets/periperi.png';
import { Link } from 'react-router-dom';
import Products from './Products';


// import { useLocation } from 'react-router-dom';


const Home = () => {

//     const location = useLocation();

//   useEffect(() => {
//     const scrollToHash = () => {
//       if (location.hash) {
//         const id = location.hash.replace('#', '');
//         const el = document.getElementById(id);
//         if (el) {
//           el.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     };

//     // scroll on initial mount
//     scrollToHash();

//     // scroll again if hash changes (navigation to same page)
//     const unlisten = () => {
//       window.addEventListener('hashchange', scrollToHash);
//       return () => window.removeEventListener('hashchange', scrollToHash);
//     };

//     const cleanup = unlisten();
//     return cleanup;
//   }, [location]);

const carouselImages = [img1, img2, img3, img4, img5, img6];
const [currentIndex, setCurrentIndex] = useState(0);

// Auto-play every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);

  return (

      
    //   {/* Text Content */}
    
    <div className='font-kara flex flex-col md:flex md:flex-row py-10 min-h-screen items-center justify-center'>
        <div className="text-center -mt-24 sm:text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4A773C] mb-4">
          Discover the Power of Organic Fox Nuts
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mb-6">
          Healthy. Crunchy. Guilt-Free. Our organic fox nuts are roasted to perfection — the ultimate snack for mindful munching in Europe.
        </p>
        <div className='flex items-center justify-center  mr-20'>
            <Link to="/products" ><a id='btn-mini'
            className=" inline-block bg-[#4A773C] text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-full hover:bg-[#3e6433] transition"
            >
            Explore more
            </a></Link>
        </div>
        </div>

      {/* Product Image */}
     {/* Product Image (larger) */}
        {/* <div className="w-full mt-10 md:mt-0  md:mr-10 sm:w-1/2 max-w-xl flex justify-center ">
        <img
            src={productImg}
            alt="Fox Nut Snack"
            className="w-full h-auto object-center mr-50 scale-150 sm:scale-[1.8] sm:-translate-y-8"
        />

        </div> */}
        <div className="relative w-1/2 ml-4  md:-mt-40 md:w-1/2 max-w-xl flex items-center justify-center h-[24rem] sm:h-[28rem]">
          {carouselImages.map((img, index) => {
            const total = carouselImages.length;
            const relativeIndex = (index - currentIndex + total) % total;
            let offset = relativeIndex;
            if (offset > Math.floor(total / 2)) offset -= total;

            const translateX = offset * 80;
            const scale = 1 - Math.abs(offset) * 0.1;
            const zIndex = 100 - Math.abs(offset);

            return (
              <img
                key={index}
                src={img}
                alt={`carousel-${index}`}
                className="absolute transition-all duration-700 object-contain min-h-[500px] md:max-h-[500px] sm:max-h-[24rem]"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
              />
            );
          })}
        </div>
    </div>
    
  );
};

export default Home;
