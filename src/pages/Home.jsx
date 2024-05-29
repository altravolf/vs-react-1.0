import AboutUs from "../components/AboutUs/AboutUs";
import Courses from "../components/Courses/Courses"
// import Carousel from "../components/Carousel/Carousel"
import Students from "./Students";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm/ContactForm";
import SectionHeading from "../components/SectionHeading/SectionHeading";
// import AdmissionProcess from "../../components/AdmissionProcess/AdmissionProcess";
import Scholership from "../components/Scholarship/Scholarship";

function Home() {
    return (

        <>

            <Helmet>
                <title>VS Sehrawat Institute | NEET Coaching in Palwal</title>
                <meta name="description" content="Best NEET coaching faculty available in Palwal. Offering NCERT-based Biology, Chemistry, and Physics courses. Join us for NEET success. " />
                <meta name="author" content="Altra Volf" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />

            </Helmet>
            <Scholership />

            {/* <Carousel /> */}
            {/* <AdmissionProcess /> */}
            <AboutUs />
            <Courses />
            <Students />
            <div className="">
                <SectionHeading headingText="Contact Us" />
                <ContactForm />
            </div>
        </>
    );
}

export default Home;
