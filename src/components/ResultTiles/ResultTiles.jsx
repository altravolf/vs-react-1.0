import ResultModal from "../ResultModal/ResultModal";
import './ResultTiles.scss';

function ResultTiles({ mcqData, selectedAnswer }) {

    return (
        <div className="ResultTiles d-flex flex-wrap gap-3 justify-content-center">
            {
                mcqData.map((mcq, questionIdx) => (
                    <div className={`tile ${selectedAnswer[mcq.id] === mcq.answer ? "correct" : ""} ${selectedAnswer[mcq.id] !== mcq.answer && selectedAnswer[mcq.id] ? "incorrect" : ""} rounded-5`} key={questionIdx} data-bs-toggle="modal" data-bs-target={`#modal-${mcq.id}`}>
                        {mcq.id}
                        <ResultModal mcq={mcq} selectedAnswer={selectedAnswer} />
                    </div>
                ))
            }
        </div>
    );
}

export default ResultTiles;
