import { useState, useEffect } from 'react';
import './Header.scss';
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router-dom/dist";

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 577);
        };

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        setIsMobile(window.innerWidth < 577);
        handleScroll(); // Initial check for scroll position

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={`Header sticky-top ${scrolling ? 'scrolled' : ''}`}>
            <div className={`px-3 py-2 text-black border-bottom ${scrolling ? 'scrolled' : ''}`}>
                <div className="container">

                    {isMobile ? (
                        <div className="d-flex flex-wrap align-items-center justify-content-around">
                            <Link to={"/"} className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
                                <img src="/img/logo.png" className="img-fluid logo" alt="" />
                            </Link>


                            <div className="toggle-bar" onClick={toggleMenu}>
                                <div className="" >
                                    <span>
                                        {showMenu ?
                                            (<i className="fa-solid fa-xmark"></i>) :
                                            (<i className="fa-solid fa-bars"></i>)}

                                    </span>
                                </div>
                            </div>
                            {showMenu && (
                                <NavLinks toggleMenu={toggleMenu} />
                            )}
                        </div>
                    ) : (
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
                                <img src="/img/logo.png" className="img-fluid logo" alt="" />
                            </a>
                            <NavLinks />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
