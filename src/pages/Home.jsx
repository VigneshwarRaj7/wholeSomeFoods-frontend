import React, { useState,useEffect } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import productImg from '../assets/banner-removebg.png';
import img1 from '../assets/tayto1.png';
import img2 from '../assets/tayto2.png';
import img3 from '../assets/tayto3.png';
import img6 from '../assets/tayto5.png';
import right from '../assets/rightArrow.svg';
import left from '../assets/leftArrow.svg';
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

const carouselImages = [img1, img2, img3, img6];
const [currentIndex, setCurrentIndex] = useState(0);

const blogList =[        {
                            title: 'How Foxnuts Boost Brain Function',
                            date: 'July 9, 2025',
                            slug: 'foxnuts-brain-health',
                          },
                          {
                            title: 'Easy Spiced Foxnut Recipe for Evenings',
                            date: 'July 8, 2025',
                            slug: 'spiced-foxnut-recipe',
                          },
                          {
                            title: 'Are Foxnuts Good for Diabetics?',
                            date: 'July 7, 2025',
                            slug: 'foxnuts-and-diabetes',
                          },{
                            title: 'Are Foxnuts Good for Diabetics?',
                            date: 'July 7, 2025',
                            slug: 'foxnuts-and-diabetes',
                          },{
                            title: 'Are Foxnuts Good for Diabetics?',
                            date: 'July 7, 2025',
                            slug: 'foxnuts-and-diabetes',
                          },{
                            title: 'Are Foxnuts Good for Diabetics?',
                            date: 'July 7, 2025',
                            slug: 'foxnuts-and-diabetes',
                          },{
                            title: 'Are Foxnuts Good for Diabetics?',
                            date: 'July 7, 2025',
                            slug: 'foxnuts-and-diabetes',
                          },{
                            title: 'Are Foxnuts Good for Diabetics?',
                            date: 'July 7, 2025',
                            slug: 'foxnuts-and-diabetes',
                          },{
                            title: 'Are Foxnuts Good for Diabetics?',
                            date: 'July 7, 2025',
                            slug: 'foxnuts-and-diabetes',
                          },{
                            title: 'Are Foxnuts Good for Diabetics?',
                            date: 'July 7, 2025',
                            slug: 'foxnuts-and-diabetes',
                          },{
                            title: 'Are Foxnuts Good for Diabetics?',
                            date: 'July 7, 2025',
                            slug: 'foxnuts-and-diabetes',
                          }
                        ];

// Auto-play every 3 seconds
// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//   }, 5000);
//   return () => clearInterval(interval);
// }, []);

  return (

      
    //   {/* Text Content */}
    <div className="w-full overflow-x-hidden relative z-0">
         {/* Section 1 */}
          <div className="mt-40 flex flex-col md:flex-row items-center justify-center  bg-[#E0D2B9] font-lato">
          {/* Description */}
              <div className="max-w-xl w-1/2 text-center ml-40 md:text-left">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4A773C] mb-4">
                  Wholesome by Nature. Crafted with Care.
                </h1>
                <p className="text-gray-700 md:text-2xl text-xl">Healthy eating simplified — good for you,</p>
                <p className="text-gray-700 md:text-2xl text-xl mb-6">your family, and the planet.</p>
                <div className="flex justify-center md:justify-start">
                  <Link to="/products">
                    <span className="inline-block border-2 sm:text-lg md:text-xl font-semibold px-6 py-2 rounded-br-2xl bg-[#3e6433] border-[#3e6433] text-white hover:text-[#4A773C] hover:bg-transparent transition">
                      Explore more
                    </span>
                  </Link>
                </div>
              </div>

          {/* Product Image */}
              <div className="flex w-1/2 justify-center items-center w-full max-w-xl mr-50 mt-10 md:mt-0">
                <img
                  src={productImg}
                  alt="Fox Nut Snack"
                  className="object-contain w-full max-h-[500px] scale-150 sm:scale-[1.8]"
                />
              </div>
          </div>

          {/* Section 2 */}
          <div className="min-h-screen mt-15 flex flex-col lg:flex-row items-center justify-center px-6 gap-10  lg:gap-20">
            {/* Carousel */}
              <div className="relative ml-20 md:mt-10 w-2xl flex flex-col items-center justify-center h-[24rem] sm:h-[28rem] overflow-hidden">
              
              {/* Left Arrow */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/80 p-2 rounded-full shadow hover:scale-110 transition"
                onClick={() => setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
              >
                <img src={left} alt="Left Arrow" className="h-6 w-6" />
              </button>

              {/* Carousel Images */}
              {carouselImages.map((img, index) => {
                const total = carouselImages.length;
                const relativeIndex = (index - currentIndex + total) % total;

                let zIndex, translateX, scale, opacity;

                if (relativeIndex === 0) {
                  translateX = -100;
                  zIndex = 30;
                  scale = 1;
                  opacity = 1;
                } else if (relativeIndex === 1) {
                  translateX = 100;
                  zIndex = 30;
                  scale = 1;
                  opacity = 1;
                } else if (relativeIndex === 2) {
                  translateX = 200;
                  zIndex = 10;
                  scale = 0.85;
                  opacity = 0.6;
                } else if (relativeIndex === 3) {
                  translateX = -200;
                  zIndex = 10;
                  scale = 0.85;
                  opacity = 0.6;
                } else {
                  return null;
                }

                return (
                  <img
                    key={index}
                    src={img}
                    alt={`carousel-${index}`}
                    className="absolute transition-all duration-700 object-contain min-h-[300px] max-h-[400px] md:max-h-[500px]"
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                  />
                );
              })}

              {/* Right Arrow */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/80 p-2 rounded-full shadow hover:scale-110 transition"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % carouselImages.length)}
              >
                <img src={right} alt="Right Arrow" className="h-6 w-6" />
              </button>
              </div>

            {/* Text */}
              <div className="max-w-xl text-center lg:text-left">
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4A773C] mb-4">
                    Discover Your New Favorite Foods
                  </h1>
                  <p className="text-gray-700 md:text-2xl text-xl">Healthy eating simplified — good for you,</p>
                  <p className="text-gray-700 md:text-2xl text-xl mb-6">your family, and the planet.</p>
                  <div className="flex justify-center lg:justify-start">
                    <Link to="/products">
                      <span className="inline-block border-2 sm:text-lg md:text-xl font-semibold px-6 py-2 rounded-br-2xl bg-[#3e6433] border-[#3e6433] text-white hover:text-[#4A773C] hover:bg-transparent transition">
                        Explore products
                      </span>
                    </Link>
                  </div>
              </div>
          </div>

          {/* Section 3 */}
          <div className="min-h-screen">
            {/* Blog Preview Section */}
              <div className=" py-16 px-4 sm:px-8 lg:px-24 font-lato">
                  <h1 className="text-4xl sm:text-5xl font-extrabold mb-7 text-[#4A773C] text-center "> Healthy Living: Stories and Insights</h1>
                  <div className="max-w-7xl mx-auto bg-[#F5F1E6]  rounded-5xl rounded-3xl drop-shadow-2xl shadow-black shadow p-8 flex flex-col md:flex-row gap-12">

                    {/* Spotlight Blog */}
                    <div className="md:w-2/3 w-full">
                      <h2 className="text-md font-semibold text-gray-600 mb-4">Spotlight</h2>
                      <div className="bg-[#e4dcc6]  border-green-800 rounded-2xl p-8 text-gray-700 relative overflow-hidden">
                        <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-700 uppercase mb-4 inline-block tracking-wide">
                          Foxnut Benefits
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
                          How Foxnuts Help Manage Weight & Improve Digestion
                        </h3>
                        <p className="text-sm sm:text-base  mb-6">
                          Crunchy and low-calorie, foxnuts are not just a snack but a superfood that supports your fitness journey with essential nutrients and fiber.
                        </p>
                        <p className="text-sm  mb-6">July 10, 2025</p>
                        <Link
                          to="/blogs/foxnut-digestion"
                          className="inline-block px-6 py-2 border border-green-800  rounded-full hover:bg-white hover:text-[#0A0EAF] transition font-semibold"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    {/* Latest Blog Articles */}
                    <div className="md:w-1/3 w-full">
                      <h2 className="text-md font-semibold text-gray-600 mb-4">Latest Blog Articles</h2>
                        <ul className="space-y-4">
                        {blogList
                          .slice(-6) // ← this ensures only the last 9 blogs are displayed
                          .map((blog, index) => (
                            <li key={index}>
                              <Link to={`/blogs/${blog.slug}`}>
                               
                                <h3 className="text-sm font-semibold text-[#4A773C] hover:underline border-t">{blog.title}</h3>
                                <p className="text-xs text-gray-500">{blog.date}</p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                    </div>
                  </div>
              </div>
          </div>
    </div>
    
  );
};

export default Home;

  {/* <div className="relative w-1/2 ml-4  md:-mt-40 md:w-1/2 max-w-xl flex items-center justify-center h-[24rem] sm:h-[28rem]">
              {carouselImages.map((img, index) => {
                const total = carouselImages.length;
                const relativeIndex = (index - currentIndex + total) % total;
                let offset = relativeIndex;
                if (offset > Math.floor(total / 2)) offset -= total;

                const translateX = offset * 80;
                const scale = 1 - Math.abs(offset) * 0.1;
                const zIndex = 40 - Math.abs(offset);

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
            </div> */}
            {/* <div className="relative  ml-4 md:-mt-40  w-2xl flex items-center justify-center h-[24rem] sm:h-[28rem] overflow-hidden">
        {carouselImages.map((img, index) => {
        const total = carouselImages.length;
        const relativeIndex = (index - currentIndex + total) % total;

        let zIndex, translateX, scale, opacity;

        // Positions for 4-image layout
        if (relativeIndex === 0) {
          // Front-left image
          translateX = -100;
          zIndex = 30;
          scale = 1;
          opacity = 1;
        } else if (relativeIndex === 1) {
          // Front-right image
          translateX = 100;
          zIndex = 30;
          scale = 1;
          opacity = 1;
        } else if (relativeIndex === 2) {
          // Back-right image
          translateX = 200;
          zIndex = 10;
          scale = 0.85;
          opacity = 0.6;
        } else if (relativeIndex === 3) {
          // Back-left image
          translateX = -200;
          zIndex = 10;
          scale = 0.85;
          opacity = 0.6;
        } else {
          return null; // Hide any other images
        }

        return (
          <img
            key={index}
            src={img}
            alt={`carousel-${index}`}
            className="absolute transition-all duration-700 object-contain min-h-[300px] max-h-[400px] md:max-h-[500px]"
            style={{
              transform: `translateX(${translateX}px) scale(${scale})`,
              zIndex: zIndex,
              opacity: opacity,
            }}
          />
        );
      })}
            </div> */}