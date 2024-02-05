import StudentGrid from "../components/StudentGrid/StudentGrid";
import PageHeading from "../components/PageHeading/PageHeading";

function Students() {
    return (
        <div className="Students">
            <PageHeading headingText={"Students"} />
            <StudentGrid />
        </div>
    );
}

export default Students;
