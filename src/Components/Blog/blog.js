import React from "react";
import styled from "styled-components";


const Blog = ({props}) => {
    return(
        <Div>
           <H1>This is the Blog Page</H1>
        </Div>
    )
}

export default Blog;

const Div= styled.div`
background-color: yellow;
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`;
const H1= styled.h1`
`;