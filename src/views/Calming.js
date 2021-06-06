import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardText,
  CardTitle,
  CardBody
} from 'reactstrap';

function Calming() {
  return (
<Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <CardTitle>Reality Checks</CardTitle>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <h5>FIX CARD LAYOU</h5>
        <CardText>paragraph about reality checks</CardText>
        <h5>Palm Checks</h5>
        <CardText>paragraph about reality checks</CardText>
        <h5>Interation</h5>
        <CardText>paragraph about reality checks</CardText>
        <h5>Interation</h5>
        <CardText>paragraph about reality checks</CardText>
      </CardBody>
      <Link className="nav-link" to="/education"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Link>
    </Card>
  );
}

export default Calming;
