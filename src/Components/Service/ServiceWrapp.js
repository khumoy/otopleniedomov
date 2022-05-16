import styled from 'styled-components';
export const ServiceWrapp = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

font-family: 'Source Sans Pro', sans-serif;
width: 100%;
background: no-repeat url('https://mos-778561.oml.ru/d/bgd.jpg' ) ;
background-attachment: fixed;
min-height: 100vh;

.service-item {
    padding: 15px;
    /* background-color: #fff; */
    width: 100%;
    border-radius: 5px;
    line-height: 30px;
    h1 {
        font-weight: 600;
        font-size: 56px;
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
    background: url('https://mos-778561.oml.ru/d/texture.jpg');
    background-color: rgba(150, 250, 350, 0.2);
    background-blend-mode: darken;
    .service-item-image {
        z-index: 10;
        overflow: hidden;
        border-radius: 20px;

        &:hover {
            img {
            
            transform: scale(1);
            transition: 1000ms;

        }
        }
        img {
            transform: scale(1.2);
            border-radius: 20px;
            object-fit: cover;
            transition: 1000ms;

        }
    }
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

.service-help-container {
    position: relative;
    background: url('https://mos-778561.oml.ru/d/texture.jpg');
    background-color: rgba(150, 250, 350, 0.2);
    background-blend-mode: darken;
    width: 100%;
    padding: 20px 0 100px 0;
}
.service-help {
    font-weight: 600;
    padding: 20px 10px;
    transition: all 0.6s ease-in-out;
    min-height: 250px;
    overflow: hidden;
    margin: 20px 0;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    background-color: #5A98FF;

    border-radius: 20px;
    width: 100%;
    height: 100%;
    :hover {
        background-color: #5A98DD;
        transition: all 0.6s ease-in-out;
        transform:scale(1.1);
        p {
            color: white;
        transition: all 0.6s ease-in-out;
        }
        .service-icon {
            color: white;
        transition: all 0.6s ease-in-out;

        }
    }
    .service-icon {
        font-size: 50px;
        color: #DC3545;
        transition: all 0.6s ease-in-out;

    }
    p {
        margin-top: 15px;
        transition: all 0.6s ease-in-out;

    }
    .btn {
        margin-top: 5px;
    }
  
}
.service-title {
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
    padding: 10px;
   
    img {
        width: 100%;
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');


font-family: 'Source Sans Pro', sans-serif;
background-color: white;
color: black;
/* z-index: 102; */
.row {
    min-height: 100vh;
    h1 {
        
        /* font-weight: 600; */
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');


  font-family: 'Source Sans Pro', sans-serif;
  min-height: 100vh;
  color: black;
  background-color: rgba(0,0,0,0.5);
  padding-top: 40px;
  
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
    font-weight: 700; 
     background-color: rgba(300,300,300,0.7);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    border-radius: 20px;
}
a {
    color: white;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: .9px;
    transition: 1000ms;
    padding: 10px 25px;
    &:hover {
      transition: 1000ms;
    }
}

img { 
    width: 100%;
}
@media (max-width: 768px) {
    background-position: center;
    background-size:auto  100vh ;
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
export const BrandWrapper = styled.div`

background-color: rgba(0,0,0, 0.5);
width: 100%;
padding: 20px 0;
h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
     background-color: rgba(300,300,300,0.7);
    height: 100px;
    border-radius: 20px;
    margin-bottom: 25px;
}


.mySwiper {
    height: 200px;
    background-color: rgba(0,0,0,0.7);
    /* border-radius: 50px; */
}

.sw-brand {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */
  height: 100%;
  width: 100%;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.sw-brand img {
  min-width: 100px;
  max-width: 200px;
  /* height: 100%; */
  object-fit: cover;
}

`