import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import register from '../components/assets/register.png'

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
  margin-top:150px;
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
    color: #00302E;
    font-weight: 500;
    font-size: 15px;
    line-height: 40px;
    width:65%;
    margin-left:auto;
    margin-right:auto;
  }
  a{
    text-decoration: none;
    color: black
  }
`

function Register() {
  return (
    <JSXDiv>
        <img src={register} alt='Register logo' />
        <JSXInnerdiv>
          <h2>Welcome to Lilies!</h2>
          <form method='' action=''>
            <div className=''><input type='text' name='name' placeholder='Your First Name' /></div>
            <div className=''><input type='email' name='email' placeholder='Your Email address' /></div>
            <div className=''><input type='password' name='password' placeholder='Your Password' /></div>
            <div className=''><input type='submit' name='login' value='SIGN UP' /></div>
          </form>
          <div className='row'>
            Already have an account. <Link to='/login'>LOGIN</Link>
          </div>
        </JSXInnerdiv>
    </JSXDiv>
  )
}

export default Register