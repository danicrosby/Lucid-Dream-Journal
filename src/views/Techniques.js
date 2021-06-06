import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardText,
  CardTitle,
  CardBody
} from 'reactstrap';

function Techniques() {
  return (
<Card className="dream-card">
      <CardBody className="dream-card-body">
        <div className="top-text">
          <CardTitle>Dream Techniques</CardTitle>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <h5>FIX CARD LAYOU</h5>
        <CardText>paragraph about reality checks</CardText>
        <h5>Tech Checks</h5>
        <CardText>paragraph about reality checks</CardText>
        <h5>Technique </h5>
        <CardText>paragraph about reality checks</CardText>
        <h5>Technique</h5>
        <CardText>paragraph about reality checks</CardText>
      </CardBody>
      <Link className="nav-link" to="/education"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Link>
    </Card>
  );
}

export default Techniques;
