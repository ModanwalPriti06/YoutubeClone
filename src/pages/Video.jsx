import React from 'react';
import styled from "styled-components";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import Comments from '../components/Comments';
import Card from '../components/Card';


const Container = styled.div`
  display:flex;
  gap: 24px;
`
const Content = styled.div`
  flex:5;
`

const VideoWrapper = styled.div`
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top:20px;
  margin-bottom: 10px;
  color : ${({theme})=> theme.text}
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`
  color : ${({theme})=> theme.textSoft}

`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color : ${({theme})=> theme.text}
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme})=> theme.soft};
`

const Recommendation = styled.div`
  flex:2
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap:20px
`

const Image = styled.img`
  width:50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color : ${({theme})=> theme.text};
`
const ChannelName = styled.span`
  font-weight: 500
`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 13px;
  color : ${({theme})=> theme.textSoft};


`
const Description = styled.p`
  font-size: 14px;
`

const Subscribe = styled.button`
  background-color: red;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding:10px 20px;
  cursor: pointer
`
function Video() {
  return (
    
    <Container>
      <Content>
        <VideoWrapper>
        <iframe
          width="100%"
          height="720"
          title="YouTube Video Player"
          src="https://www.youtube.com" /* Replace with any valid video ID */
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,345,342 views . jun 24, 2025</Info>
          <Buttons>
            <Button><ThumbUpOffAltIcon/>124</Button>
            <Button><ThumbDownOffAltIcon/>Unlike</Button>
            <Button><ShareIcon/>Share</Button>
            <Button><SaveIcon/>Save</Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
           <ChannelInfo>
              <Image src='https://picsum.photos/200'/>
              <ChannelDetail>
                  <ChannelName>GippyTube</ChannelName>
                  <ChannelCounter>2M subscriber</ChannelCounter>
                  <Description>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eaque et sed, illo, repellendus officia illum praesentium, eius odit dicta ipsa fugiat voluptates culpa laudantium.
                  </Description>
              </ChannelDetail>
           </ChannelInfo>
           <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      {/* Secong Right part for all video recoomnedation */}

      <Recommendation>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
      </Recommendation>
    </Container>
  )
}

export default Video