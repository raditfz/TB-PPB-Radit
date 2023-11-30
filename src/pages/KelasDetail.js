import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./KelasDetail.css"; // Import a CSS file for styling

const KelasDetail = () => {
  const { name } = useParams();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const getClassDescription = (kelasName) => {
    switch (kelasName) {
      case "Saber":
        return "Saber is a balanced and well-rounded class, often characterized by strong swordsmanship.";
      case "Archer":
        return "Archer excels in ranged combat, using bows or other long-range weapons.";
      case "Lancer":
        return "Lancer is skilled in using polearms or lances, with a focus on reach and agility.";
      case "Rider":
        return "Mounted Knight and Heroic Spirit of the Mount. Experts of the mount able to tame any beast, be it mythical or mechanical.";
      case "Assassin":
        return "Silent Killer and Heroic Spirit of Assassinations. Extremely skilled at covert, stealthy, and silent operations.";
      case "Caster":
        return "Magus and Heroic Spirit of Spells and Sorcery. Adept in magecraft, being one of the few able to use sorceries of the highest caliber.";
      case "Berserker":
        return "BASAKAAAAAA";
      case "Ruler":
        return "Standard-Bearer who Correctly Guides the Holy Grail War. Virtuous warriors summoned by the Holy Grail itself, tasked with governing the rituals of the Grail Wars.";
      case "Avenger":
        return "Vigilante and Heroic Spirit of Vengeance. Vindictive warriors that bear great hatred in the past, the embodiment of hatred itself.";
      case "Moon Cancer":
        return "A title bestowed to those who threaten the world of the Moon, those who attempted to invade the core of SE.RA.PH. The Cancer of the Moon Cell.";
      case "Alter Ego":
        return "Alternate aspects and personalities split from their originals.";
      case "Foreigner":
        return "Those who wield power drawn from outside human boundaries. Entities from different dimensions that are foreign to human comprehension.";
      case "Pretender":
        return "Those who have given false representation, deceiving and misleading others to do great deeds.";
      default:
        return "Class description not available.";
    }
  };

  // Mendapatkan URL deimageSrc berdasarkan data kelas yang dipilih
  const getDeimageSrc = (kelasName) => {
    switch (kelasName) {
      case "Saber":
        return "https://static.atlasacademy.io/NA/CharaGraph/100100/100100b@2.png";
      case "Archer":
        return "https://static.atlasacademy.io/NA/CharaGraph/203800/203800b@2.png";
      case "Lancer":
        return "https://static.atlasacademy.io/NA/CharaGraph/304200/304200b@2.png";
      case "Rider":
        return "https://static.atlasacademy.io/JP/CharaGraph/404300/404300b@2.png";
      case "Assassin":
        return "https://static.atlasacademy.io/JP/CharaGraph/602500/602500b@2.png";
      case "Caster":
        return "https://static.atlasacademy.io/JP/CharaGraph/500800/500800b@2.png";
      case "Berserker":
        return "https://pbs.twimg.com/media/F_pYSPmbEAAxoIc?format=png&name=900x900";
      case "Ruler":
        return "https://static.atlasacademy.io/NA/CharaGraph/901000/901000b@2.png";
      case "Avenger":
        return "https://static.atlasacademy.io/NA/CharaGraph/1101000/1101000b@2.png";
      case "Moon Cancer":
        return "https://static.atlasacademy.io/NA/CharaGraph/2300200/2300200b@2.png";
      case "Alter Ego":
        return "https://static.atlasacademy.io/NA/CharaGraph/1000700/1000700b@2.png";
      case "Foreigner":
        return "https://static.atlasacademy.io/NA/CharaGraph/2500600/2500600b@2.png";
      case "Pretender":
        return "https://static.atlasacademy.io/NA/CharaGraph/2800100/2800100b@2.png";
      default:
        return null;
    }
  };

  const classDescription = getClassDescription(name);
  const deimageSrc = getDeimageSrc(name);

  // Set isImageLoaded to true when the image is loaded
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    // Reset isImageLoaded when the component is re-rendered
    setIsImageLoaded(false);
  }, [name]); // Re-run the effect when the name changes

  // Render komponen
  return (
    <div style={{ marginBottom: "40px" }}>
      <h1
      style={{
        textAlign: "center",
        color: "black",
        overflow: "hidden", // To hide the overflowing text during animation
      }}
    >
      {name}
    </h1>
    <p
      style={{
        fontStyle: "italic",
        textAlign: "center",
        color: "black",
        marginBottom: "30px",
        marginLeft:"10px",
        marginRight:"10px",
      }}
    >
      {classDescription}
    </p>
      {deimageSrc && (
        <div className={`image-container ${isImageLoaded ? "loaded" : ""}`}>
          <img
            src={deimageSrc}
            style={{
                maxWidth:"300px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                border: "4px solid white",
                borderRadius: "12px",
                display: "block",
                margin: "auto",
            }}
            alt={`${name} Deimage`}
            onLoad={handleImageLoad}
            className="zoom-in"
          />
        </div>
      )}
      {/* Tambahan informasi atau komponen lainnya dapat ditambahkan di sini */}
    </div>
  );
};

export default KelasDetail;
