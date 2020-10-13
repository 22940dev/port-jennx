import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import { inject as injectGlobalStyles } from './styles';
import WorkPage from './components/WorkPage';
import HomePage from './components/HomePage';
import PlayPage from './components/PlayPage';


function App() {

  injectGlobalStyles();


  return (
    <Router>
      <div className="App">
        <link rel="stylesheet" href="./styles/devicon-colors.css"/>
        <link rel="stylesheet" href="./styles/devicon.css"/>
        <Route exact path="/" component={HomePage} >  <Redirect to="/about" /> </Route>
        <Route exact path="/about" component={HomePage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/play" component={PlayPage} />

      </div>
    </Router>
  );

}


export default App;
