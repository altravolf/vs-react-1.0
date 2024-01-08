import './Footer.scss';

function Footer() {
    return (
        <div className="Footer container-fluid">
            <div className="small">
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
