import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>
        This is a simple React application that displays a list of servants fetched from an API.
        Users can search for servants by name and view details of each servant.
      </p>
      <p>
        Created with love using React and Axios. Feel free to explore and enjoy the servant list!
      </p>
    </div>
  );
};

export default About;
