import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, NavMenu, NavLink, Bars, Times, } from './HeaderWrapper';
// import Logo from './plumb.png'

const Header = () => {

    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setNavbar(!navbar)

    const closeMenuBtn = () => {
        setNavbar(false)
    };

    return (
        <HeaderWrapper>
            <Link to="/" >
                <img className="logo" src='https://lh3.googleusercontent.com/proxy/F97fnQFiVsvtjmEIoTUXogMvcwalRFTmiBx8IaAwFf-7V1BM5F3s50elBloJOUCUEF1_PrLjmPUj0oELtMPe1EfhkQ' alt="Logo" />
            </Link>

            <span onClick={handleClick}>
                {navbar ? <Times /> : <Bars />}
            </span>
            <NavMenu className={navbar ? 'navMenu active' : 'navMenu'}>
                <NavLink to='/home' onClick={closeMenuBtn}>
                    Главная
                </NavLink>
                <NavLink to='/heating' onClick={closeMenuBtn}>
                    Отопление
                </NavLink>
                <NavLink to='/photos' onClick={closeMenuBtn}>
                    Фото
                </NavLink>
                <NavLink to='/contacts' onClick={closeMenuBtn}>
                    Контакты
                </NavLink>
            </NavMenu>

        </HeaderWrapper >
    );
}

export default Header;