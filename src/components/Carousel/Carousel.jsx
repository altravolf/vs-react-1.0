import './Carousel.scss';

function Carousel() {

    const links = ["https://images.pexels.com/photos/5428148/pexels-photo-5428148.jpeg",
        "https://images.pexels.com/photos/706924/pexels-photo-706924.jpeg",
        "https://images.pexels.com/photos/1059161/pexels-photo-1059161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    ]

    return (
        <div className="Carousel">
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={links[0]} className="d-block w-100" alt="1850*755" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={links[1]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={links[2]} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
