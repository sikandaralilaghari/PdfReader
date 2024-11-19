import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSvg } from "./mysvgs";
import { authStore } from "../store/auth.store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-hot-toast";
import {
  faSpinner,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useColor } from "../store/color.state";

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const { login, isLoading, error } = authStore();
  const [showPass, setShowPass] = useState(false);
  const { getHexaCode, settingOptions } = useColor();

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setUser((prevUser) => ({ ...prevUser, [key]: value }));
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      await login(user);
      navigate("/registeruser/dashboard");
    } catch (_) {
      // Error occured
      toast.error(error);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-md-flex justify-content-start align-items-center d-none">
            <LoginSvg color={getHexaCode(settingOptions.color)} />
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end gap-1 m-5">
              <p>Dont have Account?</p>
              <a
                href="/register"
                className={`text-${settingOptions.color} text-decoration-none`}
              >
                Get Started
              </a>
            </div>
            <form onSubmit={handleSubmitForm} className="px-5">
              <div className="my-5 ms-3">
                <h1 className={`text-${settingOptions.color}`}>
                  Welcome Back,
                </h1>
                <h5>Enter your credentials to login</h5>
              </div>

              <div className="form-floating m-3">
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Enter your Email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <label htmlFor="emailInput">Enter your email</label>
              </div>

              <div className="form-floating m-3">
                <input
                  type={showPass ? "text" : "password"}
                  className="form-control"
                  id="passwordInput"
                  placeholder="Enter Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <label htmlFor="passwordInput">Enter Password</label>
                <FontAwesomeIcon
                  icon={showPass ? faEyeSlash : faEye}
                  className="icon"
                  onClick={() => setShowPass(!showPass)}
                />
              </div>
              <div className="d-flex justify-content-between m-3">
                <div>
                  <input type="checkbox" id="rememberBox" className="me-2" />
                  <label htmlFor="rememberBox">Remember me</label>
                </div>
                <div>
                  <a
                    href="/login/forgotpassword"
                    className={`text-${settingOptions.color} text-decoration-none`}
                  >
                    Forgot Password
                  </a>
                </div>
              </div>

              <div className="form-floating m-3">
                <button
                  className={`btn btn-${settingOptions.color} shadow-lg w-100`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="fa-spinner fa-spin"
                      aria-hidden="true"
                      style={{ animationDuration: "1s" }}
                    />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
