import './LocationMap.scss';

function LocationMap() {
    return (
        <div className="LocationMap">
            <div className="title">
                <h2 className=" display-6 fw-normal">Locate Us</h2>
            </div>
            <div data-aos="fade-up">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.063009666764!2d77.33227537534007!3d28.14456997593469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd3bff59d4525%3A0x9acb794058067d9d!2sVS%20Sehrawat%20Institute%20-%20Medical%20(NEET)%2C%20IIT%20-%20JEE%20Coaching!5e0!3m2!1sen!2sin!4v1711525468163!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default LocationMap;
