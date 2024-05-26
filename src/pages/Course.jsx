import Courses from "../components/Courses/Courses";
import { Helmet } from "react-helmet-async";

function Course() {
    return (
        <div className="Course">

            <Helmet>
                <title>Courses Offered at VS Sehrawat Institute | Explore Our Programs</title>
                <meta name="description" content="Explore the diverse range of courses offered at VS Sehrawat Institute. From undergraduate to professional programs, find the right course to enhance your knowledge and skills." />
                <meta name="author" content="Altra Volf" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>

            <Courses />
        </div>
    );
}

export default Course;