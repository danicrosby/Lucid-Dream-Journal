import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Footer from '../components/Footer';
import DreamCard from '../components/DreamCard';
import NavBar from '../components/NavBar';
import { getDreams } from '../helpers/data/DreamData';

function Dreams({ user }) {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    getDreams().then((dreamsArray) => setDreams(dreamsArray));
  }, []);

  return (
    <>
      <Container className="recorded-dream-container">
        <NavBar user={user} />
        <center><Link className="nav-link add-dream-btn-link mr-5 mt-4" to="/add-dream"><Fab className="fab-add-btn add-icon-btn" color="dark"><AddIcon style={{ color: 'purple' }}/></Fab></Link></center>
        <div className="card-container">
          {dreams.map((dreamInfo) => (
            <DreamCard
              key={dreamInfo.firebaseKey}
              firebaseKey={dreamInfo.firebaseKey}
              name={dreamInfo.name}
              entry={dreamInfo.entry}
              date={dreamInfo.date}
              type={dreamInfo.type}
              emotion={dreamInfo.emotion}
              people={dreamInfo.people}
              place={dreamInfo.place}
              thing={dreamInfo.thing}
              action={dreamInfo.action}
              color={dreamInfo.color}
              followUp={dreamInfo.followUp}
              realization={dreamInfo.realization}
              setDreams={setDreams}
              user={user}
            />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}

Dreams.propTypes = {
  dreams: PropTypes.array,
  setDreams: PropTypes.func,
  user: PropTypes.func
};

export default Dreams;
