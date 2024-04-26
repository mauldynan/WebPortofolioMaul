import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';


function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <AboutMe />
      <MyProjects />

      <SocialLinks />
    </div>
  );
}

export default App