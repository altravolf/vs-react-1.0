import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Course from "./pages/Course";
import Students from "./pages/Students";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/index.html" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
