import React from 'react';
import { Link } from 'react-router-dom';
import MainNavBar from './Navigation/MainNavbar';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './Pages/Home';
import CardList from './UIElements/CardList';
import Auth from './Pages/Auth';

const App = () => {
  return (
    
      <Router>
        <Link to="/"><MainNavBar /></Link>
        <Switch>
          <main>
            <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
          <h2>search</h2>
        </Route>
        <Route path="/auth">
            <Auth />
        </Route>
        <Route path="/create">
        <h2>create</h2>
        </Route>
        
        <Route path="/new">
        <h2>new</h2>
        </Route>
            <Redirect to="/" />
            </main>    
        </Switch> 
      </Router>
  );
};

export default App;
