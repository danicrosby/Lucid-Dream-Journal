import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from 'reactstrap';

export default function Footer() {
  return (
    <div className="footer">
      <Link className="nav-link footer-link" to="/education"><i className="material-icons footer-icons">bookmark_border</i></Link>
      <Link className="nav-link footer-link" to="/stats"><i className="material-icons footer-icons">leaderboard</i></Link>
      <Link className="nav-link footer-link" to="/calendar"><i className="material-icons footer-icons">calendar_today</i></Link>
      <Link className="nav-link footer-link" to="/settings"><i className="material-icons footer-icons">settings</i></Link>
    </div>
  );
}
