import './ScholarshipResult.scss';
import ResultTable from "../ResultTable/ResultTable";
import PageHeading from "../PageHeading/PageHeading";
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";

function ScholarshipResult() {

    const { selectedAnswer, studentInfo, mcqData } = useContext(SiteDataContext);

    return (
        <div className="ScholarshipResult my-3">
            <PageHeading headingText="Scholarship Result" />

            <ResultTable studentInfo={studentInfo} selectedAnswer={selectedAnswer} mcqData={mcqData} />
        </div>
    );
}

export default ScholarshipResult;
