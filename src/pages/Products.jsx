import React, {useState} from 'react';
import periperi from '../assets/periperi.png';
// import flavor2 from '../assets/flavor2.png';
// import flavor3 from '../assets/flavor3.png';
// import flavor4 from '../assets/flavor4.png';

const products = [
  {
    id: 1,
    name: 'Peri Peri Makhana',
    image: periperi,
    description: 'A spicy punch.',
    calories: '180 kcal',
    protein: '6g',
    fat: '3g',
    carbs: '18g',
    details: "When we're in an era of infinite possibilities, who decides what's next? This theme invites us to think expansively about the future of technology, embracing the unknown with curiosity and boldness. It speaks to the adventurers and builders among us, eager to stretch the boundaries of what's possible. By figuring out the tools, technologies, and philosophies shaping tomorrow's breakthroughs. 'To Infinity and Beyond' is not just about futuristic aspirations but reflecting on the tangible legacy and impact of our innovations today. We offer you a theme to inspire everyone to not only adapt to technological change but to steer it responsibly. It's about turning today's boldest ideas into tomorrow's realities, ensuring that innovation uplifts society while addressing its ethical complexities. Together, we ask: What's next?",
  },
  {
    id: 2,
    name: 'Minty Pudina Makhana',
    image: periperi,
    description: 'A refreshing herbal.',
    calories: '180 kcal',
    protein: '6g',
    fat: '3g',
    carbs: '18g',
    details: "When we're in an era of infinite possibilities, who decides what's next? This theme invites us to think expansively about the future of technology, embracing the unknown with curiosity and boldness. It speaks to the adventurers and builders among us, eager to stretch the boundaries of what's possible. By figuring out the tools, technologies, and philosophies shaping tomorrow's breakthroughs. 'To Infinity and Beyond' is not just about futuristic aspirations but reflecting on the tangible legacy and impact of our innovations today. We offer you a theme to inspire everyone to not only adapt to technological change but to steer it responsibly. It's about turning today's boldest ideas into tomorrow's realities, ensuring that innovation uplifts society while addressing its ethical complexities. Together, we ask: What's next?",

  },
  {
    id: 3,
    name: 'Cheesy Masala Makhana',
    image: periperi,
    description: 'Rich cheesy flavor .',
    calories: '180 kcal',
    protein: '6g',
    fat: '3g',
    carbs: '18g',
    details: "When we're in an era of infinite possibilities, who decides what's next? This theme invites us to think expansively about the future of technology, embracing the unknown with curiosity and boldness. It speaks to the adventurers and builders among us, eager to stretch the boundaries of what's possible. By figuring out the tools, technologies, and philosophies shaping tomorrow's breakthroughs. 'To Infinity and Beyond' is not just about futuristic aspirations but reflecting on the tangible legacy and impact of our innovations today. We offer you a theme to inspire everyone to not only adapt to technological change but to steer it responsibly. It's about turning today's boldest ideas into tomorrow's realities, ensuring that innovation uplifts society while addressing its ethical complexities. Together, we ask: What's next?",

  },
  {
    id: 4,
    name: 'Himalayan Salt Makhana',
    image: periperi,
    description: 'Subtle and wholesome .',
    calories: '180 kcal',
    protein: '6g',
    fat: '3g',
    details: "When we're in an era of infinite possibilities, who decides what's next? This theme invites us to think expansively about the future of technology, embracing the unknown with curiosity and boldness. It speaks to the adventurers and builders among us, eager to stretch the boundaries of what's possible. By figuring out the tools, technologies, and philosophies shaping tomorrow's breakthroughs. 'To Infinity and Beyond' is not just about futuristic aspirations but reflecting on the tangible legacy and impact of our innovations today. We offer you a theme to inspire everyone to not only adapt to technological change but to steer it responsibly. It's about turning today's boldest ideas into tomorrow's realities, ensuring that innovation uplifts society while addressing its ethical complexities. Together, we ask: What's next? When we're in an era of infinite possibilities, who decides what's next? This theme invites us to think expansively about the future of technology, embracing the unknown with curiosity and boldness. It speaks to the adventurers and builders among us, eager to stretch the boundaries of what's possible. By figuring out the tools, technologies, and philosophies shaping tomorrow's breakthroughs. 'To Infinity and Beyond' is not just about futuristic aspirations but reflecting on the tangible legacy and impact of our innovations today. We offer you a theme to inspire everyone to not only adapt to technological change but to steer it responsibly. It's about turning today's boldest ideas into tomorrow's realities, ensuring that innovation uplifts society while addressing its ethical complexities. Together, we ask: What's next?",
  },
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleKnowMore = (product) => setSelectedProduct(product);
    const handleClose = () => setSelectedProduct(null);

  return (
    <section className="flex flex-col min-h-screen px-6  mt-10 2xl:mt-20 font-outfit" id="products">
      <h2 className="text-4xl font-bold text-center text-[#4A773C] mb-12">
        Our Delicious Fox nut Flavors
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 max-w-7xl ml-4 2xl:mx-auto 2xl:gap-40">
        {products.map((product) => (
        <div
        key={product.id}
        id="card"
        className="rounded-2xl w-80 shadow-md hover:shadow-lg transition duration-300 overflow-hidden h-120"
        >
        <div
            className="h-full w-full p-3 rounded-2xl"
            style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        >
            <div className="text-center rounded-xl">
            <h3 className="text-lg font-semibold text-[#333333] ">{product.name}</h3>
            <p className="mb-4 text-sm mt-82 text-[#333333] font-bold">{product.description}</p>
            <button
                id="btn-km"
                className="bg-[#4A773C] text-white px-4 py-2 rounded-full text-sm hover:bg-[#3e6433] transition"
                onClick={() => handleKnowMore(product)}
            >
                Know more
            </button>
            </div>
        </div>
        </div>
        ))}
      </div>
    {/* Overlay product */}
        {selectedProduct && (
  <div
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001] flex items-center justify-center"
    onClick={handleClose} // <- backdrop click
  >
    <div
      className="bg-[#E0D2B9] rounded-2xl shadow-lg p-4 w-10/12 relative"
      onClick={(e) => e.stopPropagation()} // <- prevent close when clicking inside modal
    >
                <button
                onClick={handleClose}
                className="absolute top-3 right-4 text-gray-500 text-3xl hover:text-black"
                >
                &times;
                </button>
    
                <h3 className="text-2xl font-bold text-[#4A773C] text-center mt-2">
                {selectedProduct.name}
                </h3>
               
               <div className="flex flex-row max-h-48 overflow-y-auto custom-scroll">
                <div>
                    <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className=" w-40 md:w-120 h-auto mx-auto"
                    />
                </div>
                <div>
                  <p className="text-gray-700 text-center ">
                    {selectedProduct.details}
                </p>
                </div>
                </div>
                <div className="flex justify-center mt-4">
                    <a href={'/blogs'} rel="noopener noreferrer">
                    <button
                        className="bg-[#4A773C] text-white px-6 py-2 rounded-full text-sm hover:bg-[#3e6433] transition hover:scale-110 hover:cursor-pointer"
                    >
                        More about this product
                    </button>
                    </a>
                </div>
            </div>
            </div>
        )}

    </section>
  );
};

export default Products;




// import periperi from '../assets/periperi.png';

// const products = [
//   {
//     id: 1,
//     name: 'Peri Peri Makhana',
//     image: periperi,
//     description: 'A spicy punch.',
//     calories: '180 kcal',
//     protein: '6g',
//     fat: '3g',
//     carbs: '18g',
//   },
//   {
//     id: 2,
//     name: 'Minty Pudina Makhana',
//     image: periperi,
//     description: 'A refreshing herbal.',
//     calories: '170 kcal',
//     protein: '5g',
//     fat: '2g',
//     carbs: '17g',
//   },
//   {
//     id: 3,
//     name: 'Cheesy Masala Makhana',
//     image: periperi,
//     description: 'Rich cheesy flavor.',
//     calories: '200 kcal',
//     protein: '7g',
//     fat: '4g',
//     carbs: '20g',
//   },
//   {
//     id: 4,
//     name: 'Himalayan Salt Makhana',
//     image: periperi,
//     description: 'Subtle and wholesome.',
//     calories: '160 kcal',
//     protein: '6g',
//     fat: '1g',
//     carbs: '15g',
//   },
// ];

// const Products = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleKnowMore = (product) => setSelectedProduct(product);
//   const handleClose = () => setSelectedProduct(null);

//   return (
//     <section className="flex flex-col min-h-screen px-6 mt-10 2xl:mt-20 font-comic2 relative" id="products">
//       <h2 className="text-4xl font-bold text-center text-[#4A773C] mb-12">
//         Our Delicious Fox nut Flavors
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto z-10">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden h-64 bg-cover bg-center m-3"
//             style={{ backgroundImage: `url(${product.image})` }}
//           >
//             <div className="w-full h-full bg-black/40 px-6 py-8 flex flex-col justify-center items-center text-center text-white">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="mb-4 text-sm font-bold">{product.description}</p>
//               <button
//                 className="bg-[#4A773C] text-white px-4 py-2 rounded-full text-sm hover:bg-[#3e6433] transition"
//                 onClick={() => handleKnowMore(product)}
//               >
//                 Know more
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Overlay Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
//           <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl w-full relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-3 right-4 text-gray-500 text-xl hover:text-black"
//             >
//               &times;
//             </button>

//             <h3 className="text-2xl font-bold text-[#4A773C] mb-2">
//               {selectedProduct.name}
//             </h3>
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-40 h-auto mx-auto mb-4"
//             />
//             <p className="text-gray-700 mb-2">{selectedProduct.description}</p>

//             <div className="text-sm text-gray-800 space-y-1">
//               <p><strong>Calories:</strong> {selectedProduct.calories}</p>
//               <p><strong>Protein:</strong> {selectedProduct.protein}</p>
//               <p><strong>Fat:</strong> {selectedProduct.fat}</p>
//               <p><strong>Carbohydrates:</strong> {selectedProduct.carbs}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Products;