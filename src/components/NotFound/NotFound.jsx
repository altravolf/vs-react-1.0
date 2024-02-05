import './NotFound.scss';

function NotFound() {
    return (
        <div className="NotFound py-5 bg-warning d-flex justify-content-center align-items-center flex-column gap-4">
            <div className="d-flex justify-content-center align-items-center   display-1 fw-bolder text-uppercase pt-5 mt-5">
                <div className="  p-1  ">
                    404 |
                </div>
                <div className="  p-1  ">
                    Not Found
                </div>
            </div>
            <div className="bg-warning pb-5 mb-5 lead fw-normal">Page, you are looking for does not exist.</div>
        </div>
    );
}

export default NotFound;
