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
import Things from '../helpers/data/Things';
import Emotions from '../helpers/data/Emotions';
import Colors from '../helpers/data/Colors';
// import Places from '../helpers/data/Places';
import Actions from '../helpers/data/Actions';
import DreamType from '../helpers/data/DreamType';

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
      <Card className="add-dream-card mt-2 mb-5">
        <CardHeader>
          <h2>{singleDream.name}</h2>
          <center>{singleDream.date}</center>
        </CardHeader>
        <CardBody className="add-dream-card-body">
          <h5 className="mb-3 mt-3">Overview</h5>
          <CardText className="intro">
            Hello, Dani. It looks like you had a {singleDream.dreamType} dream
            on {singleDream.date}, that made you feel {singleDream.emotion}.
            You dreamt of {singleDream.people}, the setting was in {singleDream.place}.
            You remembered a few objects, more specifically a {singleDream.thing}.
            The overall abmience of this {singleDream.color} dream was {singleDream.color}.
            Does this sound accurate?
          </CardText>
          <h5 className="mb-3 mt-3">Recorded Dream Story</h5>
          <CardText>{singleDream.entry}</CardText>
          <h5 className="mb-3 mt-3">Keywords</h5>
          <CardText className="keyword-bucket">
            <span>{singleDream.dreamType}</span>
            <span>{singleDream.emotion}</span>
            <span>{singleDream.people}</span>
            <span>{singleDream.place}</span>
            <span>{singleDream.thing}</span>
            <span>{singleDream.action}</span>
            <span>{singleDream.color}</span>
          </CardText>
          <h5 className="mb-3 mt-3">Dream Interpretation</h5>
          <CardText><h6>{singleDream.dreamType}</h6>To have a {singleDream.dreamType} indicates {DreamType[singleDream.dreamType]}</CardText>

          <CardText><h6>{singleDream.thing}</h6>To dream of a {singleDream.thing} indicates {Things[singleDream.thing]}</CardText>
          {/* <CardText><h6>{singleDream.place}</h6>To dream of a {singleDream.place} indicates {Places[singleDream.place]}</CardText> */}
          <CardText><h6>{singleDream.emotion}</h6>To feel {singleDream.emotion} during your dream indicates {Emotions[singleDream.emotion]}</CardText>
          <CardText><h6>{singleDream.action}</h6>If you are {singleDream.action} during your dream it might indicate {Actions[singleDream.action]}</CardText>
          <CardText><h6>{singleDream.color}</h6>To dream of the color {singleDream.color} symbolizes {Colors[singleDream.color]}</CardText>
          <h5 className="mb-3 mt-3">More Details</h5>
          <CardText>{singleDream.realization}</CardText>
          <h5 className="mb-3 mt-3">Premonitions or Follow Ups</h5>
          <CardText>{singleDream.followUp}</CardText>
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
          dreamType={singleDream.dreamType}
          emotion={singleDream.emotion}
          people={singleDream.people}
          place={singleDream.place}
          action={singleDream.action}
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
