import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardText,
  CardBody,
  Button,
  Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import DreamType from '../helpers/data/DreamType';

const DreamCard = ({
  firebaseKey,
  name,
  date,
  dreamType,
}) => {
  const history = useHistory();
  console.warn(dreamType);

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
            <h6>{name}</h6>
            <CardText>{DreamType[dreamType].icon}</CardText>
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
  dreamType: PropTypes.string,
  user: PropTypes.any
};

export default DreamCard;
