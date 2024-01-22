import './Home.scss';
import AboutUs from "../../components/AboutUs/AboutUs";
import Courses from "../../components/Courses/Courses"
import Carousel from "../../components/Carousel/Carousel"
// import AdmissionProcess from "../../components/AdmissionProcess/AdmissionProcess";

function Home() {
    return (
        <>
            <Carousel />
            {/* <AdmissionProcess /> */}
            <AboutUs />
            <Courses />
        </>
    );
}

export default Home;
