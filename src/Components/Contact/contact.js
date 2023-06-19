import React from "react";
import styled from "styled-components";


const Contact = ({props}) => {
    return(
        <Div>
           <H1>This is the Contact Page</H1>
        </Div>
    )
}

export default Contact;

const Div= styled.div`
background-color: aqua;
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`;
const H1= styled.h1`
`;