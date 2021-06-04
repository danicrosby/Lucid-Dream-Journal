import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  Container,
  CardHeader,
  CardText,
  CardBody,
  CardFooter
} from 'reactstrap';

export default function SingleDreamCard({ dream }) {
  return (
    <Container className="card-container mx-auto">
      <Card>
        <CardHeader>Dream Interpretation</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{dream.name}</CardTitle>
          <CardText>{dream.entry}</CardText>
          <CardText>{dream.date}</CardText>
        </CardBody>
        <CardFooter>More</CardFooter>
      </Card>
    </Container>
  );
}

SingleDreamCard.propTypes = {
  dream: PropTypes.object
};
