import React from 'react';

export default function KelasCard (props) {
  return (
    <div style={kelasstyles.kelasCard}>
    <img src={props.imageSrc} alt="Profile" style={kelasstyles.cardImage}/> {}
    <div style={kelasstyles.cardText}>
      <h2 style={kelasstyles.cardName}> Class: {props.name}</h2>
      <p style={{ marginTop: "2px" }} > Type: {props.type}</p>
    </div>
    </div>
  );
}

const kelasstyles = {
  kelasCard: {
    backgroundColor: '#fff',
    border: '1px solid #e1e1e1',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '10px',
  },
  cardImage: {
    maxWidth: '100px',
    borderRadius: '50%',
    marginRight: '30px',
  },
  cardText: {
    flexGrow: 1,
    fontSize: '14px',
  },
  cardName: {
    marginTop: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};