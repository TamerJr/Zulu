import React, { useContext, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiFillCloseCircle} from "react-icons/ai"
import { useNavigate, Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Logo from "../../assets/Logo.png";
import userAuth from "../../Features/Context/AuthUser";
const Navbar = () => {
  const { user, LogOut: handleLogOut } = useContext(userAuth);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleAuthPage = (arg) => {
    navigate(arg);
  };

  const scrollingPostion = () => {
    let navbar = document.querySelector(".Navbar");
    if (navbar.offsetTop < window.screenY) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };
  return (
    <nav className="Navbar">
      <img src={Logo} alt="Logo" title="Zulu" />
      <ul className="NavigationMenu">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/account">
          <li>Account</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
      </ul>
      <div className="ToggleSettings" onClick={() => setToggle(!toggle)}>
        <GiHamburgerMenu />
      </div>
      {toggle && <div className="asideContainer">
        <AiFillCloseCircle size={25} color="black"  onClick={()=>setToggle(!toggle)} opacity={.4}/>
        <SideBar />
        </div>
        }
      <div className="AuthOptions">
      { ! user ?

        <button
          className="SignInButton"
          onClick={() => handleAuthPage("/signin")}
        >
          {" "}
          Log In
        </button>
        : 
          <button className="LogOutButton" onClick={handleLogOut}>
            Log Out
          </button>
        }
        <button
          className="SignUpButton"
          onClick={() => handleAuthPage("/signup")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
