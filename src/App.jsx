import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Course from "./pages/Course";
import Students from "./pages/Students";
import PageLoader from "./components/PageLoader/PageLoader";

import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import SiteState from "./context/siteData/SiteState";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: 'ease-in',
      once: true,
    });

    // Adaptive timeout based on device capabilities
    const adaptiveTimeout = navigator.connection ?
      (navigator.connection.downlink < 2 ? 10000 : 5000) : 5000;

    const handleLoad = () => {
      setLoading(false);
    };

    // Set loading to false when the DOM content has been fully loaded
    document.addEventListener('DOMContentLoaded', handleLoad);

    // Fallback for any remaining resources
    window.addEventListener('load', handleLoad);

    // Timeout fallback for mobile devices
    const timer = setTimeout(() => {
      setLoading(false);
    }, adaptiveTimeout);

    // Cleanup event listeners and timer
    return () => {
      clearTimeout(timer);
      document.removeEventListener('DOMContentLoaded', handleLoad);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (loading) {
    return <PageLoader />;
  }

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

export default App;
