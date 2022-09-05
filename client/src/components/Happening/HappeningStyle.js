import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 30px;
`
export const HappeningBox = styled.div`
    height: 90vh;
    width: 70%;
    background: whitesmoke;
    border-radius: 10px;
    margin: 0px 0px 0px 30px;
`
export const Title = styled.h1`
    font-size: 20px;
    margin-left: 20px;
`
export const Box = styled.div`
    height: 18vh;
    cursor: pointer;
    &:hover { 
        opacity: 0.7; 
        background: mistyrose;
    }
`
export const Span = styled.div`
    font-size: 18px;
    margin-left: 20px;
    color: deepskyblue;
    cursor: pointer;
    margin-top: 20px;
`