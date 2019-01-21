import React from 'react'

import './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => {
    return (
        <header className='Toolbar'>
            <div
                onClick={props.openSideDrawer}
                className='DrawerToggle'
                style={{
                cursor: 'pointer'
            }}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo height='80%'/>
            <nav className='DesctopOnly'>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default Toolbar
