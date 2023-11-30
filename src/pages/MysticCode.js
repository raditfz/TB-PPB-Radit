import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MysticCode() {
  const [mysticCodes, setMysticCodes] = useState([]);
  /*Halaman MysticCode mengambil data dari API basic_mystic_code*/

  useEffect(() => {
    const fetchMysticCodes = async () => {
      try {
        const response = await axios.get('https://api.atlasacademy.io/export/NA/basic_mystic_code.json');
        setMysticCodes(response.data);
      } catch (error) {
        console.error('Error fetching Mystic Code data:', error);
      }
    };

    fetchMysticCodes();
  }, []);

  return (
    <div style={mysticCodeStyles.wrapper}>
      <h1 style={mysticCodeStyles.title}>Mystic Code List</h1>
      <ul style={mysticCodeStyles.list}>
        {mysticCodes.map((mysticCode) => ( //mapping buat render data mystic code
          <li key={mysticCode.id} style={mysticCodeStyles.item}>
            <div style={mysticCodeStyles.centerContent}>
              <h2 style={mysticCodeStyles.heading}>{mysticCode.name}</h2>
              {mysticCode.item && (
                <div style={mysticCodeStyles.images}>
                  <img //Ngambil data gambar male
                    src={mysticCode.item.male}
                    alt={`${mysticCode.name} (Male)`}
                    style={mysticCodeStyles.image}
                  />
                  <img //Ngambil data gambar female
                    src={mysticCode.item.female}
                    alt={`${mysticCode.name} (Female)`}
                    style={mysticCodeStyles.image}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mysticCodeStyles = {
  wrapper: {
    width: '370px',
    margin: '0 auto',
    marginBottom: '40px',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column', //biar list vertikal
    alignItems: 'center',
  },
  item: {
    width: '100%',
    marginBottom: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '15px',
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    margin: '0 0 15px',
    fontSize: '16px',
  },
  images: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    maxWidth: '100%',
    borderRadius: '8px',
    margin: '0 5px',
  },
};

export default MysticCode;