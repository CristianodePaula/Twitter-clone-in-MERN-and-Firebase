import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover { 
      opacity: 0.7; 
      background: mistyrose;
  }
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;  
`
export const Title = styled.span`
  font-size: 14px;
  color: grey;
`
export const Desc = styled.h1`
  font-size: 15px;
  margin-top: 5px;
`
export const Img = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 10px;
`
export const Twitters = styled.span`
  font-size: 14px;
  color: grey; 
  margin-top: -5px;
  
`
