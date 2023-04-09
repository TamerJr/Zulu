import React, { useContext } from 'react'
import userAuth from '../../Features/Context/AuthUser'
import { Link } from 'react-router-dom'
import "./SignIn.css"
const SignIn = () => {
  const {SignIn,setEmail ,setPassword}=useContext(userAuth)
  const handleSubmit =(e)=>{
    e.preventDefault()
    SignIn()
  }
  return (
    <section className="SignInSection">
    <form className="SignIn" onSubmit={handleSubmit}>
        <legend>Log In</legend>
        <p className="inputs-field">
          <label htmlFor="Email">Email</label>
          <input type="email"  onChange={e=>setEmail(e.target.value)} required placeholder="Enter Email" id="Email" />
        </p>
        <p className="inputs-field">
          <label htmlFor="Password">Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)}  required placeholder="Enter Password" id="Password" />
        </p>
        <p>
          Wanna Create An Account <Link to="/signup">Sign Up</Link>
        </p>
        <button className="submit" >Enter</button>
    </form>
  </section>

  )
}

export default SignIn