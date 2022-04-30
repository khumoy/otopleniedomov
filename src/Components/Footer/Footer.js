import React from 'react'
import { FooterWrapp } from './FooterWrapp'
import { FaInstagram, FaFacebookSquare, FaTelegram, FaPhoneAlt } from 'react-icons/fa'
import logo from '../Header/brandlogo.png'
const Footer = () => {

    return (

        <FooterWrapp>
            <div className="container social-item-group py-4">
                <div className="logo-brand">
                    <img src={logo} alt="" />
                    <div className="phone-icon">
                        <a className="nav-icons" href="tel: +998994058046 " >
                            <FaPhoneAlt className="social-icons" /> +998 99 405-80-46
                        </a>
                    </div>
                </div>

                <div className="text-light social-items ">
                    <a rel="noreferrer" target="_blank" className="nav-icons" href="https://www.instagram.com/abror_hhamdamov">
                        <FaInstagram className="social-icons" />
                    </a>
                    <a rel="noreferrer" target="_blank" className="nav-icons" href="https://t.me/abror_khamdamov">
                        <FaTelegram className="social-icons" />
                    </a>
                    <a rel="noreferrer" target="_blank" className="nav-icons" href="/">
                        <FaFacebookSquare className="social-icons" />
                    </a>

                </div>


            </div>
            <div className="d-flex justify-content-center container">
                <p className="mt-3">© 2021 Все права защищены.</p>
                {/* <p><a href="">khresearcher </a></p> */}
            </div>
        </FooterWrapp>
    )
}

export default Footer
