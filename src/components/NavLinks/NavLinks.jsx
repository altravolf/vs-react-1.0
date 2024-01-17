import { Link } from "react-router-dom";
import { useState } from 'react';
import './NavLinks.scss';

function NavLinks() {
    const [isActive, setIsActive] = useState(window.location.pathname);
    const handleClick = (path) => {
        return setIsActive(path);
    }
    return (
        <>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">

                <li>
                    <Link to="/" className={`nav-link ${isActive === '/' ? 'active' : ''} `} onClick={() => handleClick('/')} >
                        <div className="nav-icon">
                            <i className="fa-solid fa-house"></i>
                        </div>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={`nav-link ${isActive === '/about' ? 'active' : ''} `} onClick={() => handleClick('/about')}>
                        <div className="nav-icon">
                            <i className="fa-solid fa-address-card"></i>
                        </div>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/courses" className={`nav-link ${isActive === '/courses' ? 'active' : ''} `} onClick={() => handleClick('/courses')}>
                        <div className="nav-icon">
                            <i className="fa-brands fa-readme"></i>
                        </div>
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to="/students" className={`nav-link ${isActive === '/students' ? 'active' : ''} `} onClick={() => handleClick('/students')}>
                        <div className="nav-icon">
                            <i className="fa-solid fa-book-open-reader"></i>
                        </div>
                        Students
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={`nav-link ${isActive === '/contact' ? 'active' : ''} `} onClick={() => handleClick('/contact')}>
                        <div className="nav-icon">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        Contact
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default NavLinks;
