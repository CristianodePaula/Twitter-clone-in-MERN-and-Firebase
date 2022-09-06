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
          <Span>{new window.Date(post.createdAt).toLocaleDateString()} </Span>
        </UserContainer>
        <Desc>{post.desc}</Desc>
        <PostImg
          src={post.image}
          alt=""
        />
      </Wrapper>
      <Line />
    </Container>
  )
}

export default Post

// ? process.env.REACT_APP_PUBLIC_FOLDER + post.image : ""