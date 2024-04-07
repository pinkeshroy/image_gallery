import { Link, useNavigate } from "react-router-dom";
import "./pages.css";
import { useState } from "react";

export function SignUp() {
  const [borderEmail, setBorderEmail] = useState(true);
  const [passwordType, setPasswordType] = useState(true)
  const [allReqError, setAllReqError] = useState(false)
  const navigate=useNavigate()
  const [data, setData] = useState({
    name: "",
    userName: '',
    password:""
  })
  async function valdateSingUpOnClick(e) {
    e.preventDefault();
    if (!data.name || !data.password || !data.userName) {
      setAllReqError(true)
    } else {
        const respose = await fetch("http://localhost:5000/user/create-user", {
          method: "POST",
          body: JSON.stringify({
            name: data.name,
            email: data.userName,
            password: data.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }); 
        console.log({ respose });
        if (respose.status === 200) {
          navigate("/");
        } else {
          alert("Email already exist " + respose.status)
        }

    }
  }
  function validateEmail(e) {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const toggle = regEx.test(e.target.value);
    const val = e.target.value;
    setData({...data,userName:val})

    if(val.length)
      setBorderEmail(toggle);
    else {
      setBorderEmail(!toggle)
    }
  }
console.log(data);
  return (
    <div className="signUp-conatiner">
      <form onSubmit={valdateSingUpOnClick}>
        <input
          className="input-name"
          type="text"
          placeholder="🙍‍♂️ Name"
          name="name"
          onChange={(e) => {
            setData({ data, name: e.target.value });
          }}
          required
        />
        <input
          className={borderEmail ? "red-input-email" : "input-email"}
          onChange={validateEmail}
          type="email"
          placeholder="📩 Email"
          name="userName"
          required
        />
        {!borderEmail && (
          <span className="email-warning">please enter valid email</span>
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
        {allReqError && (
          <div className="all-warning">
            <span>All fields are required's</span>
          </div>
        )}
        <button type="submit">SIGN UP</button>
        <div>
          <span>I have already account</span>
          <button type="button">
            <Link to="/">SIGN IN</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
