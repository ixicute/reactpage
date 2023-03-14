import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer'
import NavbarHero from './components/NavbarHero';
import Home from './pages/Home'
import Cv from './pages/Cv'
import About from './pages/About'
import ProjectArticle from './pages/ProjectArticle';
import MyProjects from './pages/MyProjects';
import Navbar from './components/Navbar';

function App() {

  function PopUpModal() {
    const secreteCode = '007';
    let checkSecretCode = '';
    document.addEventListener('keydown', function (e) {
      checkSecretCode += e.key;

      if (checkSecretCode.endsWith(secreteCode)) {
        console.log('Code Activated');
        document.getElementById('easterEgg').style.visibility = 'visible'
        document.getElementById('easterEgg').style.opacity = '100%'
        document.body.style.backgroundColor = 'black';
        document.getElementById('bg').style.opacity = '50%';



        const closeButton = document.getElementById('close');
        const modalPopup = document.getElementById('easterEgg');

        function closeModal() {
          modalPopup.style.visibility = 'hidden';
          document.getElementById('bg').style.opacity = '100%';
          checkSecretCode = '';
        }

        closeButton.addEventListener('click', closeModal);
      }

    })

  }
  PopUpModal();

  const location = useLocation();

  let active = false;

  let nav = (<Navbar />);

  if (location.pathname === "/") {
    active = true;
  }

  if (active) {
    nav = (<NavbarHero />)
  }

  return (
    <div>
      <article className="popup" id="easterEgg">
        <div className="popuphead">
          <h2>Snyggt jobbat!</h2>
          <button id="close" type="button" aria-label="close">&times;</button>
        </div>
        <br />
        <br />
        <p>
          Du har ju lyckats hitta en hemlig påskägg! Här får du njuta av en underbar låt!
        </p>
        <br />
        <p>
          <iframe title="Watch The World Burn" width="100%" max-width="560" height="450" src="https://www.youtube.com/embed/qMXESlny4-I" frameorder="0" allowFullScreen={true}></iframe>
        </p>
      </article>
      <div className='App' id='bg'>

        {nav}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyProjects" element={<MyProjects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/Tillganglighet" element={<ProjectArticle />} />
        </Routes>
        <Footer />
      </div>
    </div>


  );
}

export default App;