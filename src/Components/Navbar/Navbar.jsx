import React, {useState} from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return (
    <div className="navbar">
     <div className="nav-logo">
        <img src={logo} alt="" />
            <p>Open World Market</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("woman")}}><Link to='/woman'>Women</Link>{menu==="woman"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
    <div className="nav-login-cart">
            <Link to='login'><button>Login</button></Link>
            <Link to='cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
    )
}

export default Navbar