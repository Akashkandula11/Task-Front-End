import React, { useState } from 'react'

export const Login = (props) => {
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********"/>
                <button type="submit"> Login </button> 
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have  an account? Register Here</button>
        
        
        </>
    )
}
