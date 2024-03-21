import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Rating from './components/Rating';



function App() {
  return (
      <div className="App">
        <Header/>
        <Home/>
        <Services/>
        <Rating/>
        <Reviews/>
        <Contact/>
        <AboutMe/>
      </div>

  );
}

export default App;
