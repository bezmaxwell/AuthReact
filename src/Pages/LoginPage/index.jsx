import React, { useState, useContext } from 'react';

import { AuthContext} from '../../contexts/auth';

import "./styles.css"

const LoginPage = () => {
    const {authenticated, login} = 
        useContext(AuthContext);

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    // function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", {email, password});
        // integration to context =>then api
        login(email,password);
    }

    return (
        <div id="login">
            <h1 className="title">Login do sistema</h1>
                <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={
                        (e) => setEmail(e.target.value)}
                    />

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={
                        (e) => setPassword(e.target.value)
                        }/>
                </div>        
                
                <div className="actions">
                    <button type="submit">Login</button>
                </div>
            
                </div>
            </form>
        </div>
    );
}

export default LoginPage;