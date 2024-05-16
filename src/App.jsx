import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from 'react';


import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Course from "./pages/Course";
import Students from "./pages/Students";
// import PageLoader from "./components/PageLoader/PageLoader";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import SiteState from "./context/siteData/SiteState";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";


function App() {
  // ! PageLoader removed
  /* const [loading, setLoading] = useState(true); */

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: 'ease-in',
      once: true,
    });

    // ! PageLoader removed
    /*   const handleLoad = () => {
        setLoading(false);
      };
  
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }
  
      // Cleanup event listener
      return () => {
        window.removeEventListener('load', handleLoad);
      }; */

  }, []);

  // ! PageLoader removed
  /* if (loading) {
    return <PageLoader />;
  } */

  return (
    <>
      <HelmetProvider>
        <SiteState>
          <BrowserRouter>
            <Header />
            <ScrollToTop />
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
        </SiteState>
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App
