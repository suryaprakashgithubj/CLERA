import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './style.css';
import { useNavigate } from 'react-router-dom';
import signUpSchema from './Schemas/signUpSchema';
import { useFormik } from 'formik';
import UserService from './Api'
import Swal from 'sweetalert2';
const Form = () => {

    const [role, setRole] = useState("user");
    const onOptionChange = (e) => {
        setRole(e.target.value);
    };
    const initialState = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        // confirmPassword: "",
        role: "",
        dob: "",
        address: "",
        mobile: "",
        gender: "",
        location: "",
    }

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: initialState,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventRegister();
            action.resetForm();
        },
    })


    console.log(values, " ", role);
    const eventRegister = async () => {
        values.role = role;
        try {
         

            // if (values.role === "user") {

                const response = await UserService.saveUser(values);
                console.log(response);
            //     const target = "Error";
            //     const target1 = "Email Already Exists !!";

            //     throw target;
            // } else if (response.data === target1) {
            //     throw target1;
            // } else {
                let timerInterval;
                Swal.fire({
                    title: "Registered Successfully !!",
                    html: "Redirecting in <b></b> milliseconds.",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const b = Swal.getHtmlContainer().querySelector("b");
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft();
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    },
                }).then((result) => {

                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer");
                    }
                });
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            // }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error}`,
            });
            // console.log(error);
        }
    };


    const navigate = useNavigate();
    return (
        <div className='whole'>
            <div>
                <div className="mob">
                    <p>
                        TOLLFREE NO : +91 7358866490
                    </p>
                </div>
                {/* <div>
                    <img src='images/CLERA.png' className="logo" alt="a-logo" width="10%"></img>
                </div> */}
                <div className="para1">
                    <p>
                        Over 130,000 customers trust CLERA for local services
                    </p>
                </div>
                <div className="para2">
                    We provide many services according to your needs.Hassle-Free Payments
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ width: "50%", marginTop: "250px", marginLeft: "65px" }}>
                    <h1 style={{ color: "white" }}><i>
                        Offer clients the convenience of a 24x7 Online booking portal.</i></h1>
                    <h1 style={{ color: "white" }}><i>
                        Get additional services with a cost-efficient service listing.</i></h1>
                    <h1 style={{ color: "white" }}><i>
                        Can get direct tracking of the service provider by messaging support</i></h1>
                    <h1 style={{ color: "white" }}><i>
                        Accept UPI,Debit cards,Credit Cards anywhere with Square Payments.</i></h1>
                </div>
                <div className="kl" style={{ width: "30%", margin: "80px" }}>
                    <form className="registration-form" onSubmit={handleSubmit}>
                        <title>USER REGISTRATION</title>
                        <TextField
                            label="First Name"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='firstName'
                            required
                        />
                        {errors.firstName && touched.firstName ? <p>{errors.firstName}</p> : null}
                        <br />
                        <TextField
                            label="Last Name"
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="lastName"
                            required
                        />
                        {errors.lastName && touched.lastName ? <p>{errors.lastName}</p> : null}
                        <br />

                        <TextField
                            label="UserName"
                            name='username'
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {errors.username && touched.username ? <p>{errors.username}</p> : null}
                        <br />
                        <TextField
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {errors.email && touched.email ? <p>{errors.email}</p> : null}
                        <br />
                        <TextField
                            label="Password"
                            name='password'
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && touched.password ? <p>{errors.password}</p> : null}
                        <br />
                        <TextField
                            label="Address"
                            name='address'
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        {errors.address && touched.address ? <p>{errors.address}</p> : null}

                        <br />
                        <TextField
                            label="Mobile"
                            name='mobile'
                            value={values.mobile}
                            type="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                        {errors.mobile && touched.mobile ? <p>{errors.mobile}</p> : null}
                        <br />
                        <TextField
                            label="DOB"
                            name='dob'
                            value={values.dob}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="date"
                            // onChange={(e) => setDOB(e.target.value)}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        {errors.dob && touched.dob ? <p>{errors.dob}</p> : null}
                        <TextField
                            label="Gender"
                            name='gender'
                            value={values.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // onChange={(e) => setGender(e.target.value)}
                            required
                        />
                        {errors.gender && touched.gender ? <p>{errors.gender}</p> : null}
                        <TextField
                            label="Location"
                            name='location'
                            value={values.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                        {errors.location && touched.location ? <p>{errors.location}</p> : null}
                        <br />
                        <Button
                            type='submit'
                            style={{ marginLeft: "7px", borderRadius: "15px", color: "WHITE" }}
                            key="services"
                            color='primary'
                            variant='contained'
                            // onClick={() => navigate('/login')}

                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            REGISTER
                        </Button>

                    </form>

                </div >

            </div >
        </div>
    );
};

export default Form;
