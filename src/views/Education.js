import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Container
} from 'reactstrap';

function Education() {
  return (
    <Container>
    <Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <CardTitle>Reality Checks</CardTitle>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <CardText className="date">daily reality checkins</CardText>
      </CardBody>
      <Link className="nav-link" to="/reality-checks"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Link>
    </Card>

    <Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <CardTitle>Lucid Dream Techniques</CardTitle>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <CardText className="date">learn how to lucid dream everynight</CardText>
      </CardBody>
      <Link className="nav-link" to="/techniques"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Link>
    </Card>

    <Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <CardTitle>Calming Sounds</CardTitle>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <CardText className="date">find tranquil calming music</CardText>
      </CardBody>
      <Link className="nav-link" to="/calming"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Link>
    </Card>
  </Container>
  );
}

export default Education;
