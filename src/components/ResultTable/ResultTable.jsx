import './ResultTable.scss';

function ResultTable() {
    return (
        <div className="ResultTable table-responsive my-3">
            <table className="table table-striped table-hover table-bordered   ">
                <tbody >
                    <tr >
                        <td >Student Name</td>
                        <td>Vivek Kumar</td>
                    </tr>
                    <tr>
                        <td >Total Questions</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Total Attempts</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Total Corrects</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Total Wrong</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Total Skipped</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Total Marks</td>
                        <td>80</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;
