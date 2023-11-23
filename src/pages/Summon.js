// Summon.js

import React, { useState } from 'react';
import axios from 'axios';
import styles from './Summon.module.css';

function Summon() {
  const [summonedServants, setSummonedServants] = useState([]);
  const summonServants = async () => {
    try {
      const response = await axios.get('https://api.atlasacademy.io/export/NA/basic_servant.json');
      const servantsData = response.data;
  
      const rarityData = servantsData.map((servant) => servant.rarity);
      
      const summonedServants = [];
      for (let i = 0; i < 10; i++) {
        const randomIndex = getRandomIndex(servantsData.length, rarityData);
        const summonedServant = servantsData[randomIndex];
        summonedServants.push(summonedServant);
      }
  
      setSummonedServants(summonedServants);
    } catch (error) {
      console.error('Error summoning servants:', error);
    }
  };
  
  const getRandomIndex = (max, rarityData) => {
    const rarityWeights = calculateRarityWeights(rarityData);
    const totalWeight = rarityWeights.reduce((sum, weight) => sum + weight, 0);
    const randomWeight = Math.random() * totalWeight;
  
    let cumulativeWeight = 0;
    for (let i = 0; i < rarityWeights.length; i++) {
      cumulativeWeight += rarityWeights[i];
      if (randomWeight < cumulativeWeight) {
        return Math.floor(Math.random() * max);
      }
    }
  
    // This should not happen, but just in case
    return Math.floor(Math.random() * max);
  };
  
  const calculateRarityWeights = (rarityData) => {
    const rarityCounts = [0, 0, 0, 0, 0];
  
    rarityData.forEach((rarity) => {
      rarityCounts[rarity - 1]++;
    });
  
    // Calculate the weights based on the specified probabilities
    const totalServants = rarityData.length;
    const rarityWeights = rarityCounts.map((count) => (count / totalServants) * 100);
  
    return rarityWeights;
  };
  
  return (
    <div className={styles.container}>
      <h1>Summon Page</h1>
      <button onClick={summonServants}>Summon 10x</button>
      <div>
        {summonedServants.map((servant) => (
          <img className="SummonImg" key={servant.id} src={servant.face} alt={servant.name} />
        ))}
      </div>
    </div>
  );
}

export default Summon;