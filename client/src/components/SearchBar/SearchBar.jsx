import React from 'react'
import styled from 'styled-components'
import { FaSistrix } from "react-icons/fa"

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px 0px 30px;
  font-size: 16px;
  height: 9vh;
  width: 38.5%;
  background: white;
  position: fixed;
  margin-top: -5px;
`
export const SearchBox = styled.div`
  height: 40px;
  width: 70%;
  background: whitesmoke;
  width: 70%;
  border-radius: 20px;
  display: flex;
  align-items: center;
`
export const Input = styled.input`
  border: none;
  outline: 0;
  border: none;
  background: whitesmoke;
  padding-left: 10px;
`
const SearchBar = () => {
  return (
    <Container>
      <SearchBox>
      <FaSistrix style={{paddingLeft: '10px', fontSize: '20px'}} />
      <Input 
        type='text'
        placeholder='Search CTwitter'
      />
      </SearchBox>
    </Container>
  )
}

export default SearchBar