import ScholarshipEntry from "../components/ScholarshipEntry/ScholarshipEntry";
import ScholarshipQuiz from "../components/ScholarshipQuiz/ScholarshipQuiz";
import ScholarshipResult from '../components/ScholarshipResult/ScholarshipResult';
import SiteDataContext from "../context/siteData/siteDataContext";
import { useContext } from "react";


function ScholarshipTest() {
    const { entry, quiz, result, } = useContext(SiteDataContext);


    return (
        <div className="ScholarshipTest container">
            {entry ? <ScholarshipEntry /> : null}
            {quiz ? <ScholarshipQuiz /> : null}
            {result ? <ScholarshipResult /> : null}
        </div>
    );

}

export default ScholarshipTest;
