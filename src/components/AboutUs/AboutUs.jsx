import SectionHeading from "../SectionHeading/SectionHeading";
import PageHeading from "../PageHeading/PageHeading";
import './AboutUs.scss';

function AboutUs() {

    const cardData = [
        { title: "Our Offerings", des: "We provide tailored strategies that play to your strengths and work on your weaknesses. Our courses are priced affordably, ensuring that quality education is accessible to all" },
        { title: "Our Support", des: "We believe in supporting our students round the clock. Our team is available 24x7 to assist you on your learning journey" },
        { title: "Our Philosophy", des: "Quality over quantity - that’s our mantra. We strive to deliver the best educational experience rather than focusing on the number of courses or students. " }
    ]



    return (
        <div className="AboutUs py-3 container mt-3">
            {window.location.pathname === "/about" ? <PageHeading headingText={"About Us"} /> : <SectionHeading headingText={"About Us"} />}

            <div className="des pt-3 ">
                <p className="lead text-center fw-normal">
                    <em className="">
                        Established in 2015 by Lokesh Sehrawat, the VS Sehrawat Institute is a testament to the legacy of Mr. Ved Prakash Sehrawat. Our institute is more than just an educational institution - we are a family that grows together.
                    </em>
                </p>

                <div className="journey">
                    {/* <div className="fs-3 fw-normal text-center">Our Journey</div> */}
                    <div className="lead text-center">
                        <p>
                            We embarked on our journey as a humble institute with a vision to provide quality education. Over the years, we have proven ourselves through the results we have achieved. Our success opened doors to new opportunities, allowing us to grow and expand our offerings.
                        </p>
                        <p className="" >
                            Year after year, our results have consistently improved, reflecting our commitment to excellence. Today, many of our students are pursuing their dreams in fields like MBBS, BMS, and more. We take immense pride in their achievements as they are a testament to our dedication and hard work.
                        </p>
                    </div>
                </div>

            </div>



            <div className="row  justify-content-center px-3 px-md-0">
                {cardData.map((el, i) => {
                    const cardClassName = `card-${i} text-white`
                    return <div className="col-12 col-md-4 my-3" key={i} data-aos="zoom-in-down" >
                        <div className={`card ${cardClassName} shadow h-100`}>
                            <img src={`/img/card-${i}.webp`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{el.title}</h5>
                                <p className="card-text ">{el.des}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>


        </div >
    );
}

export default AboutUs;
