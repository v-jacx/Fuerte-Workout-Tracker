
import axios from 'axios';
import {useState} from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"

export default function Login(props){
    const {handleClick, setUser} = props
    const navigate = useNavigate()
    const [username, setUsername]=useState('')
    const [password, setPassword]= useState('')
    let message = '';
    const handleChange =  (e) =>{
        if(e.target.id === 'login-user'){
            setUsername(e.target.value)
        }if(e.target.id === 'login-password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const currentUser = await axios.post(`http://localhost:3001/api/login`,{
        name: username,
        password: password,
        })
        
        if(currentUser.data ==='User Does not exist'){
            message = 'user does not exist'
        }else{
            setUser(currentUser.data)
            navigate('/fuerte')
        }
    }


    return(
        <div className='login-container'>
            <form className="login">
                <h4>Username</h4>
                <input type='text' id='login-user' onChange={handleChange}></input>
                <h4>Password</h4>
                <input type='text' id='login-password' onChange={handleChange}></input>
                <div className="account-text">
                    <h4 >Need an account?</h4>
                    <Link to='/signup' className='account-link' onClick={handleClick}>Create Account</Link>
                    <div id='msg'>{message}</div>
                </div>
                
                <div><button id='login-btn' onClick={handleSubmit}>Login</button></div>
            </form>
        </div>
    )
}