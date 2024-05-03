import './PageLoader.scss';

function PageLoader() {
    return (
        <div className="PageLoader">
            <div className="svg-wrapper" >
                <img src="/logo.png" alt="" />

                <div className="loading-text">Loading...</div>
            </div>
        </div>
    );
}

export default PageLoader;
