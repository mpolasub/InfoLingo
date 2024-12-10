import React from 'react';
import UniversalButton from './UniversalButton';

const NotFound = () => {
  return (
    <div className="not-implemented-container">
      <div className="not-implemented-content">
        <h1 className="not-yet-title">
          404: Page Not Found
        </h1>
        <p className="not-yet-message">
            Whoops! The page you're looking for doesn't seem to exist.
        </p>
        < UniversalButton label="Go Back" variant="dark" onClick={() => window.history.back()} className="back-button">Go Back</UniversalButton>
      </div>
    </div>
  );
};

export default NotFound;