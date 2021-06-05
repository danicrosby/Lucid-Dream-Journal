import React from 'react';
import PropTypes from 'prop-types';
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
      <CardHeader>
        <h2>{dream.name}</h2>
        <center>{dream.date}</center>
      </CardHeader>
        <CardBody className="add-dream-card-body">
          <h5>Dream Story</h5>
          <CardText>{dream.entry}</CardText>
          <h5>Tags</h5>
          <h5>Interpretation</h5>
        </CardBody>
        <CardFooter className="card-footer">
        <a href="/dreams"><Fab className="fab-icons"><CheckIcon /></Fab></a>
        <Fab className="fab-icons mr-3 ml-3"><EditIcon /></Fab>
        <Fab className="fab-icons"><DeleteIcon /></Fab>
        </CardFooter>
      </Card>
    </Container>
  );
}

SingleDreamCard.propTypes = {
  dream: PropTypes.object
};
