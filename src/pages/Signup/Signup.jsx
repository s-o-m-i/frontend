import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    const response = await fetch("http://localhost:5500/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });
    const res = await response.json();
    console.log(res);
    setSignupData({ username: "", email: "", password: "" });
    if (res) {
      toast.success("Registered Successfully");
      // localStorage.setItem("user", JSON.stringify(res.token));
      navigate("/login");
    }
  };

  const isUserSignedIn = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (isUserSignedIn) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="roshni"></div>
      <div className="home-container">
        <Navbar />
        <div className="signup-form">
          <div className="ignore-flex">
            <h1>
              Sign<span>up</span>
            </h1>
            <div className="input-field">
              <h5>Username</h5>
              <input
                onChange={(e) =>
                  setSignupData({ ...signupData, username: e.target.value })
                }
                value={signupData.username}
                type="text"
                placeholder="username"
              />
            </div>
            <div className="input-field">
              <h5>Email</h5>
              <input
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                type="email"
                placeholder="email"
              />
            </div>
            <div className="input-field">
              <h5>Password</h5>
              <input
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                type="password"
                placeholder="password"
              />
            </div>
            <button onClick={handleSignup} className="signup-btn">
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
