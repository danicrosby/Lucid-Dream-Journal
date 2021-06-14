import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

export default function SingleDreamCard({ dream }) {
  const [editing, setEditing] = useState(false);
  const [singleDream, setSingleDream] = useState(dream);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteDream(singleDream.firebaseKey)
          .then(() => {
            history.push('/dreams');
          });
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Container className="dream-form-container mt-5">
      <Card className="add-dream-card">
        <CardHeader>
          <h2>{singleDream.name}</h2>
          <center>{singleDream.date}</center>
        </CardHeader>
        <CardBody className="add-dream-card-body">
          <h5>Overview</h5>
          <CardText className="intro">
            Hello, Dani. It looks like you had a {singleDream.type} dream
            on {singleDream.date} that made you feel {singleDream.emotion}.
            You dreamt of {singleDream.people}, the setting was in {singleDream.place}.
            You remembered a few objects, more specifically a {singleDream.thing}.
            The overall abmience of this {singleDream.type} dream was {singleDream.color}.
            Does this sound accurate?
          </CardText>
          <h5>Recorded Dream Story</h5>
          <CardText>{singleDream.entry}</CardText>
          <h5>Keywords</h5>
          <CardText className="keyword-bucket">
            <span>{singleDream.type}</span>
            <span>{singleDream.emotion}</span>
            <span>{singleDream.people}</span>
            <span>{singleDream.place}</span>
            <span>{singleDream.thing}</span>
            <span>{singleDream.color}</span>
          </CardText>
          <h5>Interpretation</h5>
          <CardText>
            To dream of a {singleDream.thing} indicates.
            Does this analysis correspond to emotions or events happening in your life right now?
          </CardText>
          <h5>Realization</h5>
          <CardText>
            Do you have any realizations that stem from this interpretation? {singleDream.realization}
          </CardText>
          <h5>Premonitions or Follow Ups</h5>
          <CardText>
            Add more to dream story: {singleDream.followUp}
          </CardText>
        </CardBody>
        <CardFooter className="card-footer">
          <Fab className="fab-icons" onClick={() => handleClick('edit')}><EditIcon /></Fab>
          <a href="/dreams"><Fab className="fab-icons mr-3 ml-3"><CheckIcon /></Fab></a>
          <Fab className="fab-icons" onClick={() => handleClick('delete')}><DeleteIcon /></Fab>
        </CardFooter>
      </Card>
      {
        editing && <DreamForm
          formTitle='Edit Dream'
          setSingleDream={setSingleDream}
          firebaseKey={dream.firebaseKey}
          name={singleDream.name}
          entry={singleDream.entry}
          date={singleDream.date}
          type={singleDream.type}
          emotion={singleDream.emotion}
          people={singleDream.people}
          place={singleDream.place}
          thing={singleDream.thing}
          color={singleDream.color}
          followUp={singleDream.followup}
          realization={singleDream.realization}
        />
      }
    </Container>
  );
}

SingleDreamCard.propTypes = {
  firebaseKey: PropTypes.string,
  dream: PropTypes.object,
};
