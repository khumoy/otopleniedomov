import styled from 'styled-components'
export const FooterWrapp = styled.div`
    padding: 20px 20px 10px;
    background: no-repeat url('https://commons.mtholyoke.edu/makerspace/wp-content/uploads/sites/103/2015/11/blue-gradient-header.jpg');
    background-size: cover;

.social-item-group {
 
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
.nav-icons {
        text-decoration: none;
        color: white;
        padding: 8px;
        margin-left: 10px;
        border-radius: 10px;      
        transition: all 0.3s  ease-in-out;
        :hover {
            color: yellow;
            background-color: #000;
            transition:  all 0.3s ease-in-out;
            transform: scale(1.1);
        }
    }
.social-icons {
        font-size: 25px;
    }
.social-items {
    display: flex;
    align-items: center;
    
}

@media (max-width: 768px) {
    text-align: center;
    .social-item-group {
        flex-direction: column;
        align-items: center;
    }
    .phone-icon  {
        margin-top: 15px; 
    }
}
`