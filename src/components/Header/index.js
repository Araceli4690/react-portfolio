import React from 'react';
import '../../assets/css/style.css';
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../../components/Nav";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Portfolio from '../../components/Portfolio';


function Header() {
    return (
        <Router>
            <Header>
                <Nav />

            </Header>
            <div>
                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Switch>
            </div>
        </Router>
    );
}

export default Header;