import React from 'react'
import { dataUser } from '../../resources/Data'
import {
  Container,
  HoFollowBox,
  Title,
  Div,
  UserImg,
  User,
  UserName,
  Button,
  Span
} from './HoFollowStyle'

const HoFollow = () => {
  return (
    <Container>
      <HoFollowBox>
        <Title>Who to follow</Title>
        {dataUser.map((user, index) => {
          return (
            <Div key={index}>
              <UserImg src={user.userImg} />
              <div style={{ width: '150px' }}>
                <User>{user.user}</User>
                <UserName>{user.username}</UserName>
              </div>
              <Button>Follow</Button>
            </Div>
          )

        })}
        
        <Span>Show More</Span>
      </HoFollowBox>
    </Container>
  )
}

export default HoFollow