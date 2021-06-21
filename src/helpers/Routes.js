import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddDream from '../views/AddDream';
import Dreams from '../views/Dreams';
import SingleDream from '../views/SingleDream';
import Welcome from '../views/Welcome';
import Education from '../views/Education';

export default function Routes({ user, setDreams }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Welcome user={user} />} />
        <Route path="/education" component={Education} />

        <Route
          exact path='/dreams'
          component={() => <Dreams
            user={user} />}
        />

        <Route
          path='/dreams/:firebaseKey'
          component={() => <SingleDream
            user={user} />}
        />

        <Route
          path='/add-dream'
          component={() => <AddDream
            setDreams={setDreams}
            user={user} />}
        />

      </Switch>
      </>
  );
}

Routes.propTypes = {
  dreams: PropTypes.array.isRequired,
  setDreams: PropTypes.func.isRequired,
  user: PropTypes.any,
};

// I want to redirect when delete single card. Card is deleting but page breaks becuase it's not there
