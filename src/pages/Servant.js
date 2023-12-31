import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Servant.css';

function Servant() {
  const [servants, setServants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    //Ngambil data dari API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.atlasacademy.io/export/NA/basic_servant.json');
        setServants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //Filter servant berdasarkan pilihan namanya
  const filteredServants = servants.filter((servant) =>
    servant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Tampilin star berdasarkan kelangkaan servant
  const generateStars = (rarity) => {
    const stars = [];
    for (let i = 0; i < rarity; i++) {
      stars.push(<span key={i} className="star">★</span>);
    }
    return stars;
  };


  return (
    <div className="Servant">
      <h1>Servant List</h1>
      <input
        type="text"
        placeholder="Search by servant name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredServants.length === 0 && (
        <p>Servant name not found</p> //kalo ga ketemu nama servantnya
      )}
      <ul>
        {filteredServants.map((servant) => ( //mapping buat render data servant
          <li key={servant.id}>
              <img src={servant.face} alt={servant.name} />
              <div>
                <h2>{generateStars(servant.rarity)}</h2>
                <h2>{servant.name}</h2>
                <p className="servantType">Type: {servant.type}</p>
              </div>
              <Link to={`/Servant/ServantDetail/${servant.id}`} className="ServantLink">Detail</Link>
          </li> //link dipake buat navigasi ke detail servant
        ))}
      </ul>
    </div>
  );
}

export default Servant;