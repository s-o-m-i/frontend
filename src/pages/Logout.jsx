import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Logout.css";
import {toast } from 'react-toastify';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.error("Logout Successfull")
    navigate("/login");
  };
  return (
    <>
      <div className="roshni"></div>
      <div className="home-container">
        <Navbar />
        <div className="logout-ignoreflex">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
