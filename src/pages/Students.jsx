import StudentGrid from "../components/StudentGrid/StudentGrid";
import PageHeading from "../components/PageHeading/PageHeading";
import SectionHeading from "../components/SectionHeading/SectionHeading";

function Students() {
    return (
        <div className="Students">

            {window.location.pathname === "/students" ? <PageHeading headingText={"Our Students"} /> : <SectionHeading headingText={"Our Students"} />}

            <StudentGrid />
        </div>
    );
}

export default Students;
