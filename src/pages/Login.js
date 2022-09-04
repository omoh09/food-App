import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import login from '../components/assets/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  button{
    background: #00302E;
    color: #FBDDBB;
    border-radius: 5px;
    width:66%;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    height:50px;
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

const  Login = () => {

  const [formData, setform] = useState({
    email:'',
    password:'',
  })

  const handleChange = (e) => {
   setform({
    ...formData,
    [e.target.name]:e.target.value
   })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    let data = JSON.parse(sessionStorage.getItem('user'))
    // console.log(formData)
    // console.log(data)
    if (formData?.email == data?.email && formData?.password == data?.password)  {
      // console.log('TRUE')
      toast.success('Login Successful')
      setInterval(() => {
        window.location = '/dashboard'
      }, 2000)
    } else {
      toast.error('Invalid Credentials')
      // console.log('FALSE')
    }
    
  }

  return (
    <JSXDiv>
      <ToastContainer />
        <img src={login} alt='Login logo' />
        <JSXInnerdiv>
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <div className=''><input type='email' name='email' onChange={handleChange} placeholder='Your Email address' /></div>
            <div className=''><input type='password' name='password' onChange={handleChange} placeholder='Your Password' /></div>
            {/* <div className=''><input type='submit' name='login' value='LOGIN' /></div> */}
            <div className=''><button>LOGIN</button></div>
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