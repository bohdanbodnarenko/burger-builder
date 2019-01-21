import React from 'react'

import './Logo.css'
import burgerLogo from '../../assets/images/133 burger-logo.png'

const Logo = props => {
    return (
        <div className='Logo' style={{
            height: props.height
        }}>
            <img src={burgerLogo} alt='MyBurger'/>
        </div>
    )
}

export default Logo
