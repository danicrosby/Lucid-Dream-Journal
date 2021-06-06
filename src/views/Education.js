import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Button,
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
      <Button color="transparent" className="fab-icons expand-arrow-btn m-1">
        <i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i>
      </Button>
    </Card>

    <Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <CardTitle>Calming Sounds</CardTitle>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <CardText className="date">find tranquil calming music</CardText>
      </CardBody>
      <Button color="transparent" className="fab-icons expand-arrow-btn m-1">
        <i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i>
      </Button>
    </Card>
  </Container>
  );
}

export default Education;
