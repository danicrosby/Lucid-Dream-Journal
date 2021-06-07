import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody,
  Container
} from 'reactstrap';

function Calming() {
  return (
    <Container className="calming-view">
    <Card className="dream-card">
         <h4>Calming</h4>
      <CardBody className="dream-card-body">
        <div className="top-text">
          <h5>Calming Info Here</h5>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <CardTitle>Calming Dreams</CardTitle>
      </CardBody>
      <Link className="nav-link" to="/education"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Link>
    </Card>
    </Container>
  );
}

export default Calming;
