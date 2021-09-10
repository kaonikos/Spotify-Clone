import React from 'react'
import logo from '../../../../../media/images/logo.svg'
import './styles.css'

const Logo = () => {

    return (
        <div className="logo">
            <img src={logo} />
            <div className="text">
                Isno
            </div>
        </div>
    )
}

export default Logo
