import React from 'react'
import styled from 'styled-components'
import HomeBar from '../../components/HomeBar/HomeBar'
import PostShare from '../../components/PostShare/PostShare'
import { dataPosts } from '../../resources/Data'
import Post from '../../components/Post/Post'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3.2;
  height: 250vh;
  overflow-y: scroll;
  border-right: 1px solid silver;
  border-left: 1px solid silver;
  border-size: 100%;
`
export const PostContainer = styled.div``

const Posts = () => {
  return (
    <Container>
      <HomeBar />
      <PostShare />
      <PostContainer>
        {dataPosts.map((post) => {
         return (
          <Post post={post} />
         )
        })}
      </PostContainer>
    </Container>
  )
}
export default Posts