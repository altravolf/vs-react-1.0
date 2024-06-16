import './QuizModal.scss';

function QuizModal({ onSubmitResult }) {
    return (
        <div className="QuizModal">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className="modal-body fs-5 text-center">
                            Are you sure you want to submit the test?
                        </div>
                        <div className="modal-footer dflex justify-content-center">
                            <button type="button" className="btn btn-success" onClick={onSubmitResult} data-bs-dismiss="modal">Yes</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizModal;
