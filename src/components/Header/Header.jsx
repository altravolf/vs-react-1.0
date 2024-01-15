// ! remove if not needed

// import "./Header.scss";

// function Header() {


//     return (
//         <header className="Header sticky-top bg-white">
//             <div className="px-3 py-2 text-black border-bottom">
//                 <div className="container">
//                     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//                         <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
//                             <img src="/img/logo.png" className="img-fluid logo" alt="" />
//                         </a>
//                         <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
// <li>
//     <a href="#" className="nav-link">
//         <div className="nav-icon">
//             <i className="fa-solid fa-house"></i>
//         </div>
//         Home
//     </a>
// </li>
// <li>
//     <a href="#" className="nav-link">
//         <div className="nav-icon">
//             <i className="fa-solid fa-address-card"></i>
//         </div>
//         About
//     </a>
// </li>
// <li>
//     <a href="#" className="nav-link">
//         <div className="nav-icon">
//             <i className="fa-brands fa-readme"></i>
//         </div>
//         Courses
//     </a>
// </li>
// <li>
//     <a href="#" className="nav-link">
//         <div className="nav-icon">
//             <i className="fa-solid fa-book-open-reader"></i>
//         </div>
//         Students
//     </a>
// </li>
// <li>
//     <a href="#" className="nav-link">
//         <div className="nav-icon">
//             <i className="fa-solid fa-phone-volume"></i>
//         </div>
//         Contact
//     </a>
// </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//         </header>

//     );
// }

// export default Header;


import { useState, useEffect } from 'react';
import './Header.scss';

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
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
                                <img src="/img/logo.png" className="img-fluid logo" alt="" />
                            </a>


                            <div className="toggle-bar">
                                <div className="" onClick={toggleMenu}>
                                    <span>
                                        <i className="fa-solid fa-bars"></i>
                                    </span>
                                </div>
                            </div>

                            {showMenu && (
                                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                    <li>
                                        <a href="#" className="nav-link">
                                            <div className="nav-icon">
                                                <i className="fa-solid fa-house"></i>
                                            </div>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link">
                                            <div className="nav-icon">
                                                <i className="fa-solid fa-address-card"></i>
                                            </div>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link">
                                            <div className="nav-icon">
                                                <i className="fa-brands fa-readme"></i>
                                            </div>
                                            Courses
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link">
                                            <div className="nav-icon">
                                                <i className="fa-solid fa-book-open-reader"></i>
                                            </div>
                                            Students
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link">
                                            <div className="nav-icon">
                                                <i className="fa-solid fa-phone-volume"></i>
                                            </div>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
                                <img src="/img/logo.png" className="img-fluid logo" alt="" />
                            </a>
                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                {/* Your regular navigation items */}
                                <li>
                                    <a href="#" className="nav-link">
                                        <div className="nav-icon">
                                            <i className="fa-solid fa-house"></i>
                                        </div>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <div className="nav-icon">
                                            <i className="fa-solid fa-address-card"></i>
                                        </div>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <div className="nav-icon">
                                            <i className="fa-brands fa-readme"></i>
                                        </div>
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <div className="nav-icon">
                                            <i className="fa-solid fa-book-open-reader"></i>
                                        </div>
                                        Students
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <div className="nav-icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </div>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
