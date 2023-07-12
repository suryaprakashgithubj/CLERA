import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import './log.css';

const LoginPage = () => {

    const {logout,loginWithRedirect, isAuthenticated} = useAuth0();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // Reset form fields
        setUsername('');
        setPassword('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { username, password });
    };

    return (
        <div>
            <div className="base">

                <div style={{padding:"20px"}}>
                    <form className="registration-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <TextField
                            label="USERNAME"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="PASSWORD"
                            value={password}

                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />

                        <Button onClick={() => loginWithRedirect()} variant="contained" color="primary">
                            LON
                        </Button>
                        <Button onClick={() => logout()} variant="contained" color="primary">
                            LOGOUT
                        </Button>
                    </form>
                </div>
            </div >
        </div>

    );
};

export default LoginPage;
