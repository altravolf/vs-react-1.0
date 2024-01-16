import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home"

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./pages/About/About";

function App() {

  useEffect(() => {
    AOS.init({
      // Customize AOS settings here, if needed
      duration: 300,
      easing: 'ease-in',
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
