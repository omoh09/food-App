import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import register from '../components/assets/register.png'
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

const Register = () => {

  //Initialize the form data
  const [form, setForm] = useState({
    fullname:'',
    email:'',
    password:'',
  })

  //Captaure the data
  const handleChange = (e) => {
    setForm({
      ...form, //spread operator
      [e.target.name]:e.target.value
    })
  }

  //store on sessionStrorage
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({form})
    sessionStorage.setItem('user', JSON.stringify(form))
    toast.success('Registration Successful')
    setInterval(() => {
      window.location = '/login'
    }, 2000);
  }

  return (
    <JSXDiv>
      <ToastContainer />
        <img src={register} alt='Register logo' />
        <JSXInnerdiv>
          <h2>Welcome to Lilies!</h2>
          <form onSubmit={handleSubmit}>
            <div><input type='text' onChange={handleChange} placeholder='Your First Name' name='fullname'/></div>
            <div><input type='email' name='email' onChange={handleChange} placeholder='Your Email address' /></div>
            <div><input type='password' name='password' onChange={handleChange}placeholder='Your Password' /></div>
            {/* <div className=''><input type='submit' name='login' value='SIGN UP' /></div> */}
            <div><button>SIGN UP</button></div>
          </form>
          <div className='row'>
            Already have an account. <Link to='/login'>LOGIN</Link>
          </div>
        </JSXInnerdiv>
    </JSXDiv>
  )
}

export default Register