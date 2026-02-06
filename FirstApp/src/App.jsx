
import AboutMe from './AboutMe.jsx' ;
import Picture from './Picture.jsx' ;
import Tech from './tech.jsx' ;
import Map from './Map.jsx' ;
import ContactTxt from './ContactTxt.jsx' ;
import './App.css'



function App() {
  return (
    <>
      <div className='App'>
       <nav className='Nav1'>
         <Map />
       </nav>
       
       <header>
         <AboutMe />
         <Picture />
       </header>
       <main>
         <Tech></Tech>
       </main>
       <footer>
         <ContactTxt />
       </footer>
      </div>
     
     
    </>
  );
}

export default App
