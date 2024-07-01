import './ResultTable.scss';

function ResultTable({ studentInfo, selectedAnswer, mcqData }) {

    let correctAnswers = 0;
    let wrongAnswers = 0;
    let skippedAnswers = 0;

    for (let i = 1; i <= mcqData.length; i++) {
        if (selectedAnswer[i] === mcqData[i - 1].answer) {
            correctAnswers++;
        }

        else if (selectedAnswer[i] != mcqData[i - 1].answer && selectedAnswer[i] !== undefined) {
            wrongAnswers++;
        } else {
            skippedAnswers++;
        }
    }

    const totalMarks = (correctAnswers * 4) - (wrongAnswers * 1);

    return (
        <div className="ResultTable table-responsive my-3">
            <table className="table table-striped table-hover table-bordered   ">
                <tbody >
                    <tr >
                        <td >Student Name</td>
                        <td>{studentInfo.name}</td>
                    </tr>
                    <tr>
                        <td >Total Questions</td>
                        <td>{mcqData.length}</td>
                    </tr>
                    <tr>
                        <td>Total Attempts</td>
                        <td>{Object.keys(selectedAnswer).length}</td>
                    </tr>
                    <tr>
                        <td>Total Corrects</td>
                        <td>{correctAnswers}</td>
                    </tr>
                    <tr>
                        <td>Total Wrong</td>
                        <td>{wrongAnswers}</td>
                    </tr>
                    <tr>
                        <td>Total Skipped</td>
                        <td>{skippedAnswers}</td>
                    </tr>
                    <tr>
                        <td>Total Marks</td>
                        <td>{totalMarks}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;
