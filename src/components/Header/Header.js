import React from "react";
import "./Header.css";

var Header = props => (
  <div className="header">
      <div className="title">
      <div className="about-card">
        <div className="card-body">
          <h1>React Clicky Game: NBA Edition</h1>
          <br></br>
          <h3>HOW TO PLAY</h3>
          <h6>Click images of NBA players in order to earn points. Don't click the same card twice!</h6>
        </div>
      </div>
      <br></br>
      </div>

    <div className="scores">
      <div class="score-card">
        <div class="card-body">
          <h4>Score: {props.score}</h4>
        </div>
      </div>
    </div>

    <div className="highscore">
    <div class="high-card">
      <div class="card-body">
      <h6>Highscore: {props.highscore}</h6>
      </div>
    </div>
    </div>
  </div>
);

export default Header;