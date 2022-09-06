import styled from 'styled-components'

export const Container = styled.div`
    height: 200px;
    width: 300px;
    background: azure;
    border-radius: 10px;
    position: absolute;
    margin-top: 140px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`
export const UserBox = styled.div`
    align-items: center;
    display: flex;
    height: 33.3%;
    cursor: pointer;
    &:hover {
        background: whitesmoke;
    }
`
export const UserName = styled.span`
    margin-left: 10px;
`
export const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 20px;
  object-fit: cover;
`
export const Span = styled.span`
    height: 30%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background: whitesmoke;
    }
`
