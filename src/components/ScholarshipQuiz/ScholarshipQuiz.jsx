import './ScholarshipQuiz.scss';
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";

function ScholarshipQuiz() {
    const { mcqData } = useContext(SiteDataContext);

    return (
        <div className="ScholarshipQuiz">
            <div className="quiz-navbar d-flex justify-content-between text-center  ">
                <div className="fs-4 quiz-head-box">
                    <div className="fw-bold">Total Question</div>
                    <div className="">{mcqData.length}</div>
                </div>
                <div className="fs-4 quiz-head-box">
                    <div className="fw-bold">Total Marks</div>
                    <div className="">{mcqData.length * 4}</div>
                </div>
                <div className="fs-4 quiz-head-box">
                    <div className="fw-bold">Total Time</div>
                    <div className="">{mcqData.length * 1} Minutes</div>
                </div>
                <div className="fs-4 quiz-head-box">
                    <div className="fw-bold">Time Left</div>
                    <div className="">99:59 Minutes</div>
                </div>
            </div>
            <div className="questions">

            </div>
            <div className="question-tiles">

            </div>
        </div>
    );
}

export default ScholarshipQuiz;
