import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Background from './components/Background';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
      <div className="App">
        <Header/>
        <Home/>
        <Background/>
        <Projects/>
        <Reviews/>
        <Skills/>
        <Contact/>
        <AboutMe/>
      </div>

  );
}

export default App;
