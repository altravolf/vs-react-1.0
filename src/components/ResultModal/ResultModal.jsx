import './ResultModal.scss';

function ResultModal({ mcq, selectedAnswer }) {

    return (
        <div className="ResultModal">
            <div className="modal fade" id={`modal-${mcq.id}`} tabIndex="-1" aria-labelledby={`modal-${mcq.id}`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header align-items-start">
                            <h1 className="modal-title fs-5 text-dark d-flex gap-2 fw-bold lh-1 py-1" id={`modal-${mcq.id}`}>
                                <span className="fw-bold">Q{mcq.id}.</span>   {mcq.question}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body py-2">
                            <ul className="list-group text-dark ms-4 ">
                                {mcq.options.map((option, optionIdx) => (
                                    <li className={`list ${mcq.answer === option ? "correct" : `${selectedAnswer[mcq.id] === option ? "incorrect" : ""}`} `} key={optionIdx}>{option}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultModal;
