import logo from "../../assets/img/logo.png";

export default function Header() {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    {/* <!-- <h1 class="logo me-auto text-center"><a href="index.html">VS Sehrawat Institute</a></h1> --> */}
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <a href="index.html" className="me-auto logo"><img src={logo} alt="VS Sehrawat Institute"
                        className="img-fluid" /></a>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="active" href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="trainers.html">Trainer</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    {/* <!-- .navbar --> */}

                    <a href="courses.html" className="get-started-btn">Get Started</a>

                </div>
            </header>
        </>
    )
}
