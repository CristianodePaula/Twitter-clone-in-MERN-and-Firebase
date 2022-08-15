import React from 'react'
import Menu from '../../components/Menu/Menu'
import Posts from '../../components/Posts/Posts'
import LeftBar from '../../components/LeftBar/LeftBar'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`
function Home() {
  return (
    <Container>
      <Menu />
      <Posts />
      <LeftBar />
    </Container>
  )
}

export default Home