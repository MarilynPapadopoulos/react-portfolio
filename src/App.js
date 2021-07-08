import React, {useState} from 'react';
import About from './Components/About';
import Nav from './Components/Nav';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import './App.css';


function App() {
  const components = [<About/>, <Portfolio/>,<Contact/>]
  const[current, setCurrent]= useState(components[0]);
  return (
    <div>
      <header>
        <Nav setCurrent={setCurrent} components={components}></Nav>
      </header>
      <main>
      {current}
      </main>
      
    </div>
  );
}

export default App;
