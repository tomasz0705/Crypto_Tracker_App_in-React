import React from 'react';
import "./scss/main.scss";
import Header from './components/Header';
import CoinsList from './components/CoinsList';
import NotFound from './components/NotFound';
import {
  HashRouter,
  Route,

  Switch,

} from 'react-router-dom';
import CoinDetails from './components/CoinDetails';

function App() {
  return (
    <>
      <HashRouter>
        <>
          <Header />
          <Switch>
            <Route exact path='/' component={CoinsList}/>
            <Route path='/coins/:id' component={CoinDetails}/>
            <Route component={NotFound} />
          </Switch>
        </>
      </HashRouter>
    </>
  );
}

export default App;