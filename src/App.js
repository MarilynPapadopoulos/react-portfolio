import React, {useState} from 'react';
import About from './Components/About';
import Navigation from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const components = [<About/>, <Portfolio/>,<Contact/>]
  const[current, setCurrent]= useState(components[0]);
  return (
    <div>
      <header>
        <Navigation setCurrent={setCurrent} components={components}></Navigation>
      </header>
      <main>
      {current}
      </main>
      <footer>  
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
