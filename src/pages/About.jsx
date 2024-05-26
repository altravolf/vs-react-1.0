
import AboutUs from "../components/AboutUs/AboutUs";
import { Helmet } from "react-helmet-async";

function About() {
    return (
        <>
            <Helmet>
                <title>About VS Sehrawat Institute | Our Mission and Vision</title>
                <meta name="description" content="Learn about VS Sehrawat Institute, our mission, vision, and values. Discover how we are dedicated to providing exceptional education and creating opportunities for our students." />
                <meta name="author" content="Altra Volf" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>

            <AboutUs />
        </>
    );
}

export default About;
