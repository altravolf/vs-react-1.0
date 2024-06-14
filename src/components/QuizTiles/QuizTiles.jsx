import './QuizTiles.scss';
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";

function QuizTiles({ mcqData }) {

    const { current, setCurrent, selectedAnswer } = useContext(SiteDataContext);

    const onTileClick = (questionIdx) => {
        setCurrent(questionIdx);
    }





    return (
        <div className="QuizTiles d-flex flex-wrap gap-3 justify-content-center">
            {
                mcqData.map((mcq, questionIdx) => (
                    <div className={`tile ${current === questionIdx ? "active" : ""} ${selectedAnswer[mcq.id] ? "selected" : ""} rounded-5`} key={questionIdx} onClick={() => onTileClick(questionIdx)}>
                        {mcq.id}
                    </div>
                ))
            }
        </div>
    );
}

export default QuizTiles;
