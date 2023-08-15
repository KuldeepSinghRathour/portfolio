import React, { useState } from "react";
import logo from "./images/claritylogo.png";
import { BsFileBarGraph } from "react-icons/bs";
import {
  AiOutlineCopy,
  AiOutlineSetting,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlinePieChart,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { BiPieChartAlt2 } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { HiOutlineSupport } from "react-icons/hi";
import { FiLayers } from "react-icons/fi";
import "./Dashboard.css";

const Dashboard = () => {
  const content = [
    {
      Id: 1,
      title: "Dashboard",
      path: "/dashboard",
      icon: BsFileBarGraph,
    },
    {
      Id: 2,
      title: "Contacts",
      icon: RiContactsLine,
    },
    {
      Id: 3,
      title: "Lead",
      icon: FiLayers,
    },
    {
      Id: 4,
      title: "Sales",
      icon: AiOutlineCopy,
      submenu: [
        {
          subtitle: "Sale 1",
        },
        {
          subtitle: "Sale 2",
        },
      ],
    },
    {
      Id: 5,
      title: "Activity",
      icon: BiPieChartAlt2,
      submenu: [
        {
          subtitle: "Activity 1",
        },
        {
          subtitle: "Activity 2",
        },
      ],
    },
    {
      Id: 6,
      title: "Calendar",
      icon: AiOutlineCalendar,
    },
    {
      Id: 7,
      title: "Teams",
      icon: AiOutlineTeam,
    },
    {
      Id: 8,
      title: "Report",
      icon: AiOutlinePieChart,
      submenu: [
        {
          subtitle: "Report 1",
        },
        {
          subtitle: "Report 2",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleVisibility = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="side-nav">
      <div className="logo">
        <div>
          <img  alt="" />
        </div>
        <div >Brand</div>
      </div>
      <div className="search-field">
        <input type="text" placeholder="search" />
      </div>
      <div className="navigation">
        <ul>
          {content.map((data, index) => {
            const isActive = activeIndex === index;
            const Icon = data.icon;
            return (
              <li key={index}>
                <div>
                  <a href="#">
                    {data.icon && (
                      <Icon size={20} style={{ margin: "0px 5px" }} />
                    )}{" "}
                    {data.title}
                  </a>
                  {data.submenu && (
                    <span
                      className="expand-icon"
                      onClick={() => toggleVisibility(index)}
                      style={{ paddingLeft: "25px" }}
                    >
                      {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </span>
                  )}
                </div>
                {data.submenu && activeIndex === index && (
                  <div>
                    <ul>
                      {data.submenu.map((subdata, subindex) => (
                        <li key={subindex}>
                          <a href="#">{subdata.subtitle}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="side-downnav">
        <div>
          <p>
            <a href="#">
              {" "}
              <HiOutlineSupport />{"  "}
              support
            </a>
          </p>
          <p>
            <a href="#">
              {" "}
              <AiOutlineSetting />{"  "}
              setting
            </a>
          </p>
        </div>
        <div className="profile">
          <div className="profile-img">
            <img src={logo} alt="" />
          </div>
          <div>
            <a href="#">
              {" "}
              <p>Profile</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
