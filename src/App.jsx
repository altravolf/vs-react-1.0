import './App.scss'
import AboutUs from "./components/AboutUs/AboutUs"
import Carousel from "./components/Carousel/Carousel"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Courses from "./components/Courses/Courses"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <Carousel />
      <AboutUs />
      <Courses />
      <Footer />
    </>
  )
}

export default App
