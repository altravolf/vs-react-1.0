import './PathDetecter.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";

function PathDetecter() {
    const { quiz, setQuiz, setEntry } = useContext(SiteDataContext);

    const location = useLocation();

    useEffect(() => {
        if (quiz && location.pathname !== '/scholarshipTest') {
            setQuiz(false);
            setEntry(true);
        }
    }, [location, quiz, setQuiz, setEntry]);

    return null; // This component doesn't render anything
}

export default PathDetecter;
