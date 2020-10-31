import Navigation from "./components/Navigation";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './App.css';

    function App() {
      return (
        <div>
          <Navigation />
          <Masthead />
          <About />
          <Services /> 
          <Portfolio /> 
          <Contact />
          <Footer />
      
        </div>
      );
    }
    
    export default App;
