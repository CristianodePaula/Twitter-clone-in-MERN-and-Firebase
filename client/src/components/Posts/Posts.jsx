import React, { useState, useEffect } from 'react'
import HomeBar from '../../components/HomeBar/HomeBar'
import PostShare from '../../components/PostShare/PostShare'
import Post from '../../components/Post/Post'
import axios from 'axios'

import styled from 'styled-components'

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

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const readPost = async () => {
      const res = await axios.get("http://localhost:5000/api/post")
      setPosts(res.data)
    }
    readPost()
  }, [posts])

  return (
    <Container>
      <HomeBar />
      <PostShare />
      <PostContainer>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <Post post={post} index={index} />
            </div>
          )
        })}
      </PostContainer>
    </Container>
  )
}
export default Posts



/* --- DESCRIÇÃO E IMAGEM HIPERLINK MONGO DB

import React, { useState, useEffect } from 'react'
import HomeBar from '../../components/HomeBar/HomeBar'
import PostShare from '../../components/PostShare/PostShare'
import Post from '../../components/Post/Post'
import axios from 'axios'

import styled from 'styled-components'

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

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const readPost = async () => {
      const res = await axios.get("http://localhost:5000/api/post")
      setPosts(res.data)
    }
    readPost()
  }, [posts])

  return (
    <Container>
      <HomeBar />
      <PostShare />
      <PostContainer>
        {posts.map((post, index) => {
          return (
            <Post post={post} index={index} />
          )
        })}
      </PostContainer>
    </Container>
  )
}
export default Posts
*/
