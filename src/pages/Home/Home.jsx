import './Home.scss';
import AboutUs from "../../components/AboutUs/AboutUs";
import Courses from "../../components/Courses/Courses"
import Carousel from "../../components/Carousel/Carousel"

function Home() {
    return (
        <>
            <Carousel />
            <AboutUs />
            <Courses />
        </>
    );
}

export default Home;
