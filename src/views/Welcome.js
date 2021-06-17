import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import Menu from '../components/Menu';

export default function Welcome() {
  return (
    <div className="welcome-page-view">
      <div className="welcome-page-content">
        <NavBar />
        <div className="welcome-title">
          <center>
            <h1>LUCID</h1>
            <h3>a dream journal</h3>
          </center>
        </div>
        <div className="cloud-container">
          <Link className="nav-link" to="/dreams"><i className="material-icons" id="cloud"> wb_cloud </i></Link>
        </div>
      </div>
    </div>
  );
}
