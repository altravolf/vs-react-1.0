import './QuizNavbar.scss';
import CountdownTimer from "../CountdownTimer/CountdownTimer";

function QuizNavbar({ mcqData }) {

    return (
        <div className="QuizNavbar w-100">
            <div className="quiz-navbar row  mx-auto text-center ">
                <div className="fs-5 quiz-head-box col-6 col-md-3 d-none d-md-block">
                    <div className="fw-bold">Total Question</div>
                    <div className="">{mcqData.length}</div>
                </div>
                <div className="fs-5 quiz-head-box col-6 col-md-3 d-none d-md-block">
                    <div className="fw-bold">Total Marks</div>
                    <div className="">{mcqData.length * 4}</div>
                </div>
                <div className="fs-5 quiz-head-box col-6 col-md-3">
                    <div className="fw-bold">Total Time</div>
                    <div className="">{mcqData.length * 1} Minutes</div>
                </div>
                <div className="fs-5 quiz-head-box col-6 col-md-3">
                    <div className="fw-bold">Time Left</div>
                    <div className=""> <CountdownTimer mcqTime={mcqData.length} /> </div>
                </div>
            </div>
        </div>
    );
}

export default QuizNavbar;
