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

export default function SingleDreamCard({ dream }) {
  return (
    <Container className="dream-form-container">
      <Card className="add-dream-card">
        <CardHeader><h2>{dream.name}</h2></CardHeader>
        <CardBody className="add-dream-card-body">
          <CardText>{dream.entry}</CardText>
          <CardText>{dream.date}</CardText>
        </CardBody>
        <CardFooter>
        <Link className="nav-link add-dream-btn-link" to="/dreams"><Fab className="fab-add-btn"><CheckIcon /></Fab></Link>
        </CardFooter>
      </Card>
    </Container>
  );
}

SingleDreamCard.propTypes = {
  dream: PropTypes.object
};
