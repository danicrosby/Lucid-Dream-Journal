import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody
} from 'reactstrap';

function Calming() {
  return (
<Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <CardTitle>Calming Dreams</CardTitle>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <h5>Calming Info Here</h5>
      </CardBody>
      <Link className="nav-link" to="/education"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Link>
    </Card>
  );
}

export default Calming;
