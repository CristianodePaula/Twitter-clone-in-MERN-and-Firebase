import React from 'react'
import {
  Container,
  Wrapper,
  UserContainer,
  UserImg,
  Span,
  Desc,
  PostImg,
  Line
} from './PostStyle'

const Post = ({ post }) => {

  return (
    <Container>
      <Wrapper>
        <UserContainer>
          <UserImg src='https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <Span> <b>Usuário</b> @fulano</Span>
          <Span>há 2 dias</Span>
        </UserContainer>
        <Desc>{post.desc}</Desc>
        <PostImg src={post.imgUrl} />
      </Wrapper>
      <Line />
    </Container>
  )
}

export default Post