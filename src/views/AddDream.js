import React from 'react';
import PropTypes from 'prop-types';
import DreamForm from '../components/DreamForm';

function AddDream({ setDreams }) {
  return (
    <div>
      <DreamForm
        formTitle='Add Dream'
        setDreams={setDreams}
      />
    </div>
  );
}

AddDream.propTypes = {
  setDreams: PropTypes.func.isRequired
};

export default AddDream;
