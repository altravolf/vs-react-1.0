import './ScholarshipResult.scss';
import ResultTable from "../ResultTable/ResultTable";
import PageHeading from "../PageHeading/PageHeading";

function ScholarshipResult() {
    return (
        <div className="ScholarshipResult my-3">
            <PageHeading headingText="Scholarship Result" />

            <ResultTable />
        </div>
    );
}

export default ScholarshipResult;
