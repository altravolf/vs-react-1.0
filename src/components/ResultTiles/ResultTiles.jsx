import ResultModal from "../ResultModal/ResultModal";
import './ResultTiles.scss';

function ResultTiles({ mcqData, selectedAnswer }) {

    return (
        <div className="ResultTiles d-flex flex-wrap gap-3 justify-content-center">
            {
                mcqData.map((mcq, questionIdx) => {
                    const hasSelectedAnswer = selectedAnswer[mcq.id] !== undefined;
                    const isCorrect = selectedAnswer[mcq.id] === mcq.answer;
                    const isIncorrect = hasSelectedAnswer && !isCorrect;
                    const tileClass = `tile ${isCorrect ? "correct" : ""} ${isIncorrect ? "incorrect" : ""} rounded-5`;
                    return (
                        <>
                            {mcq && (
                                <div className={tileClass}
                                    key={questionIdx}
                                    data-bs-toggle="modal"
                                    data-bs-target={`#modal-${mcq.id}`}>
                                    {mcq.id}
                                </div>
                            )}
                            <ResultModal mcq={mcq} selectedAnswer={selectedAnswer} />
                        </>
                    );
                })
            }
        </div>
    );
}

export default ResultTiles;
