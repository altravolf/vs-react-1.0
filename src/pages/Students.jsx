import StudentGrid from "../components/StudentGrid/StudentGrid";

import { Helmet } from "react-helmet-async";

function Students() {
    return (
        <div className="Students">

            <Helmet>
                <title>NEET Achievers | VS Sehrawat Institute</title>
                <meta name="description" content="Celebrate the success of our students who have qualified for the NEET exam. Discover their stories, achievements, and how VS Sehrawat Institute supported their journey to success." />
                <meta name="author" content="Altra Volf" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>



            <StudentGrid />
        </div>
    );
}

export default Students;
