import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {

  return (
    <div >
      <Header>
        <nav></nav>
      </Header>
      <main>
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
