import React, {useState} from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const components = [<Home/>,<About/>, <Portfolio/>,<Skills/>]
  const[current, setCurrent]= useState(components[0]);
  return (
    <div className="page-container">
      <header>
        <Header setCurrent={setCurrent} components={components} />
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



