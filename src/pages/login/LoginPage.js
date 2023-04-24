import vn from "../../images/vietnam 1.png";
import layer from "../../images/Layer 1.png";
import "../login/Login.css";
import { Link } from "react-router-dom";
import useLogicLogin from "./useLogicLogin";
import { ToastContainer } from "react-toastify";
function Login() {
  const { handleChange, submitForm,loginData } = useLogicLogin();
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
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <br />
          <small style={{ color: "red" }}>{loginData.email.error}</small>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Your Password"
            onChange={handleChange}
            required
          />
          <br />
          <small style={{ color: "red" }}>{loginData.password.error}</small>
          <br />
        </div>
        <button type="button" onClick={submitForm}>
          Sign in
        </button>
        <ToastContainer/>
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
