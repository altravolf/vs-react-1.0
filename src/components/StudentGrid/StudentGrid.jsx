import './StudentGrid.scss';

const studentData = [
    {
        name: "xyz"
    },
    {
        name: "xyz"
    },
    {
        name: "xyz"
    },
    {
        name: "Sonam"
    },
    {
        name: "Tinku"
    },
]

function StudentGrid() {
    return (
        <div className="StudentGrid container">

            <div className="row justify-content-center px-3 px-md-0">

                {studentData.map((student, index) => (
                    <div className="col-12 col-lg-4 col-md-6 my-3 cursor-pointer aos-init aos-animate" data-aos="zoom-in-down" data-aos-out="zoom-in-up" key={index}>
                        <div className="card h-100 ">
                            <img src={`/img/student-${index + 1}.webp`} className="card-img-top object-fit-fill" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center fs-4 text-capitalize">{student.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                ))}


            </div>

        </div>
    );
}

export default StudentGrid;
