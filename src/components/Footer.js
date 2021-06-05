import React from 'react';
import { Container } from 'reactstrap';

export default function Footer() {
  return (
    <Container className="footer">
      <a href=""><i className="material-icons footer-icons">bookmark_border</i></a>
      <a href=""><i className="material-icons footer-icons">leaderboard</i></a>
      <a href=""><i className="material-icons footer-icons">calendar_today</i></a>
      <a href=""><i className="material-icons footer-icons">settings</i></a>
    </Container>
  );
}
