import "./App.css";
import React, { useState } from "react";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import spotify from "./spotify.webp";
import live from "./live_samedi_soir.webp";
import linkedin from "./linkedin.png";
import audio1 from "./morceau complet.wav";
import audio2 from "./Mixdown.mp3";


function App() {
  const [isExpanded, setExpanded] = useState(false);
  const [isMusicVisible, setMusicVisible] = useState(false);
  const [isDevVisible, setDevVisible] = useState(false);
  const [isMusicClicked, setMusicClicked] = useState(false);
  const [isDevClicked, setDevClicked] = useState(false);


  const toggleMusic = () => {
    setExpanded(true);
    setMusicVisible(true);
    setDevVisible(false);
    setMusicClicked(true);
    setDevClicked(false);
  };

  const toggleDev = () => {
    setExpanded(true);
    setMusicVisible(false);
    setDevVisible(true);
    setMusicClicked(false);
    setDevClicked(true);
  };

  const toggleExitBottom = () => {
    setExpanded(false);
  };

  const renderLogoLink = (link, logo, alt, className) => {
    if (link) {
      return (
        <a href={link} target="_blank" rel="noreferrer">
          <img className={className} src={logo} alt={alt} />
        </a>
      );
    } else {
      return <img className={className} src={logo} alt={alt} />;
    }
  };
  return (
    <div className={`App ${isExpanded ? "expand" : ""}`}>
      <header className="App-header">
        <div className="logos">
          {renderLogoLink(
            "https://www.instagram.com/artlgx/",
            instagram,
            "instagram_logo",
            "logo1"
          )}
          {renderLogoLink(
            "https://www.facebook.com/",
            facebook,
            "facebook_logo",
            "logo2"
          )}
          {renderLogoLink(
            "https://www.spotify.com/",
            spotify,
            "spotify_logo",
            "logo3"
          )}
          {renderLogoLink(
            "https://www.youtube.com/@lelivedusamedisoir",
            live,
            "live_samedi_soir",
            "logo4"
          )}
          {renderLogoLink(
            "https://www.linkedin.com/in/arthur-le-goux/",
            linkedin,
            "linkedin",
            "logo5"
          )}
        </div>
        <div className="title">
          <p>A</p>
          <p className="dot">.</p>
          <p>R</p>
          <p className="dot">.</p>
          <p>T</p>
          <p className="dot">.</p>
          <p>H</p>
          <p className="dot">.</p>
          <p>U</p>
          <p className="dot">.</p>
          <p>R</p>
        </div>
        <div className="navRight">
          <li className="navRight1">MON PARCOURS</li>
          <li className="navRight2">CONTACT</li>
        </div>
      </header>
      <div className="hero">
        <div className="left"></div>
        {/* Clique sur Right -> Expansion du bottom à on */}
        <div className="right">
          <p>
            <span className={isMusicClicked ? "clicked" : ""} onClick={toggleMusic}>Ma musique</span>
          </p>
          <p>
            <span className={isDevClicked ? "clicked" : ""} onClick={toggleDev}>Front end Dev</span>
          </p>
        </div>
      </div>
      <div className="bottom" >
        <p class="bottomQuit" onClick={toggleExitBottom}>- Cliquer pour quitter -</p>
        <div className="Suite">Lire la suite</div>
        <div className={`Music ${isMusicVisible ? "show-music" : ""}`}>
          <p className="bottom-text-extract">Mes Projets Musicaux</p>
          <div className="audio-container">
            <audio controls className="custom-audio">
              <source src={audio1} type="audio/wav" />
              Votre navigateur ne prend pas en charge l'élément audio.
            </audio>
            <audio controls className="custom-audio">
              <source src={audio2} type="audio/wav" />
            </audio>
          </div>
        </div>
        <div className={`Dev ${isDevVisible ? "show-dev" : ""}`}>
          <p className="bottom-text-dev">Mes projets Dev</p>
          <div className="project-pictures">
            <div className="project1"></div>
            <div className="project2"></div>
            <div className="project3"></div>
          </div>
        </div>
        {/* <p className="Suite">Lire la suite</p> */}
      </div>
    </div>
  );
}

export default App;
