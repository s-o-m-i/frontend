import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5500/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const res = await response.json();
    console.log("user login smi bahi ", res);
    setLoginData({ email: "", password: "" });
    if (res.message === "Login Successfull") {
        toast.success(res.message)
      localStorage.setItem("user", JSON.stringify(res));
      navigate("/"); 
    }
  };

  const isLoggedIn = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  },[])



  return (
    <>
      <div className="roshni"></div>
      <div className="home-container">
        <Navbar />
        <div className="signup-form">
          <div className="ignore-flex">
            <h1>
              Log<span>In</span>
            </h1>

            <div className="input-field">
              <h5>Email</h5>
              <input
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                type="email"
                placeholder="email"
              />
            </div>
            <div className="input-field">
              <h5>Password</h5>
              <input
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                type="password"
                placeholder="password"
              />
            </div>
            <button onClick={handleLogin} className="signup-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
