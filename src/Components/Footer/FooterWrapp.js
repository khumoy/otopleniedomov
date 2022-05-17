import styled from 'styled-components'
export const FooterWrapp = styled.div`
    padding: 20px 20px 10px;
    background-color: #fff;

    .logo-brand {
        img{
            width: 130px;   
        }
    }
.social-item-group {

    display: flex;
    justify-content: space-between;
    align-items: center;
   
    }
.nav-icons {
        text-decoration: none;
        color: black;
        padding: 8px;
        margin-left: 10px;
        border-radius: 10px;      
        transition: all 0.3s  ease-in-out;
        :hover {
            color: #ff1414;
            transition:  all 0.3s ease-in-out;
        }
    }
    .phone-icon {
        padding: 20px 0;
        a {
            font-weight: 800;
        }
    }
.social-icons {
        font-size: 25px;
    }
.social-icons-contanier {
    display: flex;
    align-items: center;
    h1 {
     color: black;   
    }
}

@media (max-width: 768px) {
    text-align: center;
    .social-item-group {
        flex-direction: column;
        align-items: center;
    }
    .phone-icon  {
        margin-bottom: 15px; 
    }
}
`