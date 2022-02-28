import "./Portfolio.scss";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Featured from "./components/Featured/Featured";
import AllProjects from "./components/AllProjects/AllProjects";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="Portfolio">
      <div className="sections">
        <Intro />
        <NavBar />
        <AboutMe />
        <Featured />
        <AllProjects />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
