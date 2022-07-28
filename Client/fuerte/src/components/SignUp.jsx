export default function Signup(){
    return (
        <div className='signup-container'>
            <form className="sign-up">
                <h4>Username</h4>
                <input type='text'></input>
                <h4>Email</h4>
                <input type='text'></input>
                <h4>Password</h4>
                <input type='text'></input>
                <h4>Confirm Password</h4>
                <input type='text'></input>
                <div><button id='signup-btn' >Sign Up</button></div>
            </form>
        </div>
    )
}