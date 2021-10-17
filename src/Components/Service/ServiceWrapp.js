import styled from 'styled-components';
export const ServiceWrapp = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

font-family: 'Roboto', sans-serif;
width: 100%;
background: no-repeat url('https://i2.wp.com/ecmservice.com/wp-content/uploads/Asset-1@2x.png?resize=1024%2C844&ssl=1' );
background-size: 400px 350px;
background-position: top right;
background-attachment: fixed;
padding: 20px 0;

.service-item {
    padding: 15px;
    background-color: #fff;
    width: 100%;
    -webkit-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    -moz-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    border-radius: 5px;
    line-height: 30px;
    p {
        font-weight: 600;
        a {
            text-decoration: none;
            background-color: lightblue;
            padding:  3px;
            border-radius: 5px;
            color: blue;
            transition: all 0.4s ease;
            :hover {
                color: yellow;
                background-color: black;
                transition: all 0.4s ease;
            }
        }
    }
}

.service-content {
    
}
.service-item-group {
    background-color: #fff;
    -webkit-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    -moz-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
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
    -webkit-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    -moz-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
}
.service-help-container {
    background-color: rgb(255,255,255,0.8);
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
        /* -webkit-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    -moz-box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55);
    box-shadow: 4px 4px 8px 3px rgba(0, 125, 221, 0.55); */
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
        background-color: lightblue;
        color: blue;
        border-radius: 5px;
        font-weight: bold;
        text-decoration: none;
        transition: 0.5s;
        :hover {
            background-color: #000;
            color: yellow;
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
export const GalleryWrapp = styled.div`

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
    font-size: 18px;
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