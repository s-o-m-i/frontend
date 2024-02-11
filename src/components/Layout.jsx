import  { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { waves } from './waves';

const Layout = () => {
     useEffect(() => {
    //   waves();
    }, []);
  return (
   <>
   {/* <div className="waves" /> */}
   <div className="wrapper">

   <div className='wavesindex'>

    <Outlet/>
   </div>
   </div>
   </>
  )
}

export default Layout