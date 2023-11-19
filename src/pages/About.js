import React from 'react';
import './About.css';

function About() {
  return (
    <><div className="about-container">
      <h1>About This App</h1>
      <p>
        FGO or Fate/Grand Order is a turn-based RPG mobile game where players act as "Masters" and command "Servant"
        characters to fight in the Holy Grail war.
      </p>
      <p>
        This app will help players to see the list of Servants in detail with a comfortable display,
        displaying a list of Master costumes, as well as simulating Gacha or Summon Servants in the game.
      </p>
    </div>
    <div className="about-container">
      <h1>About Me</h1>
      <img className="me-img" src='https://media.licdn.com/dms/image/D5603AQGnmOzkikxNgQ/profile-displayphoto-shrink_800_800/0/1687233508851?e=1706140800&v=beta&t=HuAgwzsNsEpzyLKrN24v8wj2zOnO_KWd59bf0PTJZ-w' alt='aboutMe'/>
      <p>Radithya Fawwaz Aydin</p>
      <p>21120121140126</p>
    </div></>
  );
};

export default About;
