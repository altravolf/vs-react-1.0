import { useEffect, useState } from "react";
import './CountdownTimer.scss';
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";
import { enqueueSnackbar } from "notistack";

function CountdownTimer({ mcqTime }) {

    const { setResult, setQuiz } = useContext(SiteDataContext);

    const totalTime = mcqTime * 60;
    const [timeLeft, setTimeLeft] = useState(totalTime);


    useEffect(() => {

        if (timeLeft <= 0) {
            setQuiz(false);
            setResult(true);
            enqueueSnackbar('Time Up!', { variant: 'warning', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'center' } });
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
