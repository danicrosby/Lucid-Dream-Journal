import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export default function Footer() {
  return (
    <Container className="footer">
      <Link className="nav-link" to="/education"><i className="material-icons footer-icons">bookmark_border</i></Link>
      <Link className="nav-link" to="/stats"><i className="material-icons footer-icons">leaderboard</i></Link>
      <Link className="nav-link" to="/calendar"><i className="material-icons footer-icons">calendar_today</i></Link>
      <Link className="nav-link" to="/settings"><i className="material-icons footer-icons">settings</i></Link>
    </Container>
  );
}
