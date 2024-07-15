import ScholarshipEntry from "../components/ScholarshipEntry/ScholarshipEntry";
import ScholarshipQuiz from "../components/ScholarshipQuiz/ScholarshipQuiz";
import ScholarshipResult from '../components/ScholarshipResult/ScholarshipResult';
import SiteDataContext from "../context/siteData/siteDataContext";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";


function ScholarshipTest() {
    const { entry, quiz, result, } = useContext(SiteDataContext);

    return (
        <div className="ScholarshipTest container">
            <Helmet>
                <title>VS Sehrawat Institute | Scholarship Test</title>
                <meta name="description" content="Apply for our scholarship test. Take the test and get your chance to be part of our family. " />
                <meta name="author" content="Altra Volf" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            {entry ? <ScholarshipEntry /> : null}
            {quiz ? <ScholarshipQuiz /> : null}
            {result ? <ScholarshipResult /> : null}
        </div>
    );

}

export default ScholarshipTest;
