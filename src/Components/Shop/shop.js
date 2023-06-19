import React from "react";
import styled from "styled-components";


const Shop = ({props}) => {
    return(
        <Div>
           <H1>This is the Shop Page</H1>
        </Div>
    )
}

export default Shop;

const Div= styled.div`
background-color: teal;
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`;
const H1= styled.h1`
`;