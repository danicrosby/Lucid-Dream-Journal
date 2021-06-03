import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  Container,
  CardHeader,
  CardText,
  CardBody,
  Button,
  CardFooter
} from 'reactstrap';

export default function SingleDreamCard({ dream }) {
  return (
    <Container className="card-container">
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{dream.name}</CardTitle>
          <CardText>{dream.entry}</CardText>
          <CardText>{dream.entry}</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Container>
  );
}

SingleDreamCard.propTypes = {
  dream: PropTypes.object
};
