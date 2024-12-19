import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avtar = styled.img`
    width:50px;
    height: 50px;
    border-radius: 50%;
`
const Details = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 10px;
    color: ${({theme})=> theme.text};
`

const Name = styled.span`
font-size: 13px;
font-weight: 500;

`
const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme})=> theme.textSoft};
margin-left: 5px

`
const Text = styled.span`
font-size: 14px;

`

function Comment() {
  return (
    <Container>
        <Avtar src= 'https://picsum.photos/200'/>
        <Details>
            <Name>John Deo <Date>1 day ago</Date></Name>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero debitis voluptatem ipsa atque? Adipisci exercitationem corporis atque voluptatem voluptas quam?</Text>
        </Details>
    
    </Container>
  )
}

export default Comment