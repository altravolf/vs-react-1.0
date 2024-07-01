

import { useState } from "react";
import SiteDataContext from "./siteDataContext";
import mcqData from "../../data/mcqData.json";
import studentData from "../../data/studentData.json"
import courses from "../../data/courseData.json"
import cardData from "../../data/aboutCardData.json"

const SiteState = (props) => {

    const [entry, setEntry] = useState(true);
    const [quiz, setQuiz] = useState(false);
    const [result, setResult] = useState(false);
    const [current, setCurrent] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState({});
    const [studentInfo, setStudentInfo] = useState({});


    return (
        <SiteDataContext.Provider value={{ cardData, courses, studentData, entry, quiz, result, setEntry, setQuiz, setResult, mcqData, current, setCurrent, selectedAnswer, setSelectedAnswer, studentInfo, setStudentInfo }}>
            {props.children}
        </SiteDataContext.Provider>
    )
}

export default SiteState;