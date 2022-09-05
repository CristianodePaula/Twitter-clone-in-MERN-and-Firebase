import styled from 'styled-components'
import { mobile } from '../../resources/Responsive' 

export const Container = styled.div`
  display: flex;
  flex: 1;  
  height: 100vh;
  justify-content: flex-end;
  text-align: center;
  ${mobile({
    flex: '0',
    justifyContent: 'center'
  })}
`
export const MenuContainer = styled.div`
  padding-right: 20px;
  ${mobile({
    padding: '0px'
  })}
`
export const Icon = styled.div`
  font-size: 30px;
  color: black;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background: silver;
  }
`
export const UserImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: cover;
`