import React from 'react'
import styled from 'styled-components'
import logo from '../components/assets/logo.svg'
// import FoodComponent from '../components/home/FoodComponent'
import dashboardLogo from '../components/assets/dashboard.svg'
import cartLogo from '../components/assets/cart.svg'
import orderLogo from '../components/assets/order.svg'
import profileLogo from '../components/assets/profile.svg'
import pfile from "../components/assets/40w_1.png"
import DashboardFoodCard from '../components/dashboard/DashboardFoodCard'
import food1 from '../components/assets/food1.png'
import food2 from '../components/assets/food2.png'
import food3 from '../components/assets/food3.png'

const JSXDiv = styled.div`
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 100%;
  position: relative;
  margin-right: 0;
  background:white;
`


const Dashboard = () => {
    let user = JSON.parse(sessionStorage.getItem('user'))
    let name = user?.name
    let email = user?.email

    const arrayData = [
      {'name':'Stir fry Pasta', 'desc':'Stir fry pasta yada yada yada because of Sesan', 'image':(food1)},
      {'name':'Meat Balls', 'desc':'Meat Balls yada yada yada because of Sesan', 'image':(food2)},
      {'name':'Burger Meal', 'desc':'Burger Meal yada yada yada because of Sesan', 'image':(food3)},
      {'name':'Stir fry Pasta', 'desc':'Stir fry pasta yada yada yada because of Sesan', 'image':(food1)},
      {'name':'Meat Balls', 'desc':'Meat Balls yada yada yada because of Sesan', 'image':(food2)},
      {'name':'Burger Meal', 'desc':'Burger Meal yada yada yada because of Sesan', 'image':(food3)}
  ]
  return (
      <JSXDiv>
       {/* <div id="viewport"> */}
          {/* <!-- Sidebar --> */}
          <div id="sidebar">
            <header>
              <img src={logo} alt="logo" />
              <a href="#">Lilies</a>
            </header>
            <ul className="nav">
              <li>
                <a href="#">
                  <i className="zmdi zmdi-view-dashboard"><img src={dashboardLogo} alt="Dashboard Icon" /></i> Dashboard
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="zmdi zmdi-link"><img src={profileLogo} alt="Dashboard Icon" /></i> Your Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="zmdi zmdi-widgets"><img src={orderLogo} alt="Dashboard Icon" /></i> Orders
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="zmdi zmdi-calendar"><img src={cartLogo} alt="Dashboard Icon" /></i> Your Cart
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Content --> */}
          <div id="content">
            <div className='content_1'>
              <div className='content_1_left'>
                <h2>Good morning, Oghenevwede!</h2>
                <p>What delicious meal are you craving today?</p>
              </div>
              <div className='content_1_right'>
                <img src={pfile} alt="profile logo" />
              </div>
            </div>
            
            <div className='content_2'>
              <DashboardFoodCard data={arrayData} />
            </div>
             {/* <FoodComponent /> */}
            {/* <div className="container-fluid">
              <h1>Simple Sidebar</h1> */}
              {/* <p>
                Make sure to keep all page content within the 
                <code>#content</code>.
              </p> */}
             
            {/* </div> */}
          </div>
        {/* </div> */}
      </JSXDiv>
  )
}

export default Dashboard