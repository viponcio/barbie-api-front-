import React from "react";
import Card from "../Card";

const ProfileCard = () => {

  return (
    <div>
      <Card
        
        customStyle={{
          padding: 52,
          marginLeft: 10,
          color: "#B1D136",
        }}
        variant="contained"
        onClick={() => document.getElementById('demo').innerHTML = Date()}

      ></Card>
    </div>
  );
};

export default ProfileCard;
