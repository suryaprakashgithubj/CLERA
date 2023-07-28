import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
// import Container from '@mui/material/Container';
import './Home.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import UserService from './Api.jsx';
import { FaRegCopyright } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { Email } from '@mui/icons-material';
import { addUserDetails } from './Store/masterSlice';

const theme = createTheme({
  palette: {
    primary: {
      main: "#03312E",
    },
    secondary: {
      main: "#E7ECEF"
    }
  },
});


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [])

  const { token } = useSelector((state) => state.master);
  const { user } = useSelector((state) => state.master);

  const getData = async () => {
    try {
      const response = await UserService.getUserByEmail(user, token);
      console.log("response", " ", response);
      dispatch(addUserDetails(response.data));
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>

      <div className='home'>
        <div className='root'>
          <div className="hp">
            <p>
              "Discover the easiest way to schedule appointments for the local services with the #1 online booking system"
            </p>

            <div className="drops">
              <p>
                Save time spent on coordinating appointments over phone and email with an all-in-one service booking software. Accept online bookings 24x7, hassle-free payments, service management!
              </p>

            </div>

          </div>
          <div className="cal">
 
          </div>
        </div>
       
        <div className="root1">
          <div className="book">


          </div>
          <div className="para">
            <p>Online appointment booking made simple with a 5-step setup process</p>
            <p>
              CLERA can serve almost every Local Services!!
            </p>
          </div>

        </div>
        <div className="colab">
          <u>    <p>Communication and Messaging</p></u>

        </div>
        <div className="com">
          <div className="message">
            <p>After the confirmation of booking the services, the service provider and the customers can communicate directly with each other for tracking the progress</p>
          </div>

          <div className="support">

          </div>
        </div>
        <div className="rate">
          <p>Ratings & Review</p>
        </div>
        <div className="hut">
          <div className="coffee">


          </div>
          <div className="tea">
            Customers can give rating and reviews for the service providers
          </div>

        </div>

        <div className="bt">
          <div className="pro">
            <ul className="no-bullets">
              <h4>Product</h4>
              <br />
              <li>HOME</li>
              <li>SERVICES</li>
              <li>LOGIN</li>
              <li>CONTACT</li>
              <li>SIGNUP</li>
            </ul>
          </div>

          <div className="pro">
            <ul className="no-bullets">
              <h4>Support</h4>
              <br />
              <li>Help</li>
              {/* <li>need help ?</li> */}
              <li>+91 7358866490</li>
              <li>+91 9361632592</li>
            </ul>
          </div>

          <div className="pro">
            <ul className="no-bullets">
              <h4>Contact us on</h4>
              <br />
              <h4>CLERA GLOBAL LTD</h4>
              <li>SIDHAPUDHUR</li>
              <li>GANDHIPURAM</li>
              <li>COIMBATORE</li>
              <li>contact@clera.com</li>
              <li>Privacy Policy</li>
              <li>Terms of use</li>
              {/* <li>GDPR</li> */}
            </ul>
          </div>
          <div className="ta">
            <a href="https://www.instagram.com/">
              <FaSquareInstagram fontSize={40} />
            </a>&nbsp;
            <a href="https://twitter.com/login?lang=en">
              <FaSquareTwitter fontSize={40} />
            </a>&nbsp;
            <a href="https://in.linkedin.com/">
              <FaLinkedinIn fontSize={40} />
            </a>&nbsp;
            <a href="https://www.facebook.com/">
              <FaSquareFacebook fontSize={40} />
            </a>&nbsp;
          </div>
        </div>
        <div className="copy">
          <p>
            Copyright 2023 <FaRegCopyright /> CLERA. All rights reserved{" "}
          </p>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Home
