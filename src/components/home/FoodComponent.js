import React from 'react'
import styled from 'styled-components'
// import food1 from '../assets/food1.png'

const JSXContainer = styled.div`
  margin-top: 100px;
  color: white;
  display: flex;
`
const JSXStyled = styled.div`
background-color: #00302E;
width: 33%;
`
const JSXHImg = styled.img`
width: 60%;
`
const JSXH3 = styled.h3`
color: #FBDDBB;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 33px;
`
const JSXH5 = styled.h5`
width: 80%;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 33px;
margin-left: auto;
margin-right: auto;
`

const FoodComponent = ({data}) => {
// console.log(data)
  return (
    <JSXContainer>
      {
        data && data?.map((item, index) => (
          <JSXStyled>
              <JSXHImg src={item?.image} alt='food pizza' />
              <JSXH3>{item?.name}</JSXH3>
              <JSXH5>{item?.desc}</JSXH5>
          </JSXStyled>
        ))
      
      }
    </JSXContainer>
  )
}

export default FoodComponent