import React from 'react'
import { FooterWrapp } from './FooterWrapp'
import { FaInstagram, FaFacebookSquare, FaTelegram, FaPhoneAlt, FaTwitterSquare, FaOdnoklassnikiSquare } from 'react-icons/fa'
import logo from '../Header/brandlogo.png'
import { Link } from 'react-router-dom'
const Footer = () => {

    return (

        <FooterWrapp>
            <div className="container social-item-group py-4">
                <div className="logo-brand">
                    <img src={logo} alt="logotype" />

                </div>

                <div className="">
                    <h1>Контакты:</h1>
                    <div className="phone-icon">
                        <Link className="nav-icons" to="tel: +998994058046 " >
                            <FaPhoneAlt className="social-icons" /> +998 99 405-80-46
                        </Link>
                    </div>
                    <div className='social-icons-contanier '>
                        <Link rel="noreferrer" target="_blank" className="nav-icons" to="https://www.instagram.com/abror_hhamdamov">
                            <FaInstagram className="social-icons" />
                        </Link>
                        <Link rel="noreferrer" target="_blank" className="nav-icons" to="https://t.me/abror_khamdamov">
                            <FaTelegram className="social-icons" />
                        </Link>
                        <Link rel="noreferrer" target="_blank" className="nav-icons" to="#">
                            <FaFacebookSquare className="social-icons" />
                        </Link>
                        <Link rel="noreferrer" className="nav-icons" to="#">
                            <FaTwitterSquare className="social-icons" />
                        </Link>
                        <Link to="#" className="nav-icons">
                            <FaOdnoklassnikiSquare className="social-icons" />
                        </Link>
                    </div>
                </div>


            </div>
            <div className=" container">
                <p className="mt-3">Copyright © 2021 - 2022</p>
                {/* <p><a href="">khresearcher </a></p> */}
            </div>
        </FooterWrapp>
    )
}

export default Footer
