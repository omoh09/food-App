import React from 'react'
import logo from '../components/assets/logo.svg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import FooterIcon from '../components/FooterIcon';
import section_1_image from '../components/assets/section-image.svg'
import ioslogo from '../components/assets/apple.svg'
import androidlogo from '../components/assets/adroid.svg'
import food1 from '../components/assets/food1.png'
import food2 from '../components/assets/food2.png'
import food3 from '../components/assets/food3.png'
import FoodComponent from '../components/home/FoodComponent'

function Home() {
    const arrayData = [
        {'name':'Stir fry Pasta', 'desc':'Stir fry pasta yada yada yada because of Sesan', 'image':(food1)},
        {'name':'Meat Balls', 'desc':'Meat Balls yada yada yada because of Sesan', 'image':(food2)},
        {'name':'Burger Meal', 'desc':'Burger Meal yada yada yada because of Sesan', 'image':(food3)}
    ]
    
  return (
    <div className='container'>
        <div className='home_wrapper'>
            <div className='nav_row'>
                    <a href='/#'><img src={logo} alt='logo' className='logo_img' />
                    <div className='logo_title'>Lilies</div></a>
                <div className='nav_row_right'>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/sign-up'><span className='signup'>Sign Up</span></Link>
                </div>
            </div>

            <div className='section_1'>
                <div className='section_1_left'>
                    <h2>Order <span className='food'>food</span> anytime, anywhere</h2>
                    <h5>Browse from our list of specials to place your order and have food 
                    delivered to you in no time. Affordable, tasty and fast!</h5>
                    <div className='section_1_left_img'>
                        <a href='/#'><img src={ioslogo} alt='Dowlaod from app store' /></a>
                        <a href='/#'><img src={androidlogo} alt='Dowlaod from google play' /></a>
                    </div>
                </div>
                <div className='section_1_right'>
                    <img src={section_1_image} alt='food' />
                </div>
            </div>

            <div className='section_2'>
                <h2>Special Meals of the day!</h2>
                <h5>Check our sepecials of the day and get discounts on all our 
                    meals and swift delivery to what ever location within Ilorin. </h5>
            </div>

            <FoodComponent data={arrayData}/>

            <div className='section_4'>
                <div className='section_4_left'>
                    <h2>Get notified when we update!</h2>
                    <h5>Get notified when we add new items to our specials menu, 
                        update our price list of have promos!!</h5>
                </div>
                <div className='section_4_right'>
                    <form>
                        <input name='text' type='text' placeholder='gregphillips@gmail.com' />
                        <input type='submit' value='Get notified' />
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        <FooterIcon />
    </div>
  )
}

export default Home