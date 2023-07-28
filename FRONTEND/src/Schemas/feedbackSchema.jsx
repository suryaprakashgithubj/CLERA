import * as Yup from 'yup';

const feedbackSchema = () => Yup.object({

    name: Yup.string().min(5).max(20).required("Please Enter Your Name !"),
    email: Yup.string().email().min(5).max(30).required("Please Enter the Email ID !"),
    comment: Yup.string().min(10).max(100).required("Please Enter your comments!"),

})

export default feedbackSchema;