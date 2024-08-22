import React, { useState } from 'react';

function LoginSignUpForm()
{
    const[name,setName]= useState("Sign Up");

    




    return(
        <div className="container">
            <div className="header">
                <div className="text">{name}</div>
                <div className="underline"></div>
            </div>
            <div className="Inputs">
                {name === "Login"?<div></div>:<div className="Input">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder="Name"/>
                </div>}
                
                <div className="Input">
                    <i class="fa-regular fa-envelope"></i>
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className="Input">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password"/>
                </div>
            </div>
            {name === "Sign Up"?<div></div>:<div className='forgot-password'>Forgot password? <span>Click Here!!</span></div>}
            
            <div className='submit-container'>
                <div className={name === "Login" ? "submit gray":"submit"} onClick={()=>setName("Sign Up")}>Sign Up</div>
                <div className={name === "Sign Up" ? "submit gray":"submit"} onClick={()=>setName("Login")}>Login</div>
            </div>
        </div>
        
    )
}
export default LoginSignUpForm;