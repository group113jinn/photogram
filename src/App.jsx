
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PhotoGramApp } from './pages/PhotoGramApp'
import { Home } from './pages/Home';
import { Liked } from './pages/Liked';
import { Explore } from './pages/Explore';
import { Share } from './pages/Share';
import { UserProfile } from './pages/UserProfile';
import { Signup } from './pages/Signup';



export function App() {
  return (
    <main >
      <section >
        <Switch>
          <Route component={UserProfile} path='/user/profile' />
          <Route component={Signup} path='/signup' />
          <Route component={Liked} path='/liked' />
          <Route component={Explore} path='/explore' />
          <Route component={Share} path='/share' />
          <Route component={PhotoGramApp} path='/feed' />
          <Route component={Home} path='/' />
        </Switch>
      </section>
    </main >
  );
}


