import React, { useEffect, useState } from "react";
import { FaCity, FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import "./Tempapp.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bilaspur");
<a href=""></a>
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9ed33454a55298d8778639259403b623`;
      const response = await fetch(url);
      const respjson = await response.json();
      console.log(respjson);
      setCity(respjson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
    <div className="box-container">
      <div className="box">
        <div className="In-box">
        <div className="inputData">
          <input
            id="searchloc"
            type="search"
            className="inputfield"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location"><FaCity style={{ margin:"0px 10px"}}/> {search}</h2>
              <h2 className="temp"><FaTemperatureHigh style={{ margin:"0px 10px"}}/><span style={{fontSize:"1.2rem"}}>Curr. Temp. :  </span>{city.temp}°C</h2>
              <h3 className="tempmin-max" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
               <div><FaTemperatureLow style={{color:"snow"}}/> Min.Temp.: {city.temp_min}°C </div>  <div><FaTemperatureHigh style={{color:"red"}}/> Max Temp.: {city.temp_max}°C</div>
              </h3>
            </div>
          </div>
        )}
        </div>
      </div>
      </div>
    </>
  );
};

export default Tempapp;
