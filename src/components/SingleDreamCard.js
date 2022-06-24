import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  Button
} from 'reactstrap';
import DreamForm from './DreamForm';
import { deleteDream } from '../helpers/data/DreamData';
import Actions from '../helpers/data/Actions';
import AllTags from '../helpers/data/AllTags';
import Colors from '../helpers/data/Colors';
import DreamType from '../helpers/data/DreamType';
import Emotions from '../helpers/data/Emotions';
import Objects from '../helpers/data/Objects';
import Places from '../helpers/data/Places';

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
    <div className="single-card-container">
      <Card className="single-card">
        <CardHeader className="header">
          <span>{singleDream.name}</span>
          <div className="edit-icons">
          <span><Button className="material-icons button edit-btn" onClick={() => handleClick('edit')}>edit</Button></span>
          <span><Button className="material-icons button delete-btn" onClick={() => handleClick('delete')}>delete</Button></span>
          <span><a href="/dreams"><Button className="material-icons submit-btn">done</Button></a></span>
          </div>
        </CardHeader>
        <CardBody className="card-body">
          <div><h6>Overview</h6></div>
          <CardText className="intro">
            Hello, Dani. It looks like you had a {singleDream.dreamType.toLowerCase()} dream
            on {format(new Date(singleDream.date), 'MMMM dd, yyyy', { locale: enGB })}, that made you feel {singleDream.emotion.toLowerCase()}.
            You dreamt of {singleDream.people}, the setting was in a {singleDream.place.toLowerCase()}.
            You remembered a few objects, more specifically a {singleDream.object.toLowerCase()}.
            The overall abmience of this {singleDream.dreamType.toLowerCase()} dream was {singleDream.color.toLowerCase()}.
            Does this sound accurate?
          </CardText>
          <div><h6>Recorded Story</h6></div>
          <CardText>{singleDream.entry}</CardText>
          <div><h6>Keywords</h6></div>
          <CardText className="keyword-bucket">
            <span>{singleDream.dreamType}</span>
            <span>{singleDream.emotion}</span>
            <span>{singleDream.people}</span>
            <span>{singleDream.place}</span>
            <span>{singleDream.object}</span>
            <span>{singleDream.action}</span>
            <span>{singleDream.color}</span>
          </CardText>

          <div><h6 className="mb-3 mt-4">Dream Interpretation</h6></div>
          <CardText><h6>{singleDream.dreamType}</h6>{singleDream.dreamType} {DreamType[singleDream.dreamType].interpretation}</CardText>
          <CardText><h6>{singleDream.object}</h6>To dream of a {singleDream.object.toLowerCase()} indicates {Objects[singleDream.object]}</CardText>
          <CardText><h6>{singleDream.place}</h6>To dream of a {singleDream.place.toLowerCase()} indicates {Places[singleDream.place]}</CardText>
          <CardText><h6>{singleDream.emotion}</h6>To feel {singleDream.emotion.toLowerCase()} during your dream indicates {Emotions[singleDream.emotion]}</CardText>
          <CardText><h6>{singleDream.action}</h6>If you are {singleDream.action.toLowerCase()} during your dream it might indicate {Actions[singleDream.action]}</CardText>
          <CardText><h6>{singleDream.color}</h6>To dream of the color {singleDream.color.toLowerCase()} symbolizes {Colors[singleDream.color]}</CardText> <br></br>
          <CardText><h6>Additional Tags</h6></CardText>
          <CardText><h6>{singleDream.allTags}</h6>You added an addtional tag to your dream. {singleDream.allTags} represents {AllTags[singleDream.allTags]}</CardText>
          <CardText><h6>{singleDream.allTags2}</h6>You added an addtional tag to your dream. {singleDream.allTags2} represents {AllTags[singleDream.allTags2]}</CardText>

          <CardText><h6>Additional Details</h6></CardText>
          <CardText>{singleDream.addDetails}</CardText>

          <CardText><h6>Post Interpretation Realizations</h6></CardText>
          <CardText>{singleDream.realization}</CardText>

        </CardBody>
      </Card>
      <div className="mt-3">
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
            object={singleDream.object}
            color={singleDream.color}
            allTags={singleDream.allTags}
            allTags2={singleDream.allTags2}
            addDetails={singleDream.addDetails}
            realization={singleDream.realization}
            setEditing={setEditing}
          />
        }
      </div>
    </div>
  );
}

SingleDreamCard.propTypes = {
  firebaseKey: PropTypes.string,
  dream: PropTypes.object,
};
