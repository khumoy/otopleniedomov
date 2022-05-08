import styled from 'styled-components';


export const HomeWrapp = styled.div`
    background: url("https://cdn.mos.cms.futurecdn.net/JLKkuQB7pAAsaBq5yd4VEB.jpg");
    background-size: cover ;
    background-attachment: local;
    background-position: center;
    background-blend-mode: overlay;  
    background-color: rgb(0,0,0, 0.5);
   
    object-fit: cover;
    width: 100%;
    
.row {
    min-height: 90vh;

}
.text-heating{
    border-radius: 15px;
    /* background-color: rgb(255,255,255,0.7); */
    color: white;
    span {
        padding: 5px;
        margin: 0;
        background-color: rgb(150,250,355,0.5);
        font-weight: 500;
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
        background-color: #1286B3;
        &:hover {
        background-color: #0006B3;

        }
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