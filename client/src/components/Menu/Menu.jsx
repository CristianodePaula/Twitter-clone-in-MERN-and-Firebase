import React, { useState } from 'react'
import {
  Container,
  MenuContainer,
  Icon,
  UserImg
} from './MenuStyle'
import { BsTwitter } from "react-icons/bs"
import { TbBell } from "react-icons/tb"
import { RiHome7Fill, RiIndeterminateCircleLine } from "react-icons/ri"
import { HiHashtag, HiOutlineMail, HiOutlineUser } from "react-icons/hi"
import { Link } from 'react-router-dom'
import Logout from '../Logout/Logout'

const Menu = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
    <Container >
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
      <UserImg 
        src='https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        onClick={()=> setOpen(true)}
        />
      </MenuContainer>
    </Container>
    {open && <Logout setOpen={setOpen} />}
    </>
  )
}

export default Menu