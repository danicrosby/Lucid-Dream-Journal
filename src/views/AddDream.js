import React from 'react';
import PropTypes from 'prop-types';
import DreamForm from '../components/DreamForm';
import NavBar from '../components/NavBar';

function AddDream({ setDreams, user }) {
  return (
    <>
    <NavBar user={user} />
      <DreamForm
        formTitle='Add Dream'
        setDreams={setDreams}
      />
      </>
  );
}

AddDream.propTypes = {
  setDreams: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default AddDream;
