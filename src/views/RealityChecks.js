import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody
} from 'reactstrap';

function RealityChecks() {
  return (
<Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <CardTitle>Reality Checks</CardTitle>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <h5>Reality Info Here</h5>
      </CardBody>
      <center>
        <Link
          className="nav-link"
          to="/education">
          <i className="material-icons"
          id="expand-arrow"> keyboard_arrow_down </i>
        </Link>
      </center>
    </Card>
  );
}

export default RealityChecks;
