import { useEffect, useState, useContext } from "react";
import './CountdownTimer.scss';
import SiteDataContext from "../../context/siteData/siteDataContext";
import { enqueueSnackbar } from "notistack";
import emailjs from '@emailjs/browser';


const serviceKey = import.meta.env.VITE_SERVICE_KEY;
const templateKey = import.meta.env.VITE_SCHOLARSHIP_TEMPLATE_KEY;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

function CountdownTimer({ mcqTime }) {
    const { mcqData, selectedAnswer, studentInfo, setResult, setQuiz } = useContext(SiteDataContext);

    // const totalTime = mcqTime * 60;
    const totalTime = 60;
    const [timeLeft, setTimeLeft] = useState(totalTime);

    const sendEmail = (correctAnswers, wrongAnswers, skippedAnswers, totalQuestions, totalMarks) => {
        const templateParams = {
            name: studentInfo.name,
            email: studentInfo.email,
            phone: studentInfo.phone,
            total_questions: totalQuestions,
            total_correct: correctAnswers,
            total_marks: totalMarks,
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
            } else if (selectedAnswer[i] !== mcqData[i - 1].answer && selectedAnswer[i] !== undefined) {
                wrongAnswers++;
            } else {
                skippedAnswers++;
            }
        }

        const totalQuestions = mcqData.length;
        const totalMarks = (correctAnswers * 4) - (wrongAnswers * 1);

        return { correctAnswers, wrongAnswers, skippedAnswers, totalQuestions, totalMarks };
    };

    useEffect(() => {
        if (timeLeft <= 0) {
            const { correctAnswers, wrongAnswers, skippedAnswers, totalQuestions, totalMarks } = calculateResults();

            setQuiz(false);
            setResult(true);
            enqueueSnackbar('Time Up!', { variant: 'warning', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'center' } });

            sendEmail(correctAnswers, wrongAnswers, skippedAnswers, totalQuestions, totalMarks);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((t) => t - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, setQuiz]);

    const formatedTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return `${h}h ${m}m ${s}s`;
    }

    return (
        <div className="CountdownTimer">
            {formatedTime(timeLeft)}
        </div>
    );
}

export default CountdownTimer;
