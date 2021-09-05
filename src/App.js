import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import ContactForm from './components/Contact';
//import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const pages = [
    {
      name: 'about'
    },
    {
      name: 'contact'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'resume'
    }
  ]

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div >
      <Header pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
      </Header>
      <main>
        {currentPage.name === "about" ? <About /> : (
          currentPage.name === "contact" ? <ContactForm /> : (
            currentPage.name === "portfolio" ? "portfolio" : (
              currentPage.name === "resume" ? "resume" : <About />
            )
          )
        )}

      </main>
      <Footer />
    </div>
  );
}

export default App;
