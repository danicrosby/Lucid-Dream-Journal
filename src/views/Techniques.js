import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody
} from 'reactstrap';

function Techniques() {
  return (
    <Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <h5>Techniques Here</h5>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <CardTitle>Dream Techniques</CardTitle>
      </CardBody>
      <Link className="nav-link" to="/education"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Link>
    </Card>
  );
}

export default Techniques;
