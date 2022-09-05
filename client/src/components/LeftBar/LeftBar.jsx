import React from 'react'
import Happening from '../Happening/Happening'
import HoFollow from '../HoFollow/HoFollow'
import SearchBar from '../SearchBar/SearchBar'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import { mobile } from '../../resources/Responsive' 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2.6;
  height: 180vh;
  ${mobile({
    display: 'none'
  })}
`
const LeftBar = () => {
  return (
    <Container>
      <SearchBar />
      <Happening />
      <HoFollow />
      <Footer />
    </Container>
  )
}

export default LeftBar