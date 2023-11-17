import React from 'react';
import './ClassCard.css';

export default function ClassData (props) {
  return (
    <div className="profile-container"> {/* Menggunakan kelas CSS */}
    <img src={props.imageSrc} alt="Profile" className="profile-image" /> {/* Menambahkan gambar */}
    <div className='profile-konten'>
      <p className="profile-info">{props.name}</p> 
      <p className="profile-info">{props.type}</p>
    </div>
    </div>
  );
}