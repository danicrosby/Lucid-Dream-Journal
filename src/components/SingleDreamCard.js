import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DreamForm from './DreamForm';
import { deleteDream } from '../helpers/data/DreamData';

export default function SingleDreamCard({ dream, setDreams }) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        console.warn(dream.firebaseKey);
        deleteDream(dream.firebaseKey)
          .then(setDreams);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Container className="dream-form-container">
      <Card className="add-dream-card">
        <CardHeader>
          <h2>{dream.name}</h2>
          <center>{dream.date}</center>
        </CardHeader>
        <CardBody className="add-dream-card-body">
          <CardText>Hello, Dani. It looks like you had a {dream.type} dream on {dream.date}</CardText>
          <h5>Recorded Dream Story</h5>
          <CardText>{dream.entry}</CardText>
          <h5>Tags</h5>
          <h5>Keywords</h5>
          <h5>Interpretation</h5>
        </CardBody>
        <CardFooter className="card-footer">
          <a href="/dreams"><Fab className="fab-icons"><CheckIcon /></Fab></a>
          <Fab className="fab-icons mr-3 ml-3" onClick={() => handleClick('edit')}><EditIcon /></Fab>
          <Fab className="fab-icons" onClick={() => handleClick('delete')}><DeleteIcon /></Fab>
        </CardFooter>
      </Card>
      {
        editing && <DreamForm
          formTitle='Edit Dream'
          setDreams={setDreams}
          firebaseKey={dream.firebaseKey}
          name={dream.name}
          entry={dream.entry}
          date={dream.date}
        />
      }
    </Container>
  );
}

SingleDreamCard.propTypes = {
  firebaseKey: PropTypes.string,
  dream: PropTypes.object,
  setDreams: PropTypes.object
};
