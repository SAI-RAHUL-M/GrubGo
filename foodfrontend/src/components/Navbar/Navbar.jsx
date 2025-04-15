import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    
    const {getTotalCartAmount,token,setToken} =useContext(StoreContext);
    
    const navigate = useNavigate();

    const logout = () =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}> <strong>Home</strong> </Link>
            <a href='/#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><strong>Menu</strong></a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}><strong>Contact-Us</strong></a>
        </ul>
        <div className="navbar-right">
            {/* <img className='search-icon' src={assets.search_icon} alt="" /> */}
            <div className="navbar-search-icon">
               <Link to='/cart'><img className="basket-icon" src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}><strong>Sign In</strong></button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <p></p>
              <ul className='nav-profile-dropdown'>
                {/* <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>🛒 Orders</p></li> */}
                <li onClick={()=>navigate('/myorders')}><strong>🛒 Orders</strong></li>
                <hr />
                {/* <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>🚪Logout</p></li> */}
                <li onClick={logout}><strong>🚪Logout</strong></li>
              </ul>
              </div>}
            
        </div>
    </div>
  )
}

export default Navbar


// import React, { useContext, useState, useEffect } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';

// const Navbar = ({ setShowLogin }) => {
//     const [menu, setMenu] = useState("home");
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//     const navigate = useNavigate();

//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/");
//     }

//     // Toggle the dark mode
//     const toggleTheme = () => {
//         setIsDarkMode(prevMode => !prevMode);
//     }

//     // Apply the dark mode to the body when the theme changes
//     useEffect(() => {
//         if (isDarkMode) {
//             document.body.style.backgroundColor = 'black';
//             document.body.style.color = 'white'; // Optional, for text color
//         } else {
//             document.body.style.backgroundColor = '';
//             document.body.style.color = ''; // Reset text color
//         }
//     }, [isDarkMode]);

//     return (
//         <div className={`navbar ${isDarkMode ? 'dark' : ''}`}>
//             <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
//             <ul className="navbar-menu">
//                 <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
//                     <strong>Home</strong>
//                 </Link>
//                 <a href='/#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
//                     <strong>Menu</strong>
//                 </a>
//                 <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
//                     <strong>Contact-Us</strong>
//                 </a>
//             </ul>
//             <div className="navbar-right">
//                 <div className="navbar-search-icon">
//                     <Link to='/cart'><img className="basket-icon" src={assets.basket_icon} alt="" /></Link>
//                     <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//                 </div>
//                 {!token ? (
//                     <button onClick={() => setShowLogin(true)}><strong>Sign In</strong></button>
//                 ) : (
//                     <div className='navbar-profile'>
//                         <img src={assets.profile_icon} alt="" />
//                         <p></p>
//                         <ul className='nav-profile-dropdown'>
//                             <li onClick={() => navigate('/myorders')}><strong>🛒 Orders</strong></li>
//                             <hr />
//                             <li onClick={logout}><strong>🚪Logout</strong></li>
//                         </ul>
//                     </div>
//                 )}
//                 {/* Theme toggle button */}
//                 <button onClick={toggleTheme} className="theme-toggle-btn">
//                     {isDarkMode ? '🌙' : '☀️'}
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
