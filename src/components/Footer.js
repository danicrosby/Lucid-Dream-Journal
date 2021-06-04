import React from 'react';
import { Container } from 'reactstrap';

export default function Footer() {
  return (
    <Container className="footer">
      <a href=""><i className="material-icons">bookmark_border</i></a>
          <a href=""><i className="material-icons">leaderboard</i></a>
          <a href=""><i className="material-icons">calendar_today</i></a>
          <a href=""><i className="material-icons">settings</i></a>
    </Container>
  );
}
