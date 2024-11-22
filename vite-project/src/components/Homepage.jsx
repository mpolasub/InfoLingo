import React from "react";
import Navbar from "./Navbar";
import UniversalButton from "./UniversalButton";
import "../style.css"; 
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mb-4">
            <div className="card-body">
            <div className="col-sm-auto col-xl-12 col-sm">
                <img src="/project-draft/assets/data-science.png" alt="Data Science Icon" className="pb-3" />
              </div>
              <h2 className="card-title">Data Science</h2>
              <p className="card-text">Explore essential terms to unlock insights from data and drive innovation.</p>
              <Link className="btn btn-dark" to="/DataScience">
                Explore More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mb-4">
            <div className="card-body">
            <div className="col-sm-auto col-xl-12 col-sm">
                <img src="project-draft/assets/healthwellness.png" alt="Health and Wellness Icon" className="pb-3" />
              </div>
              <h2 className="card-title">Health and Well-Being</h2>
              <p className="card-text">
                Discover key concepts that enhance understanding of health outcomes.
              </p>
              <Link className="btn btn-dark" to="/HealthAndWellBeing">
                Discover More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mb-4">
            <div className="card-body">
            <div className="col-sm-auto col-xl-12 col-sm">
                <img src="project-draft/assets/HCI.png" alt="HCI symbol" className="pb-3" />
              </div>
              <h2 className="card-title">Human-Computer Interaction</h2>
              <p className="card-text">
              Learn important ideas to create intuitive technology and
              elevate user experiences for everyone.              </p>
              <Link className="btn btn-dark" to="/HCI">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mb-4">
            <div className="card-body">
            <div className="col-sm-auto col-xl-12 col-sm">
                <img src="project-draft/assets/info-arch.png" alt="HCI symbol" className="pb-3" />
              </div>
              <h2 className="card-title">Information Architecture</h2>
              <p className="card-text">
              Familiarize yourself with concepts for effectively structuring
                                        information and ensuring easy navigation. </p>
              <Link className="btn btn-dark" to="/InfoArch">
                Get Familiar
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mb-4">
            <div className="card-body">
            <div className="col-sm-auto col-xl-12 col-sm">
                <img src="project-draft/assets/cybersecurity.png" alt="Information assurance & cybersecurity icon" className="pb-3" />
              </div>
              <h2 className="card-title">Information Assurance & Cybersecurity</h2>
              <p className="card-text">
              Dive into phrases that focus on safeguarding digital
                                        information from threats and vulnerabilities.   </p>
              <Link className="btn btn-dark" to="/InfoAssurance">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mb-4">
            <div className="card-body">
            <div className="col-sm-auto col-xl-12 col-sm">
                <img src="project-draft/assets/info-manage.png" alt="information management icon" className="pb-3" />
              </div>
              <h2 className="card-title">Information Management</h2>
              <p className="card-text">
              Understand strategies for effective organization and
              utilization of information in a data-driven landscape.  </p>
              <Link className="btn btn-dark" to="/InfoManagement">
                Discover More
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mb-4">
            <div className="card-body">
            <div className="col-sm-auto col-xl-12 col-sm">
                <img src="project-draft/assets/info-society.png" alt="society icon" className="pb-3" />
              </div>
              <h2 className="card-title">Information and Society</h2>
              <p className="card-text">
              Examine key themes to grasp the societal impact of
                                            information on culture and communication.</p>
              <Link className="btn btn-dark" to="/InfoAndSociety">
                Let's Examine
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mb-4">
            <div className="card-body">
            <div className="col-sm-auto col-xl-12 col-sm">
                <img src="project-draft/assets/soft-dev.png" alt="software development icon" className="pb-3" />
              </div>
              <h2 className="card-title">Software Development</h2>
              <p className="card-text">
              Learn essential principles to enhance your skills in
                                            creating innovative software solutions.</p>
              <Link className="btn btn-dark" to="/SoftDev">
                Learn More
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Homepage;
