import React from 'react';
import UniversalButton from './UniversalButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const NotYetPage = () => {
  return (
    <div className="not-implemented-container">
      <div className="not-implemented-content">
        <Container>
          <h1 className="not-yet-title">
            Under Construction
          </h1>
        </Container>

        <p className="not-yet-message">
          This feature is not yet implemented. Please check back later for updates.
        </p>
        < UniversalButton label="Go Back" variant="dark" onClick={() => window.history.back()} className="back-button">Go Back</UniversalButton>
      </div>
    </div>
  );
};

export default NotYetPage;