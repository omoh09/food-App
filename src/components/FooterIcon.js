import React from 'react'
import styled from 'styled-components'
import instagram from '../components/assets/instagram.svg'
import twitter from '../components/assets/twitter.svg'
import youtube from '../components/assets/youtube.svg'

const JSXDiv =styled.div`
background-color: #0B0D17;
display:flex;
color:white;
width: 100%;
font-style: normal;
font-size: 8px;
margin-left:auto;
margin-right:auto;
padding:10px;
h2{
    width:50%;
}
.left{
    float:right;
    width:50%;
    text-align:center;
}
`
function FooterIcon() {
  return (
    <div>
        <JSXDiv>
            <h2>© 2021 LILIES, All rights reserved</h2>
            <div className='left'>
                <img src={instagram} alt='Instagram logo' />
                <img src={twitter} alt='Twitter logo' />
                <img src={youtube} alt='Youtube logo' />
            </div>
        </JSXDiv>
    </div>
  )
}

export default FooterIcon