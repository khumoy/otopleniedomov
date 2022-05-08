import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export const HeaderWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

background-color: #fff;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
position: relative;
font-family: 'Source Sans Pro', sans-serif;

.logo {
    width: 75px;
    margin-left: 10px;
}

.navMenu {
    display: flex ;
    align-items: center;
}

 @media screen and (max-width: 768px){
.logo {
    margin-left: 16px;

     }
 .navMenu {
    display: flex ;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px 0 30px;
    position: absolute;
    top: -480px;
    left: 0;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
}
.navMenu.active {
    top: 80px;
    left:0;
    transition: all 0.5s ease-in-out;
    
}
   
}
`;
export const NavMenu = styled.div`
z-index: -9;

`;
export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 2px 1rem;
margin-right: 15px;
height: 70%;
font-weight: 700;
position: relative;
transition: all 0.5s ease;
border: 1px solid transparent;
border-radius: 5px;

&.active{
   border: 1px solid black;
   background-color: transparent;
   color: red;
   transition: all 0.5s ease-in-out;
   font-weight: 700;
   transform: scale(1.1);
}
::before{
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    height: 3px;
    width: 0;
    border-radius: 10px;
    background-color: gray;
    transition: all 0.5s ease;
}
:hover {
    transition: all 0.5s ease;
    color: black;
    
    ::before{
        transition: all 0.5s ease;
        width: 100%;
        background-color: black;

    }
}

@media  (max-width: 768px){
    padding: 10px 1rem;
    margin-top: 15px;

    :hover {
        color: gray;
    }

}
`

export const Bars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px){

    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    transition: all .6s ease-in-out;
    font-size: 1.8rem;
    color: #000;
    cursor: pointer;
}
`
export const Times = styled(FaTimes)`
display: none;

@media screen and (max-width: 768px){

    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    transition: all .6s ease-in-out;
    font-size: 1.8rem;
    color: #000;
    cursor: pointer;
}
`


