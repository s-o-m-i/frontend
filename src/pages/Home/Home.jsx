import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const userLoggedIn = JSON.parse(localStorage.getItem("user"));

  const getMovies = async () => {
    const response = await fetch("http://localhost:5500/api/auth/getMovies");
    const res = await response.json();
    setMovies(res.movies);
    console.log("somi bahi res of get movies api ", res);
    // alert("getmovies")
  };

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/login");
    }
    getMovies();
  }, []);

  return (
    <>
      <div className="roshni"></div>
      <div className="home-container">
        <Navbar />
        <div className="cards-container">
        

          {movies.map((movie, i) => {
            return (
              <div key={i} className="card">
                <div className="card-img"></div>
                <div className="card-content">
                  <h3>{movie.movieName}</h3>
                  <p>{movie.createdBy || "user"}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
