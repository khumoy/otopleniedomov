import styled from 'styled-components';
export const HomeWrapp = styled.div`
    background: url('https://пушистикбукет.рф/800/600/https/www.reinertrittin.de/images/bg-header.jpg') no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    background-color: rgb(0,0,0,0.5);
    border-radius: 0 0 0 25%;
    -webkit-box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.55);
    -moz-box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.55);
    box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.55);
    height: 88vh;
    width: 100%;
.text-heating{
    border-radius: 15px;
    background-color: rgb(255,255,255,0.7);
    padding: 20px ;
    .btn-primary {
        margin-top: 15px;
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