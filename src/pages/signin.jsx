import { Link, json } from "react-router-dom";
import "./pages.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/userSlice";
export function SignIn({ setImageGallery }) {
  const [borderEmail, setBorderEmail] = useState(true);
  const [passwordType, setPasswordType] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const userInfo = useSelector((data) => data.user);
  const dispatch = useDispatch();


  function validateEmail(e) {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const toggle = regEx.test(e.target.value);
    const val = e.target.value;
    if (val.length) {
      setBorderEmail(toggle);  
      if (toggle) setData({ ...data, email: val });
    } else {
      setBorderEmail(!toggle);
    }
  }
  async function validateSignIn(e) {
    e.preventDefault();
    if (borderEmail && data.email && data.password) {
      try {
        const response = await fetch("/user/signin-user", {
          method: "POST",
          body: JSON.stringify({
            email: data?.email,
            password: data?.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsondata = await response.json();
        console.log({ jsondata });
        if (response.status === 200) {
          dispatch(signIn(jsondata?.userData));
          setImageGallery(true);
          navigate("/image-gallery");
        } else {
          throw new Error(JSON.stringify(jsondata));
        }
      } catch (err) {
        console.log({ err });
      }
    } else {
      alert("fill all required field");
    }
  }

  return (
    <div className="signIn-conatiner">
      <form onSubmit={validateSignIn}>
        <input
          className={borderEmail ? "red-input-email" : "input-email"}
          onChange={validateEmail}
          type="email"
          placeholder="📩 Email"
          name="userName"
          required
        />
        {!borderEmail && (
          <span className="email-warning">please enter valid user name</span>
        )}

        <div className="passwordConatiner">
          <input
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
            type={passwordType ? "password" : "text"}
            placeholder="🔑 Password"
            name="password"
            required
          />
          <button
            type="button"
            className="password-view"
            onClick={() => {
              setPasswordType(!passwordType);
            }}
          >
            view
          </button>
        </div>
        <button type="submit">SIGN IN</button>
        <div className="gotoSignUp-page">
          <span>I don't have account</span>
          <button type="submit">
            <Link to="/signup">SIGN UP</Link>
          </button>
        </div>
      </form>
      <FooterSignInPage />
    </div>
  );
}

function FooterSignInPage() {
  return (
    <footer className="left-container-footer">
      <div className="line">
      </div>
      <div className="social-id-signin-container">
        <p>continue with social media</p>
        <div className="social-media-container">
          <span className="facebook-span">
            <img
              width="50px"
              height="50px"
              src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
              alt=""
            />
          </span>
          <span className="google-span">
            <img
              width="50px"
              height="50px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </span>
          <span className="git-span">
            <img
              width="50px"
              height="50px"
              src="https://pngimg.com/d/github_PNG27.png"
              alt=""
            />
          </span>
          <span className="twitter-span">
            <img
              width="50px"
              height="50px"
              src="https://www.freepnglogos.com/x-twitter-png-logo-3.jpg"
              alt=""
            />
          </span>
        </div>
      </div>
    </footer>
  );
}
