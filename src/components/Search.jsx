import "./search.css";
import { useState, useEffect } from "react";
import {FaThermometerThreeQuarters, FaWater, FaWind} from "react-icons/fa";


export default function Search() {
  const [city, setCity] = useState("Brasília");
  const [data, setData] = useState("");
  const [icon, setIcon] = useState("");
  const apikey = "1a9678cc5b312cca6f5648bf8ecbc4e1";
  
  
  
    
useEffect(()=>{
  submit()},[]);
    

  function submit() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIcon(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
        console.log(data);
      });
  }
 
 

  return (
    <div className="container">
      <div className="header">
        <h2>Digite a Cidade</h2>
        <input
          placeholder="Digite a Cidade"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={submit}>Procurar</button>
      </div>
      <div className="banner">
          <div className="name_icon">
            <h3>{data.name}</h3>
            <img  src={icon} ></img>
          </div>
          <div className="infos">
            <p>Temperatura  {Math.floor(data.main?.temp)} ºC <FaThermometerThreeQuarters/> </p>
            <p>Velocidade do Vento  {data.wind?.speed} <FaWind/></p>
            <p>Humidade   {data.main?.humidity} % <FaWater/></p>
          </div>
      </div>
    </div>
  );
  }
