import vn from "../images/vietnam 1.png";
import layer from "../images/Layer 1.png";
import "../Components/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
function Login() {
  const emailvalue = useRef();
  const passwordvalue = useRef();
  async function getUser() {
    if(emailvalue.current.value==''||passwordvalue.current.value==''){
      <div id="snackbar">Please enter the valid email and password</div>
    }else{
      const res = await axios.post('https://dev.go.locate.sa/api/admin/api/v1/test/login',{
      "email": emailvalue.current.value,
      "password": passwordvalue.current.value
    })
    console.log(res.data.token);
    const response = await axios.get('https://dev.go.locate.sa/api/admin/api/v1/test/profile',
    {
          headers: {
            Authorization:
              `Bearer ${res.data.token}`,
          },
        })
    console.log(response);
    }
    
  }
  return (
    <>
      <div className="register-background">
        <img src={vn} alt="a" />
      </div>
      <form>
        <div className="register-detail-img">
          <img src={layer} alt="a" />
        </div>
        <h2>Sign in to your account</h2>
        <div className="content">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            ref={emailvalue}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            ref={passwordvalue}
            required
          />
          <br />
        </div>
        <button type="button" onClick={getUser}>Sign in</button>
        <div className="forgot">
          <Link to="/forgot">Forgot password</Link>
        </div>
        <p>
          Already have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </>
  );
}
export default Login;
