import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  height: 10vh;
  width: 60%;
  border-radius: 10px;
  margin-left: 20px;  
  font-size: 10px;
  padding: 20px;
`
export const Title = styled.span`
  font-size: 13px;
  margin-right: 15px;
  cursor: pointer;
  color: dimgray;
`
const Footer = () => {
  return (
    <Container>
        <Title>Terms of Service</Title>
        <Title>Privacy Policy</Title>
        <Title>Cookie Policy</Title>
        <Title>Accessibility</Title>
        <Title>Ads Info</Title>
        <Title>More...</Title>
    </Container>
  )
}

export default Footer