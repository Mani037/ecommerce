import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const {getTotalCartItems} = useContext(ShopContext);
    
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <Link style={{textDecoration:"none"}} to= '/'><li>Shop</li></Link>
            <Link style={{textDecoration:"none"}} to= '/mens'><li>Men</li></Link>
            <Link style={{textDecoration:"none"}} to= '/womens'><li>Women</li></Link> 
            <Link style={{textDecoration:"none"}} to= '/kids'><li>Kids</li></Link>
            
        </ul>
        <div className="nav-login-cart">
            <Link style={{textDecoration:"none"}} to='/login'><button>Login</button></Link>
            <Link style={{textDecoration:"none"}} to='/cart'><img src={cart_icon} alt=''></img></Link>
            <div className="nav-cart-count">{getTotalCartItems}</div>
        </div>
    </div>

  )
}

export default Navbar