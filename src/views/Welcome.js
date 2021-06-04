import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export default function Welcome() {
  return (
    <div className="welcome-page">
      <div className="welcome-page-content">
          <div className="welcome-title"><h1>welcome</h1></div>

          <NavItem className="cloud-container">
        <Link className="nav-link" to="/dreams"><i className="material-icons" id="cloud"> wb_cloud </i></Link>
      </NavItem>
      </div>
    </div>
  );
}
