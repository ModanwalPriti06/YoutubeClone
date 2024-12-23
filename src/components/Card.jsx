import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
width:${(props) => (props.type !== 'sm' && '360px')};;
margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
cursor: pointer;
display : ${(props)=>props.type === 'sm' && 'flex'}
gap: 10px
`;

const Image = styled.img`
width:100%;
height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
background-color: #999;
flex: 1;
`;


const Details = styled.div`
margin-top: ${(props) => (props.type !== 'sm' && '16px')};
display:flex;
gap: 12px;
flex:1;
`;

const ChannelImage = styled.img`
width:36px;
height:36px;
border-radius: 50%;
background-color: #999;
display: ${(props) => (props.type === 'sm' && 'none')};
`;

const Text = styled.div``
const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color : ${({theme})=> theme.text}
`
const ChannelName = styled.h2`
font-size: 14px;
margin: 9px 0px;
color : ${({theme})=> theme.textSoft}`

const Info = styled.div`
font-size: 14px;
// margin: 9px 0px;
color : ${({theme})=> theme.textSoft}`


function Card({type}) {
  return (
    <Link to='/video/test' style={{textDecoration:'none'}}>
    <Container type={type}>
          <Image type={type} src = 'https://picsum.photos/200'/>
          <Details type={type}>
            <ChannelImage type={type} src='https://picsum.photos/200'/>
            <Text>
              <Title>Test Video</Title>
              <ChannelName>GippyTube</ChannelName>
              <Info>23,245 views . 1 day ago</Info>
            </Text>
          </Details>
    </Container>
   </Link>
  )
}

export default Card