import React from "react";
import styled from "styled-components";


const ProductPage = () => {
    return(
        <Container>
                <Left><img src="/winterjacket.png" alt=""/></Left>
                <And>AND</And>
                <Right>
                        <Wrap>
                                <Boldtxt>Mens Cotton Jacket</Boldtxt>
                                < Pricediv>
                                        <Circle></Circle>
                                        <Price>$ 55.99</Price>
                                </Pricediv>
                                <Menclothing>men clothing</Menclothing>
                                <Paragraph>great outwear jackets for Spring/Autumn/Winter, suitable
                                for many occassions, such as working, hiking, camping,
                                mountain/rock climbing, cycling, travelling or other outdoors.
                                Good gift choice for you or your family member. a warm hearted
                                love to father, husband or son in this thanksgiving or christmas day.</Paragraph>
                                <Addtocart>Add to Cart</Addtocart>
                        </Wrap>
                </Right>

        </Container>
    )
}

export default ProductPage;


const Container = styled.div`
  height: 85vh;
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
 align-items: center;
  
`;
const Left = styled.div`
  height: 100%;
  width: 48%;
  border: 2px solid gainsboro;

  img{
  width: 100%;
  height: 100%;
  }
`;
const And = styled.div`
  height: 30px;
  width: 80px;
  /* background-color: red; */
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const Right = styled.div`
   height: 100%;
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center; 
  border: 2px solid gainsboro;
`;
const Wrap = styled.div`
  height: 90%;
  width: 90%;
  /* background-color: gold; */
`;
const Boldtxt = styled.div`
  height: 10%;
  width: 400px;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
`;
const Pricediv = styled.div`
  height: 40px;
  width: 150px;
  border-radius: 5px;
  background-color: teal;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px;
`;
const Circle = styled.div`
  height: 15px;
  width: 15px ;
  background-color: white;
  border-radius: 50px;
  font-size: 100px;
`;
const Price = styled.h3`
  height: 100%;
  width: 70%;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
`;
const Menclothing = styled.div`
  height: 50px;
  width: 90%;
  background-color: whitesmoke;
  color: firebrick;
  border-radius: 6px;
  border: 2px solid gainsboro;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 20px;
`;
const Paragraph = styled.div`
  height: 30%;
  width: 95%;
  font-size: 20px;
  color: grey;
  margin-bottom: 10px;
`;
const Addtocart = styled.button`
  height: 50px;
  width: 200px;
  background-color: deeppink;
  color: white;
  font-size: 20px;
  border-radius: 3px;
  border: none;

`;

