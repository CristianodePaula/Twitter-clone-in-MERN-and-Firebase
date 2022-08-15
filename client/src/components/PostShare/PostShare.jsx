import React from 'react'
import styled from 'styled-components'
import {
    AiOutlineFileGif,
    AiOutlineSchedule
} from "react-icons/ai"
import {
    RiImage2Line,
    RiBarChartHorizontalFill,
    RiEmotionHappyLine
} from "react-icons/ri"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { IoIosArrowDown } from "react-icons/io"

export const Container = styled.div`
    width: 100%;
    margin-top: 40px;
`
export const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
`
export const UserImg = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
`
export const EveryOne = styled.div`
    height: 25px;
    width: 100px;
    border-radius: 20px;    
    border: none;
    color: deepskyblue;
    border: 1px solid silver;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    cursor: pointer;
`
export const Input = styled.input`
    width: 85%;
    border: none;
    font-size: 20px;
    outline: 0;
    margin-left: 60px;
    border-bottom: 1px solid silver;
`
export const IconBox = styled.div`
    display: flex;    
    margin-left: 60px;
`
export const Icon = styled.a`
    font-size: 20px;
    cursor: pointer;
    margin-right: 20px;
    color: deepskyblue;
`
export const ShareBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Button = styled.button`
    height: 35px;
    width: 70px;
    background: deepskyblue;
    border-radius: 20px;
    border: none;
    color: white;
    margin: 0px 10px 10px 0px;
    cursor: pointer;
`
export const Line = styled.div`
    border-bottom: 1px solid silver;
`
const PostShare = () => {
    return (
        <Container>
            <UserBox>
                <div style={{ display: 'flex' }}>
                    <UserImg src='https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    <EveryOne>
                        EveryOne
                        <IoIosArrowDown />
                    </EveryOne>
                </div>
                <Input
                    placeholder="What's happening?"
                />
            </UserBox>
            <ShareBox>
                <IconBox>
                    <Icon>
                        <RiImage2Line />
                    </Icon>
                    <Icon>
                        <AiOutlineFileGif />
                    </Icon>
                    <Icon>
                        <RiBarChartHorizontalFill />
                    </Icon>
                    <Icon>
                        <RiEmotionHappyLine />
                    </Icon>
                    <Icon>
                        < AiOutlineSchedule />
                    </Icon>
                    <Icon>
                        < HiOutlineLocationMarker />
                    </Icon>
                    <Icon>
                        < AiOutlineSchedule />
                    </Icon>
                </IconBox>
                <div>
                    <Button>Tweet</Button>
                </div>
            </ShareBox>
            <Line />
        </Container>
    )
}

export default PostShare