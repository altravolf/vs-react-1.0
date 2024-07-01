import './ScholarshipEntry.scss';
import { useSnackbar } from "notistack";

import { useForm } from "react-hook-form";

import SiteDataContext from "../../context/siteData/siteDataContext"
import { useContext } from "react";


function ScholarshipEntry() {

    const { enqueueSnackbar } = useSnackbar();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { setEntry, setQuiz, setStudentInfo } = useContext(SiteDataContext);

    const onFormSubmit = (data) => {
        enqueueSnackbar(`Welcome ${data.name}!`, { variant: 'success', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'center' } });
        setEntry(false);
        setQuiz(true);
        setStudentInfo(data);
        window.scrollTo(0, 0);
    }

    return (
        <div className="ScholarshipEntry">

            <div className="rules">
                <h2 className="font-bold text-center my-4 text-capitalize">Please read the following rules carefully.</h2>
                <ul className=" fs-5 w-fit">
                    <li className="font-bold">For every correct answer, <span className="text-success">4 marks</span> are awarded.</li>
                    <li className="font-bold">For every incorrect answer, <span className="text-danger">1 mark</span> is deducted.</li>
                    <li className="font-bold">There is <span className="text-danger">negative marking</span>.</li>
                    <li className="font-bold">No marks are <span className="text-warning ">awarded or deducted</span> for questions that are <span className="text-warning">not attempted</span>.</li>
                    <li className="font-bold">50 questions are there in total.</li>
                </ul>
            </div>

            <div className="form">

                <form action="" onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="row justify-content-center">
                        <div className="mb-3 col-10 col-lg-4 col-md-7">
                            <label htmlFor="name" className="form-label ps-1">Full Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                id="name"
                                placeholder={errors.name ? "Please enter your name" : "Full Name"}
                                {...register("name", { required: true })}
                            />
                        </div>

                        <div className="mb-3 col-10 col-lg-4 col-md-7">
                            <label htmlFor="email" className="form-label ps-1">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                id="email"
                                placeholder={errors.email ? "Please enter your email" : "Email address"}
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>

                        <div className="mb-3 col-10 col-lg-4 col-md-7">
                            <label htmlFor="phone" className="form-label ps-1">Phone No.</label>
                            <input
                                type="number"
                                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                id="phone"
                                placeholder={errors.phone ? "Please enter your phone number" : "Phone number"}
                                {...register("phone", { required: true, maxLength: 10, minLength: 10 })}
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default ScholarshipEntry;
