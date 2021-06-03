import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import {
  Button,
  Card,
  CardTitle,
  Container,
  Row,
  Col,
  CardText,
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
    <Container className="card-container">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card className="card-grey">
            <Card className="card-white">
              <Row>
                <div className="top-text">
                  <CardTitle>{name}</CardTitle>
                  <div><i className="material-icons dream-type-icon"> cloud </i></div>
                </div>
              </Row>
              <Row><div className="hr">___________________________________________________</div></Row>
              <Row>
                <CardText className="date">{date} fix date</CardText>
              </Row>
            </Card>
            <div>
              <Button color="transparent" id="PopoverClick" type="button">
                <i className="material-icons" id="expand-arrow"> keyboard_arrow_down </i>
              </Button>
              <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
                <PopoverHeader>{name}</PopoverHeader>
                <PopoverBody>
                  <div className="card-link-wrapper">
                    <Button color="transparent" onClick={() => handleClick('view')}>
                      <Fab disabled aria-label="visibility"><VisibilityIcon /></Fab>
                    </Button>

                    <Button color="transparent" onClick={() => handleClick('edit')}>
                      <Fab disabled aria-label="edit"><EditIcon /></Fab>
                    </Button>
                    <Button color="transparent" onClick={() => handleClick('delete')}>
                      <Fab disabled aria-label="delete"><DeleteIcon /></Fab>
                    </Button>
                  </div>
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
        </Col>
      </Row>

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
