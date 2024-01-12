import './SectionHeading.scss';

function SectionHeading({ headingText }) {
    return (
        <div className="SectionHeading">
            <h2 className="heading text-center display-5 heading fw-semibold">
                <span className="title-underline">{headingText}</span>
            </h2>
        </div>
    );
}

export default SectionHeading;
