import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./SignUp.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [showPass, setShowPass] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password should be minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast("Please provide a valid email");
          break;
        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("Please fill up form carefuly");
      }
    }
  }, [hookError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div className="login-container">
      <div className="login-title">Sign up</div>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Your Email"
          onChange={handleEmailChange}
        />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="password"
            onChange={handlePasswordChange}
          />
          {errors?.password && (
            <p className="error-message">{errors.password}</p>
          )}
          <p
            className="absolute top-3 right-5"
            onClick={() => setShowPass(!showPass)}
          >
            Show
          </p>
        </div>
        <input
          type="password"
          placeholder="confirm password"
          onChange={handleConfirmPasswordChange}
        />

        <button>Sign up</button>

        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;
