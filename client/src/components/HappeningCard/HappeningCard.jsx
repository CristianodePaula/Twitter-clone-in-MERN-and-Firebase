import React from 'react'
import {
  Container,
  TextBox,
  Title,
  Desc,
  Twitters,
  Img
}from './HappeningCardStyle'
const HappeningCard = ({notice}) => {
  return (
    <Container>
      <TextBox>
        <Title>{notice.title}</Title>
        <Desc>{notice.desc}</Desc>
        <Twitters>{notice.twitter} twittes</Twitters>
      </TextBox>
      <Img src={notice.imgHappening} />
    </Container>
  )
}

export default HappeningCard