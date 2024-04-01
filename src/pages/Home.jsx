import AboutUs from "../components/AboutUs/AboutUs";
import Courses from "../components/Courses/Courses"
import Carousel from "../components/Carousel/Carousel"
import Students from "./Students";
import { Helmet } from "react-helmet-async";
// import AdmissionProcess from "../../components/AdmissionProcess/AdmissionProcess";

function Home() {
    return (

        <>

            <Helmet>
                <title>NEET Coaching in Palwal</title>
                <meta name="description" content="Best NEET coaching faculty available in Palwal. Offering NCERT-based Biology, Chemistry, and Physics courses. Join us for NEET success." />
                <meta name="author" content="Altra Volf" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />

            </Helmet>


            <Carousel />
            {/* <AdmissionProcess /> */}
            <AboutUs />
            <Courses />
            <Students />
        </>
    );
}

export default Home;
