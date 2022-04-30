import styled from 'styled-components'
export const CatalogWrapp = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

font-family: 'Source Sans Pro', sans-serif;
background-color: gold;
color: rgba(0,0,0, .80);

h1{
     margin-bottom: 20px;
     font-weight: 700;

}
.image-content {
overflow: hidden;

    .images {
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        
        :hover {
            transition: all 0.5s ease-in-out;
            transform: scale(1.2);
        }
    }
}
`