import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Button,
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
    <>
      <Card className="dream-card">
        <CardBody className="dream-card-body">
          <div className="top-text">
            <CardTitle>{name}</CardTitle>
            <i className="material-icons dream-type-icon"> cloud </i>
          </div>
          <CardText className="date">{date}</CardText>
        </CardBody>
        <Button color="transparent" className="fab-icons m-1" onClick={() => handleClick('view')}>
          <i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i>
        </Button>
      </Card>
    </>
  );
};

DreamCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string,
  entry: PropTypes.string,
  date: PropTypes.string,
};

export default DreamCard;
