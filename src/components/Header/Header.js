import React from "react";
import "./Header.css";

var Header = props => (
  <div className="header">
      <div className="title">
          <h1>Welcome to the React Clicky Game: NBA Edition</h1>
          <br></br>
          <h3>HOW TO PLAY</h3>
          <h6>Click images of NBA players in order to earn points. Don't click the same card twice!</h6>
          <br></br>
      </div>
    <div className="scores">
      <h4>Score: {props.score}</h4>
    </div>
    <div className="highscore">
     <h6>Highscore: {props.highscore}</h6>
    </div>
  </div>
);

export default Header;