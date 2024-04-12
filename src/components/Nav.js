import React from 'react';
import Logo from '../images/lovechatlogo_white.svg';
import '../css/nav.css';

function Nav() {
    return (
        <>
            <nav>
                <div className='navwrapper'>
                    <img src={Logo} className='logo' alt='logo'/>
                    <span className='appname'>Love Chat</span>
                </div>
            </nav>
        </>
    )
}

export default Nav