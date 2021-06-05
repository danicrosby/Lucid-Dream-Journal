import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Footer from '../components/Footer';
import DreamCard from '../components/DreamCard';

function Dreams({ dreams, setDreams }) {
  return (
    <Container className="recorded-dream-container">
      <Link className="nav-link add-dream-btn-link" to="/add-dream"><Fab className="fab-add-btn"><AddIcon /></Fab></Link>
      <div className="card-container">
        {dreams.map((dreamInfo) => (
          <DreamCard
            key={dreamInfo.firebaseKey}
            firebaseKey={dreamInfo.firebaseKey}
            name={dreamInfo.name}
            entry={dreamInfo.entry}
            date={dreamInfo.date}
            setDreams={setDreams}
          />
        ))}
      </div>
      <Footer />
      </Container>
  );
}

Dreams.propTypes = {
  dreams: PropTypes.array.isRequired,
  setDreams: PropTypes.func.isRequired
};

export default Dreams;
