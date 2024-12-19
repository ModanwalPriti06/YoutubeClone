import React from 'react'
import styled from "styled-components";
import Comment from './Comment';

const Container = styled.div`
    display:flex;
    gap: 24px;
    width: 100%;
    flex-direction: column;
`

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avtar = styled.img`
    width:50px;
    height: 50px;
    border-radius: 50%;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme})=> theme.soft};
    background-color: transparent;
    width: 100%;
    outline: none;
    padding: 5px;
`


function Comments() {
  return (
    <Container>
        <NewComment>
            <Avtar src='https://picsum.photos/200'/>
            <Input placeholder='Add a comment...'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments