import Header from '../src/pages/Header'
import Home from '../src/pages/Home'
import Footer from '../src/pages/Footer'
import MediaSpotlight from './pages/MediaSpotlight';
import OurValues from './pages/OurValues';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header /> {/* Stays persistent across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* Add more routes as needed */}
       <Route path="/products" element={<Products />} />
       <Route path="/ourValues" element={<OurValues />} />
       <Route path="/testimonials" element={<Testimonials />} />
       <Route path="/mediaSpotlight" element={<MediaSpotlight />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
