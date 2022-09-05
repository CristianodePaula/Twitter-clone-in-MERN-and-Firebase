import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
height: 9vh;
width: 100%;
padding: 5px;
`
export const Title = styled.h1`
font-size: 20px;
padding-left: 10px;
height: 9vh;
width: 46.2%;
background: white;
position: fixed;
margin: -5px 0px 0px -5px;
opacity: 0.9;
${mobile({ 
  width: '100%'
})}
`