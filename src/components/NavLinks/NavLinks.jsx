import { Link } from "react-router-dom";
import { useState } from 'react';
import './NavLinks.scss';


// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function NavLinks({ toggleMenu }) {
    const [isActive, setIsActive] = useState(window.location.pathname);
    const handleClick = (path) => {
        return setIsActive(path);
    }
    return (
        <>
            <ul className="nav  my-2 justify-content-center my-md-0 text-small" onClick={toggleMenu}>

                <li>
                    <Link to="/" className={`nav-link ${isActive === '/' ? 'active' : ''} `} onClick={() => handleClick('/')} >
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={faHouse} />
                        </div>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={`nav-link ${isActive === '/about' ? 'active' : ''} `} onClick={() => handleClick('/about')}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={faAddressCard} />
                        </div>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/courses" className={`nav-link ${isActive === '/courses' ? 'active' : ''} `} onClick={() => handleClick('/courses')}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={faReadme} />
                        </div>
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to="/students" className={`nav-link ${isActive === '/students' ? 'active' : ''} `} onClick={() => handleClick('/students')}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={faBookOpenReader} />
                        </div>
                        Students
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={`nav-link ${isActive === '/contact' ? 'active' : ''} `} onClick={() => handleClick('/contact')}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </div>
                        Contact
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default NavLinks;
