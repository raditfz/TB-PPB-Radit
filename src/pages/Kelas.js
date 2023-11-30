// Import statement for React and React Router
import React from "react";
import { Link } from "react-router-dom";
import KelasCard from "../card/KelasCard.js";
import KelasData from "../data/KelasData.js";

// Component definition for Kelas
export default function Kelas(props) {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h1 style={{ textAlign: "center", color: "black" }}>
        Servant Class List
      </h1>
      {/* Mapping KelasData buat render komponen KelasCard */}
      {KelasData.map((kelas, index) => (
        //KelasCard dibungkus link buat navigation
        <Link key={index} to={`/Kelas/KelasDetail/${kelas.name}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          margin: 'auto',
          display: 'flex',
          maxWidth: "300px",
          
          cursor: "Default" }} >
          <KelasCard
            name={kelas.name}
            type={kelas.type}
            imageSrc={kelas.imageSrc}
          />
        </Link>
      ))}
    </div>
  );
}
