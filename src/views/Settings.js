import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody
} from 'reactstrap';

function Settings() {
  return (
    <Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <h5>Account Info Here</h5>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <CardTitle>Settings</CardTitle>
      </CardBody>
      <center>
        <Link
          className="nav-link"
          to="/dreams">
          <i className="material-icons"
            id="expand-arrow"> keyboard_arrow_down </i>
        </Link>
      </center>
    </Card>
  );
}

export default Settings;
