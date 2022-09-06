import React, { useState } from 'react'
import {
  Container,
  Wrapper,
  BoxSocial,
  Social,
  Image,
  BoxRegister,
  Form,
  Input,
  Button,
  Register
} from './LoginStyle'
import { Link } from 'react-router-dom'
import Google from "../../img/google.png"
import Facebook from "../../img/facebook.png"
import axios from 'axios'
import { useDispatch } from "react-redux"
import {
  loginStart,
  loginSuccess,
  loginFailure
} from "../../redux/userSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginStart())
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { name, password })
      dispatch(loginSuccess(res.data))
      navigate("/")
    } catch (err) {
      dispatch(loginFailure())
    }
  };

  return (
    <Container>
      <Wrapper>
        <BoxSocial>
          <Social style={{ background: 'red' }}>
            <Image src={Google} />
            Google
          </Social>
          <Social style={{ background: 'blue' }}>
            <Image src={Facebook} />
            Facebook
          </Social>
        </BoxSocial>
        <BoxRegister>
          <Form>
            <Input
              placeholder="nome"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="password"
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>
              Entrar
            </Button>
            <Register>
              <Link to='/register'>
                Cadastrar
              </Link>
            </Register>
          </Form>
        </BoxRegister>
      </Wrapper>
    </Container>
  )
}

export default Login