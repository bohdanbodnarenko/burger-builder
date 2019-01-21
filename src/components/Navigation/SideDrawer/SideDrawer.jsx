import React from 'react'

import './SideDrawer.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux
from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo className='Logo' height='11%'/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>

    )
}

export default SideDrawer
