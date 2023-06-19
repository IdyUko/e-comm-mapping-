import React from "react";
import styled from "styled-components";
import Card from "../Card/card";
import Products from "../Products/products"


const Home = ({props}) => {
    return(
        <Div>
            <Wrapper>
                <Card  image = "/fjaellraeven-foldsack-no1-daypack.jpg" item= "Fjllraven - Foldsack No.1 Backpack,Fits 15 laptops." amt= "$ 109.95" text= " men clothing" />
                <Card  image = "/men's fit.jpg" item= "Mens casual Premium Slim Fit T-Shirts." amt= "$ 22.3" text= " men clothing"/>
                <Card  image = "/winterjacket.png" item= "Men's Cotton Jacket." amt= "$ 55.99" text= " men clothing"/>
                <Card  image= "/slimfit shirt.jpg" item= "Men's Casual Slim Fit." amt= "$ 15.99" text= " men clothing"/>
            </Wrapper>
            <Products/>
        </Div>
    )
}

export default Home;

const Div= styled.div`
    width: 100%;
    background-color: white;
`;
const Wrapper= styled.div`
    width: 100%;
    background-color: aquamarine;
    display:flex;
`;
