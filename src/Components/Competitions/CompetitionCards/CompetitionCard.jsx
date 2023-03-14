import "./CompetitionCard.css";
import React from "react";
import img from "./download.png";

const CompetitionCard = (props) => {
  
  return (
    <div className="competition-card-container">
      <div className="competitions-card-images">
        <img className="competition-card-img" src={img} alt="" />
      </div>
      <div className="competition-card-details">
        <div className="competition-card-name">{props.heading}</div>
        <div className="competition-card-content">
          ${props.prize} <br />
          {props.startdate} <br /> {props.duration}
        </div>
        <button className="competition-card-btn">Start</button>
      </div>
    </div>
  );
};

export default CompetitionCard;
