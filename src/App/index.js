import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { getDreams } from '../helpers/data/DreamData';
import Routes from '../helpers/Routes';

function App() {
  const [dreams, setDreams] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getDreams().then(setDreams);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          name: authed.name,
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
      <Routes
        dreams={dreams}
        setDreams={setDreams}
      />
  );
}

export default App;
