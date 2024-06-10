import './ScholarshipQuiz.scss';
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";
import QuizNavbar from "../QuizNavbar/QuizNavbar";
import QuizQuestions from "../QuizQuestions/QuizQuestions";

function ScholarshipQuiz() {
    const { mcqData } = useContext(SiteDataContext);

    return (
        <div className="ScholarshipQuiz">
            <QuizNavbar mcqData={mcqData} />
            <div className="main-content d-flex flex-column flex-md-row gap-3 mx-3">
                <div className="question-container">
                    <QuizQuestions mcqData={mcqData} />
                </div>
                <div className="tile-container">

                </div>

            </div>
        </div>
    );
}

export default ScholarshipQuiz;
