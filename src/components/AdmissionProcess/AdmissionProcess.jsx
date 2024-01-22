import './AdmissionProcess.scss';
import PageHeading from "../PageHeading/PageHeading";
import SectionHeading from "../SectionHeading/SectionHeading";

function AdmissionProcess() {

    const steps = [
        {
            step: "Inquiry",
            description: "Reach out to us via our contact form, email, or phone number. Our team will guide you through the courses we offer and help you choose the one that suits your needs."
        },
        {
            step: "Application",
            description: "Fill out our online application form with the necessary details."
        },
        {
            step: "Review",
            description: "Our team will review your application and get back to you within a specified period."
        },
        {
            step: "Admission",
            description: "Once your application is approved, you’ll need to pay the course fee to secure your admission."
        }
    ]


    return (
        <div className="AdmissionProcess container">
            {window.location.pathname === "/about" ? <PageHeading headingText={"Admission Process"} /> : <SectionHeading headingText={"Admission Process"} />}

            <div className="text-container mt-3">
                <p className="lead">
                    Welcome to the VS Sehrawat Institute’s admission process. We believe in a transparent and straightforward admission process. Here’s how it works:
                </p>

                <ol className="ol-list">
                    {steps.map((step, i) => {
                        return <li key={i}><strong>{step.step}: </strong> {step.description}</li>
                    })}
                </ol>


            </div>

        </div>
    );
}

export default AdmissionProcess;
