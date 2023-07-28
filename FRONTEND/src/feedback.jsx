import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './feedback.css'; // Import your custom CSS file
import { useFormik } from 'formik';
import feedbackSchema from './Schemas/feedbackSchema';
import Api from './Api';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
    const initialState = {
        name: "",
        email: "",
        comment: "",

    }

const { values , errors , handleChange , handleBlur , handleSubmit, touched } = useFormik({
    initialValues: initialState,
    validationSchema: feedbackSchema,
    onSubmit: (values, action) => {
        console.log(values);
        eventfeedback();
        action.resetForm();
    },
})

const {token} = useSelector(state => state.master);
console.log(token)
const navigate = useNavigate();


   const eventfeedback = async() => {
    try{
        const response = await Api.addFeedback(values, token);
        console.log(response);
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Successfully feedback submitted',
            showConfirmButton: false,
            timer: 1500
          })

          setTimeout(() => {
            navigate('/')
          }, 1500)

    }
    catch(error){
        console.log(error);
    }

   }


return (
    <div style={{ marginTop: "11%" }}>
        <form className="feedback-form" onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                variant="outlined"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input-field"
            />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
            <TextField
                label="Email"
                name="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input-field"
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
            <TextField
                label="Comment"
                name="comment"
                variant="outlined"
                multiline
                rows={4}
                value={values.comment}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input-field"
            />
            {errors.comment && touched.comment ? <p>{errors.comment}</p> : null}
            <Button
                type='submit'
                style={{ marginLeft: "7px", borderRadius: "15px", color: "WHITE" }}
                key='Submit'
                color='primary'
                variant='contained'
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                Submit
            </Button>
        </form>
    </div>
);

};


export default FeedbackForm;
