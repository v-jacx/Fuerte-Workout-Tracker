
import {useState} from 'react'
import { Link } from "react-router-dom"

export default function Login(props){
    const {handleClick} = props

    return(
        <div className='login-container'>
            <form className="login">
                <h4>Username</h4>
                <input type='text'></input>
                <h4>Password</h4>
                <input type='text'></input>
                <div className="account-text">
                    <h4 >Need an account?</h4>
                    <Link to='/signup' className='account-link' onClick={handleClick}>Create Account</Link>
                </div>
                <div><button id='login-btn' >Login</button></div>
            </form>
        </div>
    )
}