import './PageHeading.scss';

function PageHeading({ headingText }) {
    return (
        <div className="PageHeading overflow-x-hidden ">
            <h2 className="heading text-center display-5 heading fw-semibold">
                <span className="title-underline">{headingText}</span>
            </h2>
        </div>
    );
}

export default PageHeading;
