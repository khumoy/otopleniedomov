import styled from 'styled-components';
import Background from './plumbbackgr.jpg';


export const HomeWrapp = styled.div`
    background: url(${Background});
    background-size: cover ;
    background-attachment: fixed;
    background-position: center;
    background-blend-mode: darken; 
    background-color: rgb(0,0,0,0.5);
    backdrop-filter: blur(8px);
    object-fit: cover;
    width: 100%;
    
.row {
    min-height: 90vh;

}
.text-heating{
    border-radius: 15px;
    /* background-color: rgb(255,255,255,0.7); */
    color: white;
    p {
        padding: 1px;
        margin: 0;
        display: inline-block;
        background-color: rgb(255,255,255,0.2);
    }
    h1 {
        font-size: 55px ;
        margin: 0;
        padding: 0;
       
    }
   

    }
    .btn-primary {
        margin-top: 15px;
        padding: 10px 40px;
    }
    @media (max-width: 568px) {

        .text-heating {
            
            h1 {
                font-size: 35px;
                    margin: 20px 0;
            }
        }
    }

`