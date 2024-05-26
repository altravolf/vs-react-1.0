import LocationMap from "../components/LocationMap/LocationMap";
import PageHeading from "../components/PageHeading/PageHeading";
import ContactForm from "../components/ContactForm/ContactForm";
import { Helmet } from "react-helmet-async";

function Contact() {
    return (
        <div className="Contact">
            <Helmet>
                <title>Contact VS Sehrawat Institute | Get in Touch</title>
                <meta name="description" content="Have questions or need more information? Contact VS Sehrawat Institute through our contact form, phone, or email. We're here to help you with your inquiries." />
                <meta name="author" content="Altra Volf" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>

            <PageHeading headingText="Contact Us" />

            <LocationMap />

            <ContactForm />


        </div>
    );
}

export default Contact;