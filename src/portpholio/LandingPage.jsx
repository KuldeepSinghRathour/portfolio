import React, { useEffect } from "react";
import "./LandingPage.css";
import { Home, User2, GanttChartSquare } from "lucide-react";
import logo from "../components/images/eren.png";
import AOS from 'aos';
import { Link } from "react-router-dom";

const LandingPage = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  const myWork = [
    {
      title: "Weather App",
      url: "/weatherApp", // Update the URL to a valid path
    },
    {
      title: "Dashboard App",
      url: "/dashbord", // Update the URL to a valid path
    }
  ];

  return (
    <>
      <div className="main-container">
        <nav className="lnavigation">
          <ul>
            <li>
              <a href="#home"> {/* Update the href to the appropriate section ID */}
                <Home
                  color="#30d3df"
                  strokeWidth={1.5}
                  style={{ marginRight: "1rem" }}
                />
                Home
              </a>
            </li>
            <li>
              <a href="#about"> {/* Update the href to the appropriate section ID */}
                <GanttChartSquare
                  color="#30d3df"
                  strokeWidth={1.5}
                  style={{ marginRight: "1rem" }}
                />
                About
              </a>
            </li>
            <li>
              <Link to="/contact"> {/* Update the href to the appropriate section ID */}
                <User2
                  color="#30d3df"
                  strokeWidth={1.5}
                  style={{ marginRight: "1rem" }}
                />
                Contact
                </Link>
            </li>
          </ul>
        </nav>
        <div className="sec-1" data-aos="fade-right">
          <div className="sec-1-left">
            <img src={logo} alt="Logo" /> {/* Provide an appropriate alt text for the logo */}
          </div>
          <div className="sec-1-right">
            <span>
              <p>Thank you for visiting</p>
              <p>This website is developed by</p>
              <p>Kuldeep Singh</p>
              <p>Web Developer</p>
            </span>
          </div>
        </div>
        <div className="sec-2" data-aos="fade-right">
          <div className="sec-2-heading"><h2>My Work</h2></div>
          <div className="sec-2-content">
          {myWork.map((mywork, index) => {
            return (
              <div style={{display:'flex'}}>
              <div className="sec-2-left" key={index}>
                <div className="thumbnail">
                  <img src={logo} alt="Project Thumbnail" /> {/* Provide an appropriate alt text for the project thumbnail */}
                </div>
                <p>{mywork.title}</p>
                <Link to={mywork.url}>View</Link>
              </div>
              </div>
            );
          }
          )
        } 
        </div>         
        </div>
      </div>
    </>
  );
};

export default LandingPage;
