import React from 'react';
import "./scss/main.scss";
import Header from './components/Header';
import Footer from './components/Footer';
import CoinsList from './components/CoinsList';
import NotFound from './components/NotFound';
import {
  HashRouter,
  Route,

  Switch,

} from 'react-router-dom';
import CoinDetails from './components/CoinDetails';
import Transactions from './components/Transactions';

function App() {
  return (
    <>
      <HashRouter>
        <>
          <Header />
          <Switch>
            <Route exact path='/' component={CoinsList}/>
            <Route path='/coins/:id' component={CoinDetails}/>
            <Route path='/transactions' component={Transactions} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </>
      </HashRouter>
    </>
  );
}

export default App;