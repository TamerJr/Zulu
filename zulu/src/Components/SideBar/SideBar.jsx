import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
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
            <button className="SignInButton"onClick={handleAuthPage("/signin")}></button>
        </li> :
        <button className="LogOutButton" onClick={handleLogOut}>

        </button>
        }
        <li>
            <button className="SignUpButton"onClick={handleAuthPage("/signup")}></button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
