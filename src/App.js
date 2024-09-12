import { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Card from "./componentes/Card";
import ProfileCard from "./componentes/ProfileCard";

function App() {
  const [barbie, setBarbie] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/barbie")
      .then((resposta) => resposta.json())
      .then((data) => {
        setBarbie(data);
      });
  }, []);

  useEffect(() => {
    if (busca) {
      fetch("http://localhost:3001/barbie?id=" + busca)
        .then((resposta) => resposta.json())
        .then((data) => setBusca(data));
    }
  }, [busca]);

  return (
    <div className="App">
      <Banner />
      <input
        placeholder="Busque a barbie"
        onChange={(evento) => {
          setBusca(evento.target.value);
        }}
      />

      <div>
        {barbie.map((barbies) => (
          <div key={barbies.id}>
            <h4>{barbies.name}</h4>
            <h5>{barbies.favorite_color}, {barbies.id}</h5>
          </div>
        ))}
      </div>
      <ProfileCard/>
    </div>
    
  );
}

export default App;
