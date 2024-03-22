import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';

import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import Work from './components/Work';
import Services from './components/Services';


function App() {
  return (
      <div className="App">
        <Header/>
        <Home/>
        <Services/>
        <Work/>
        <Reviews/>
        <Rating/>
        <Contact/>
        <AboutMe/>
      </div>

  );
}

export default App;
