import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  Container,
  CardHeader,
  CardText,
  CardBody,
  CardFooter
} from 'reactstrap';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function SingleDreamCard({ dream }) {
  return (
    <Container className="dream-form-container">
      <Card className="add-dream-card">
      <CardHeader><h2>{dream.name}</h2></CardHeader>
      <CardText>{dream.date}</CardText>
        <CardBody className="add-dream-card-body">
          <h5>Dream Story</h5>
          <CardText>{dream.entry}</CardText>
          <h5>Tags</h5>
          <h5>Interpretation</h5>
        </CardBody>
        <CardFooter className="card-footer">
        <Fab className="fab-add-btn m-1"><CheckIcon /><Link className="nav-link add-dream-btn-link" to="/dreams"></Link></Fab>
        <Fab className="fab-icons m-1 mr-1 ml-1"><EditIcon /></Fab>
        <Fab className="fab-icons m-1"><DeleteIcon /></Fab>
        </CardFooter>
      </Card>
    </Container>
  );
}

SingleDreamCard.propTypes = {
  dream: PropTypes.object
};
