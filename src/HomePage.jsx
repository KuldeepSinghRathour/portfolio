import React from 'react'
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <>
    <div>
        <ul>
            <li><Link to="/weatherApp">Weather</Link></li>
            {/* <li><a href="/weatherApp">Weather</a></li> */}
            <li><Link to ="/dashbord">DashBoard</Link></li>
        </ul>
    </div>
      
    </>
  )
}

export default HomePage
