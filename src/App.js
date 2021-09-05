import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div >
      <Router>
        <Header>

        </Header>
        <div>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
