import './ContactForm.scss';
import { useForm } from "react-hook-form";


function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="ContactForm container mt-5 ">
            <div className="row flex-row-reverse align-items-center">
                <div className=" col-6 ">
                    <h2 className="text-center">Quickly Reach Us</h2>

                    <div className=" d-flex justify-content-center align-items-center gap-5 mt-4">
                        <div className="action-icon">

                            <a href="tel:123456789" className=" text-decoration-none">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                            </a>
                            <div className="icon-text">
                                Call Us
                            </div>
                        </div>

                        <div className="action-icon">

                            <a href="mailto:aBt5i@example.com" className=" text-decoration-none">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </a>
                            <div className="icon-text">
                                Email Us
                            </div>
                        </div>
                    </div>

                </div>

                <div className="form shadow p-4 bg-white rounded-1 col-6">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* {window.location.pathname === "/contact" &&
                            <h2 className="heading display-5 heading fw-semibold text-dark d-inline-block mx-auto position-relative start-50 translate-middle-x">Get in touch</h2>} */}

                        <h2 className="text-center">Get in touch</h2>

                        <div className="row">
                            <div className="form-group my-2 col-4">
                                <label className="form-label" htmlFor="fullName">Full Name:</label>
                                <input className={"form-control" + (errors.fullName ? " error" : "")} placeholder={errors.fullName ? "This field is required" : "Naresh Trehan"} {...register("fullName", { required: true })} />
                            </div>

                            <div className="form-group my-2 col-4">
                                <label className="form-label" htmlFor="email">Email:</label>
                                <input className={"form-control" + (errors.email ? " error" : "")}
                                    placeholder={errors.email ? "This field is required" : "abcde@example.com"}
                                    {...register("email", { required: true })} />
                            </div>

                            <div className="form-group my-2 col-4">
                                <label className="form-label" htmlFor="mobileNo">Mobile No.:</label>
                                <input className={"form-control" + (errors.mobileNo ? " error" : "")} placeholder={errors.mobileNo ? "This field is required" : "8708331920"}  {...register("mobileNo", { required: true })} />
                            </div>
                        </div>

                        <div className="form-group my-2">
                            <label className="form-label" htmlFor="message">Message:</label>
                            <textarea className={"form-control" + (errors.message ? " error" : "")}
                                placeholder={errors.message ? "This field is required" : "Write your message..."}
                                {...register("message", { required: true })} />
                        </div>

                        <div className=" mt-3 text-center">
                            <button type="submit" className="btn btn-primary ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default ContactForm;
