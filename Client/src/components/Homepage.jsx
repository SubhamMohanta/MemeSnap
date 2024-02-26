import React from 'react'
import "../App.css"
import Logo from '../assets/Logo'
import {Link} from 'react-router-dom'

const Homepage = () => {
    return (
        <>
            <div className='home-parent'>
                <div className='home-body'>
                    <div className='logo'>
                    <Link to='/' style={{textDecoration:"None"}}>
                        <div className='website-name'>
                            <Logo />
                        </div>
                    </Link>
                        <div className='tagline'>
                            <h1>Welcome, to a collection of funniest memes</h1>
                        </div>
                    </div>
                    <div className='redirect'>
                    <Link to='/Mainpage' style={{textDecoration:"None"}}>
                        <button className='enter'>Enter</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage