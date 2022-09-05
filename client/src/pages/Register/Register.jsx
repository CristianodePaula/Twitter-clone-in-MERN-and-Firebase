import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import {
  Container, 
  Wrapper, 
  BoxRegister, 
  Form, 
  Input, 
  Button, 
  RegisterBtn, 
} from './RegisterStyled'

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password })
     navigate("/login")
     } catch (err) {
    }
  }

  return (
    <Container>
      <Wrapper>
      <BoxRegister>
            <Form>
            <Input
                placeholder="nome"
                onChange={(e) => setName(e.target.value)}
                />
              <Input
                type='email'
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                placeholder="senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleRegister}>
                Cadastrar
              </Button>
              <RegisterBtn>
                <Link to='/login'>
                  Logar
                </Link>
              </RegisterBtn>
            </Form>
          </BoxRegister>
          </Wrapper>
    </Container>
  )
}

export default Register