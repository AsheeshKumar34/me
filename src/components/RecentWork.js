import React, { Component } from "react";

class RecentWork extends Component {
  render() {
    return (
      <div className="recent-work container">
        <div className="recent-work-content">
          <div className="text-center mb-5">
            <h3>My Recent Work</h3>
            <p>Here are a few recent projects</p>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-5 mb-md-0">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="mb-3">Artkradle</h5>
                  <p className="card-text mb-5">
                    Beautiful simple website design to showcase your art and photographs.
                  </p>
                  <a
                    href="https://asheeshkumar34.github.io/Artkradle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge badge-pill badge-pill-outline"
                  >
                    Visit website
                    <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-5 mb-md-0">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="mb-3">Onetown</h5>
                  <p className="card-text mb-5">
                    Simple website design for displaying the services provided by a company.
                  </p>
                  <a
                    href="https://asheeshkumar34.github.io/onetown/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge badge-pill badge-pill-outline"
                  >
                    Visit Website
                    <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="mb-3">NineAm</h5>
                  <p className="card-text mb-5">Simple website design for displaying and promoting a brand.</p>
                  <a
                    href="https://asheeshkumar34.github.io/NineAm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge badge-pill badge-pill-outline"
                  >
                    Visit Website
                    <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentWork;
