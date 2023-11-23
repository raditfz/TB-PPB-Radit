// ServantDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ServantDetail.css';

function ServantDetail() {
  const { servantId } = useParams();
  const [servant, setServant] = useState(null);

  useEffect(() => {
    const fetchServantDetails = async () => {
      try {
        const response = await axios.get('https://api.atlasacademy.io/export/NA/nice_servant.json');
        const servantsData = response.data;

        // Find the servant with the matching ID
        const foundServant = servantsData.find((servant) => servant.id.toString() === servantId);

        if (foundServant) {
          console.log('Found Servant:', foundServant); // Add this line for debugging
          setServant(foundServant);
        } else {
          console.log(`Servant with ID ${servantId} not found`); // Add this line for debugging
          setServant(null);
        }
      } catch (error) {
        console.error('Error fetching servant details:', error);
        setServant(null);
      }
    };

    fetchServantDetails();
  }, [servantId]);

  if (!servant) {
    return <div className="ServantDetail">Loading...</div>;
  }

  // Check if the necessary properties are available
  const charaGraphAscension1 = servant.extraAssets?.charaGraph?.ascension?.['1'];
  const charaGraphAscension2 = servant.extraAssets?.charaGraph?.ascension?.['2'];
  const charaGraphAscension3 = servant.extraAssets?.charaGraph?.ascension?.['3'];

  return (
    <div style={{ marginBottom: "50px"}} className="ServantDetail">
      <h1>Servant Detail :</h1>
      <div className="imagesContainer">
        {charaGraphAscension1 && (
          <img className="ServantDetail" src={charaGraphAscension1} alt={`${servant.name} Ascension 1`} />
        )}
        {charaGraphAscension2 && (
          <img className="ServantDetail" src={charaGraphAscension2} alt={`${servant.name} Ascension 2`} />
        )}
        {charaGraphAscension3 && (
          <img className="ServantDetail" src={charaGraphAscension3} alt={`${servant.name} Ascension 3`} />
        )}
      </div>
      <div>
        <h2>{servant.name}</h2>
        <p>Type: {servant.type}</p>
        <p>Class Name: {servant.className}</p>
        <p>Attribute: {servant.attribute}</p>
      </div>
    </div>
  );
}

export default ServantDetail;
