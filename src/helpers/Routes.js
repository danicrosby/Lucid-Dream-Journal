import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import AddDream from '../views/AddDream';
import AddSetting from '../views/AddSetting';
import Dreams from '../views/Dreams';
import SingleDream from '../views/SingleDream';
import Welcome from '../views/Welcome';
import Education from '../views/Education';
import Settings from '../views/Settings1';

export default function Routes({ user, setDreams }) {
  return (
    <Container className="routes-container">
      <Switch>
        <Route exact path="/" component={() => <Welcome user={user} />} />
        {/* <Route exact path='/' component={Welcome} /> */}
        <Route path="/education" component={Education} />
        <Route path="/settings" component={Settings} />

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

        <Route
          path='/add-setting'
          component={() => <AddSetting
            setDreams={setDreams}
            user={user} />}
        />

      </Switch>
    </Container>
  );
}

Routes.propTypes = {
  dreams: PropTypes.array.isRequired,
  setDreams: PropTypes.func.isRequired,
  user: PropTypes.any,
};

// I want to redirect when delete single card. Card is deleting but page breaks becuase it's not there
