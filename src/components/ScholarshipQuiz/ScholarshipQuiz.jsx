import './ScholarshipQuiz.scss';
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";
import QuizNavbar from "../QuizNavbar/QuizNavbar";
import QuizQuestions from "../QuizQuestions/QuizQuestions";
import QuizTiles from "../QuizTiles/QuizTiles";
import QuizModal from "../QuizModal/QuizModal";
import { enqueueSnackbar } from "notistack";

function ScholarshipQuiz() {
    const { mcqData, setResult, setQuiz } = useContext(SiteDataContext);

    const onSubmitResult = () => {
        setResult(true);
        setQuiz(false);
        enqueueSnackbar('Test Submitted Successfully!', { variant: 'success', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'center' } });
        window.scrollTo(0, 0);
    }

    return (
        <div className="ScholarshipQuiz rounded mt-3 shadow pb-3">
            <QuizNavbar mcqData={mcqData} />
            <div className="main-content d-flex flex-column flex-lg-row gap-3 mx-3 my-3">
                <div className="question-container">
                    <QuizQuestions mcqData={mcqData} />
                </div>
                <div className="tile-container">
                    <QuizTiles mcqData={mcqData} />
                </div>
            </div>
            <QuizModal onSubmitResult={onSubmitResult} />
            <div className="text-center">
                <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Submit </button>
            </div>
        </div>
    );
}

export default ScholarshipQuiz;
