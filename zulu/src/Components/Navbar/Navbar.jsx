import React, { useState } from "react";
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
const Navbar = () => {
    const [toggle ,setToggle]=useState(false)
    const navigate=useNavigate();
    const handleAuthPage=(arg)=>{
        navigate(arg)
    }
    const scrollingPostion=()=>{
        let navbar=document.querySelector(".Navbar")
        if (navbar.offsetTop<window.screenY){
            navbar.classList.add("sticky")
        }else{
            navbar.classList.remove("sticky")
        }
    } 
  return (
    <nav className="Navbar">
      <img src="" alt="" title=""/>
      <ul className="NavigationMenu">
        <Link to="/">
          <li></li>
        </Link>
        <Link to="/shop">
          <li></li>
        </Link>
        <Link to="/account">
          <li></li>
        </Link>
        <Link to="/blog">
          <li></li>
        </Link>
      </ul>
      <div className="ToggleSettings" onClick={()=>setToggle(!toggle)}>
        <GiHamburgerMenu />
      </div>
      {toggle &&
        <SideBar/>
      }
      <div className="AuthOptions">
        <button className="SignInButton" onClick={handleAuthPage("/signin")}> Log In</button>
        <button className="LogOutButton" onClick={handleLogOut}>Log Out</button>
        <button className="SignUpButton" onClick={handleAuthPage("/signup")}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
