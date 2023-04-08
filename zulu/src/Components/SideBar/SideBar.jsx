import React, { useContext } from "react";
import { useNavigate ,Link } from "react-router-dom";
import userAuth from "../../Features/Context/AuthUser";
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
            <button className="SignInButton"onClick={()=>handleAuthPage("/signin")}></button>
        </li> :
        <button className="LogOutButton" onClick={handleLogOut}>

        </button>
        }
        <li>
            <button className="SignUpButton"onClick={()=>handleAuthPage("/signup")}></button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
