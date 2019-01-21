import React from 'react'

import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem exact link='/'>Burger Buider</NavigationItem>
            <NavigationItem link='/orders'>Orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems
