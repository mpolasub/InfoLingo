import React from "react";
import { Link } from "react-router-dom"; 
import "../style.css";


function TopicPage({ title, description, cards }) {
  return (
    <div>
      <header className="topic-banner">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <div className="row">
        {cards.map((card, index) => (
          <div className="col-sm-6" key={index}>
            <div className="card activity-card">
              <div className="card-body">
                <h5 className="card-title"><strong>{card.title}</strong></h5>
                <p className="card-text">{card.text}</p>
                <Link to={card.link} className="btn btn-dark">
                  {card.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicPage;
