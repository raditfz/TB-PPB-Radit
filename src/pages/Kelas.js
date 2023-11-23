import React from "react";
import KelasCard from "../card/KelasCard.js";
import KelasData from "../data/KelasData.js";

export default function Kelas(props) {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h1 style={{ textAlign: "center", color: "black" }}>
        Servant Class List
      </h1>
      {KelasData.map((kelas, index) => (
        <KelasCard
          key={index}
          name={kelas.name}
          type={kelas.type}
          imageSrc={kelas.imageSrc}
        />
      ))}
    </div>
  );
}
