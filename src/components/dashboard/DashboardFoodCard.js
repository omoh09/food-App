import React from 'react'
import styled from 'styled-components'

const JSXContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const JSXStyled = styled.div`
flex: 0 1 33%;
margin-bottom:50px;
padding-bottom:50px;
padding-top:50px;

background: rgba(255, 255, 255, 0.83);
// border: 0.3px solid rgba(0, 48, 46, 0.14);
border-radius: 5px;

`
const JSXHImg = styled.img`
width: 40%;
`
const JSXH3 = styled.h3`
color: #FBDDBB;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 33px;
color: #00302E;
`
const JSXH5 = styled.h5`
width: 60%;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 21px;
color: rgba(0, 0, 0, 0.69);
margin-left: auto;
margin-right: auto;
`
const JSXp = styled.p`
width: 70%;
font-family: 'Poppins';
font-style: normal;
font-weight: 450;
font-size: 15px;
display:flex;
margin-left: auto;
margin-right: auto;

.left{
    width:50%;
    float:left;
    // background:blue;
    text-align: left; 
}

.right {
    width:50%;
    float:right;
    text-align: right; 
    // background:red;
}

a{
    text-decoration:none;
    color: #06E775;
}
`

const DashboardFoodCard = ({data}) => {
  return (
    <JSXContainer>
      {
        data && data?.map((item, index) => (
        
          <JSXStyled>
              <JSXHImg src={item?.image} alt='foods' />
              <JSXH3>{item?.name}</JSXH3>
              <JSXH5>{item?.desc}</JSXH5>
              <JSXp>
                <div className='left'>
                    N 1,000.00
                </div>
                <div className='right'>
                    <a href='/#'>Add to cart</a>
                </div>
              </JSXp>
          </JSXStyled>
        ))
      }
    </JSXContainer>
  )
}

export default DashboardFoodCard