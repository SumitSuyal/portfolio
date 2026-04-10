import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Experience from "./Component/Experience";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Main from "./Component/Particle";
import Portfolio from "./Component/Portfolio";
import Skills from "./Component/Skills";
import SocialLinks from "./Component/SocialLinks";

function App() {
  return (
    <div>
      <Main></Main>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <SocialLinks></SocialLinks>
      <Footer></Footer>
    </div>
  );
}

export default App;
