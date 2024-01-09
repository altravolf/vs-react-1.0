/* eslint-disable react/no-unescaped-entities */
import './Courses.scss';

function Courses() {

    const courses =
        [
            {
                "courseType": "NEET COURSE",
                "price": "₹95,000",
                "courseTitle": "One Year NEET Course",
                "description": "Embark on a year-long journey with us to master NEET. This comprehensive course covers Biology, Chemistry, and Physics, tailored to your unique learning style."
            },
            {
                "courseType": "NEET COURSE",
                "price": "₹1,90,000",
                "courseTitle": "Two Year NEET Course",
                "description": "Our two-year NEET program is designed for students in 11th or 12th grade. It's a perfect blend of in-depth knowledge and strong foundational skills."
            },
            {
                "courseType": "NEET CRASH COURSE",
                "price": "₹40,000",
                "courseTitle": "Four Month Crash Course",
                "description": "Boost your NEET preparation with our four-month crash course. It's designed to maximize your scores and confidence in the final stretch."
            },
            {
                "courseType": "Only Biology Special",
                "price": "₹35,000/yr",
                "courseTitle": "Biology NEET",
                "description": "Our Biology NEET course is a deep dive into 11th and 12th grade biology. With over 4000 NCERT-based questions, it's your ticket to a high NEET score."
            },
            {
                "courseType": "Only Chemistry Special",
                "price": "₹35,000/yr",
                "courseTitle": "Chemistry NEET",
                "description": "Our Chemistry NEET course is your guide to mastering 11th and 12th grade chemistry. With 4000+ NCERT-based questions, you'll be well-prepared for NEET."
            },
            {
                "courseType": "Only Physics Special",
                "price": "₹35,000/yr",
                "courseTitle": "Physics NEET",
                "description": "Our Physics NEET course takes you through 11th and 12th grade physics with over 4000 NCERT-based questions. It's your pathway to a great NEET score."
            }
        ]

    return (
        <div className="Courses py-4 container">
            <h2 className="heading text-center display-5 heading fw-semibold">
                <span className="title-underline">Popular Courses</span>
            </h2>
            <div className="row justify-content-center px-3 px-md-0 mt-3">

                {courses.map((el, i) => {
                    return <div className="col-12 col-lg-4 col-md-6 my-3 cursor-pointer" key={i}>
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
    );
}

export default Courses;
