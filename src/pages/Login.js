import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import login from '../components/assets/login.png'

const JSXDiv = styled.div`
display:flex;
background:white;
img{
  width:60%;
  overflow:hidden;
  float:left;
  opacity:0.5;
}
`
const JSXInnerdiv = styled.div`
  float:right;
  width:40%;
  margin-top:200px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 33px;

  input{
    width:60%;
    padding:1em;
    margin:1em;
    border:1px solid rgba(251, 221, 187, 0.51);
    line-height:30px;
  }
  input:hover{
    border: 1px solid blue;
    border-radius: 5px;
  }
  input[type=submit]{
    background: #00302E;
    color: #FBDDBB;
    border-radius: 5px;
    width:66%;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
  .row{
    font-weight: 400;
    font-size: 12px;
    line-height: 30px;
    width:65%;
    margin-left:auto;
    margin-right:auto;
  }
  .col-1{
    float:left;
  }
  .col-2{
    float:right;
  }
  a{
    text-decoration: none;
    color: black
  }
`

function Login() {
  return (
    <JSXDiv>
        <img src={login} alt='Login logo' />
        <JSXInnerdiv>
          <h2>Welcome Back</h2>
          <form method='' action=''>
            <div className=''><input type='email' name='email' placeholder='Your Email address' /></div>
            <div className=''><input type='password' name='password' placeholder='Your Password' /></div>
            <div className=''><input type='submit' name='login' value='LOGIN' /></div>
          </form>
          <div className='row'>
            <div className='col-1'>
              <Link to='/sign-up'>Create an account</Link>
            </div>  
            <div className='col-2'>
              <Link to='/reset-password'>Forgot Passoword</Link>
            </div>  
          </div>
        </JSXInnerdiv>
    </JSXDiv>
  )
}

export default 
Login