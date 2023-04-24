import vn from "../images/vietnam 1.png";
import layer from "../images/Layer 1.png";
import "../Components/forgetpassword.css";
function Forgotpassword() {
  return (
    <>
      <div class="register-background">
        <img src={vn} alt="" />
      </div>
      <form action="">
        <div class="register-detail-img">
          <img src={layer} alt="" />
        </div>
        <h2>Create an account</h2>
        <div class="content">
          <label for="email" style={{ fontWeight: "bold" }}>
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input type="email" placeholder="Your Email" required />
          <br />
        </div>
        <button type="button">Reset password</button>
        <p>
          Already have an account?{" "}
          <a href="login.html" style={{ fontWeight: "bold" }}>
            Sign in
          </a>
        </p>
      </form>
    </>
  );
}
export default Forgotpassword;
