
import AboutMe from './AboutMe.jsx' ;
import Picture from './Picture.jsx' ;
import Map from './Map.jsx' ;
import ContactTxt from './ContactTxt.jsx' ;
import './App.css'



function App() {
  return (
    <>
      <nav>
         <Map />
      </nav>
      <header>
        <AboutMe />
        <Picture />
      </header>
      <footer>
        <ContactTxt />
      </footer>

    </>
  );
}

export default App
