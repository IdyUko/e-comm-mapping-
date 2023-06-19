import React from "react";
import styled from "styled-components";


const Card= ({image, item, amt, text}) => {
    return(
        <Div>
            <Wrapper>
                <Divv>
                    <Picture>< img  src= {image} alt=" "/></Picture>
                    <Description>
                        <Wrap>
                            <H3>{item}</H3>
                            <H4>{amt}</H4>
                            <H6>{text}</H6>
                        </Wrap>
                        
                    </Description>
                </Divv>
            </Wrapper>
        </Div>
    )
}

export default Card;

const Div= styled.div`
    width: 100%;
    height: 90vh;
    background-color: gray;
    display:  flex;
    justify-content:  center;
    align-items: center;
`;

const Wrapper= styled.div`
    width: 90%;
    height:  90vh;
    /* background-color: gold; */
    display:  flex;
    justify-content:  space-between;
    align-items:  center;
`;
const Divv= styled.div`
   width: 350px;
    height: 550px;
    margin: 10px;
    border-radius: 10px;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display:flex;
    flex-direction: column;
    align-items:center;
`;
const Picture= styled.div`
    width: 100%;
    height: 70%;
    border-radius: 10px 10px  0 0 ;
    display:flex;
    justify-content: center;
    align-items:center;
    /* background-color: orange; */

img{
    width: 95%;
    height: 95%;
}
`;
const Description= styled.div`
    width: 100%;
    height: 30%;
    display:  flex;
    flex-direction: column;
    justify-content:  center;
    align-items:center;
    /* background-color: peru; */
`;
const Wrap= styled.div`
    width:  90%;
    height:  90%;
    display:  flex;
    flex-direction: column;
    justify-content:  center;
`;
const H3= styled.div`
   font-size: 17px;
   font-weight: bold;
   color: black;
   margin-bottom: 10px;
`;
const H4= styled.div`
    font-size: 17px;
    font-weight: bold;
    color: black;
    margin-bottom: 10px;
`;
const H6= styled.div`
    font-size: 15px;
   color: gray;
`;