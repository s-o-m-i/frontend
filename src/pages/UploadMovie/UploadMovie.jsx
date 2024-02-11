import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { waves } from "../../components/waves"
import "../../index.css"
import { useNavigate } from "react-router-dom"


const UploadMovie = () => {
  const navigate = useNavigate()
  const mydata = localStorage.getItem("user")
  const parsedata = JSON.parse(mydata)
  const mytoken = parsedata.token
  console.log("check karo somi token ",parsedata.token)

  const [movieData,setMovieData] = useState({
movieName:"",
movieDescription:"",
releasedDate:"",
  })

  //  console.log( localStorage.getItem("user"))
    const handleUploadMovie = async () => {
console.log(movieData)

        const response = await fetch("http://localhost:5500/api/auth/uploadMovie",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+mytoken,
            },
            body:JSON.stringify(movieData)

        })
        const res = await response.json();
        console.log("somi bahi res of upload movie api ", res)
        navigate("/")
    }



  
    // useEffect(() => {
    //   waves();
    // }, []);

  return (
    <>

<>

      <div className="roshni"></div>
      <div className="wavesindex">
      <div className="home-container">
        <Navbar />
        <div className="signup-form">
          <div className="ignore-flex">
            <h1>
              Upload<span>Movie</span>
            </h1>
            <div className="input-field">
              <h5>movieName</h5>
              <input
              value={movieData.movieName}
              onChange={(e) => setMovieData({...movieData,movieName:e.target.value})}
                type="text"
                placeholder="movieName"
              />
            </div>
            <div className="input-field">
              <h5>movieDescription</h5>
              <input
        value={movieData.movieDescription}
        onChange={(e) => setMovieData({...movieData,movieDescription:e.target.value})}
                type="text"
                placeholder="movieDescription"
              />
            </div>
            <div className="input-field">
              <h5>releasedDate</h5>
              <input
            value={movieData.releasedDate}
            onChange={(e) => setMovieData({...movieData,releasedDate:e.target.value})}
                type="text"
                placeholder="releasedDate"
              />
            </div>
            <button onClick={handleUploadMovie} className="signup-btn">
            Upload Movie
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
    </>
  )
}

export default UploadMovie