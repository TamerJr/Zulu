import React, { useContext } from "react";
import { useNavigate ,Link } from "react-router-dom";
import userAuth from "../../Features/Context/AuthUser";
import "./SideBar.css"
const SideBar = () => {
  const {user} =useContext(userAuth)
    const navigate=useNavigate();
    const handleAuthPage=(arg)=>{
        navigate(arg)
    }
  return (
    <aside className="SideBar">
      <ul className="SideBarNavigationMenu">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/account">
          <li>Account</li>
        </Link>
        {user && <Link to="/adminpage">
          <li>Admin</li>
        </Link>}
        {! user ? <li >
            <button className="SignInButton SideBarButton"onClick={()=>handleAuthPage("/signin")}> Sign In</button>
        </li> :
        <button className="LogOutButton SideBarButton" onClick={handleLogOut}>
          LogOut
        </button>
        }
        <li>
            <button className="SignUpButton SideBarButton"onClick={()=>handleAuthPage("/signup")}> Sign Up</button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
