import './ScholarshipQuiz.scss';
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";
import QuizNavbar from "../QuizNavbar/QuizNavbar";
import QuizQuestions from "../QuizQuestions/QuizQuestions";
import QuizTiles from "../QuizTiles/QuizTiles";
import QuizModal from "../QuizModal/QuizModal";
import { enqueueSnackbar } from "notistack";
import emailjs from '@emailjs/browser';


const serviceKey = import.meta.env.VITE_SERVICE_KEY;
const templateKey = import.meta.env.VITE_SCHOLARSHIP_TEMPLATE_KEY;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

function ScholarshipQuiz() {
    const { mcqData, setResult, setQuiz, selectedAnswer, studentInfo } = useContext(SiteDataContext);

    const sendEmail = (correctAnswers, wrongAnswers, skippedAnswers, totalQuestions, totalMarks) => {
        const templateParams = {
            name: studentInfo.name,
            email: studentInfo.email,
            phone: studentInfo.phone,
            total_questions: totalQuestions,
            total_marks: totalMarks,
            total_correct: correctAnswers,
            total_wrong: wrongAnswers,
            total_skipped: skippedAnswers,
        };

        emailjs.send(serviceKey, templateKey, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                enqueueSnackbar('Email sent successfully!', { variant: 'success', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'center' } });
            }, (error) => {
                console.error('FAILED...', error);
                enqueueSnackbar('Failed to send email.', { variant: 'error', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'center' } });
            });
    };

    const calculateResults = () => {
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let skippedAnswers = 0;

        for (let i = 1; i <= mcqData.length; i++) {
            if (selectedAnswer[i] === mcqData[i - 1].answer) {
                correctAnswers++;
            } else if (selectedAnswer[i] != mcqData[i - 1].answer && selectedAnswer[i] !== undefined) {
                wrongAnswers++;
            } else {
                skippedAnswers++;
            }
        }

        const totalQuestions = mcqData.length;
        const totalMarks = (correctAnswers * 4) - (wrongAnswers * 1);

        return { correctAnswers, wrongAnswers, skippedAnswers, totalQuestions, totalMarks };
    };

    const onSubmitResult = () => {
        const { correctAnswers, wrongAnswers, skippedAnswers, totalQuestions, totalMarks } = calculateResults();

        setResult(true);
        setQuiz(false);
        enqueueSnackbar('Test Submitted Successfully!', { variant: 'success', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'center' } });
        window.scrollTo(0, 0);

        sendEmail(correctAnswers, wrongAnswers, skippedAnswers, totalQuestions, totalMarks);

        console.log(`Correct Answers: ${correctAnswers} | Wrong Answers: ${wrongAnswers} | Skipped Answers: ${skippedAnswers} | Total Marks: ${totalMarks} | Total Questions: ${totalQuestions} | Student Info: ${JSON.stringify(studentInfo)}`);
    };

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
