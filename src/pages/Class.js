import React from "react";
import ClassCard from "../card/ClassCard.js";
import ClassData from "../data/ClassData.js";

export default function Class (props) {
  return (
    <div style={{ alignItems: "center" }}>
      <h1 style={{ textAlign: "center", color: "black" }} className="profile-title">
        Servant Class
      </h1>
      {ClassData.map((classes, index) => (
        <ClassCard
          key={index}
          nama={classes.name}
          nim={classes.type}
          imageSrc={classes.imageSrc}
        />
      ))}
    </div>
  );
}