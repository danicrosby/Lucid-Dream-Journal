import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
  Card,
  CardTitle,
  Container,
  CardText,
  CardBody,
  Button, UncontrolledPopover, PopoverHeader, PopoverBody
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

    <Container className="dream-card-container">
      <div>
      <Card>
        <CardBody>

          <div className="top-text">
            <CardTitle>{name}</CardTitle>
            <i className="material-icons dream-type-icon"> cloud </i>
          </div>

          <CardText className="hr">___________________________________________________</CardText>
          <CardText className="date">{date}</CardText>

        </CardBody>
        <div>
          <Button color="transparent" id="PopoverClick" type="button"><i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i></Button>
          {' '}
          <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
            <PopoverHeader>Edit Dream</PopoverHeader>
            <PopoverBody>
              <div className="card-link-wrapper">
                <Fab className="fab-icons" onClick={() => handleClick('view')}><VisibilityIcon /></Fab>
                <Fab className="fab-icons" onClick={() => handleClick('edit')}><EditIcon /></Fab>
                <Fab className="fab-icons" onClick={() => handleClick('delete')}><DeleteIcon /></Fab>
              </div>
            </PopoverBody>
          </UncontrolledPopover>
        </div>
      </Card>
      </div>
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

    </Container>

  );
};

DreamCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  entry: PropTypes.string.isRequired,
  date: PropTypes.string,
  setDreams: PropTypes.func
};

export default DreamCard;
