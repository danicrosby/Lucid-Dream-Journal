import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  Container,
  Row,
  Col,
  CardText
} from 'reactstrap';

export default function SingleDreamCard({ dream }) {
  return (
    <div className="">
      <Container className="card-container">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card className="card-grey">
            <Card body className="card-white">
              <Row><div className="top-text">
                <CardTitle tag="h5">{ dream.name }</CardTitle>
                <div><i className="material-icons dream-type-icon"> cloud </i></div>
              </div>
              </Row>
              <Row><div>_______________________________________________</div></Row>
              <Row><div className="date">november 11, 2011</div></Row>
              <Row><CardText></CardText>{ dream.entry }</Row>
              <Row><CardText></CardText></Row>
              <Row><CardText></CardText></Row>
              <Row><CardText></CardText></Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

SingleDreamCard.propTypes = {
  dream: PropTypes.object
};
