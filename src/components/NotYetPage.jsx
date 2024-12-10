import React from 'react';
import UniversalButton from './UniversalButton';

const NotYetPage = () => {
  return (
    <div className="not-implemented-container">
      <div className="not-implemented-content">
        <h1 className="not-yet-title">
          Under Construction
        </h1>
        <p className="not-yet-message">
          This feature is not yet implemented. Please check back later for updates.
        </p>
        < UniversalButton label="Go Back" variant="dark" onClick={() => window.history.back()} className="back-button">Go Back</UniversalButton>
      </div>
    </div>
  );
};

export default NotYetPage;