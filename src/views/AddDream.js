import React from 'react';
import PropTypes from 'prop-types';
import DreamForm from '../components/DreamForm';

function AddDream({ setDreams }) {
  return (
    <>
      <div className="dream-form-container">
        <DreamForm
          formTitle='Record Dream'
          setDreams={setDreams}
        />
      </div>
    </>
  );
}

AddDream.propTypes = {
  setDreams: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default AddDream;
