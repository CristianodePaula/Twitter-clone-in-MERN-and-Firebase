import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: -20px;
`
export const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`
export const Span = styled.span`
  padding-left: 5px;
  
`
export const PostImg = styled.img`
  height: 320px;
  width: 500px;
  border-radius: 20px;
  object-fit: cover;
  padding: 10px;
  margin-top: -20px;
`
export const Desc = styled.div`
  padding: 20px;
  margin-top: -20px;
  width: 460px;
`
export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid silver;
  margin-bottom: 20px;
`
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