import styled from 'styled-components';

export const ProjectWrapp = styled.div`
background: no-repeat url('https://server-service.uz/wp-content/uploads/2019/02/DG1A4277-%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C.jpg');
background-blend-mode: darken;
background-attachment: fixed;
background-color: rgba(0,0,0,0.55);
background-size: cover;
height: 80vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-weight: 600;
`
export const Container = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

font-family: 'Roboto', sans-serif;
.content-title {
    /* position: absolute; */
    transform: translateY(-100px);
    box-shadow: 4px 4px 4px 1px rgba(0,0,0,0.55);
}

.image {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    padding: 20px;

    :hover {
             transition: all 0.5s ease-in-out;
            transform: scale(1.1);
        }
    p {
        font-size: 19px;
        font-weight: 400;
        margin-left: 10px;
    }
}
.title {
    max-width: 800px;
    p {
        font-weight: 400;

    }
    h4 {
        font-weight: 600;
        text-align: center;
        a {
            text-decoration: none;
            padding: 10px;
            transition: 0.5s;
            :hover{
                color: yellow;
                background-color: #000;
                transition: 0.5s;
            }
        }
    }
}
`