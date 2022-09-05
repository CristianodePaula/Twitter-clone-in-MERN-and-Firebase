import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: -20px;
  margin-bottom: 15px;
`
export const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`
export const Span = styled.span`
padding-left: 5px;
`
export const PostImg = styled.img`
  height: 320px;
  width: 500px;
  border-radius: 20px;
  object-fit: cover;
  padding: 10px;
  margin-top: -20px;
  ${mobile({
    height: '300px',
    width: '400px'
  })}
`
export const Desc = styled.div`
  padding: 20px;
  margin-top: -20px;
  width: 500px;
  ${mobile({
    width: '400px'
  })}
`
export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid silver;
  margin-bottom: 20px;
`