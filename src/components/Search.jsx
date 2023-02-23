import "./search.css";
import { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const apikey = "1a9678cc5b312cca6f5648bf8ecbc4e1";

  function submit() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {setData(data)})
      console.log (data);
  }

  return (
    <div className="header">
      <h2>Digite a Cidade</h2>
      <input
        placeholder="Digite a Cidade"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={submit}>Procurar</button>
    </div>
  );
}