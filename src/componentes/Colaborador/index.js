import { useEffect, useState } from "react";
import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
  const [barbie, setBarbie] = useState([]);
  const [busca, setBusca] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/barbie")
      .then((response) => response.json())
      .then((data) => {
        setBarbie(data);
      });
  }, []);

  useEffect(() => {
    if (busca && busca.length > 3) {
      fetch("http://localhost:8080/barbie?name=" + busca).then((response) =>
        response.json().then((data) => {
          setBarbie(data);
        })
      );
    }
  }, [busca]);
  return (
    <div className="colaborador">
      <input
        placeholder="Busque a barbie"
        onChange={(evento) => setBusca(evento.target.value)}
      ></input>

      <div className="rodape">
        {barbie.map((barbies) => (
          <div key={barbies.name}>
            <h4>{barbies.name}</h4>
            <h5>{barbies.favorite_color}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colaborador;
