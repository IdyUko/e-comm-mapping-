import React from "react";
import styled from "styled-components"
import { BsSearch, BsCartPlusFill } from "react-icons/bs"
import { Link} from "react-router-dom";


const Header = () => {
  return(
    <Div>
        <Wrapper>
            <Left>
                <Logo to="/"><img src= "/RED solution Ltd.png"  alt="logo"/></Logo>
                <Nav to= "/">HOME</Nav>
                <Nav to= "/shop">SHOP</Nav>
                <Nav  to= "/products">PRODUCTS</Nav>
                <Nav to= "/blog">BLOG</Nav>
                <Nav to= "/contact">CONTACT</Nav>
            </Left>

            <Right>
                <BsSearch style={{width: 20, height: 20}}/>
                <BsCartPlusFill  style={{width: 20, height: 20}}/>
            </Right>
        </Wrapper>
    </Div>
  )
};

export default Header;

const Div = styled.div`
color: black;
background-color: white;
width: 100%;
height: 70px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
/* background-color: aqua;  */
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Left = styled.div`
/* background-color: yellow; */
width: 70%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;
const Logo = styled(Link)`
width: 120px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;

img{
	width: 120px;
  height: 60px;
  /* background-color: gold; */
}
`;
const Right = styled.div`
/* background-color: green; */
width: 10%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
cursor: pointer;
`;

const Nav = styled(Link)`
color: red;
text-decoration:  none;
`;