
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PhotoGramApp } from './pages/PhotoGramApp'
import { Home } from './pages/Home';
import { Liked } from './cmps/Liked';
import { Explore } from './cmps/Explore';
import { Share } from './cmps/Share';


export function App() {
  return (
    <main >

      <section >
        <Switch>
          <Route component={Liked} exact path='/liked' />
          <Route component={Explore} exact path='/explore' />
          <Route component={Share} exact path='/share' />
          <Route component={PhotoGramApp} path='/feed' />
          <Route component={Home} path='/' />
        </Switch>
      </section>
    </main >
  );
}


