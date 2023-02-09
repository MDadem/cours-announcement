import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({ setActive, setUser }) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const key = "6Le2PU8kAAAAAI3imjzVlzMOn6upDUVxKwRn-jM9"; //captcha v2
  // const key = "6Lc_FVEkAAAAAK1cWFH6wapVeQipb6NSOPzFmHWj"; //captcha v3

  const { email, password, firstName, lastName, confirmPassword } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  function onChange(value) {
    console.log("captcha value ", value);
    setCaptchaVerified(true);
  }

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/");
        setActive("home");
        toast.success("logged in");
        setUser(user);
      } else {
        return toast.error("All fields are required");
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Password don't match");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        toast.success(
          "Welcome to our app! Your account has been successfully created",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        setActive("home");
      } else {
        return toast.error("All fields are required");
      }
    }
    navigate("/");
  };
  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="col-12 text-center">
          <div className="text-center heading py-2">
            {!signUp ? "Sign-In" : "Sign-Up"}
          </div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row" onSubmit={handleAuth}>
              {signUp && (
                <>
                  <div className="d-flex justify-content-center">
                    <div className="col-12 py-3 w-50">
                      <input
                        type="text"
                        className="form-control border border-primary"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="col-12 py-3 w-50">
                      <input
                        type="text"
                        className="form-control border border-primary"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="d-flex justify-content-center">
                <div className="col-12 py-3 w-50">
                  <div className="form-group d-block">
                    <input
                      type="email"
                      className="form-control border border-primary"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col-12 py-3 w-50">
                  <div className="form-group d-block">
                    <input
                      type="password"
                      className="form-control border border-primary"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {signUp && (
                <div className="d-flex justify-content-center">
                  <div className="col-12 py-3 w-50">
                    <div className="form-group d-block">
                      <input
                        type="password"
                        className="form-control border border-primary"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="col-12 py-3 text-center">
                <div
                  className="d-flex justify-content-center"
                  style={{ marginBottom: "5px" }}
                >
                  <ReCAPTCHA sitekey={key} onChange={onChange} />
                </div>
                {captchaVerified && (
                  <button
                    style={{ marginTop: "3px" }}
                    className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}
                    type="submit"
                  >
                    {!signUp ? "Sign-in" : "Sign-up"}
                  </button>
                )}
              </div>
            </form>
            <div>
              {!signUp ? (
                <>
                  <div className="text-center justify-content-center mt-2 pt-2">
                    <p
                      className="small fw-bold mt-2 pt-1"
                      style={{ marginBottom: "100px" }}
                    >
                      Don't have an account ?&nbsp;
                      <span
                        className="link-danger"
                        style={{ textDecoration: "none", cursor: "pointer" }}
                        onClick={() => setSignUp(true)}
                      >
                        Sign Up
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center justify-content-center mt-2 pt-2">
                    <p
                      className="small fw-bold mt-2 pt-1 "
                      style={{ marginBottom: "50px" }}
                    >
                      Already have an account ?&nbsp;
                      <span
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                          color: "#298af2",
                        }}
                        onClick={() => setSignUp(false)}
                      >
                        Sign In
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
