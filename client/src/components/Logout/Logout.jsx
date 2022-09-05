import React from 'react'
import {
  Container,
  UserBox,
  UserImg,
  UserName,
  Span
} from './LogoutStyle'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/userSlice'

const Logout = ({ setOpen }) => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Container>
      <UserBox>
        <UserImg src='https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <UserName>Fulano</UserName>
      </UserBox>
      <Span onClick={handleLogout}>Logout</Span>
      <Span onClick={() => setOpen(false)}>Voltar</Span>
    </Container>
  )
}

export default Logout