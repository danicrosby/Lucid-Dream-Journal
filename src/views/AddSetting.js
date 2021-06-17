import React from 'react';
import PropTypes from 'prop-types';
import SettingForm from '../components/SettingForm';
import NavBar from '../components/NavBar';

function AddSetting({ setSettings, user }) {
  return (
    <>
    <NavBar user={user} />
      <SettingForm
        formTitle='Add Setting'
        setDreams={setSettings}
      />
      </>
  );
}

AddSetting.propTypes = {
  setSettings: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default AddSetting;
