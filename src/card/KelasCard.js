import React from 'react';
import "./KelasCard.css"

export default function KelasCard (props) {
  return (
    <div>
    <img src={props.imageSrc} alt="Profile"/> {}
    <div>
      <div> Class: {props.name}</div>
      <div style={{ marginTop: "2px" }} > Type: {props.type}</div>
    </div>
    </div>
  );
}