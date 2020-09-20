
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {PhotoGramApp} from './pages/PhotoGramApp'
import { Header } from './cmps/Header';

export function App() {
  return (
    <main >
      <Header />
      <section className="main-container">
    <Switch>
      <Route component={PhotoGramApp} path='/feed' />
    </Switch>
    </section>
       </main >
  );
}


