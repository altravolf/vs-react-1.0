import { Link } from "react-router-dom";
import './NavLinks.scss';

function NavLinks() {
    return (
        <>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">

                <li>
                    <Link to="/" className="nav-link">
                        <div className="nav-icon">
                            <i className="fa-solid fa-house"></i>
                        </div>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="nav-link">
                        <div className="nav-icon">
                            <i className="fa-solid fa-address-card"></i>
                        </div>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/courses" className="nav-link">
                        <div className="nav-icon">
                            <i className="fa-brands fa-readme"></i>
                        </div>
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to="/students" className="nav-link">
                        <div className="nav-icon">
                            <i className="fa-solid fa-book-open-reader"></i>
                        </div>
                        Students
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link">
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
