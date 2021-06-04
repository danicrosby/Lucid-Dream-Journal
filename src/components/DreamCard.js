import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteDream } from '../helpers/data/DreamData';
import DreamForm from './DreamForm';

const DreamCard = ({
  firebaseKey,
  name,
  entry,
  date,
  setDreams
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteDream(firebaseKey)
          .then(setDreams);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/dreams/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div className="dream-card-container">
      <Card className="dream-card">
        <CardBody className="dream-card-body">

          <div className="top-text">
            <CardTitle>{name}</CardTitle>
            <i className="material-icons dream-type-icon"> cloud </i>
          </div>

          <CardText className="hr">_____________________________________________________________</CardText>
          <CardText className="date">{date}november 11, 2011</CardText>
        </CardBody>
        <div>
          <Button className="PopoverClick-btn" color="transparent" id="PopoverClick" type="button"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Button>
          <UncontrolledPopover className="popover-card" trigger="click" placement="bottom" target="PopoverClick">
            <PopoverHeader>Edit Dream</PopoverHeader>
            <PopoverBody className="popover-body">
              <Fab className="fab-icons m-1" onClick={() => handleClick('view')}><VisibilityIcon /></Fab>
              <Fab className="fab-icons m-1 mr-1 ml-1" onClick={() => handleClick('edit')}><EditIcon /></Fab>
              <Fab className="fab-icons m-1" onClick={() => handleClick('delete')}><DeleteIcon /></Fab>
            </PopoverBody>
          </UncontrolledPopover>
        </div>
      </Card>

      {
        editing && <DreamForm
          formTitle='Edit Dream'
          setDreams={setDreams}
          firebaseKey={firebaseKey}
          name={name}
          entry={entry}
          date={date}
        />
      }
    </div>
  );
};

DreamCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string,
  entry: PropTypes.string,
  date: PropTypes.string,
  setDreams: PropTypes.func
};

export default DreamCard;
