import { Link } from "react-router-dom";
import './Scholarship.scss';

function Scholarship() {
    return (
        <div className="Scholarship ">
            <div className=" d-flex container py-5 align-items-center gap-3">
                <div className=" text-white flex-left">
                    <div className="display-5 fw-bold title">
                        <span >Scholarship </span> For Every <span> Bright Student</span>
                    </div>
                    <div className="lead pt-2 fs-4">
                        <p>
                            We are thrilled to announce our Scholarship Program. Every student can join our family to acheive their goals.
                        </p>
                    </div>
                    <div className="btn-container">
                        <Link to="/scholarshipTest" className="btn btn-light fs-5 px-4 "> Apply Now </Link>
                    </div>
                </div>
                <div className="flex-right">
                    <img className="mw-100" src="/img/scholarship.jpg" alt="Scholarship woman image" />
                </div>
            </div>
        </div>
    );
}

export default Scholarship;
