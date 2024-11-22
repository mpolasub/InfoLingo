import React from "react";

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
                <button type="button" className="btn btn-dark">
                  {card.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicPage;
