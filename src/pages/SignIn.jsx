import React from 'react'
// import { Link, Links } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color : ${({ theme }) => theme.text};
    flex-direction: column;
`
const Wrapper = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    background-color : ${({ theme }) => theme.bgLighter};
    border : 1px solid ${({ theme }) => theme.soft};
    padding: 20px 30px;
    gap: 10px
`

const Title = styled.h1`
    font-size: 24px;
`

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300

`
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
`

const Button = styled.button`
    border: none;
    border-radius: 3px;
    padding: 10px; 20px;
    cursor: pointer;
    font-weight: 500;
    background-color : ${({ theme }) => theme.soft};
    color : ${({ theme }) => theme.textSoft};
`

const More = styled.div`
    display:flex;
    margin-top: 10px
    font-size: 10px;
    color : ${({ theme }) => theme.textSoft};

`
const Links = styled.div`
    margin-left: 50px;
`
const Link = styled.span`
    margin-left: 20px;
`

function SignIn() {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <SubTitle>to continue to GippyTube</SubTitle>
                <Input placeholder='Username' />
                <Input placeholder='password' type='password' />
                <Button>Sign in</Button>
                <Title>or</Title>
                <Input placeholder='Username' />
                <Input placeholder='Email' />
                <Input placeholder='password' type='password' />
                <Button>Sign up</Button>
            </Wrapper>
            <More>
                English (USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                </Links>
            </More>
        </Container>
    )
}

export default SignIn