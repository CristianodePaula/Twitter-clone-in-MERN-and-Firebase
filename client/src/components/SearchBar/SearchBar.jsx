import React from 'react'
import {
  Container,
  SearchBox,
  Input
} from './ShareBarStyle'
import { FaSistrix } from "react-icons/fa"

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