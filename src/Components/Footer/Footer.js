import React from 'react'
import { FooterWrapp } from './FooterWrapp'
import { FaInstagram, FaFacebookSquare, FaTelegram, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (

        <FooterWrapp>
            <div className="container social-item-group py-4">
                <div className="text-light social-items">
                    <Link className="nav-icons" to=""><FaInstagram className="social-icons" /></Link>
                    <Link className="nav-icons" to=""><FaTelegram className="social-icons" /></Link>
                    <Link className="nav-icons" to=""><FaFacebookSquare className="social-icons" /></Link>
                </div>
                <div className="phone-icon">
                    <Link className="nav-icons" to="tel: +998994058046 " >
                        <FaPhoneAlt className="social-icons" /> +998 99 405-80-46
                    </Link>
                </div>
            </div>
            <p className="mt-3">© 2021 Все права защищены.</p>
        </FooterWrapp>
    )
}

export default Footer
