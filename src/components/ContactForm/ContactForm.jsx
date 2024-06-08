/* eslint-disable no-console */
import './ContactForm.scss';
import { useForm } from "react-hook-form";
import { send } from '@emailjs/browser';
import { useState } from 'react';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



const serviceKey = import.meta.env.VITE_SERVICE_KEY;
const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;


function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [formStatus, setFormStatus] = useState('idle');

    const onSubmit = (data, e) => {
        e.preventDefault();
        setFormStatus('loading');

        send(serviceKey, templateKey, data, publicKey)
            .then((result) => {
                console.log(result.text);
                setFormStatus('success');
            }, (error) => {
                console.log(error.text);
                setFormStatus('error');
            });

        e.target.reset();
    }




    return (
        <div className="ContactForm container my-5 ">
            <div className="row flex-md-row-reverse align-items-center flex-column">
                <div className=" col-12 col-md-6 ">
                    <h2 className="text-center">Quickly Reach Us</h2>

                    <div className=" d-flex justify-content-center align-items-center gap-5 mt-4">
                        <div className="action-icon">

                            <a href="tel:8307747460" className=" text-decoration-none">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                            </a>
                            <div className="icon-text">
                                Call Us
                            </div>
                        </div>

                        <div className="action-icon">

                            <a href="mailto:contact@vs-sehrawat-institute.in" className=" text-decoration-none">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                            </a>
                            <div className="icon-text">
                                Email Us
                            </div>
                        </div>
                    </div>

                </div>

                <div className="form shadow p-4 bg-white rounded-1 col-11 col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <h2 className="text-center">Get in touch</h2>

                        <div className="row">
                            <div className="form-group my-2 col-12 col-lg-4">
                                <label className="form-label" htmlFor="from_name">Full Name:</label>
                                <input className={"form-control" + (errors.from_name ? " error" : "")} placeholder={errors.from_name ? "Enter your name" : "e.g. Hitest Sorout"} {...register("from_name", { required: true })} />
                            </div>

                            <div className="form-group my-2 col-12 col-lg-4">
                                <label className="form-label" htmlFor="email_id">Email:</label>
                                <input type="email" className={"form-control" + (errors.email_id ? " error" : "")}
                                    placeholder={errors.email_id ? "Enter your email" : "e.g. abcde@example.com"}
                                    {...register("email_id", { required: true })} />
                            </div>

                            <div className="form-group my-2 col-12 col-lg-4">
                                <label className="form-label" htmlFor="mobile_no">Mobile No.:</label>
                                <input className={"form-control" + (errors.mobile_no ? " error" : "")} placeholder={errors.mobile_no ? "Enter your 10 digit mobile number" : "e.g. 8708331920"}  {...register("mobile_no", { required: true, maxLength: 10, minLength: 10, })} />
                            </div>
                        </div>

                        <div className="form-group my-2">
                            <label className="form-label" htmlFor="message">Message:</label>
                            <textarea rows="5" className={"form-control" + (errors.message ? " error" : "")}
                                placeholder={errors.message ? "Enter your message" : "Write your message..."}
                                {...register("message", { required: true })} />
                        </div>

                        <div className=" mt-3 text-center">
                            <button type="submit" className={`btn btn-primary`} disabled={formStatus === 'loading' || formStatus === 'success'}>
                                {formStatus === 'idle' && 'Submit'}
                                {formStatus === 'loading' && <i className="fa fa-spinner fa-spin"></i>}
                                {formStatus === 'success' && 'Sent 👍'}
                                {formStatus === 'error' && 'Unsuccessful'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default ContactForm;
