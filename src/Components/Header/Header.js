import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, NavMenu, NavLink, Bars, Times, } from './HeaderWrapper';
import Logo from './brandlogo.png';
import { Fade } from 'react-reveal';

const Header = () => {

    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setNavbar(!navbar)

    const closeMenuBtn = () => {
        setNavbar(false)
    };

    return (
        <HeaderWrapper>
            <Fade left>
                <Link to="/" >
                    <img className="logo" src={Logo} alt="otoplenie-domov" />
                </Link>
            </Fade>

            <span onClick={handleClick}>
                {navbar ? <Times /> : <Bars />}
            </span>

            <NavMenu className={navbar ? 'navMenu active' : 'navMenu'}>
                <NavLink to='/otoplenie-domov' onClick={closeMenuBtn}>
                    Главная
                </NavLink>
                <NavLink to='/otoplenie-domov-uslugi' onClick={closeMenuBtn}>
                    Отопление
                </NavLink>
                <NavLink to='/otoplenie-photos' onClick={closeMenuBtn}>
                    Фото
                </NavLink>
                <NavLink to='/otoplenie-aboutus' onClick={closeMenuBtn}>
                    О нас
                </NavLink>
            </NavMenu>


        </HeaderWrapper >
    );
}

export default Header;