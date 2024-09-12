import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const Card = (props) => {
  const { customStyle = {}, padding = 403, ...rest } = props;
  const [barbie, setBarbie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/barbie")
      .then((resposta) => resposta.json())
      .then((data) => {
        setBarbie(data);
      });
  }, []);

  
  return (
    <>
      <div>
        <Box style={{ padding, ...customStyle }}>
          {console.log("rest", rest)}
          {barbie.map((barbies) => (
            <div key={barbies.id}>
              <h1>{barbies.name}</h1>
              <h3>{barbies.favorite_color}</h3>
              <h3>{barbies.age}</h3>
              {barbies.bio ? <h3>{barbies.bio}</h3> : "No bio available."}
              <h3>{barbies.location}</h3>
            </div>
          ))}
          <Button {...rest}>Clique para saber mais</Button>
          <p id="demo"></p>
        </Box>
      </div>
    </>
  );
};

export default Card;
