export default function NavBar(props){
    const {handleClick, setUser} = props


    return(
        <div id='nav-container'>
            <div className="nav-bar">
                    <img src='../logo/fuerte-logo2.png'alt='fuerte-logo'/>
            <div id='login-container' onClick={handleClick}>
                <div className='login-logo' >
                    <div className='head'></div>
                    <div className='body'></div>
                </div>
                    <div id='login-label-container'><h4 id='login-label'>Login</h4></div>
                </div>
            </div>
        </div>
    )
}