import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
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
          name: authed.displayName,
          imageUrl: authed.imageUrl,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} />
      <Routes
        dreams={dreams}
        setDreams={setDreams}
      />
    </>
  );
}

export default App;
