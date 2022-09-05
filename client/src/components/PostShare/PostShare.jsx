import React from 'react'
import {
    Container,
    UserBox,
    UserImg,
    EveryOne,
    Input,
    ShareBox,
    IconBox,
    Icon,
    Button,
    Line
} from './PostShareStyle'
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