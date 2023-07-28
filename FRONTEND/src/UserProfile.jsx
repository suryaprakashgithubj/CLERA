import * as React from 'react';

import { useSelector } from 'react-redux'
// import './UserProfile'

const UserProfile = () => {

    const { userDetails } = useSelector(store => store.master);
    return (
        <div>
            <div style={{ fontSize: "350%", textAlign: "center", paddingTop: "1.5%", fontFamily: "sans-serif" }}>
                <p><u>Personal Information</u></p>
            </div>
            <div style={{ justifyContent: "center", display: "flex", flexDirection: "row" }}>
                <div style={{ width: "50%" }}>
                    <img src='/images/info.png' width="100%"></img>
                </div>
                <div style={{display:"grid" , gridTemplateColumns:"1fr 1fr" , marginTop:"5%" , backgroundColor:"wheat" , borderRadius:"5%" , padding:"1.5%"}}>
                    
                        <div>
                            <h3>NAME</h3>
                        </div>
                        <div>
                            <h3>{userDetails.firstName}{userDetails.lastName}</h3>
                        </div>
                        <div>
                        <h3>USERNAME</h3></div>
                        <div>
                        <h3>{userDetails.username}</h3>
                        </div>
                        <div>
                        <h3>EMAIL</h3>
                        </div>
                        <div>
                        <h3>{userDetails.email}</h3>
                        </div>
                        <div>
                        <h3>ADDRESS</h3>
                        </div>
                        <div>
                        <h3>{userDetails.address}</h3>
                        </div>
                        <div>
                        <h3>MOBILE</h3>
                        </div>
                        <div>
                        <h3>{userDetails.mobile}</h3>
                        </div>
                         <div>
                        <h3>DATE OF BIRTH</h3>
                        </div>
                        <div>
                        <h3>{userDetails.dob}</h3>
                        </div>
                        <div>
                        <h3>GENDER</h3>
                        </div>
                        <div>
                        <h3>{userDetails.gender}</h3>
                        </div>
                        <div>
                        <h3>LOCATION</h3>
                        </div>
                        <div>
                        <h3>{userDetails.location}</h3>
                        </div>
                    </div>
                </div>
            </div>
            );
}

            export default UserProfile