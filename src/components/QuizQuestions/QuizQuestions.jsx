import './QuizQuestions.scss';
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";

function QuizQuestions({ mcqData }) {

    const { current, setCurrent } = useContext(SiteDataContext);

    const onPrev = () => {
        setCurrent(current - 1);
    }

    const onNext = () => {
        setCurrent(current + 1);
    }

    return (
        <div className="QuizQuestions">
            {
                mcqData.map((mcq, questionIdx) => (
                    <div className="my-3" key={questionIdx}>
                        <ol className="ol-list">
                            <li className={`mainQuestion ${current !== questionIdx ? "d-none" : ""}`} data-marker={mcq.id}>

                                <div className="question">
                                    <div className="">{mcq.question}</div>

                                    <ol className="options ps-0">
                                        {mcq.options.map((option, optionIdx) => (
                                            <li key={optionIdx} className="option form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name={`options-${questionIdx}`}
                                                    id={`option-${questionIdx}-${optionIdx}`}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`option-${questionIdx}-${optionIdx}`}
                                                >
                                                    {option}
                                                </label>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                <div className="buttons d-flex justify-content-around w-100 mt-3">
                                    <button className="btn btn-info" disabled={current === 0} onClick={onPrev}>Prev</button>
                                    <button className="btn btn-warning" disabled={current === mcqData.length - 1} onClick={onNext}>Next</button>
                                </div>
                            </li>
                        </ol>
                    </div>
                ))
            }
        </div>
    );
}

export default QuizQuestions;