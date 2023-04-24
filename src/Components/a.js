import vn from "../images/vietnam 1.png";
import layer from "../images/Layer 1.png";
import "../Components/register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterAPI from "./API/registerAPI";
function Register() {
  const [validMsg, setValidMsg] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ischeck, setisCheck] = useState(false);
  RegisterAPI.validate(fullname, email, password, ischeck);
  const signUp = RegisterAPI.signUp();
  return (
    <>
      <div className="register-background">
        <img src={vn} alt="" />
      </div>
      <form>
        <div className="register-detail-img">
          <img src={layer} alt="" />
        </div>
        <h2>Create an account</h2>
        <div className="content">
          <label htmlFor="fullname">
            Full Name <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setFullname(e.target.value)}
          />
          <br />
          <small style={{ color: "red" }}>{validMsg.fullname}</small>
          <br />
          <label htmlFor="email">
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <small style={{ color: "red" }}>{validMsg.email}</small>
          <br />
          <input
            type="password"
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <small style={{ color: "red" }}>{validMsg.password}</small>
          <br />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="myCheckbox"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          I accept Levion’s <span>Terms of Service </span> and
          <span> Privacy Policy</span>.
        </div>
        <button type="button" onClick={signUp} id="mybtn" disabled={!isChecked}>
          Create Account
        </button>
        <ToastContainer />
        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </form>
    </>
  );
}
export default Register;
