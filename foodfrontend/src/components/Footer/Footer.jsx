import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">

                <div className="footer-content-left">
                <a href='/#explore-menu'><img src={assets.logo} alt="" style={{ width: '50%', height: 'auto' }} /></a>
                    <p>Made by <strong> Team B6 </strong></p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com" target="_blank">
                            <img src={assets.facebook_icon} alt="" /></a>
                        <a href="https://www.twitter.com" target="_blank">
                            <img style={{ width: '6.5%' }} src={assets.twitter_icon} alt="" />
                        </a>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2 style={{ color: '#e5b141' }}>About Us</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Terms</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2 style={{ color: '#e5b141' }}>Contact Us</h2>
                    <ul>
                        <li>+91 99989998</li>
                        <li>contact@grubgo.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 ©️ Team B6
            </p>
        </div>
    )
}

export default Footer
