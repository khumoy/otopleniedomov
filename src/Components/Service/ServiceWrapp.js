import styled from 'styled-components';
export const ServiceWrapp = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

font-family: 'Roboto', sans-serif;
width: 100%;
background: no-repeat url('https://i2.wp.com/ecmservice.com/wp-content/uploads/Asset-1@2x.png?resize=1024%2C844&ssl=1' );
background-size: 400px 350px;
background-position: top right;
background-attachment: fixed;
/* padding: 20px 0; */
min-height: 100vh;
.service-item {
    padding: 15px;
    background-color: #fff;
    width: 100%;
    /* -webkit-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    -moz-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55); */
    border-radius: 5px;
    line-height: 30px;
    h1 {
        font-weight: 600;
    }
    p {
        font-weight: 600;
        letter-spacing: 0.4px;
        span {
            color: red;
            font-size: 18px;
            a {
            color: red;
            text-decoration: none;
            padding: 3px;
            border-radius: 5px;
            transition: all 0.4s ease;
            :hover {
                border: 1px solid red;
                transition: all 0.4s ease;
            }
        }
        }
       
    }
}

.service-content {
    
}
.service-item-group {
    background-color: #fff;
    -webkit-box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin-top: 15px;
    border-radius: 5px;
.list-group {
    .list-group-item {
    border: none;
    padding: 9px 0;

}
}
}
.service-icon {
        font-size: 29px;
        color: blue;
    }
.service-title {
    background-color: rgb(255,255,255,0.8);
    font-weight: 500;
    font-size: 21px;
    
}
.service-help-container {
    background-color: #fff;
    position: relative;
}
.service-help {
    /* line-height: 40px; */
    font-weight: 600;
    padding: 20px 10px;
    transition: all 0.6s ease-in-out;
    border: 1px solid rgba(0, 0, 0, 0.2);
    height: 100%;
    overflow: hidden;
    :hover {
        .service-icon-help {
            /*position: absolute;*/
           
        }
        
    transition: all 0.6s ease-in-out;
            transform:scale(1.1);
    border: 1px solid blue;

    }
    p {
        margin-top: 10px;
    }
    a {
        margin-top: 5px;
        padding: 8px;
        color: red;
        border-radius: 5px;
        font-weight: bold;
        text-decoration: none;
        transition: 0.5s;
        :hover {
            border: 1px solid red;
            transition: 0.5s;
        }
    }
}
@media (max-width: 760px ) {
    .service-title {
    margin: 0px 15px;
    font-weight: bold;
    font-size: 17px;
}
}

`

export const OurserviceWrapper = styled.div`
background-color: gold;
color: black;

.row {
    min-height: 100vh;
    h1 {
        font-size: 60px;
    }
    p {
        font-size: 30px;
    }
    a {
        font-size: 25px;
    }
}
@media (max-width: 768px) {
    
  .row {
    h1 {
        font-size: 45px;

    }
    p {
        padding: 0 10px;
    }
    p,a {
        font-size: 20px;
        letter-spacing: 1px;
    }
  }
}
    
`
export const GalleryWrapp = styled.div`

background-color: #104E92;
min-height: 100vh;
  color: white;

.gallery {
  
    overflow: hidden ;
    transition: all 0.5s ease-in-out;
    .gallerys-image {
        cursor: pointer;
    transition: all 0.5s ease-in-out;

        :hover {
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
    }
}
    
}

h1 {
    margin-bottom: 30px;
    font-weight: 600;
    
}
a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: .9px;
    :hover {
        font-size: 22px;
        color: gold;
    }
}
@media (max-width: 768px) {
    .gallery {
        width: 80%;
        height: 70%;
    }
}
@media (max-width: 1000px) {
    .colls {
        margin-bottom: 30px;
    }
}

`