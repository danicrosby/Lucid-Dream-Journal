import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="welcome-page">
      <div className="welcome-page-content">
        <div className="welcome-title"><h1>welcome</h1></div>

        <div className="cloud-container">
          <Link className="nav-link" to="/dreams"><i className="material-icons" id="cloud"> wb_cloud </i></Link>
        </div>
      </div>
    </div>
  );
}
