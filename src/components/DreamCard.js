import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Button,
  Container
} from 'reactstrap';
import PropTypes from 'prop-types';

const DreamCard = ({
  firebaseKey,
  name,
  date,
}) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/dreams/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Container>
      <Card className="dream-card">
        <CardBody className="dream-card-body">
          <div className="top-text">
            <CardTitle className="card-title-display">{name}</CardTitle>
            <i className="material-icons dream-type-icon"> cloud </i>
          </div>
          <CardText className="date">{date}</CardText>
        </CardBody>
        <Button color="transparent" className="fab-icons expand-arrow-btn m-1" onClick={() => handleClick('view')}>
          <i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i>
        </Button>
      </Card>
    </Container>
  );
};

DreamCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string,
  entry: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.any
};

export default DreamCard;
