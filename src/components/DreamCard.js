import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardBody,
  Button
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
    <Card className="dream-card" style={{ backgroundColor: `${DreamType[dreamType].color}` }}>
      <CardBody className="dream-card-body">
        <div className="top-text">
          <h6>{name}</h6>
          <div className="dream-card-icon">{DreamType[dreamType].icon}</div>
        </div>
        <div className="date">{date}</div>
      </CardBody>
      <Button color="transparent" className="fab-icons expand-arrow-btn m-1" onClick={() => handleClick('view')}>
        <i className="material-icons dream-card-expand-arrow" id="expand-arrow"> keyboard_arrow_down </i>
      </Button>
    </Card>
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
