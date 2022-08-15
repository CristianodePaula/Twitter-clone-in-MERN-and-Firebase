import React from 'react'
import { BsTwitter } from "react-icons/bs"
import { TbBell } from "react-icons/tb"
import { RiHome7Fill, RiIndeterminateCircleLine } from "react-icons/ri"
import { HiHashtag, HiOutlineMail, HiOutlineUser } from "react-icons/hi"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: flex-end;
  text-align: center;

`
export const MenuContainer = styled.div`
  padding-right: 20px;
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
const Menu = () => {
  return (
    <Container>
      <MenuContainer>
      <Link to='/' >
        <Icon>
          <BsTwitter style={{color: 'deepskyblue'}}/>
        </Icon>
      </Link>

      <Link to='/'>
        <Icon>
          <RiHome7Fill />
        </Icon>
      </Link>

      <Link to='/'>
        <Icon>
          <HiHashtag />
        </Icon>
      </Link>

      <Link to='/'>
        <Icon>
          <TbBell />
        </Icon>
      </Link>

      <Link to='/'>
        <Icon>
          <HiOutlineMail />
        </Icon>
      </Link>


      <Link to='/'>
        <Icon>
          <HiOutlineUser />
        </Icon>
      </Link>

      <Link to='/'>
        <Icon>
          <RiIndeterminateCircleLine/>
        </Icon>
      </Link>
      <UserImg src='https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </MenuContainer>
    </Container>
  )
}

export default Menu