import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import

  function App() {
    const [contactSelected, setContactSelected] = useState(false);
    const projectList = useState(projects);
    return (
      <div >
        <Header


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
