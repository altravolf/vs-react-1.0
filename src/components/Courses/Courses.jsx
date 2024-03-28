/* eslint-disable react/no-unescaped-entities */
import './Courses.scss';
import SectionHeading from "../SectionHeading/SectionHeading";
import PageHeading from "../PageHeading/PageHeading";
import { useContext } from "react";
import SiteDataContext from "../../context/siteData/siteDataContext";


function Courses() {
    const { courses } = useContext(SiteDataContext);

    return (

        <>
            {window.location.pathname === "/courses" ? <PageHeading headingText={"Popular Courses"} /> : <SectionHeading headingText={"Popular Courses"} />}
            <div className="Courses py-3 container">

                <div className="row justify-content-center px-3 px-md-0">

                    {courses.map((el, i) => {
                        return <div className="col-12 col-lg-4 col-md-6 my-3 cursor-pointer" data-aos="zoom-in-down" data-aos-out="zoom-in-up" key={i}>
                            <div className="card h-100" >
                                <img src={`/img/course-${i}.jpg`} className="card-img-top" alt="{i}" />

                                <div className="card-body">
                                    <div className="d-flex justify-content-between flex-wrap mb-2 align-items-center">
                                        <div className="card-type ">{el.courseType}</div>
                                        <div className="card-price h5">{el.price}</div>
                                    </div>
                                    <h5 className="card-title h5">{el.courseTitle}</h5>
                                    <p className="card-text text-muted fw-normal small">{el.description}</p>
                                </div>
                            </div>
                        </div>
                    })}

                </div>

            </div>
        </>

    );
}

export default Courses;
