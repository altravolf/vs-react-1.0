
export default function Footer() {
    return (
        <div>


            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg col-md-6 footer-contact text-center ">
                                <h3>Address:</h3>
                                <p className="h4">VS SEHRAWAT INSTITUTE</p>
                                <p>
                                    Opposite Rahul Nursing Home
                                    <br />
                                    Near Bus Stand, Palwal
                                    <br />
                                    Haryana (121102) <br />
                                    <br />
                                </p>
                            </div>
                            <div className="col-md-6 footer-contact text-center">
                                <h3>Contact us:</h3>
                                <p>
                                    <strong>WhatsApp:</strong> +91 90503 30957 <br />
                                    <strong>Phone:</strong> +91 82989 46490
                                    <br />
                                    <strong>Email:</strong> contact@vs-sehrawat-institute.in <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="container py-4">
                    <div className="me-md-auto text-center ">
                        <div className="copyright">
                            © <span id="copyYear" /> Copyright{" "}
                            <strong>
                                <span>VS Sehrawat Institute</span>
                            </strong>
                            .<div className="col-sm">All Rights Reserved </div>
                        </div>
                        <div className="credits">
                            Powered by{" "}
                            <span className="fw-bold" style={{ color: "#00003d" }}>
                                AltraWeb
                            </span>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3">
                        {/* <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> */}
                        <a
                            href="https://m.facebook.com/vssehrawatcoachinginstitute/?_rdr"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="facebook"
                        >
                            <i className="bx bxl-facebook" />
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=919050330957"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="whatsapp"
                        >
                            <i className="bx bxl-whatsapp" />
                        </a>
                        {/* <a href="#" class="google-plus"><i class="bx bxl-"></i></a> */}
                        <a
                            href="https://www.youtube.com/channel/UCoCQqTmRFMupfb0hLilzWkQ"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="linkedin"
                        >
                            <i className="bx bxl-youtube" />
                        </a>
                    </div>
                </div>
            </footer>


        </div>
    )
}
