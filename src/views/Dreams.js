import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import DreamCard from '../components/DreamCard';

function Dreams({ dreams, setDreams }) {
  return (
    <Container className="">
      <Link className="nav-link" to="/add-dream"><i className="material-icons" id="add-button"> add_circle </i></Link>
      <div className="card-container">
        {dreams.map((dreamInfo) => (
          <DreamCard
            key={dreamInfo.firebaseKey}
            firebaseKey={dreamInfo.firebaseKey}
            name={dreamInfo.name}
            entry={dreamInfo.entry}
            setDreams={setDreams}
          />
        ))}
      </div>
    </Container>
  );
}

Dreams.propTypes = {
  dreams: PropTypes.array.isRequired,
  setDreams: PropTypes.func.isRequired
};

export default Dreams;
