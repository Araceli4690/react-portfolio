import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import ContactForm from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div >
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      >
      </Header>
      <main>


        {!contactSelected ? (
          <>
            <About></About>

          </>
        ) : (
          <ContactForm></ContactForm>

        )}

        <Footer />
      </main>

    </div>
  );
}

export default App;
