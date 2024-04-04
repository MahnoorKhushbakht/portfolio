import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Background from './components/Background';
import Projects from './components/Projects';
import ClientReviews from './components/ClientReviews';


function App() {
  return (
      <div className="App">
        <Header/>
        <Home/>
        <Background/>
        <Projects/>
<ClientReviews/>
        <Contact/>
        <AboutMe/>
      </div>

  );
}

export default App;
