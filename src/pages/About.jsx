
import AboutUs from "../components/AboutUs/AboutUs";
import { Helmet } from "react-helmet-async";

function About() {
    return (
        <>
            <Helmet>
                <title>About VS Sehrawat Institute | Our Mission and Vision</title>
                <meta name="description" content="Learn about VS Sehrawat Institute's mission and vision. Established in 2015, we provide quality education and create opportunities for student success." />
                <meta name="author" content="Altra Volf" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>

            <AboutUs />
        </>
    );
}

export default About;
