import React, { useContext } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import userAuth from "../../Features/Context/AuthUser"
const SignUp = () => {
  const {SignUp ,setEmail ,setPassword} =useContext(userAuth)
  const handleSubmit=e=>{
    e.preventDefault()
    SignUp()
  }
  return (
    <section className="SignUpSection">
      <form className="SignUp" onSubmit={handleSubmit}>
          <legend>Sign Up</legend>
          <p className="inputs-field">
            <label htmlFor="Email">Email</label>
            <input type="email"  onChange={e=>setEmail(e.target.value)} required placeholder="Enter Email" id="Email" />
          </p>
          <p className="inputs-field">
            <label htmlFor="Password">Password</label>
            <input type="password" onChange={e=>setPassword(e.target.value)}  required placeholder="Enter Password" id="Password" />
          </p>
          <p>
            Already have Account <Link to="/signin">Log In</Link>
          </p>
          <button className="submit" >Create</button>
      </form>
    </section>
  );
};

export default SignUp;
