import LocationMap from "../components/LocationMap/LocationMap";
import PageHeading from "../components/PageHeading/PageHeading";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {
    return (
        <div className="Contact">
            <PageHeading headingText="Contact Us" />

            <LocationMap />

            <ContactForm />


        </div>
    );
}

export default Contact;