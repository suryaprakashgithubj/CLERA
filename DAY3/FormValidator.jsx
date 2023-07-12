import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './style.css';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDOB] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic here (e.g., send data to server)
        console.log('Form submitted:', { firstName, lastName, username, email, password, address, mobile, dob, gender, location });
    };

    return (
        <div style={{
             backgroundImage : "url(/images/road2.jpg)"
        }}>
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
            <div style={{ display: "flex", justifyContent: "centers", width: "100%" }}>
                <div style={{ width: "50%", marginTop: "250px  ",marginLeft:"55px" }}>
                    <h3 style={{ color: "white" }}><i>
                        Offer clients the convenience of a 24x7 Online booking portal.</i></h3>
                    <h3 style={{ color: "white" }}><i>
                        Get additional services with a cost-efficient service listing.</i></h3>
                    <h3 style={{ color: "white" }}><i>
                        Can get direct tracking of the service provider by messaging support</i></h3>
                    <h3 style={{ color: "white" }}><i>
                        Accept UPI,Debit cards,Credit Cards anywhere with Square Payments.</i></h3>
                </div>
                <div className="base" style={{ width: "30%", margin: "80px" }}>
                    <form className="registration-form" onSubmit={handleSubmit}>
                        <title>USER REGISTRATION</title>
                        <TextField
                            label="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="Last Name"
                            value={lastName}

                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="UserName"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />


                        <br />
                        <TextField
                            label="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="Mobile"
                            value={mobile}
                            type="number"
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="DOB"
                            value={dob}
                            type="date"
                            onChange={(e) => setDOB(e.target.value)}
                            required
                        />
                        <TextField
                            label="Gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        />
                        <TextField
                            label="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                        <br />
                        <Button type="submit" variant="contained" color="primary">
                            Register
                        </Button>
                    </form>

                </div >
                {/* <div className="merits">
                    <p>
                    Offer clients the convenience of a 24x7 Online booking portal.
                    </p>
                    <p>
                    Get additional business with a free Google listing.
                    </p>
                    <p>
                    Reduce no shows with automatic text/email reminders.
                    </p>
                    <p>
                    Accept credit cards anywhere with Square Payments.
                    </p>
                 </div> */}
            </div >
        </div>
    );
};

export default Form;
