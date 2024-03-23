import './StudentGrid.scss';

const studentData = [
    {
        name: "Renu Bala (MBBS)",
        img: "renu_bala",
        description: "Renu’s grasp of NEET material is exceptional, a testament to V.S. Sehrawat Institute’s rigorous training.",
        review: "Thanks to V.S. Sehrawat Institute, my NEET prep was top-notch, and I’m confident about my medical college journey!"
    },
    {
        name: "Vishnu (BAMS)",
        img: "vishnu",
        description: "Vishnu’s NEET scores reflect the high-quality coaching provided at V.S. Sehrawat Institute.",
        review: "The NEET coaching at V.S. Sehrawat Institute was unparalleled. It truly honed my test-taking strategies."
    },
    {
        name: "Sonam (BAMS)",
        img: "sonam",
        description: "Sonam’s NEET preparation at V.S. Sehrawat Institute has been thorough, leaving no stone unturned.",
        review: "I owe my thorough NEET preparation to the dedicated faculty at V.S. Sehrawat Institute. Couldn’t have done it without them!"
    },
    {
        name: "Tinku (BAMS)",
        img: "tinku",
        description: "Tinku’s dedication to NEET studies at V.S. Sehrawat Institute is evident in his impressive performance.",
        review: "The rigorous NEET practice sessions at V.S. Sehrawat Institute paid off. I’m ready for college!"
    },
    {
        name: "Nishant (BAMS)",
        img: "nishant",
        description: "Nishant’s NEET results are a clear indicator of the effective teaching strategies at V.S. Sehrawat Institute.",
        review: "Achieving great NEET scores was a dream that V.S. Sehrawat Institute helped me realize. Grateful for the guidance!"
    },
]

function StudentGrid() {
    return (
        <div className="StudentGrid container">

            <div className="row justify-content-center px-3 px-md-0">

                {studentData.map((student, index) => (
                    <div className="col-12 col-lg-4 col-md-6 my-3 cursor-pointer aos-init aos-animate" data-aos="zoom-in-down" data-aos-out="zoom-in-up" key={index}>
                        <div className="card h-100 rounded-3 ">
                            <img src={`/img/${student.img}.webp`} title={student.name} className="card-img-top object-fit-fill" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center fs-4 text-capitalize">{student.name}</h5>
                                <p className="card-text">{student.description}</p>
                            </div>
                        </div>
                    </div>
                ))}


            </div>

        </div>
    );
}

export default StudentGrid;
