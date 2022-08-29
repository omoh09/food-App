import React, { Component } from 'react'
import logo1 from '../components/assets/apple.svg'
import logo2 from '../components/assets/adroid.svg'

export class Footer extends Component {
  render() {
    return (
      <div className='footer_container'> 
        <div className='footer'> 
          <div className='column col_1'>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='column col_2'>
            <h3>Support</h3>
              <ul>
                <li>Help Center</li>
                <li>Safety Center</li>
              </ul>
          </div>
          <div className='column col_3'>
            <h3>Legal</h3>
              <ul>
                <li>Cookies Policy</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Dispute resolution</li>
              </ul>
          </div>
          <div className='column col_4'>
            <h3>Install App</h3>
              <ul>
                <li><img src={logo1} alt="Download IOS" /></li>
                <li><img src={logo2} alt="Download Android" /></li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer