import "../signupStyles.scss";
import { FcGoogle } from "react-icons/fc";
import { GrClose, GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { BsApple, BsEnvelopeFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { FaSleigh } from "react-icons/fa";
import { conManager } from "../context/TumblrContext";
export default function SignUp() {
  const [clicked, setClicked] = useState({
    noClick: true,
    byEmail: false,
    newUser: false,
    returningUser: false,
    loginBtn: false
  });
  const { SignUp, setSignUp } = useContext(conManager);
  return (
    <div
      className="signup-container"
      onClick={() => {
        setSignUp(false);
      }}
    >
      <div
        className="signup-body "
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div
          className="d-flex justify-content-end "
          onClick={() => setSignUp(false)}
        >
          <GrClose className="pointer" />
        </div>
        {clicked.byEmail ? (
          <div
            className="back"
            onClick={() =>
              setClicked({ ...clicked, byEmail: false, noClick: true })
            }
          >
            <GrFormPreviousLink className="back-arrow " />
          </div>
        ) : clicked.newUser ? (
          <div
            className="back"
            onClick={() =>
              setClicked({ ...clicked, newUser: false, byEmail: true })
            }
          >
            <GrFormPreviousLink className="back-arrow " />
          </div>
        ) : null}
        <div className="heading back">tumblr</div>

        {clicked.byEmail ? (
          <center className="collect-email">
            <p className="text-light">Enter your email to login or register</p>
            <div className="input">
              <input type="email" placeholder="Email" />
            </div>
            <button
              onClick={() =>
                setClicked({
                  ...clicked,
                  noClick: false,
                  byEmail: false,
                  newUser: true
                })
              }
            >
              Next <GrFormNextLink />
            </button>
          </center>
        ) : clicked.noClick ? (
          <>
            <p className="text-center text-light">
              Welcome yo your corner of the internet. You'll never be bored
              again
            </p>

            <center className="buttons-section">
              <h5>Sign up or log in:</h5>
              <p className="terms-p">
                By continuing, you agree to our{" "}
                <span className="terms-privacy-link">Terms of Service</span> and
                read our
                <span className="terms-privacy-link">Privacy Policy.</span>
              </p>
              <div className="button">
                <button disabled>
                  {" "}
                  <FcGoogle /> Continue with Google
                </button>
              </div>
              <div className="button">
                <button disabled>
                  {" "}
                  <BsApple />
                  Continue with Apple
                </button>
              </div>
              <div className="button">
                <button
                  onClick={() => {
                    setClicked({ ...clicked, byEmail: true });
                  }}
                >
                  {" "}
                  <BsEnvelopeFill /> Continue with email
                </button>
              </div>
            </center>
          </>
        ) : null}

        {clicked.newUser ? (
          <center className="collect-password collect-email">
            <p className="text-light">
              Welcome to your corner of the internet. <br /> Glad you're here
            </p>
            <div className="input">
              <input type="password" placeholder="Set a password" />
            </div>
            <div className="input">
              <input type="password" placeholder="Repeat password" />
            </div>
            <button>
              Next <GrFormNextLink />
            </button>
          </center>
        ) : clicked.returningUser ? (
          <center className="collect-password-login collect-email">
            <p className="text-light">
              Welcome to your corner of the internet.
            </p>
            <div className="input">
              <input type="password" placeholder="Password" />
            </div>
            <p className="text-decoration-underline text-light">
              Forgot your password?
            </p>
            <button>
              Login <GrFormNextLink />
            </button>
          </center>
        ) : null}
      </div>
    </div>
  );
}
