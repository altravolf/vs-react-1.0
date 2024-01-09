import './Footer.scss';

function Footer() {
    return (
        <div className="Footer container-fluid">
            <div className="footer-top container-fluid">
                <div className="row justify-content-center small">
                    <div className="col-md-4 col-sm-5 col-12 content my-3">
                        <div className="title ">
                            Address:
                        </div>
                        <p>V.S. Sehrawat Institute</p>
                        <p>Opposite Rahul Nursing Home <br />
                            Near Bus Stand, Palwal <br />
                            Haryana (121102)</p>
                    </div>
                    <div className="col-md-4  col-12 content my-3">
                        <div className="title">
                            Contact us:
                        </div>
                        <p><strong>Whatsapp:</strong> <span> +91 90503 30957 </span></p>
                        <p><strong>Phone:</strong> <span> +91 83077 47460 </span></p>
                        <p><strong>Email:</strong> <span> contact@vs-sehrawat-institute.in </span></p>
                    </div>
                </div>
            </div>

            <div className="small footer-container">
                <p className="text-center"> © 2024 Copyright <strong>VS Sehrawat Institute</strong> </p>
                <p className="text-center">All Rights Reserved</p>
                <p className="text-center">Powered by <span className="altravolf">AltraWeb</span></p>

                <div className="d-flex justify-content-center gap-2 ">
                    <div className="icon icon1">
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="icon icon2">
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div className="icon icon3">
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
